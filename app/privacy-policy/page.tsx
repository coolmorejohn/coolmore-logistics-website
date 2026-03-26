import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Coolmore Logistics privacy policy — how we collect, use, and protect your information including SMS/text messaging.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-lg text-gray-300">Effective Date: March 24, 2026</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg prose-gray">
          <p className="text-gray-600 leading-relaxed">
            Coolmore Logistics (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to
            protecting your privacy. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website{" "}
            <strong>coolmorelogistics.com</strong> and interact with our services, including
            our SMS/text messaging program.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-4">
            Information We Collect
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We may collect the following personal information when you voluntarily provide it
            to us through our website forms or other communications:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>First and last name</li>
            <li>Email address</li>
            <li>Phone number (including mobile number)</li>
            <li>Company name</li>
            <li>Message content submitted through our contact form</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-4">
            How We Use Your Information
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Respond to your inquiries and provide customer support</li>
            <li>Provide freight brokerage services and quotes</li>
            <li>Send you operational and transactional communications related to your shipments</li>
            <li>Send SMS/text messages if you have opted in to our messaging program</li>
            <li>Improve our website and services</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-4">
            SMS/Text Messaging Program
          </h2>
          <p className="text-gray-600 leading-relaxed">
            By opting in to our SMS/text messaging program through our website contact form
            or other opt-in methods, you consent to receive text messages from Coolmore
            Logistics at the mobile number you provide. These messages may include:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Responses to your inquiries</li>
            <li>Load and shipment status updates</li>
            <li>Operational communications related to freight services</li>
          </ul>

          <h3 className="text-xl font-bold text-brand-navy mt-8 mb-3">
            Message Frequency
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Message frequency varies based on your interactions with us and operational needs.
          </p>

          <h3 className="text-xl font-bold text-brand-navy mt-8 mb-3">
            Message and Data Rates
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Message and data rates may apply. Please check with your mobile carrier for
            details on your messaging plan.
          </p>

          <h3 className="text-xl font-bold text-brand-navy mt-8 mb-3">
            Opt-Out
          </h3>
          <p className="text-gray-600 leading-relaxed">
            You may opt out of receiving text messages at any time by replying{" "}
            <strong>STOP</strong> to any message you receive from us. After opting out, you
            will receive a one-time confirmation message. You will no longer receive text
            messages from us unless you re-opt in.
          </p>

          <h3 className="text-xl font-bold text-brand-navy mt-8 mb-3">
            Help
          </h3>
          <p className="text-gray-600 leading-relaxed">
            For help or questions about our SMS program, reply <strong>HELP</strong> to any
            message, email us at{" "}
            <a
              href="mailto:support@coolmorelogistics.com"
              className="text-brand-accent hover:underline"
            >
              support@coolmorelogistics.com
            </a>
            , or call{" "}
            <a href="tel:901-300-0240" className="text-brand-accent hover:underline">
              901-300-0240
            </a>
            .
          </p>

          <h3 className="text-xl font-bold text-brand-navy mt-8 mb-3">
            No Sharing with Third Parties
          </h3>
          <p className="text-gray-600 leading-relaxed">
            No mobile information will be shared with third parties/affiliates for
            marketing/promotional purposes. All the above categories exclude text messaging
            originator opt-in data and consent; this information will not be shared with any
            third parties.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            We do not sell, rent, or share your phone number or any personal information
            collected through our SMS program with third parties or affiliates for marketing
            purposes. Your information will only be shared with third parties when necessary
            to provide the services you have requested (e.g., carriers handling your freight)
            or when required by law.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-4">
            Cookies and Tracking
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our website may use cookies and similar tracking technologies to improve your
            browsing experience. You can control cookies through your browser settings.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-4">
            Data Security
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We implement reasonable administrative, technical, and physical security measures
            to protect your personal information. However, no method of transmission over the
            Internet or electronic storage is 100% secure, and we cannot guarantee absolute
            security.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-4">
            Third-Party Links
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our website may contain links to third-party websites. We are not responsible for
            the privacy practices or content of those websites.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-4">
            Children&apos;s Privacy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our services are not directed to individuals under the age of 18. We do not
            knowingly collect personal information from children.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-4">
            Changes to This Policy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes will be posted
            on this page with an updated effective date. We encourage you to review this page
            periodically.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul className="list-none pl-0 text-gray-600 space-y-2">
            <li>
              <strong>Coolmore Logistics</strong>
            </li>
            <li>5100 Poplar Ave Suite 2219, Memphis, TN 38137</li>
            <li>
              Phone:{" "}
              <a href="tel:901-300-0240" className="text-brand-accent hover:underline">
                901-300-0240
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                href="mailto:support@coolmorelogistics.com"
                className="text-brand-accent hover:underline"
              >
                support@coolmorelogistics.com
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
