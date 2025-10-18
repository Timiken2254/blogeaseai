import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Simple, Affordable Pricing
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Everything you need to create amazing blog content, all in one plan.
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="relative w-full max-w-md border-primary shadow-lg ring-2 ring-primary">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Pro Plan</CardTitle>
              <CardDescription>Everything you need for blog success</CardDescription>
              <div className="mt-6">
                <span className="text-5xl font-bold">$5.99</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {[
                  "All AI tools unlocked",
                  "Unlimited blog generations",
                  "Advanced SEO optimization",
                  "Title & meta tag creator",
                  "Content rewriter & paraphraser",
                  "Keyword research tools",
                  "Content history & saved drafts",
                  "SERP analysis & insights",
                  "Priority support",
                  "Regular feature updates"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" size="lg" asChild>
                <Link to="/auth">Get Started Now</Link>
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Cancel anytime. No hidden fees.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
