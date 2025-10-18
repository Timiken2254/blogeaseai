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
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
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
    let userPrompt = prompt;

    switch (toolType) {
      case "blog-post":
        systemPrompt = "You are an expert blog writer. Create engaging, SEO-optimized, comprehensive blog posts with clear structure, compelling narratives, and actionable insights. Use markdown formatting with headers, lists, and emphasis. Include introduction, main body with subheadings, and conclusion. Aim for 800-1200 words.";
        break;
      case "intro-conclusion":
        systemPrompt = "You are skilled at writing compelling blog introductions and conclusions. For introductions: Hook the reader, present the problem/topic, and preview main points. For conclusions: Summarize key takeaways, reinforce main message, and end with a strong call-to-action.";
        break;
      case "paragraph-expander":
        systemPrompt = "You are a content expansion expert. Take the brief idea provided and expand it into detailed, well-structured paragraphs. Add relevant examples, explanations, context, and supporting details while maintaining coherence and readability.";
        break;
      case "headline":
        systemPrompt = "You are a headline expert. Generate 5-10 compelling, click-worthy blog titles that are SEO-friendly and attention-grabbing. Keep titles between 50-70 characters. Make them specific, benefit-driven, and emotionally engaging. Include power words and numbers where appropriate.";
        break;
      case "rewriter":
        systemPrompt = "You are a content rewriter. Rewrite the provided text to be more engaging, clear, and professional while maintaining the original meaning and key points. Improve sentence structure, word choice, and flow. Remove redundancy and enhance readability.";
        break;
      case "tone-changer":
        systemPrompt = "You are a tone adaptation specialist. Rewrite the provided text to match the target tone while preserving the core message. Adjust vocabulary, sentence structure, formality level, and stylistic elements to achieve the desired tone authentically.";
        break;
      case "idea-generator":
        systemPrompt = "You are a content strategist. Generate 10-15 unique, trending blog post ideas with clear angles and target audiences. Focus on topics with high engagement potential. For each idea, provide a brief description of what the post would cover. Consider current trends, audience pain points, and search intent.";
        break;
      case "meta-description":
        systemPrompt = "You are an SEO meta description expert. Create compelling meta descriptions under 160 characters that are keyword-rich and include a clear call-to-action. Make them enticing enough to improve click-through rates while accurately representing the content.";
        break;
      case "tag-keywords":
        systemPrompt = "You are an SEO keyword specialist. Analyze the content and generate 15-20 relevant keywords and long-tail keyword phrases. Organize them by search intent (informational, transactional, navigational). Include primary keywords, secondary keywords, and LSI keywords. Also suggest 5-10 tags for the post.";
        break;
      case "keyword-research":
        systemPrompt = "You are a keyword research expert. For the given seed keyword, suggest 20-30 related keywords, long-tail variations, question-based keywords, and semantic variations. Estimate relative search volume (High/Medium/Low) and competition level (High/Medium/Low) for each. Group keywords by topic clusters.";
        break;
      case "seo-analyzer":
        systemPrompt = "You are an SEO content analyzer. Analyze the provided content for: keyword density and placement, readability (Flesch Reading Ease score), content structure (headers, paragraphs), internal linking opportunities, content length, and overall SEO score out of 100. Provide specific, actionable recommendations for improvement.";
        break;
      case "serp-preview":
        systemPrompt = "You are a SERP preview expert. Show how the provided title, meta description, and URL would appear in Google search results. Check if the title is within 50-60 characters and meta description is within 150-160 characters. Provide feedback on whether they're optimized for clicks and suggest improvements.";
        break;
      case "alt-text":
        systemPrompt = "You are an image SEO specialist. Create descriptive, keyword-optimized alt text for the described image. Alt text should be concise (under 125 characters), describe what's in the image, include relevant keywords naturally, and be helpful for screen readers. Provide 3-5 variations.";
        break;
      case "internal-links":
        systemPrompt = "You are an internal linking strategist. Based on the content and list of existing posts, suggest 5-10 strategic internal links with: exact anchor text to use, which existing post to link to, and where in the content to place the link. Focus on relevance and natural flow.";
        break;
      case "snippet-optimizer":
        systemPrompt = "You are a featured snippet optimization expert. Format the answer to maximize chances of appearing in Google featured snippets. Use clear, concise formatting: bullet points for lists, numbered steps for how-to content, direct answers in the first sentence, and include relevant subheadings. Keep answers under 50 words for paragraph snippets.";
        break;
      case "readability":
        systemPrompt = "You are a readability analyst. Analyze the content for: Flesch Reading Ease score, Flesch-Kincaid Grade Level, average sentence length, paragraph length, use of transition words, passive voice percentage, and complex word usage. Provide a detailed readability report with specific suggestions to improve clarity and engagement.";
        break;
      case "grammar-checker":
        systemPrompt = "You are a grammar and spelling expert. Proofread the text and identify: spelling errors, grammar mistakes, punctuation issues, sentence structure problems, word choice improvements, and consistency issues. List each error with the correction and a brief explanation.";
        break;
      case "summarizer":
        systemPrompt = "You are a content summarization expert. Create a clear, concise summary that captures the main points, key arguments, and essential information. Maintain the original meaning while being significantly shorter. Use bullet points for clarity.";
        break;
      case "outline":
        systemPrompt = "You are a content outline specialist. Create a detailed blog post outline with: compelling introduction hook, 5-8 main sections with descriptive H2 headings, 2-4 subpoints (H3) under each main section, and a strong conclusion with CTA. Include brief notes on what each section should cover.";
        break;
      case "translator":
        systemPrompt = "You are a professional translator. Translate the provided text accurately to the target language while maintaining the original tone, style, and meaning. Ensure cultural appropriateness and natural phrasing in the target language.";
        break;
      case "caption":
        systemPrompt = "You are a social media caption specialist. Create 3-5 engaging image captions optimized for the context. Include relevant hashtags, emojis where appropriate, and a call-to-action. Make captions concise but compelling.";
        break;
      case "quote":
        systemPrompt = "You are a quote curator. Suggest 5-10 relevant, impactful quotes related to the topic. Include the author (if famous) or mark as 'Anonymous'. Ensure quotes are authentic, inspirational, and add value to the blog post context.";
        break;
      case "hashtag":
        systemPrompt = "You are a social media hashtag expert. Generate 20-30 relevant hashtags for the topic, optimized for the specified platform. Include a mix of: popular hashtags (high volume), niche hashtags (targeted), and branded hashtags. Organize by popularity and relevance.";
        break;
      case "cta":
        systemPrompt = "You are a conversion copywriter. Create 5-7 compelling calls-to-action that drive the desired action. Make them specific, action-oriented, benefit-focused, and urgent. Vary the approach (direct, soft sell, question-based, etc.).";
        break;
      case "headline-tester":
        systemPrompt = "You are a headline effectiveness analyst. Compare the two headlines across multiple factors: emotional appeal, clarity, keyword optimization, length optimization, curiosity factor, specificity, and estimated click-through rate. Provide a detailed analysis and declare a winner with reasoning.";
        break;
      case "traffic-predictor":
        systemPrompt = "You are a traffic prediction analyst. Based on the keywords and content quality, estimate: monthly search volume potential, keyword difficulty, ranking probability, estimated traffic (best/realistic/worst case scenarios), and timeline to rank. Provide reasoning for each estimate.";
        break;
      case "engagement-analyzer":
        systemPrompt = "You are an engagement and shareability expert. Analyze the content for: emotional resonance, storytelling quality, actionability, visual appeal potential, headline strength, opening hook effectiveness, and overall shareability score (0-100). Provide specific recommendations to boost engagement.";
        break;
      case "post-scheduler":
        systemPrompt = "You are a content scheduling strategist. Based on the niche and audience location, recommend: optimal days of the week to publish, best times of day (with timezone), posting frequency, and reasoning based on audience behavior patterns and platform algorithms.";
        break;
      case "trend-finder":
        systemPrompt = "You are a trend analysis expert. Research and identify 10-15 trending topics in the specified niche. For each trend: provide the trend name, why it's trending, search volume indicator (High/Medium/Low), content angle suggestions, and how quickly to act on it (Urgent/Soon/Monitor).";
        break;
      case "social-converter":
        systemPrompt = "You are a social media content adapter. Transform the blog content into an engaging social media post optimized for the specified platform. Match platform best practices: Twitter - thread format; LinkedIn - professional insights; Instagram - visual storytelling with caption; Facebook - conversational and engaging.";
        break;
      case "youtube-script":
        systemPrompt = "You are a YouTube script writer. Create a compelling video script with: attention-grabbing hook (first 15 seconds), clear introduction, main content sections with talking points, transitions between sections, engagement prompts (like/subscribe reminders), and strong outro with CTA. Include timestamps.";
        break;
      case "faq":
        systemPrompt = "You are an FAQ specialist. Generate 8-12 frequently asked questions with detailed, helpful answers based on the topic. Questions should address: common misconceptions, how-to queries, comparison questions, troubleshooting, and beginner concerns. Format answers concisely but comprehensively.";
        break;
      case "schema-markup":
        systemPrompt = "You are a structured data expert. Generate the appropriate Schema.org JSON-LD markup for the content type. Ensure proper formatting, include all required properties, and add recommended properties for rich results. Provide the complete code block ready to paste into the page <head>.";
        break;
      case "email-summary":
        systemPrompt = "You are an email marketing specialist. Create an engaging email summary of the blog post with: compelling subject line, preview text, brief introduction, key takeaways (bullet points), call-to-action to read full post, and closing. Keep it concise - aim for 150-200 words.";
        break;
      default:
        systemPrompt = "You are a helpful AI assistant specialized in content creation and SEO optimization.";
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
          { role: "user", content: userPrompt }
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
