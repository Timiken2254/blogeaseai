import Navbar from "@/components/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import LogoMarquee from "@/components/landing/LogoMarquee";
import Stats from "@/components/landing/Stats";
import Tools from "@/components/landing/Tools";
import Testimonials from "@/components/landing/Testimonials";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <LogoMarquee />
        <Stats />
        <Tools />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

