import { LegalLayout } from "@/components/LegalLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Gaia - Star Atlas",
  description: "Privacy Policy for Gaia - Star Atlas.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
        <span className="gradient-text">Privacy Policy</span>
      </h1>
      <p className="text-sm text-white/40 mb-10">Last updated: February 21, 2026</p>

      <div className="space-y-8 text-sm text-white/60 leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Information We Collect</h2>
          <p className="mb-3">
            If you contact us for support, we may collect your name, your email address, and the content of your message.
          </p>
          <p className="mb-3">
            Gaia may access certain information to provide core functionality, including:
          </p>
          <ul className="list-disc list-inside space-y-1.5 ml-2">
            <li>Location data, if permission is granted</li>
            <li>Device information such as device model and iOS version</li>
            <li>App usage data for performance and stability improvements</li>
          </ul>
          <p className="mt-3">
            We do not collect personally identifying information beyond what is necessary to operate the app.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Location Data</h2>
          <p className="mb-3">
            Gaia uses your location to display accurate sky positions, sunrise and sunset times, and local observing conditions.
          </p>
          <ul className="list-disc list-inside space-y-1.5 ml-2">
            <li>Location data is processed on your device when possible</li>
            <li>Is not stored on our servers</li>
            <li>Is not sold or shared with third parties</li>
          </ul>
          <p className="mt-3">
            You can disable location access at any time in your device settings.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Subscriptions and Payments</h2>
          <p>
            Gaia Pro subscriptions are processed securely through Apple. We do not collect or store your payment information. Subscription management, billing, and cancellations are handled by Apple through your Apple ID account.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Analytics and Performance Data</h2>
          <p className="mb-3">
            Gaia may collect anonymous usage data to improve app performance, fix bugs, and enhance user experience. This data:
          </p>
          <ul className="list-disc list-inside space-y-1.5 ml-2">
            <li>Does not identify you personally</li>
            <li>Is used solely for product improvement</li>
            <li>Is never sold</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Data Sharing</h2>
          <p className="mb-3">
            We do not sell, rent, or trade your personal information.
          </p>
          <p>
            We may share limited data with service providers strictly for app performance monitoring, crash reporting, and weather data services. These providers are required to maintain confidentiality and data protection.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Data Retention</h2>
          <p>
            We retain support communications only as long as necessary to respond to your request and maintain service records. You may request deletion of your support communication by contacting us.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Children&apos;s Privacy</h2>
          <p>
            Gaia is not directed toward children under 13. We do not knowingly collect personal information from children. If you believe a child has provided personal information, please contact us.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Your Rights</h2>
          <ul className="list-disc list-inside space-y-1.5 ml-2">
            <li>Disable location permissions at any time</li>
            <li>Request access to or deletion of your support communications</li>
            <li>Manage subscriptions through your Apple ID</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
          <p>
            If you have questions about this Privacy Policy, please contact{" "}
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
