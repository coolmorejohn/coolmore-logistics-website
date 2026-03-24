import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about Coolmore Logistics freight brokerage services.",
};

const faqs = [
  {
    q: "What types of freight can Coolmore Logistics handle?",
    a: "Coolmore Logistics can manage a wide variety of freight, including temperature-controlled, high-value, over-dimensional, LTL and expedited. Contact us with any request and we'll work with you to find a solution.",
  },
  {
    q: "Is Coolmore Logistics adding new carriers?",
    a: "Coolmore Logistics is always growing its carrier network. Visit our Carriers page to start the onboarding process today.",
  },
  {
    q: "I have a small volume of loads to cover, can Coolmore Logistics help?",
    a: "For sure. Coolmore Logistics strives to be your partner in solving your logistics needs, whether that be one load or thousands.",
  },
];

export default function FaqsPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">FAQs</h1>
          <p className="text-lg md:text-xl text-gray-300">
            Common questions about working with Coolmore Logistics.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-brand-navy text-lg hover:bg-gray-50 transition-colors">
                {faq.q}
                <svg
                  className="w-5 h-5 shrink-0 ml-4 text-gray-400 group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 text-lg leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">
            Have Another Question?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            We&apos;d love to hear from you. Reach out and we&apos;ll get back to you right away.
          </p>
          <Link href="/contact-us" className="btn-primary text-lg px-8 py-4">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
