import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-hero-gradient py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Blog Smarter,{" "}
              <span className="text-primary">Rank Higher</span>
              {" "}— With AI
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Generate blog posts, titles, meta tags, and SEO insights in seconds. 
              Let AI handle the heavy lifting while you focus on growing your audience.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="group" asChild>
                <Link to="/auth">
                  Try Free Tools
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Play className="h-4 w-4" />
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in animation-delay-200">
            <div className="rounded-2xl border bg-card p-6 shadow-lg">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-destructive"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-primary"></div>
              </div>
              <div className="space-y-3">
                <div className="h-4 w-3/4 animate-pulse rounded bg-muted"></div>
                <div className="h-4 w-full animate-pulse rounded bg-muted animation-delay-100"></div>
                <div className="h-4 w-5/6 animate-pulse rounded bg-muted animation-delay-200"></div>
                <div className="mt-6 h-32 rounded-lg bg-primary/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
