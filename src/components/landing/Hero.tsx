import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-hero-gradient py-24 md:py-36">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card/80 px-4 py-1.5 text-sm font-medium text-foreground/80 backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Free AI-powered blogging tools
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl"
          >
            Blog Smarter,{" "}
            <span className="italic text-primary">Rank Higher</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground md:text-xl"
          >
            Generate blog posts, optimize for SEO, and grow your audience — all powered by AI. No subscription required.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" className="group rounded-full px-8 text-base" asChild>
              <Link to="/auth">
                Start Creating — It's Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 text-base" asChild>
              <Link to="/products/blog-writer">
                Explore Tools
              </Link>
            </Button>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-sm text-muted-foreground"
          >
            No credit card needed · All tools included · Unlimited usage
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
