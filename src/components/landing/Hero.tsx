import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-hero-gradient py-24 md:py-36">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card/80 px-4 py-1.5 text-sm font-medium text-foreground/80 backdrop-blur-sm animate-fade-in">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Free AI-powered blogging tools
          </div>
          
          <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl animate-fade-in animation-delay-100">
            Blog Smarter,{" "}
            <span className="italic text-primary">Rank Higher</span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground md:text-xl animate-fade-in animation-delay-200">
            Generate blog posts, optimize for SEO, and grow your audience — all powered by AI. No subscription required.
          </p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in animation-delay-300">
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
          </div>
          
          <p className="mt-6 text-sm text-muted-foreground animate-fade-in animation-delay-400">
            No credit card needed · All tools included · Unlimited usage
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
