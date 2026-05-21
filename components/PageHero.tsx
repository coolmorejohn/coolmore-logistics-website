"use client";

import type { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle: string | ReactNode;
  subtitleClassName?: string;
}

export default function PageHero({ title, subtitle, subtitleClassName }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1
          className="text-4xl md:text-5xl font-bold mb-6 hero-animate"
          style={{ animationDuration: "0.7s" }}
        >
          {title}
        </h1>
        <p
          className={`hero-animate ${subtitleClassName ?? "text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"}`}
          style={{ animationDuration: "0.7s", animationDelay: "0.2s" }}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
}
