"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    title: "Full Truck Load",
    subtitle: "Reefer, Dry Van, Flatbed, Over Dimensional",
    description:
      "Whether it's temperature-controlled produce, dry goods, steel on a flatbed, or an oversized piece of equipment, we have the carrier network and expertise to move your full truckload freight safely and on time.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 17h.01M12 17h.01M16 17h.01M3 13h18M3 17h18M5 9V5a2 2 0 012-2h10a2 2 0 012 2v4M3 13l2-4h14l2 4" />
      </svg>
    ),
    modes: ["Reefer", "Dry Van", "Flatbed", "Over Dimensional"],
  },
  {
    title: "LTL",
    subtitle: "Less-Than-Truckload",
    description:
      "Don't need a full truck? Our LTL solutions provide cost-effective options for smaller shipments, with the same level of service and reliability you'd expect from a dedicated load.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    modes: [],
  },
  {
    title: "Expedited",
    subtitle: "Time-Critical Freight",
    description:
      "When time is of the essence, our expedited service delivers. Dedicated capacity, real-time tracking, and proactive communication to ensure your freight arrives when it absolutely has to.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    modes: [],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Services
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Coolmore Logistics provides reliable capacity, fair pricing, and dependable
            support. Let us provide your brokerage solution regardless of your service
            required.
          </motion.p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          {services.map((service, i) => (
            <FadeIn key={service.title} direction={i % 2 === 0 ? "left" : "right"}>
              <div
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="shrink-0 w-24 h-24 rounded-2xl bg-brand-accent/10 text-brand-accent flex items-center justify-center">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-1">
                    {service.title}
                  </h2>
                  <p className="text-brand-accent font-medium mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    {service.description}
                  </p>
                  {service.modes.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {service.modes.map((mode) => (
                        <span
                          key={mode}
                          className="px-3 py-1 bg-brand-accent/10 text-brand-accent text-sm font-medium rounded-full"
                        >
                          {mode}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy text-white section-padding">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Quote?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Tell us about your freight and we&apos;ll put together a competitive solution.
            </p>
            <Link href="/contact-us" className="btn-primary text-lg px-8 py-4">
              Contact Us
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
