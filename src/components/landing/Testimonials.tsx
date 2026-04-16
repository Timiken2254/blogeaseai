import { Quote } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Testimonials</p>
          <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Loved by <span className="italic">Content Creators</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Join thousands of bloggers who create better content with BlogEase AI
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group rounded-2xl border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Quote className="mb-4 h-8 w-8 text-primary/20" />
              <p className="font-display text-lg italic leading-relaxed text-foreground/80">
                "{testimonial.quote}"
              </p>
              <div className="mt-6 border-t pt-5">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
