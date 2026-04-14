import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-foreground py-24 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl font-bold text-background md:text-4xl lg:text-5xl">
          Ready to Transform Your <span className="italic">Content?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-background/60">
          Join thousands of bloggers using BlogEase AI to create, optimize, and grow — completely free.
        </p>
        <div className="mt-10">
          <Button size="lg" variant="outline" className="group rounded-full border-background/20 bg-background px-8 text-base text-foreground hover:bg-background/90" asChild>
            <Link to="/auth">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
