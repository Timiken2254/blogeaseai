import Navbar from "@/components/Navbar";
import Footer from "@/components/landing/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="font-display text-4xl font-bold mb-2">Refund Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: January 2025</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="font-display text-xl font-semibold mb-3">1. Free Service</h2>
            <p className="text-muted-foreground leading-relaxed">BlogEase AI is currently offered free of charge. As such, there are no charges to refund for the use of our core tools and features.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">2. 14-Day Money-Back Guarantee</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Should we introduce paid features or premium plans in the future, we will offer a full refund within 14 days of your initial purchase if you are not satisfied. To qualify:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground text-sm">
              <li>You must request the refund within 14 days of your first payment</li>
              <li>This applies only to your first subscription payment</li>
              <li>The refund request must be made to support@blogease.ai</li>
              <li>Refunds are processed within 5-10 business days</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">3. Future Paid Features</h2>
            <p className="text-muted-foreground leading-relaxed">For any future recurring subscriptions: no refunds will be provided for partial months of service. You may cancel at any time and retain access until the end of your billing period. No charges will be made after cancellation.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">4. How to Request a Refund</h2>
            <p className="text-muted-foreground leading-relaxed">Email us at support@blogease.ai with the subject line "Refund Request" including your account email and reason. Our team will review within 2 business days. If approved, the refund will be processed to your original payment method within 5-10 business days.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">5. Non-Refundable Circumstances</h2>
            <p className="text-muted-foreground leading-relaxed">Refunds will not be provided after the 14-day guarantee period, for Terms of Service violations, account suspensions due to policy violations, or subscription renewals beyond the first payment.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">6. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">For questions about our refund policy: support@blogease.ai</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
