"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "Coolmore Logistics has been a game-changer for our supply chain. Their team is responsive, reliable, and always goes the extra mile to make sure our freight gets there on time.",
    name: "Customer Name",
    title: "Logistics Manager",
    company: "Company Name",
  },
  {
    quote:
      "We've worked with a lot of brokers, but Coolmore stands out. They actually care about building a real partnership, not just moving one load and disappearing.",
    name: "Customer Name",
    title: "VP of Operations",
    company: "Company Name",
  },
  {
    quote:
      "Fair pricing, great communication, and they treat our drivers right. That's why we keep coming back. Coolmore is the kind of broker the industry needs more of.",
    name: "Customer Name",
    title: "Fleet Manager",
    company: "Company Name",
  },
];

function FadeInOnScroll({
  children,
  className,
  delay = 0,
  duration = 0.6,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
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
      },
      { rootMargin: "-40px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in fade-in-up ${className ?? ""}`}
      style={{ transitionDuration: `${duration}s`, transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <FadeInOnScroll className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            What Our Partners Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We let our relationships speak for themselves.
          </p>
        </FadeInOnScroll>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <FadeInOnScroll key={i} delay={i * 0.15} duration={0.5}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-brand-accent relative h-full">
                <svg
                  className="w-10 h-10 text-brand-accent/20 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  &quot;{t.quote}&quot;
                </p>
                <div>
                  <p className="font-bold text-brand-navy">{t.name}</p>
                  <p className="text-sm text-gray-500">
                    {t.title}, {t.company}
                  </p>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
