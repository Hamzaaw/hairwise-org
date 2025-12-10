"use client";

import { motion } from "framer-motion";
import { TrendingDown, HelpCircle, Clock } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Early Thinning Detection",
    description:
      "Notice more hair in your brush? Early detection is critical. Our AI identifies density changes before they become visible.",
  },
  {
    icon: HelpCircle,
    title: "Generic Products Fail",
    description:
      "One-size-fits-all products waste your money. Your hair type needs specific, targeted ingredients to see real results.",
  },
  {
    icon: Clock,
    title: "No Consistent Routine",
    description:
      "Without data-driven tracking, even premium products fail to deliver. Measure what matters, improve what you track.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-16 md:py-24 bg-snow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ink">
            The Problem with Hair Care Today
          </h2>
          <p className="mt-4 text-lg text-graphite max-w-2xl mx-auto">
            Most men discover hair loss too late. Without objective measurement, you&apos;re guessing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-mist hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-blue/10 flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-slate-blue" />
              </div>
              <h3 className="text-xl font-semibold text-ink mb-2">
                {problem.title}
              </h3>
              <p className="text-graphite">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
