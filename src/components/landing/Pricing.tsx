import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying out our tools",
    features: [
      "5 AI tools access",
      "Limited to 5,000 words/month",
      "Basic templates",
      "Community support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    description: "For serious bloggers and content creators",
    features: [
      "All AI tools unlocked",
      "50,000 words/month",
      "Advanced templates",
      "Content history",
      "Priority support",
      "SEO analytics",
    ],
    cta: "Upgrade to Pro",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$49",
    description: "For teams and agencies",
    features: [
      "Everything in Pro",
      "Unlimited words",
      "Advanced SEO suite",
      "API access",
      "Team collaboration",
      "Custom AI training",
      "Dedicated support",
    ],
    cta: "Get Premium",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative ${
                plan.highlighted 
                  ? "border-primary shadow-lg ring-2 ring-primary" 
                  : ""
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "$0" && (
                    <span className="text-muted-foreground">/month</span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  variant={plan.highlighted ? "default" : "outline"}
                  asChild
                >
                  <Link to="/auth">{plan.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
