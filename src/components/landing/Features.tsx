import { Edit3, TrendingUp, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Edit3,
    title: "AI Writer",
    description: "Create blog posts instantly from your topic with advanced AI that understands your voice.",
  },
  {
    icon: TrendingUp,
    title: "SEO Optimizer",
    description: "Improve your blog visibility with smart keyword insights and optimization recommendations.",
  },
  {
    icon: Zap,
    title: "One-Click Workflow",
    description: "From draft to publish in a single dashboard. Streamline your entire content creation process.",
  },
];

const Features = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Everything You Need to Blog Better
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Powerful AI tools designed to help you create, optimize, and grow your blog content effortlessly.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group border-2 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg"
            >
              <CardContent className="space-y-4 p-6">
                <div className="inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
