"use client";

import { motion } from "framer-motion";
import { Camera, Cpu, Sparkles } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Scan",
    description: "Take a quick photo using our guided AI camera. Optimal angles and lighting are automatically detected for clinical-grade accuracy.",
    icon: Camera,
    imagePosition: "left" as const,
    screenshot: "/screenshot-scan.png",
  },
  {
    number: "02",
    title: "Analyze",
    description: "Our engine assesses density, Norwood stage, and scalp condition. Advanced algorithms deliver results in seconds with precision metrics.",
    icon: Cpu,
    imagePosition: "right" as const,
    screenshot: "/screenshot-dashboard.png",
  },
  {
    number: "03",
    title: "Improve",
    description: "Receive a personalized daily routine with targeted products. Track your progress weekly and see measurable improvements over time.",
    icon: Sparkles,
    imagePosition: "left" as const,
    screenshot: "/screenshot-routine.png",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ink">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-graphite max-w-2xl mx-auto">
            Three steps to take control of your hair health. No guesswork, just data.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {steps.map((step) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`flex flex-col ${
                step.imagePosition === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-8 lg:gap-16 items-center`}
            >
              <div className="flex-1 w-full">
                {step.screenshot ? (
                  <div className="flex justify-center">
                    <div className="w-[200px] md:w-[240px] bg-ink rounded-[2rem] p-1.5 shadow-xl">
                      <div className="bg-white rounded-[1.5rem] overflow-hidden">
                        <Image
                          src={step.screenshot}
                          alt={`HairWise+ ${step.title} screen`}
                          width={430}
                          height={932}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-[4/3] bg-gradient-to-br from-cloud to-snow rounded-2xl flex items-center justify-center border border-mist overflow-hidden">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-teal/10 flex items-center justify-center">
                        <step.icon className="w-10 h-10 md:w-12 md:h-12 text-teal" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[120px] md:text-[180px] font-bold text-slate-blue/5">
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 text-teal font-semibold mb-4">
                  <span className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center text-sm">
                    {step.number}
                  </span>
                  <span className="text-sm uppercase tracking-wider">Step {step.number}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-ink mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-graphite leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
