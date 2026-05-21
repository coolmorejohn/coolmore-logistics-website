"use client";

import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative bg-brand-navy text-white min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-dark to-brand-accent/30" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 hero-animate"
          style={{ animationDuration: "0.8s" }}
        >
          Our Partners, Your Freight.{" "}
          <span className="bg-gradient-to-r from-brand-accent to-blue-400 bg-clip-text text-transparent">
            Delivered Together.
          </span>
        </h1>
        <p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 hero-animate"
          style={{ animationDuration: "0.8s", animationDelay: "0.2s" }}
        >
          Reliable capacity, fair pricing, and dependable support for every shipment.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center hero-animate"
          style={{ animationDuration: "0.8s", animationDelay: "0.4s" }}
        >
          <Link href="/contact-us" className="btn-primary text-lg px-8 py-4">
            Get a Quote
          </Link>
          <Link href="/services" className="btn-outline text-lg px-8 py-4">
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
