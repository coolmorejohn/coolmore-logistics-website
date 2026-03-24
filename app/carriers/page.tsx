import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Carriers",
  description:
    "Partner with Coolmore Logistics — we build long-term relationships, not one-and-done transactions.",
};

const sections = [
  {
    title: "Seamless Partner",
    body: "Our goal is to seamlessly partner with you to deliver the quality of services that drives the growth of our businesses together. We've invested in the technology to make this as streamlined as possible and provide transparency to our partners.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    title: "Carrier Focused — Build Long-Term Relationships",
    body: "We strive to build long-term relationships with our carrier partners. We are not transactional. We know that trust takes time to build, and we want to earn yours.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Your Success Drives Our Success",
    body: "We understand the fundamental truth that we cannot be successful without your success. We will do everything we can to support your drivers and your business as we partner together.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function CarriersPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Carriers</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            We will do everything we can to support your drivers and your business as we
            partner together.
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
          <h2 className="text-3xl font-bold mb-4">Join Our Carrier Network</h2>
          <p className="text-gray-300 text-lg mb-8">
            We&apos;re always looking to grow our network with reliable carrier partners.
          </p>
          <Link href="/contact-us" className="btn-primary text-lg px-8 py-4">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
