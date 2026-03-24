import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Coolmore Logistics terms of service including SMS/text messaging terms.",
};

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-lg text-gray-300">Effective Date: March 24, 2026</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg prose-gray">
          <p className="text-gray-600 leading-relaxed">
            Welcome to <strong>coolmorelogistics.com</strong> (the &quot;Site&quot;), operated by
            Coolmore Logistics (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By
            accessing or using our Site and services, you agree to be bound by these Terms of
            Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use our Site or
            services.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-4">
            Use of Our Services
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Coolmore Logistics is a freight brokerage providing logistics services including
            full truckload (FTL), less-than-truckload (LTL), and expedited shipping. By using
            our Site, you agree to provide accurate and complete information when submitting
            forms or communicating with us.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-4">
            SMS/Text Messaging Terms
          </h2>
          <p className="text-gray-600 leading-relaxed">
            By opting in to receive SMS/text messages from Coolmore Logistics, you agree to
            the following:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              <strong>Consent:</strong> By checking the SMS opt-in box on our contact form or
              by texting us, you expressly consent to receive text messages from Coolmore
              Logistics at the phone number you provide. Consent is not a condition of
              purchase or service.
            </li>
            <li>
              <strong>Message Types:</strong> Messages may include responses to your
              inquiries, shipment and load status updates, and operational communications
              related to freight services.
            </li>
            <li>
              <strong>Message Frequency:</strong> Message frequency varies based on your
              interactions with us and operational needs.
            </li>
            <li>
              <strong>Message and Data Rates:</strong> Message and data rates may apply.
              Contact your mobile carrier for details.
            </li>
            <li>
              <strong>Opt-Out:</strong> You may opt out at any time by replying{" "}
              <strong>STOP</strong> to any text message. You will receive a one-time
              confirmation and will no longer receive messages unless you re-opt in.
            </li>
            <li>
              <strong>Help:</strong> Reply <strong>HELP</strong> for assistance, or contact us
              at{" "}
              <a
                href="mailto:support@coolmorelogistics.com"
                className="text-brand-accent hover:underline"
              >
                support@coolmorelogistics.com
              </a>{" "}
              or{" "}
              <a href="tel:901-300-0240" className="text-brand-accent hover:underline">
                901-300-0240
              </a>
              .
            </li>
            <li>
              <strong>No Third-Party Sharing:</strong> We will not sell, rent, or share your
              opted-in phone number or any information collected through our SMS program with
              third parties or affiliates for marketing purposes.
            </li>
            <li>
              <strong>Supported Carriers:</strong> Our SMS program is supported by major U.S.
              carriers. Carriers are not responsible for delayed or undelivered messages.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-4">
            Intellectual Property
          </h2>
          <p className="text-gray-600 leading-relaxed">
            All content on this Site — including text, graphics, logos, and design — is the
            property of Coolmore Logistics and is protected by applicable intellectual
            property laws. You may not reproduce, distribute, or create derivative works from
            any content on this Site without our prior written consent.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-4">
            Limitation of Liability
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To the fullest extent permitted by law, Coolmore Logistics shall not be liable for
            any indirect, incidental, special, consequential, or punitive damages arising out
            of or related to your use of the Site or our services.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-4">
            Disclaimer
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our Site and services are provided on an &quot;as is&quot; and &quot;as available&quot; basis. We
            make no warranties, expressed or implied, regarding the operation of the Site or
            the accuracy of the information provided.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-4">
            Governing Law
          </h2>
          <p className="text-gray-600 leading-relaxed">
            These Terms shall be governed by and construed in accordance with the laws of the
            State of Tennessee, without regard to its conflict of law principles.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-4">
            Changes to These Terms
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to update or modify these Terms at any time. Changes will be
            posted on this page with an updated effective date. Continued use of the Site
            after changes constitutes your acceptance of the revised Terms.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions about these Terms, please contact us:
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
