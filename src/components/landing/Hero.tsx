import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroDashboard from "@/assets/hero-dashboard.png";

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
            <div className="rounded-2xl border bg-card shadow-2xl overflow-hidden">
              <img 
                src={heroDashboard} 
                alt="AI-powered blogging dashboard interface" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
