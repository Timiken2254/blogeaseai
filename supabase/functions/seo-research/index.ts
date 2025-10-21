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
    const { query, location = "United States" } = await req.json();
    
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      throw new Error("Missing authorization header");
    }

    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { global: { headers: { Authorization: authHeader } } }
    );

    const { data: { user }, error: userError } = await supabaseClient.auth.getUser();
    if (userError || !user) {
      console.error("Auth error:", userError);
      throw new Error("Unauthorized");
    }

    console.log(`SEO research for query: ${query}, user: ${user.id}`);

    const SERP_API_KEY = Deno.env.get("SERP_API_KEY");
    if (!SERP_API_KEY) {
      throw new Error("SERP_API_KEY not configured");
    }

    // Call SERP API for search results
    const serpUrl = new URL("https://serpapi.com/search");
    serpUrl.searchParams.append("q", query);
    serpUrl.searchParams.append("location", location);
    serpUrl.searchParams.append("api_key", SERP_API_KEY);
    serpUrl.searchParams.append("engine", "google");

    const response = await fetch(serpUrl.toString());

    if (!response.ok) {
      const errorText = await response.text();
      console.error("SERP API error:", response.status, errorText);
      throw new Error("Failed to fetch SEO data");
    }

    const data = await response.json();

    // Extract relevant SEO insights
    const insights = {
      topResults: data.organic_results?.slice(0, 5).map((result: any) => ({
        title: result.title,
        link: result.link,
        snippet: result.snippet,
        position: result.position,
      })) || [],
      relatedSearches: data.related_searches?.map((search: any) => search.query) || [],
      peopleAlsoAsk: data.related_questions?.map((q: any) => ({
        question: q.question,
        snippet: q.snippet,
      })) || [],
      searchMetadata: {
        totalResults: data.search_information?.total_results,
        timeMs: data.search_information?.time_taken_displayed,
      },
    };

    return new Response(
      JSON.stringify(insights),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in seo-research:", error);
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
