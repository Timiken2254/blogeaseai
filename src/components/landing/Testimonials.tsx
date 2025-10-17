import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import seoPattern from "@/assets/seo-pattern.png";

const testimonials = [
  {
    quote: "BlogEase AI transformed my content creation process. What used to take hours now takes minutes!",
    author: "Sarah Johnson",
    role: "Travel Blogger",
  },
  {
    quote: "The SEO optimization features are incredible. My blog traffic increased by 200% in just 2 months.",
    author: "Michael Chen",
    role: "Tech Writer",
  },
  {
    quote: "I love how easy it is to generate high-quality blog posts. The AI really understands my voice.",
    author: "Emma Davis",
    role: "Lifestyle Content Creator",
  },
];

const Testimonials = () => {
  return (
    <section 
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        backgroundImage: `url(${seoPattern})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-background/95 backdrop-blur-sm"></div>
      
      <div className="container relative mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Loved by Content Creators
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Join thousands of bloggers who are already creating better content with BlogEase AI
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 transition-all hover:shadow-lg">
              <CardContent className="space-y-4 p-6">
                <Quote className="h-8 w-8 text-primary/20" />
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
