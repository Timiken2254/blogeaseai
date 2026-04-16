import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { TrendingUp, FileText, Users, Sparkles } from "lucide-react";

const stats = [
  { icon: Users, value: 25000, suffix: "+", label: "Active Creators" },
  { icon: FileText, value: 1200000, suffix: "+", label: "Posts Generated" },
  { icon: TrendingUp, value: 87, suffix: "%", label: "Avg. Traffic Lift" },
  { icon: Sparkles, value: 100, suffix: "%", label: "Free Forever" },
];

const formatNumber = (n: number) => {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(n % 1_000 === 0 ? 0 : 1) + "K";
  return Math.round(n).toString();
};

const Counter = ({ to }: { to: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => formatNumber(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
      });
      return controls.stop;
    }
  }, [inView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const Stats = () => {
  return (
    <section className="border-y bg-background py-20 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">By the Numbers</p>
          <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Trusted by Creators <span className="italic">Worldwide</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border bg-card p-6 text-center transition-shadow hover:shadow-lg md:p-8"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <stat.icon className="h-5 w-5" />
              </div>
              <div className="font-display text-4xl font-bold md:text-5xl">
                <Counter to={stat.value} />
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
