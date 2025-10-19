import Navbar from "@/components/Navbar";
import Footer from "@/components/landing/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: January 2025</p>
        
        <div className="prose prose-sm max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Subscription Refund Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              BlogEase AI operates on a monthly subscription basis at $5.99 per month. We want you to be completely satisfied with our service, and we offer the following refund policy:
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. 7-Day Money-Back Guarantee</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We offer a full refund within 7 days of your initial subscription purchase if you are not satisfied with the service. To qualify for this refund:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>You must request the refund within 7 days of your first payment</li>
              <li>This applies only to your first subscription payment</li>
              <li>The refund request must be made to support@blogease.ai</li>
              <li>Refunds are processed within 5-10 business days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Recurring Subscription Refunds</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For recurring monthly subscriptions:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>No refunds are provided for partial months of service</li>
              <li>You may cancel your subscription at any time, and you will retain access until the end of your current billing period</li>
              <li>No refunds are issued for cancellations mid-billing cycle</li>
              <li>Once cancelled, you will not be charged for subsequent months</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. How to Request a Refund</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To request a refund within the 7-day money-back guarantee period:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
              <li>Email us at support@blogease.ai with the subject line "Refund Request"</li>
              <li>Include your account email address and reason for the refund request</li>
              <li>Our team will review your request within 2 business days</li>
              <li>If approved, the refund will be processed to your original payment method within 5-10 business days</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Non-Refundable Circumstances</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Refunds will not be provided in the following cases:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>After the 7-day money-back guarantee period has expired</li>
              <li>For violations of our Terms of Service</li>
              <li>For account suspensions or terminations due to policy violations</li>
              <li>For subscription renewals beyond the first payment</li>
              <li>If content generated using the service has been extensively used or downloaded</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Cancellation Process</h2>
            <p className="text-muted-foreground leading-relaxed">
              You can cancel your subscription at any time through your account settings. Upon cancellation, you will continue to have access to all features until the end of your current billing period. No further charges will be made after cancellation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Service Interruptions</h2>
            <p className="text-muted-foreground leading-relaxed">
              In the event of extended service interruptions (more than 48 consecutive hours) caused by issues on our end, we may provide pro-rated credits or refunds at our discretion. This does not apply to scheduled maintenance or interruptions caused by third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Payment Disputes</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you believe you have been charged in error, please contact us immediately at support@blogease.ai before initiating a chargeback with your payment provider. We will work with you to resolve any billing issues promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify this refund policy at any time. Changes will be effective immediately upon posting to our website. Your continued use of the service after any changes constitutes acceptance of the new policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about our refund policy or to request a refund, please contact us at: support@blogease.ai
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RefundPolicy;
