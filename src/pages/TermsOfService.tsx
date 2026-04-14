import Navbar from "@/components/Navbar";
import Footer from "@/components/landing/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="font-display text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: January 2025</p>
        
        <div className="space-y-8">
          {[
            { t: "1. Acceptance of Terms", c: 'By accessing and using BlogEase AI ("the Service"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use the Service.' },
            { t: "2. Description of Service", c: "BlogEase AI provides free AI-powered content generation and optimization tools for bloggers and content creators. The Service includes but is not limited to blog generation, SEO optimization, keyword research, and content analysis tools." },
            { t: "3. User Accounts", c: "To access certain features of the Service, you must create an account. You agree to provide accurate, current, and complete information during registration; maintain the security of your password and account; notify us immediately of any unauthorized use of your account; and be responsible for all activities that occur under your account." },
            { t: "4. Free Access", c: "BlogEase AI currently offers all tools and features free of charge. We reserve the right to introduce paid features in the future with 30 days notice. Existing free features will remain accessible." },
            { t: "5. Acceptable Use", c: "You agree not to use the Service to: violate any laws or regulations; infringe on intellectual property rights; distribute malware or harmful code; harass, abuse, or harm others; generate spam or misleading content; or attempt to gain unauthorized access to the Service." },
            { t: "6. Content Ownership", c: "You retain all rights to content you create using the Service. However, AI-generated content may not be unique, and we cannot guarantee exclusivity. You are responsible for ensuring your content complies with all applicable laws and third-party rights." },
            { t: "7. Intellectual Property", c: "The Service, including its original content, features, and functionality, is owned by BlogEase AI and is protected by international copyright, trademark, and other intellectual property laws." },
            { t: "8. Limitation of Liability", c: "BlogEase AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the Service." },
            { t: "9. Service Availability", c: "We strive to provide reliable service but do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue the Service at any time without notice." },
            { t: "10. Termination", c: "We may terminate or suspend your account and access to the Service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties." },
            { t: "11. Changes to Terms", c: "We reserve the right to modify these Terms at any time. We will notify users of any material changes via email or through the Service. Continued use of the Service after changes constitutes acceptance of the modified Terms." },
            { t: "12. Contact Information", c: "For questions about these Terms, please contact us at: support@blogease.ai" },
          ].map((s, i) => (
            <section key={i}>
              <h2 className="font-display text-xl font-semibold mb-3">{s.t}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.c}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
