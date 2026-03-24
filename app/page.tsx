"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    title: "Full Truck Load",
    description: "Reefer, Dry Van, Flatbed, and Over Dimensional — we cover it all.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 17h.01M12 17h.01M16 17h.01M3 13h18M3 17h18M5 9V5a2 2 0 012-2h10a2 2 0 012 2v4M3 13l2-4h14l2 4" />
      </svg>
    ),
  },
  {
    title: "LTL",
    description: "Cost-effective less-than-truckload solutions for smaller shipments.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Expedited",
    description: "Time-critical freight delivered fast with dedicated capacity.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

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

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-navy text-white min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-dark to-brand-accent/30" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Partners, Your Freight.{" "}
            <span className="bg-gradient-to-r from-brand-accent to-blue-400 bg-clip-text text-transparent">
              Delivered Together.
            </span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Reliable capacity, fair pricing, and dependable support for every shipment.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact-us" className="btn-primary text-lg px-8 py-4">
              Get a Quote
            </Link>
            <Link href="/services" className="btn-outline text-lg px-8 py-4">
              Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">About Us</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              We have a results-driven culture because the job has to get done. At Coolmore
              Logistics we do this through a direct, no-BS approach &mdash; when a challenge
              arises, we will work through it with you in a direct and clear manner. Our
              servant-leadership approach enables us to support our team and our partners so
              that we are all successful together.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              href="/about-us"
              className="text-brand-accent font-semibold hover:underline inline-flex items-center gap-2"
            >
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Our Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Coolmore Logistics provides reliable capacity, fair pricing, and dependable
                support. Let us provide your brokerage solution regardless of your service
                required.
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.15}>
                <div className="card text-center group hover:scale-[1.02] transition-transform duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-brand-accent/10 text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="text-center mt-10">
              <Link href="/contact-us" className="btn-primary">
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Shippers & Carriers */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <FadeIn direction="left">
            <div className="card border-t-4 border-brand-accent">
              <h2 className="text-2xl font-bold text-brand-navy mb-2">Our Shippers</h2>
              <p className="text-brand-accent font-medium mb-4">
                Focus on your business, leave the logistics to us
              </p>
              <p className="text-gray-600 mb-6">
                We understand that we are successful when you are able to focus on your
                business instead of logistics. We provide dedicated logistics professionals
                who are invested in your success.
              </p>
              <Link
                href="/shippers"
                className="text-brand-accent font-semibold hover:underline inline-flex items-center gap-2"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <div className="card border-t-4 border-brand-accent">
              <h2 className="text-2xl font-bold text-brand-navy mb-2">Our Carriers</h2>
              <p className="text-brand-accent font-medium mb-4">
                Carrier focused &mdash; build long-term relationships
              </p>
              <p className="text-gray-600 mb-6">
                We strive to build long-term relationships with our carrier partners. We are
                not transactional. We know that trust takes time to build, and we want to
                earn yours.
              </p>
              <Link
                href="/carriers"
                className="text-brand-accent font-semibold hover:underline inline-flex items-center gap-2"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy text-center mb-12">FAQs</h2>
          </FadeIn>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeIn key={faq.q} delay={i * 0.1}>
                <details className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-brand-navy hover:bg-gray-50 transition-colors">
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
                  <div className="px-6 pb-6 text-gray-600">{faq.a}</div>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy text-white section-padding">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Let us show you what a real logistics partnership looks like.
            </p>
            <Link href="/contact-us" className="btn-primary text-lg px-8 py-4">
              Contact Us Today
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
