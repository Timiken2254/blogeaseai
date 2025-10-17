import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Lightbulb, Search, Sparkles, Type, Wand2 } from "lucide-react";
import { Link } from "react-router-dom";

const tools = [
  {
    icon: FileText,
    title: "Blog Generator",
    description: "Generate complete blog posts from a topic or outline",
  },
  {
    icon: Type,
    title: "Title Creator",
    description: "Craft compelling headlines that drive clicks",
  },
  {
    icon: Search,
    title: "SEO Meta Tag Maker",
    description: "Create optimized meta descriptions and tags",
  },
  {
    icon: Lightbulb,
    title: "Blog Idea Generator",
    description: "Never run out of content ideas again",
  },
  {
    icon: Wand2,
    title: "Rewriter & Paraphraser",
    description: "Refresh and improve existing content",
  },
  {
    icon: Sparkles,
    title: "Keyword Cluster Finder",
    description: "Discover related keywords for better SEO",
  },
];

const Tools = () => {
  return (
    <section id="tools" className="bg-muted/50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Powerful AI Tools at Your Fingertips
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Choose from our collection of specialized tools designed for every aspect of blog creation and optimization.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <Card key={index} className="group transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 inline-flex rounded-lg bg-primary/10 p-2 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <tool.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{tool.title}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" size="sm" className="group/btn" asChild>
                  <Link to="/auth">
                    Try Now
                    <span className="ml-2 transition-transform group-hover/btn:translate-x-1">→</span>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
