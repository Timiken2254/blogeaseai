import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/landing/Footer";

declare global {
  interface Window {
    Paddle: any;
  }
}

const Pricing = () => {
  useEffect(() => {
    // Load Paddle.js
    const script = document.createElement("script");
    script.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Paddle) {
        // Initialize Paddle with test environment
        window.Paddle.Environment.set("sandbox");
        // Replace with your actual Paddle client token
        window.Paddle.Initialize({
          token: "test_your_paddle_client_token_here",
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openCheckout = (priceId: string) => {
    if (window.Paddle) {
      window.Paddle.Checkout.open({
        items: [{ priceId, quantity: 1 }],
      });
    }
  };

  const plans = [
    {
      name: "Pro Plan",
      price: "$5.99",
      description: "Everything you need for blog success",
      priceId: "pri_pro_test", // Replace with your Paddle price ID
      popular: true,
      features: [
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
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start with a 14-day free trial. No credit card required.
          </p>
        </div>

        <div className="flex justify-center max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className="border-primary shadow-lg relative w-full max-w-md ring-2 ring-primary"
            >
              
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full"
                  onClick={() => openCheckout(plan.priceId)}
                >
                  Start Free Trial
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            All plans include a 14-day free trial. Cancel anytime.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Need a custom plan? <a href="mailto:support@blogease.ai" className="text-primary hover:underline">Contact us</a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
