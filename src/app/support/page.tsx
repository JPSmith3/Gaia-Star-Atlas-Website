import { LegalLayout } from "@/components/LegalLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | Gaia - Star Atlas",
  description: "Get help with Gaia - Star Atlas. Find answers to common questions or contact our support team.",
};

const faqs = [
  {
    question: "How do I restore my Gaia Pro purchase?",
    answer:
      "Open Gaia and go to Settings. Tap \"Restore Purchases.\" Make sure you are signed into the same Apple ID used to purchase the subscription.",
  },
  {
    question: "How do I cancel my Gaia Pro subscription?",
    answer:
      "Subscriptions are managed directly through Apple. Open the App Store app, tap your profile icon, go to Subscriptions, and select Gaia to manage or cancel your plan.",
  },
  {
    question: "The AR Sky Map is not working",
    answer:
      "Gaia Pro is required to enable many AR overlays. Also ensure that camera permissions are enabled: Settings > Privacy > Camera > Gaia. If AR still does not function, verify your device supports ARKit and is running the latest version of iOS.",
  },
  {
    question: "The sky map or objects seem inaccurate",
    answer:
      "Make sure Location Services are enabled: Settings > Privacy > Location Services > Gaia. You can also manually search for a location inside the app.",
  },
  {
    question: "Weather or twilight times look incorrect",
    answer:
      "Weather data may vary depending on your current location and network connection. Ensure your device has internet access and that location services are enabled.",
  },
  {
    question: "How many constellations are included?",
    answer:
      "The free version includes 30 constellations. Gaia Pro unlocks all 88 official constellations along with the full deep sky object catalog.",
  },
];

export default function SupportPage() {
  return (
    <LegalLayout>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
        <span className="gradient-text">Support</span>
      </h1>
      <p className="text-white/50 text-lg leading-relaxed mb-10">
        Thank you for using Gaia. Gaia is built to help you explore and plan
        your time under the night sky. If you are experiencing an issue, have
        questions about Gaia Pro, or need assistance, we are here to help.
      </p>

      {/* Contact */}
      <div className="glass-card rounded-xl p-6 mb-12">
        <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
        <p className="text-sm text-white/50 mb-3">
          We typically respond within 24 to 48 hours.
        </p>
        <a
          href="mailto:support@gaiastaratlas.com"
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 7l-10 7L2 7" />
          </svg>
          support@gaiastaratlas.com
        </a>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold tracking-tight mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.question} className="glass-card rounded-xl p-6">
            <h3 className="font-semibold mb-2">{faq.question}</h3>
            <p className="text-sm text-white/50 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </LegalLayout>
  );
}
