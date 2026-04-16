import { FileText, Lightbulb, Search, Sparkles, Type, Wand2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const tools = [
  {
    icon: FileText,
    title: "Blog Generator",
    description: "Generate complete, SEO-optimized blog posts from just a topic or outline.",
    href: "/products/blog-writer",
  },
  {
    icon: Type,
    title: "Headline Creator",
    description: "Craft compelling, click-worthy headlines that drive traffic and engagement.",
    href: "/products/headline-generator",
  },
  {
    icon: Search,
    title: "SEO Toolkit",
    description: "Meta tags, keyword analysis, readability scores — everything for page-one rankings.",
    href: "/products/seo-optimizer",
  },
  {
    icon: Lightbulb,
    title: "Idea Generator",
    description: "Never run out of blog topics. Get fresh ideas based on your niche and trends.",
    href: "/products/blog-writer",
  },
  {
    icon: Wand2,
    title: "Content Rewriter",
    description: "Refresh, paraphrase, and improve existing content while keeping your message intact.",
    href: "/products/content-rewriter",
  },
  {
    icon: Sparkles,
    title: "Keyword Research",
    description: "Discover high-impact keywords and clusters to build your content strategy around.",
    href: "/products/keyword-research",
  },
];

const Tools = () => {
  return (
    <section id="tools" className="bg-muted/40 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Our Tools</p>
          <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            AI Tools at Your <span className="italic">Fingertips</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Specialized tools for every aspect of blog creation, optimization, and growth.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                to={tool.href}
                className="group flex h-full flex-col rounded-2xl border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <tool.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{tool.title}</h3>
                <p className="mt-1.5 flex-1 text-sm text-muted-foreground leading-relaxed">{tool.description}</p>
                <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
