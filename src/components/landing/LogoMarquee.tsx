import { motion } from "framer-motion";
import {
  SiNike,
  SiSpotify,
  SiAirbnb,
  SiNetflix,
  SiSlack,
  SiShopify,
  SiNotion,
  SiFigma,
  SiStripe,
  SiGithub,
} from "react-icons/si";

const logos = [
  { Icon: SiNike, name: "Nike" },
  { Icon: SiSpotify, name: "Spotify" },
  { Icon: SiAirbnb, name: "Airbnb" },
  { Icon: SiNetflix, name: "Netflix" },
  { Icon: SiSlack, name: "Slack" },
  { Icon: SiShopify, name: "Shopify" },
  { Icon: SiNotion, name: "Notion" },
  { Icon: SiFigma, name: "Figma" },
  { Icon: SiStripe, name: "Stripe" },
  { Icon: SiGithub, name: "GitHub" },
];

const LogoMarquee = () => {
  return (
    <section className="border-y bg-card py-12 md:py-16">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground"
        >
          Trusted by teams at the world's most innovative brands
        </motion.p>

        <div className="relative overflow-hidden">
          {/* Edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-card to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-card to-transparent" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" },
            }}
            className="flex w-max gap-16"
          >
            {[...logos, ...logos].map(({ Icon, name }, i) => (
              <div
                key={`${name}-${i}`}
                className="flex h-10 shrink-0 items-center justify-center text-foreground/40 transition-colors hover:text-foreground"
                aria-label={name}
              >
                <Icon className="h-8 w-auto md:h-10" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
