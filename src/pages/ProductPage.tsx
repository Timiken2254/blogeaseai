import { useParams, Navigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/landing/Footer";

const products: Record<string, {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  useCases: { title: string; description: string }[];
  cta: string;
}> = {
  "blog-writer": {
    title: "AI Blog Writer",
    tagline: "From topic to publish-ready post in seconds",
    description: "Our AI Blog Writer generates full-length, SEO-optimized blog posts that match your voice and style. Simply enter a topic, choose your tone, and let AI do the heavy lifting — so you can focus on growing your audience.",
    features: [
      "Full blog post generation from a single topic",
      "Custom tone selection (professional, casual, friendly, etc.)",
      "SEO keyword integration",
      "Intro & conclusion writer",
      "Paragraph expander for deeper content",
      "Content outline generator",
    ],
    useCases: [
      { title: "Bloggers", description: "Produce consistent, high-quality posts without writer's block." },
      { title: "Marketing Teams", description: "Scale content production while maintaining brand voice." },
      { title: "Freelance Writers", description: "Meet deadlines faster with AI-assisted first drafts." },
    ],
    cta: "Start Writing for Free",
  },
  "seo-optimizer": {
    title: "SEO Optimizer",
    tagline: "Rank higher, get found, grow faster",
    description: "Our SEO toolkit gives you everything you need to climb search rankings. From meta description generation to readability scoring and snippet optimization — make every piece of content work harder for you.",
    features: [
      "Meta description generator",
      "Title & SERP preview tool",
      "Readability scorer & improvement suggestions",
      "Image alt text generator",
      "Featured snippet optimizer",
      "Internal link suggestion tool",
    ],
    useCases: [
      { title: "Content Marketers", description: "Optimize every blog post for maximum organic reach." },
      { title: "SEO Specialists", description: "Audit and improve content at scale with AI-powered insights." },
      { title: "Small Business Owners", description: "Get found online without hiring an SEO agency." },
    ],
    cta: "Optimize Your Content Free",
  },
  "content-rewriter": {
    title: "Content Rewriter",
    tagline: "Refresh, rephrase, and elevate your content",
    description: "Breathe new life into existing content. Our AI rewriter paraphrases, changes tone, and improves clarity — while preserving your original message. Perfect for repurposing content across channels.",
    features: [
      "Full content rewriting with meaning preserved",
      "Tone changer (formal, friendly, persuasive, etc.)",
      "Grammar & spell checker",
      "Content summarizer",
      "Paragraph expander",
      "Multi-language translation",
    ],
    useCases: [
      { title: "Content Creators", description: "Repurpose blog content for newsletters, social media, and more." },
      { title: "Students & Researchers", description: "Paraphrase and summarize research with academic accuracy." },
      { title: "Agencies", description: "Deliver fresh variations of client content efficiently." },
    ],
    cta: "Rewrite Content Free",
  },
  "headline-generator": {
    title: "Headline Generator",
    tagline: "Craft click-worthy titles that demand attention",
    description: "Your headline is your first impression. Our AI generates dozens of compelling title options — from listicles to emotional hooks — tested and optimized for maximum click-through rates.",
    features: [
      "Multiple headline style options (how-to, listicle, question, etc.)",
      "Headline A/B tester for engagement prediction",
      "Emotional appeal scoring",
      "Character & word count optimization",
      "SEO keyword integration",
      "Social media title variants",
    ],
    useCases: [
      { title: "Bloggers", description: "Never settle for a mediocre headline again." },
      { title: "Email Marketers", description: "Boost open rates with AI-crafted subject lines." },
      { title: "Content Managers", description: "Test and compare headlines before publishing." },
    ],
    cta: "Generate Headlines Free",
  },
  "keyword-research": {
    title: "Keyword Research",
    tagline: "Discover the keywords your audience is searching for",
    description: "Find high-impact keywords, analyze competition, and build a content strategy that drives organic traffic. Our AI surfaces opportunities your competitors are missing.",
    features: [
      "Seed keyword expansion & suggestions",
      "Search volume & difficulty estimates",
      "Keyword cluster finder",
      "Tag & keyword suggestion for posts",
      "Trend finder for your niche",
      "Traffic prediction & potential scoring",
    ],
    useCases: [
      { title: "SEO Professionals", description: "Uncover untapped keyword opportunities at scale." },
      { title: "Content Strategists", description: "Plan editorial calendars around data-driven topics." },
      { title: "Entrepreneurs", description: "Understand what your target market is searching for." },
    ],
    cta: "Research Keywords Free",
  },
  "social-converter": {
    title: "Social Media Converter",
    tagline: "Turn blog posts into social media gold",
    description: "Repurpose your blog content into platform-specific social posts. Generate Twitter threads, LinkedIn articles, Instagram captions, and more — all from your existing blog content.",
    features: [
      "Blog to Twitter/X thread converter",
      "LinkedIn post generator",
      "Instagram caption creator",
      "Hashtag generator for all platforms",
      "YouTube script generator from blog content",
      "CTA generator for social posts",
    ],
    useCases: [
      { title: "Social Media Managers", description: "Create weeks of social content from a single blog post." },
      { title: "Solopreneurs", description: "Maximize content ROI across every channel." },
      { title: "Marketing Teams", description: "Maintain consistent messaging from blog to social." },
    ],
    cta: "Convert Content Free",
  },
};

const ProductPage = () => {
  const { productId } = useParams();
  const product = productId ? products[productId] : null;

  if (!product) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero */}
        <section className="bg-hero-gradient py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">BlogEase AI</p>
            <h1 className="font-display text-4xl font-bold md:text-5xl lg:text-6xl">
              {product.title}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-xl text-muted-foreground font-display italic">
              {product.tagline}
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground leading-relaxed">
              {product.description}
            </p>
            <div className="mt-10">
              <Button size="lg" className="group rounded-full px-8 text-base" asChild>
                <Link to="/auth">
                  {product.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Features</p>
              <h2 className="font-display text-3xl font-bold md:text-4xl">What's Included</h2>
            </div>
            <div className="mx-auto max-w-2xl">
              <div className="grid gap-4 sm:grid-cols-2">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl border bg-card p-5">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-muted/40 py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Who It's For</p>
              <h2 className="font-display text-3xl font-bold md:text-4xl">Built for Every Creator</h2>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
              {product.useCases.map((uc, i) => (
                <div key={i} className="rounded-2xl border bg-card p-8 text-center">
                  <h3 className="font-display text-lg font-semibold">{uc.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{uc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-foreground py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl font-bold text-background md:text-4xl">
              Start Using {product.title} <span className="italic">Today</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-background/60">
              No credit card, no subscription. Sign up and start creating better content immediately.
            </p>
            <div className="mt-8">
              <Button size="lg" className="group rounded-full bg-background px-8 text-base text-foreground hover:bg-background/90" asChild>
                <Link to="/auth">
                  {product.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductPage;
