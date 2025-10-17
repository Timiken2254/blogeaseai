import { 
  FileText, Lightbulb, RefreshCw, Sparkles, Type, Search, 
  Tags, Copy, Eye, Image, Link as LinkIcon, CheckCircle, 
  BarChart3, TrendingUp, Calendar, Target, Share2, Music,
  Mail, Code, MessageSquare, Wrench
} from "lucide-react";

export interface Tool {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  category: string;
  inputFields: {
    name: string;
    label: string;
    placeholder: string;
    type: "textarea" | "text" | "select";
    options?: string[];
    rows?: number;
  }[];
  examples: string[];
}

export const toolsConfig: Tool[] = [
  // Writing & Content Creation Tools
  {
    id: "blog-post",
    title: "AI Blog Post Generator",
    subtitle: "Generate full-length blog posts from a topic or keyword",
    icon: FileText,
    category: "Writing & Content Creation",
    inputFields: [
      { name: "topic", label: "Topic", placeholder: "Enter your blog topic...", type: "text" },
      { name: "keywords", label: "Keywords", placeholder: "Comma-separated keywords", type: "text" },
      { name: "tone", label: "Tone", placeholder: "Select tone", type: "select", options: ["Professional", "Casual", "Friendly", "Authoritative", "Conversational"] },
    ],
    examples: ["10 Tips for Healthy Living", "The Future of AI in Business", "Beginner's Guide to Digital Marketing"],
  },
  {
    id: "intro-conclusion",
    title: "Intro & Conclusion Writer",
    subtitle: "Create engaging openings and endings for blog posts",
    icon: Sparkles,
    category: "Writing & Content Creation",
    inputFields: [
      { name: "topic", label: "Blog Topic", placeholder: "What is your blog about?", type: "text" },
      { name: "type", label: "Type", placeholder: "Select type", type: "select", options: ["Introduction", "Conclusion", "Both"] },
      { name: "mainPoints", label: "Main Points", placeholder: "Key points covered in your blog", type: "textarea", rows: 4 },
    ],
    examples: ["Introduction for a post about productivity", "Conclusion for sustainable living article"],
  },
  {
    id: "paragraph-expander",
    title: "Paragraph Expander",
    subtitle: "Expand short ideas into detailed paragraphs",
    icon: RefreshCw,
    category: "Writing & Content Creation",
    inputFields: [
      { name: "shortText", label: "Short Text", placeholder: "Enter a brief idea or sentence...", type: "textarea", rows: 3 },
      { name: "targetLength", label: "Target Length", placeholder: "Select length", type: "select", options: ["Medium (2-3 paragraphs)", "Long (4-5 paragraphs)", "Detailed (6+ paragraphs)"] },
    ],
    examples: ["AI is changing healthcare", "Remote work has benefits"],
  },
  {
    id: "headline",
    title: "Headline Generator",
    subtitle: "Generate catchy blog post titles optimized for clicks",
    icon: Type,
    category: "Writing & Content Creation",
    inputFields: [
      { name: "topic", label: "Topic", placeholder: "What is your post about?", type: "text" },
      { name: "style", label: "Style", placeholder: "Select style", type: "select", options: ["How-to", "Listicle", "Question", "Emotional", "Controversial"] },
    ],
    examples: ["Time management tips", "Social media marketing strategies"],
  },
  {
    id: "rewriter",
    title: "Content Rewriter",
    subtitle: "Reword existing text while maintaining meaning",
    icon: RefreshCw,
    category: "Writing & Content Creation",
    inputFields: [
      { name: "originalText", label: "Original Text", placeholder: "Paste your content here...", type: "textarea", rows: 8 },
      { name: "style", label: "Rewrite Style", placeholder: "Select style", type: "select", options: ["Simple", "Professional", "Creative", "Academic"] },
    ],
    examples: ["Rewrite marketing copy", "Simplify technical content"],
  },
  {
    id: "tone-changer",
    title: "Tone Changer",
    subtitle: "Convert content tone (Formal, Friendly, Persuasive, etc.)",
    icon: Wrench,
    category: "Writing & Content Creation",
    inputFields: [
      { name: "text", label: "Text", placeholder: "Enter your text...", type: "textarea", rows: 6 },
      { name: "targetTone", label: "Target Tone", placeholder: "Select tone", type: "select", options: ["Formal", "Friendly", "Persuasive", "Humorous", "Empathetic", "Urgent"] },
    ],
    examples: ["Make this email more friendly", "Convert to formal business tone"],
  },
  {
    id: "idea-generator",
    title: "Idea Generator",
    subtitle: "Suggest new blog topics based on niche keywords",
    icon: Lightbulb,
    category: "Writing & Content Creation",
    inputFields: [
      { name: "niche", label: "Niche/Industry", placeholder: "e.g., fitness, technology, cooking", type: "text" },
      { name: "keywords", label: "Keywords", placeholder: "Related keywords", type: "text" },
    ],
    examples: ["Tech startup ideas", "Healthy recipe topics"],
  },
  {
    id: "meta-description",
    title: "Meta Description Generator",
    subtitle: "Write SEO-friendly meta descriptions for posts",
    icon: Search,
    category: "Writing & Content Creation",
    inputFields: [
      { name: "title", label: "Post Title", placeholder: "Your blog post title", type: "text" },
      { name: "content", label: "Main Content", placeholder: "Brief summary of your post", type: "textarea", rows: 4 },
    ],
    examples: ["Guide to SEO optimization", "Recipe for chocolate cake"],
  },
  {
    id: "tag-keywords",
    title: "Tag & Keyword Suggestion Tool",
    subtitle: "Suggest post tags and relevant SEO keywords",
    icon: Tags,
    category: "Writing & Content Creation",
    inputFields: [
      { name: "content", label: "Content", placeholder: "Paste your blog content...", type: "textarea", rows: 6 },
      { name: "niche", label: "Niche", placeholder: "Your blog niche", type: "text" },
    ],
    examples: ["Travel blog post", "Tech tutorial article"],
  },
  
  // SEO & Optimization Tools
  {
    id: "keyword-research",
    title: "Keyword Research Tool",
    subtitle: "Find keywords with search volume and difficulty",
    icon: Search,
    category: "SEO & Optimization",
    inputFields: [
      { name: "seedKeyword", label: "Seed Keyword", placeholder: "Enter main keyword", type: "text" },
      { name: "location", label: "Location", placeholder: "Target location (optional)", type: "text" },
    ],
    examples: ["digital marketing", "vegan recipes"],
  },
  {
    id: "seo-analyzer",
    title: "SEO Content Analyzer",
    subtitle: "Analyze content for keyword density and readability",
    icon: BarChart3,
    category: "SEO & Optimization",
    inputFields: [
      { name: "content", label: "Content", placeholder: "Paste your blog content...", type: "textarea", rows: 8 },
      { name: "targetKeywords", label: "Target Keywords", placeholder: "Keywords to analyze", type: "text" },
    ],
    examples: ["Analyze SEO score", "Check keyword density"],
  },
  {
    id: "serp-preview",
    title: "Title & Meta Preview Tool",
    subtitle: "Preview how a blog will appear on Google SERPs",
    icon: Eye,
    category: "SEO & Optimization",
    inputFields: [
      { name: "title", label: "Page Title", placeholder: "Your page title", type: "text" },
      { name: "metaDescription", label: "Meta Description", placeholder: "Your meta description", type: "textarea", rows: 3 },
      { name: "url", label: "URL", placeholder: "https://example.com/blog-post", type: "text" },
    ],
    examples: ["Preview blog post appearance"],
  },
  {
    id: "alt-text",
    title: "Image Alt Text Generator",
    subtitle: "Create optimized alt texts for images",
    icon: Image,
    category: "SEO & Optimization",
    inputFields: [
      { name: "imageDescription", label: "Image Description", placeholder: "Describe the image...", type: "textarea", rows: 3 },
      { name: "context", label: "Context", placeholder: "Where is this image used?", type: "text" },
    ],
    examples: ["Product photo", "Blog header image"],
  },
  {
    id: "internal-links",
    title: "Internal Link Suggestion Tool",
    subtitle: "Suggest related links to improve SEO",
    icon: LinkIcon,
    category: "SEO & Optimization",
    inputFields: [
      { name: "content", label: "Content", placeholder: "Your blog content...", type: "textarea", rows: 6 },
      { name: "existingPosts", label: "Existing Posts", placeholder: "List your existing post titles", type: "textarea", rows: 4 },
    ],
    examples: ["Find internal linking opportunities"],
  },
  {
    id: "snippet-optimizer",
    title: "Snippet Optimizer",
    subtitle: "Format content for featured snippets",
    icon: Target,
    category: "SEO & Optimization",
    inputFields: [
      { name: "query", label: "Target Query", placeholder: "What question are you answering?", type: "text" },
      { name: "content", label: "Content", placeholder: "Your answer/content", type: "textarea", rows: 6 },
    ],
    examples: ["How to start a blog", "What is SEO"],
  },
  {
    id: "readability",
    title: "Readability Scorer",
    subtitle: "Calculate reading ease and suggest improvements",
    icon: CheckCircle,
    category: "SEO & Optimization",
    inputFields: [
      { name: "content", label: "Content", placeholder: "Paste your content...", type: "textarea", rows: 8 },
    ],
    examples: ["Check blog readability", "Analyze article complexity"],
  },

  // Content Management & Utility Tools
  {
    id: "grammar-checker",
    title: "Grammar & Spell Checker",
    subtitle: "Proofread posts for grammar and punctuation",
    icon: CheckCircle,
    category: "Content Management",
    inputFields: [
      { name: "text", label: "Text", placeholder: "Paste your text...", type: "textarea", rows: 8 },
    ],
    examples: ["Check grammar errors", "Proofread article"],
  },
  {
    id: "summarizer",
    title: "Content Summarizer",
    subtitle: "Summarize long articles into short briefs",
    icon: FileText,
    category: "Content Management",
    inputFields: [
      { name: "content", label: "Content", placeholder: "Paste long article...", type: "textarea", rows: 8 },
      { name: "length", label: "Summary Length", placeholder: "Select length", type: "select", options: ["Brief", "Medium", "Detailed"] },
    ],
    examples: ["Summarize research paper", "Create executive summary"],
  },
  {
    id: "outline",
    title: "Content Outline Generator",
    subtitle: "Create structured outlines for blog posts",
    icon: FileText,
    category: "Content Management",
    inputFields: [
      { name: "topic", label: "Topic", placeholder: "Blog post topic", type: "text" },
      { name: "targetAudience", label: "Target Audience", placeholder: "Who is this for?", type: "text" },
    ],
    examples: ["Outline for beginner's guide", "Structure for how-to article"],
  },
  {
    id: "translator",
    title: "Content Translator",
    subtitle: "Translate posts to other languages",
    icon: RefreshCw,
    category: "Content Management",
    inputFields: [
      { name: "text", label: "Text", placeholder: "Enter text to translate...", type: "textarea", rows: 6 },
      { name: "targetLanguage", label: "Target Language", placeholder: "Select language", type: "select", options: ["Spanish", "French", "German", "Italian", "Portuguese", "Chinese", "Japanese", "Korean"] },
    ],
    examples: ["Translate to Spanish", "Convert to French"],
  },
  {
    id: "caption",
    title: "AI Image Caption Generator",
    subtitle: "Generate captions for blog images",
    icon: Image,
    category: "Content Management",
    inputFields: [
      { name: "imageDescription", label: "Image Description", placeholder: "Describe the image", type: "textarea", rows: 3 },
      { name: "context", label: "Context", placeholder: "Post topic/context", type: "text" },
    ],
    examples: ["Caption for travel photo", "Social media image caption"],
  },
  {
    id: "quote",
    title: "Quote Generator",
    subtitle: "Suggest relevant quotes to include in blogs",
    icon: MessageSquare,
    category: "Content Management",
    inputFields: [
      { name: "topic", label: "Topic", placeholder: "Blog topic", type: "text" },
      { name: "style", label: "Style", placeholder: "Quote style", type: "select", options: ["Inspirational", "Humorous", "Thoughtful", "Professional"] },
    ],
    examples: ["Motivational quotes", "Business wisdom quotes"],
  },
  {
    id: "hashtag",
    title: "Hashtag Generator",
    subtitle: "Create hashtags for blog promotion on social media",
    icon: Tags,
    category: "Content Management",
    inputFields: [
      { name: "topic", label: "Topic", placeholder: "Post topic", type: "text" },
      { name: "platform", label: "Platform", placeholder: "Select platform", type: "select", options: ["Instagram", "Twitter/X", "LinkedIn", "Facebook", "General"] },
    ],
    examples: ["Tech blog hashtags", "Food blog tags"],
  },
  {
    id: "cta",
    title: "CTA Generator",
    subtitle: "Suggest effective calls to action for posts",
    icon: Target,
    category: "Content Management",
    inputFields: [
      { name: "goal", label: "Goal", placeholder: "What action do you want?", type: "text" },
      { name: "context", label: "Context", placeholder: "Blog topic/offer", type: "text" },
    ],
    examples: ["Newsletter signup CTA", "Product purchase CTA"],
  },

  // Analytics & Engagement Tools
  {
    id: "headline-tester",
    title: "Headline A/B Tester",
    subtitle: "Compare two headlines for engagement prediction",
    icon: BarChart3,
    category: "Analytics & Engagement",
    inputFields: [
      { name: "headlineA", label: "Headline A", placeholder: "First headline option", type: "text" },
      { name: "headlineB", label: "Headline B", placeholder: "Second headline option", type: "text" },
      { name: "audience", label: "Target Audience", placeholder: "Who is your audience?", type: "text" },
    ],
    examples: ["Compare click potential", "Test headline effectiveness"],
  },
  {
    id: "traffic-predictor",
    title: "Traffic Predictor",
    subtitle: "Estimate potential blog traffic from keywords",
    icon: TrendingUp,
    category: "Analytics & Engagement",
    inputFields: [
      { name: "keywords", label: "Target Keywords", placeholder: "Comma-separated keywords", type: "text" },
      { name: "contentQuality", label: "Content Quality", placeholder: "Rate your content", type: "select", options: ["Basic", "Good", "Excellent"] },
    ],
    examples: ["Predict traffic potential", "Estimate visitors"],
  },
  {
    id: "engagement-analyzer",
    title: "Engagement Analyzer",
    subtitle: "Evaluate how readable and shareable content is",
    icon: Share2,
    category: "Analytics & Engagement",
    inputFields: [
      { name: "content", label: "Content", placeholder: "Paste your content...", type: "textarea", rows: 8 },
    ],
    examples: ["Analyze engagement potential", "Check shareability"],
  },
  {
    id: "post-scheduler",
    title: "Post Scheduler",
    subtitle: "Suggest best times to publish posts",
    icon: Calendar,
    category: "Analytics & Engagement",
    inputFields: [
      { name: "niche", label: "Niche", placeholder: "Your blog niche", type: "text" },
      { name: "audience", label: "Audience Location", placeholder: "Where is your audience?", type: "text" },
    ],
    examples: ["Best time to post", "Optimal publishing schedule"],
  },
  {
    id: "trend-finder",
    title: "Trend Finder",
    subtitle: "Show trending topics in your niche",
    icon: TrendingUp,
    category: "Analytics & Engagement",
    inputFields: [
      { name: "niche", label: "Niche", placeholder: "Your industry/niche", type: "text" },
      { name: "timeframe", label: "Timeframe", placeholder: "Select period", type: "select", options: ["Last 7 days", "Last 30 days", "Last 3 months"] },
    ],
    examples: ["Tech trends", "Fitness trending topics"],
  },

  // AI Enhancement Tools
  {
    id: "social-converter",
    title: "Blog to Social Media Post Converter",
    subtitle: "Transform blog content into social posts",
    icon: Share2,
    category: "AI Enhancement",
    inputFields: [
      { name: "blogContent", label: "Blog Content", placeholder: "Paste blog excerpt or summary", type: "textarea", rows: 6 },
      { name: "platform", label: "Platform", placeholder: "Select platform", type: "select", options: ["Twitter/X", "LinkedIn", "Instagram", "Facebook"] },
    ],
    examples: ["Create Twitter thread", "LinkedIn post from blog"],
  },
  {
    id: "youtube-script",
    title: "YouTube Script Generator",
    subtitle: "Create video scripts from blog posts",
    icon: Music,
    category: "AI Enhancement",
    inputFields: [
      { name: "blogTitle", label: "Blog Title", placeholder: "Your blog post title", type: "text" },
      { name: "mainPoints", label: "Main Points", placeholder: "Key points from your blog", type: "textarea", rows: 6 },
    ],
    examples: ["Video script from article", "YouTube content from blog"],
  },
  {
    id: "faq",
    title: "FAQ Section Generator",
    subtitle: "Create FAQ sections for blog posts",
    icon: MessageSquare,
    category: "AI Enhancement",
    inputFields: [
      { name: "topic", label: "Topic", placeholder: "Blog post topic", type: "text" },
      { name: "context", label: "Context", placeholder: "Additional context", type: "textarea", rows: 4 },
    ],
    examples: ["FAQ for product guide", "Common questions about topic"],
  },
  {
    id: "schema-markup",
    title: "Schema Markup Generator",
    subtitle: "Generate structured data for SEO",
    icon: Code,
    category: "AI Enhancement",
    inputFields: [
      { name: "contentType", label: "Content Type", placeholder: "Select type", type: "select", options: ["Article", "Product", "Recipe", "FAQ", "How-to"] },
      { name: "details", label: "Content Details", placeholder: "Key information about your content", type: "textarea", rows: 6 },
    ],
    examples: ["Article schema", "Recipe structured data"],
  },
  {
    id: "email-summary",
    title: "Blog Post Email Summary Generator",
    subtitle: "Create email summaries of blog posts",
    icon: Mail,
    category: "AI Enhancement",
    inputFields: [
      { name: "blogTitle", label: "Blog Title", placeholder: "Post title", type: "text" },
      { name: "content", label: "Content", placeholder: "Blog content or summary", type: "textarea", rows: 6 },
    ],
    examples: ["Newsletter summary", "Email teaser for blog"],
  },
];
