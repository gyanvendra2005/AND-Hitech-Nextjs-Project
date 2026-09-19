import type { Metadata } from 'next';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Thank You | AND Hitech Industries',
  description: 'Your enquiry has been received. Our team will get back to you shortly.',
};

export default function ThankYou() {
  return (
    <main className="thankyou-page">
      <header className="thankyou-header">
        <a href="./">
          <img src="../assets/brand/aihl-logo.svg" alt="AND Hitech Industries Limited" className="logo" />
        </a>
      </header>
      <div className="thankyou-content">
        <CheckCircle2 size={64} className="thankyou-icon" />
        <h1>Thank you for your enquiry!</h1>
        <p>We have received your message and our team will review it shortly.</p>
        <a href="../" className="button-primary">
          Back to home <ArrowRight size={17} />
        </a>
      </div>
    </main>
  );
}
