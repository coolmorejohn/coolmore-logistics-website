"use client";

import { motion } from "framer-motion";

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

export default function Testimonials() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            What Our Partners Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We let our relationships speak for themselves.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-brand-accent relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <svg
                className="w-10 h-10 text-brand-accent/20 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
