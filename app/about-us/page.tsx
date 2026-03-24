import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Coolmore Logistics — a Memphis-based freight brokerage built on trust, transparency, and servant leadership.",
};

const values = [
  {
    title: "Results-Driven",
    description:
      "The job has to get done. We do this through a direct, no-BS approach — when a challenge arises, we will work through it with you in a direct and clear manner.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Servant Leadership",
    description:
      "Our servant-leadership approach enables us to support our team and our partners so that we are all successful together.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Long-Term Relationships",
    description:
      "We know that there is more to each of us than you see in a single interaction. Our goal is to build long-term relationships with our Shippers and Carriers.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Technology-Forward",
    description:
      "We've invested in the technology that allows us to seamlessly integrate as your freight partner with real-time tracking, EDI, and digital paperwork.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl text-brand-accent font-medium">
            Our mission is to earn your trust one load at a time.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-6">Who We Are</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            We have a results-driven culture because the job has to get done. At Coolmore
            Logistics we do this through a direct, no-BS approach &mdash; when a challenge
            arises, we will work through it with you in a direct and clear manner. Our
            servant-leadership approach enables us to support our team and our partners so
            that we are all successful together.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We also know that there is more to each of us than you see in a single
            interaction. Our goal is to build long-term relationships with our Shippers and
            Carriers and have invested in the technology that allows us to seamlessly
            integrate as your freight partner.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-14">What Drives Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="card flex gap-5">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-brand-accent/10 text-brand-accent flex items-center justify-center">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy text-white section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
          <p className="text-gray-300 text-lg mb-8">
            Whether you&apos;re a shipper or a carrier, we&apos;re ready to earn your trust.
          </p>
          <Link href="/contact-us" className="btn-primary text-lg px-8 py-4">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
