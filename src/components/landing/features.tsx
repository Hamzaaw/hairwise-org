"use client";

import { motion } from "framer-motion";
import { Shield, ShoppingBag, CalendarCheck, Zap, LineChart, MessageSquare } from "lucide-react";

const features = [
  {
    icon: LineChart,
    title: "Norwood Scale Assessment",
    description: "Clinical hair loss staging using the Norwood-Hamilton scale. Track your position and monitor changes over time.",
    size: "large" as const,
  },
  {
    icon: Shield,
    title: "Secure Data Handling",
    description: "Photos encrypted in transit, never sold to third parties. Request deletion anytime.",
    size: "medium" as const,
  },
  {
    icon: CalendarCheck,
    title: "Personalized Routines",
    description: "Custom care plans based on your analysis. Science-backed product recommendations.",
    size: "medium" as const,
  },
  {
    icon: Zap,
    title: "Instant Analysis",
    description: "Results in under 3 seconds with detailed metric breakdowns.",
    size: "small" as const,
  },
  {
    icon: MessageSquare,
    title: "AI Consultation",
    description: "Chat with our AI for personalized advice and answers.",
    size: "small" as const,
  },
  {
    icon: ShoppingBag,
    title: "Product Matching",
    description: "Curated recommendations from trusted brands.",
    size: "small" as const,
  },
];

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-snow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ink">
            Built for Results
          </h2>
          <p className="mt-4 text-lg text-graphite max-w-2xl mx-auto">
            Professional-grade tools designed for men who want data, not guesswork.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`bg-white rounded-2xl p-6 border border-mist hover:shadow-lg transition-all hover:-translate-y-1 ${
                feature.size === "large"
                  ? "md:col-span-2 lg:col-span-1 lg:row-span-2"
                  : ""
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-4 ${
                  feature.size === "large" ? "w-14 h-14" : ""
                }`}
              >
                <feature.icon
                  className={`text-teal ${
                    feature.size === "large" ? "w-7 h-7" : "w-6 h-6"
                  }`}
                />
              </div>
              <h3
                className={`font-semibold text-ink mb-2 ${
                  feature.size === "large" ? "text-xl" : "text-lg"
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-graphite ${
                  feature.size === "large" ? "text-base" : "text-sm"
                }`}
              >
                {feature.description}
              </p>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
