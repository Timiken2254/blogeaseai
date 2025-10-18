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
      name: "Starter",
      price: "$9",
      description: "Perfect for individuals getting started",
      priceId: "pri_starter_test", // Replace with your Paddle price ID
      features: [
        "5 AI content generations per day",
        "Basic SEO tools",
        "Email support",
        "1 user account",
      ],
    },
    {
      name: "Pro",
      price: "$29",
      description: "Best for growing businesses",
      priceId: "pri_pro_test", // Replace with your Paddle price ID
      popular: true,
      features: [
        "Unlimited AI content generations",
        "All SEO & optimization tools",
        "Priority support",
        "5 user accounts",
        "Advanced analytics",
        "API access",
      ],
    },
    {
      name: "Enterprise",
      price: "$99",
      description: "For large teams and agencies",
      priceId: "pri_enterprise_test", // Replace with your Paddle price ID
      features: [
        "Everything in Pro",
        "Unlimited user accounts",
        "Custom AI training",
        "Dedicated account manager",
        "White-label options",
        "SLA guarantee",
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

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className={plan.popular ? "border-primary shadow-lg relative" : ""}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
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
                  variant={plan.popular ? "default" : "outline"}
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
