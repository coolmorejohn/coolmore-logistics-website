import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shippers",
  description:
    "Focus on your business, leave the logistics to Coolmore Logistics. Dedicated professionals, real-time tracking, and fair pricing.",
};

const sections = [
  {
    title: "Focus on Your Business, Leave the Logistics to Us",
    body: "We understand that we are successful when you are able to focus on your business instead of logistics. We provide dedicated logistics professionals who are invested in your success and ready to work our carrier network to provide you that peace of mind.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Seamless Partner",
    body: "Our goal is to seamlessly partner with you to deliver confidence and transparency on every load you entrust to us. We have the technology to integrate via EDI, provide real-time tracking of your shipments, handle all paperwork and payments digitally, and the knowledgeable logistics professionals to support you at every step.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    title: "Trust Pricing, Expect Great Service",
    body: "Internally our motto is 'take care of your people and they will take care of you.' We bring this same mindset to how we serve our partners — provide fair pricing and great service — and believe this is a foundation that long-term logistics relationships are built upon.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function ShippersPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Shippers</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            We understand that we are successful when you are able to focus on your
            business instead of logistics.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          {sections.map((section, i) => (
            <div
              key={section.title}
              className={`flex flex-col md:flex-row gap-8 items-start ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="shrink-0 w-20 h-20 rounded-2xl bg-brand-accent/10 text-brand-accent flex items-center justify-center">
                {section.icon}
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-brand-navy mb-4">{section.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{section.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy text-white section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ship With Coolmore</h2>
          <p className="text-gray-300 text-lg mb-8">
            Let us show you what a real logistics partnership looks like.
          </p>
          <Link href="/contact-us" className="btn-primary text-lg px-8 py-4">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
