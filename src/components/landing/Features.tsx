import { Edit3, TrendingUp, Zap, Globe, BarChart3, Shield } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Edit3,
    title: "AI-Powered Writing",
    description: "Generate complete blog posts, intros, conclusions, and more — all tuned to your voice and style.",
  },
  {
    icon: TrendingUp,
    title: "SEO That Works",
    description: "Optimize every piece of content with keyword insights, meta tags, and readability scoring.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "From idea to publish-ready draft in seconds. No more staring at a blank page.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Translate and localize your content to reach audiences worldwide.",
  },
  {
    icon: BarChart3,
    title: "Content Analytics",
    description: "Predict engagement, test headlines, and discover trending topics in your niche.",
  },
  {
    icon: Shield,
    title: "100% Free Access",
    description: "Every tool, every feature — completely free. No hidden fees or premium gates.",
  },
];

const Features = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Why BlogEase AI</p>
          <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Everything You Need to Blog{" "}
            <span className="italic">Better</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Powerful AI tools designed for every aspect of content creation and optimization.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
