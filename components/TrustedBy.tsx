"use client";

import { useEffect, useRef } from "react";

const companies = [
  "Partner 1",
  "Partner 2",
  "Partner 3",
  "Partner 4",
  "Partner 5",
  "Partner 6",
];

export default function TrustedBy() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("fade-in-visible");
          observer.unobserve(el);
        }
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className="fade-in fade-in-none"
          style={{ transitionDuration: "0.8s" }}
        >
          <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest mb-8">
            Trusted By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {companies.map((company) => (
              <span
                key={company}
                className="text-xl md:text-2xl font-bold text-gray-300 hover:text-gray-500 transition-colors"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
