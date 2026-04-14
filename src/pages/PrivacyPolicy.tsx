import Navbar from "@/components/Navbar";
import Footer from "@/components/landing/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="font-display text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: January 2025</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="font-display text-xl font-semibold mb-3">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">BlogEase AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">We collect information that you provide directly to us, including: name and email address, account credentials, and profile information you choose to provide. We also store the content you create and generate using our Service. We automatically collect usage information such as log data, device information, usage patterns, and cookies.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">We use collected information to provide, maintain, and improve our Service; send service-related communications; respond to your requests and provide support; detect and prevent fraud; analyze usage and improve user experience; and comply with legal obligations.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">4. Information Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">We do not sell your personal information. We may share information with service providers who perform services on our behalf, when required by law, in connection with business transfers, or with your explicit consent.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">5. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">We implement industry-standard security measures to protect your information. However, no method of transmission over the Internet is 100% secure.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">6. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">Depending on your location, you may have the right to access, correct, delete, or port your personal information. To exercise these rights, please contact us at privacy@blogease.ai.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">7. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">We use cookies and similar technologies to enhance your experience and analyze usage. You can control cookie preferences through your browser settings.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">8. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">Our Service is not intended for users under 18 years of age. We do not knowingly collect information from children.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">9. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">10. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">Email: privacy@blogease.ai · Support: support@blogease.ai</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
