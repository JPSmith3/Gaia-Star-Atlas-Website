import { LegalLayout } from "@/components/LegalLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Gaia - Star Atlas",
  description: "Terms of Use for Gaia - Star Atlas.",
};

export default function TermsPage() {
  return (
    <LegalLayout>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
        <span className="gradient-text">Terms of Use</span>
      </h1>
      <p className="text-sm text-white/40 mb-10">Last updated: February 21, 2026</p>

      <div className="space-y-8 text-sm text-white/60 leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Acceptance of Terms</h2>
          <p>
            By downloading or using Gaia - Star Atlas, you agree to these Terms of Use. If you do not agree, please do not use the app.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Description of Service</h2>
          <p>
            Gaia provides a real-time sky map, astronomical simulation tools, educational content, observation planning features, and optional subscription-based premium features under Gaia Pro.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Subscriptions</h2>
          <ul className="list-disc list-inside space-y-1.5 ml-2">
            <li>Gaia Pro is available as a monthly or yearly subscription.</li>
            <li>Payment will be charged to your Apple ID account at confirmation of purchase.</li>
            <li>Subscriptions automatically renew unless canceled at least 24 hours before the end of the current period.</li>
            <li>You can manage and cancel subscriptions through your Apple ID account settings.</li>
            <li>All billing and refunds are handled by Apple.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Use of the App</h2>
          <p className="mb-3">You agree to use Gaia only for lawful purposes. You may not:</p>
          <ul className="list-disc list-inside space-y-1.5 ml-2">
            <li>Reverse engineer the app</li>
            <li>Attempt unauthorized access</li>
            <li>Interfere with app functionality</li>
            <li>Reproduce or redistribute content without permission</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Intellectual Property</h2>
          <p>
            All content within Gaia, including design, code, graphics, and branding, is the property of its owner and protected by intellectual property laws. You may not copy or distribute any portion of the app without written permission.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Accuracy Disclaimer</h2>
          <p>
            Astronomical data is provided for informational purposes only. While we strive for accuracy, we do not guarantee that all data is free from error. Gaia should not be used for navigation, aviation, or life-critical decision making.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Limitation of Liability</h2>
          <p>
            Gaia is provided &ldquo;as is&rdquo; without warranties of any kind. We are not liable for data inaccuracies, service interruptions, device incompatibility, or indirect or consequential damages. Use of the app is at your own risk.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Modifications</h2>
          <p>
            We reserve the right to modify these Terms at any time. Continued use of the app after updates constitutes acceptance of revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Termination</h2>
          <p>
            We reserve the right to suspend or terminate access to the app for violations of these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
          <p>
            For questions regarding these Terms, contact{" "}
            <a
              href="mailto:support@gaiastaratlas.com"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              support@gaiastaratlas.com
            </a>
            .
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
