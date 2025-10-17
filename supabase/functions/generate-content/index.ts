import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { toolType, prompt, additionalData } = await req.json();
    
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      throw new Error("Missing authorization header");
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_PUBLISHABLE_KEY") ?? "",
      { global: { headers: { Authorization: authHeader } } }
    );

    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) {
      throw new Error("Unauthorized");
    }

    console.log(`Generating content for tool: ${toolType}, user: ${user.id}`);

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY not configured");
    }

    // Build system prompt based on tool type
    let systemPrompt = "";
    switch (toolType) {
      case "blog":
        systemPrompt = "You are an expert blog writer. Create engaging, SEO-optimized blog posts with clear structure, compelling narratives, and actionable insights. Use markdown formatting.";
        break;
      case "title":
        systemPrompt = "You are a headline expert. Create 5 compelling, click-worthy blog titles that are SEO-friendly and attention-grabbing. Keep titles between 50-60 characters.";
        break;
      case "meta":
        systemPrompt = "You are an SEO expert. Create meta descriptions that are compelling, keyword-rich, and under 160 characters. Include a clear call-to-action.";
        break;
      case "ideas":
        systemPrompt = "You are a content strategist. Generate 10 unique, trending blog post ideas with clear angles and target audiences. Focus on topics with high engagement potential.";
        break;
      case "rewrite":
        systemPrompt = "You are a content editor. Rewrite the provided text to be more engaging, clear, and SEO-friendly while maintaining the original message and tone.";
        break;
      case "keywords":
        systemPrompt = "You are an SEO keyword specialist. Generate a list of 15-20 relevant keywords and long-tail keyword phrases for the given topic, organized by search intent (informational, transactional, navigational).";
        break;
      default:
        systemPrompt = "You are a helpful AI assistant specialized in content creation.";
    }

    // Call Lovable AI
    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: prompt }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI API error:", response.status, errorText);
      
      if (response.status === 429) {
        throw new Error("Rate limit exceeded. Please try again in a moment.");
      }
      if (response.status === 402) {
        throw new Error("AI credits exhausted. Please add credits to continue.");
      }
      throw new Error("AI service error");
    }

    const data = await response.json();
    const generatedContent = data.choices[0].message.content;

    // Save to history
    const { error: historyError } = await supabase
      .from("content_history")
      .insert({
        user_id: user.id,
        tool_type: toolType,
        input_data: { prompt, additionalData },
        output_data: { content: generatedContent },
      });

    if (historyError) {
      console.error("Error saving history:", historyError);
    }

    return new Response(
      JSON.stringify({ content: generatedContent }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in generate-content:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    const isUnauthorized = errorMessage.includes("Unauthorized");
    
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { 
        status: isUnauthorized ? 401 : 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});
