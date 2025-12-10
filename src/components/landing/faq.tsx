"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this a medical diagnosis?",
    answer:
      "No. HairWise+ is a cosmetic utility for informational purposes only. Our analysis provides insights about hair density and care recommendations, but is not a substitute for professional medical advice. Consult a dermatologist for medical concerns.",
  },
  {
    question: "Is my photo data private?",
    answer:
      "Yes, we take privacy seriously. Your photos are uploaded to our secure servers for AI analysis and are encrypted in transit. We do not sell your photos to third parties. You can request deletion of your data at any time through our Support page.",
  },
  {
    question: "How accurate is the hair analysis?",
    answer:
      "Our AI provides estimates based on visual analysis. Results may vary based on image quality and lighting. We recommend taking photos in good, consistent lighting for best results. This is not a medical diagnosis.",
  },
  {
    question: "What devices are supported?",
    answer:
      "HairWise+ is available on iOS (iPhone 8 and later) and Android (8.0+). Devices with at least 3GB RAM are recommended for optimal AI processing performance.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes. Cancel anytime through your device's app store settings. Premium features remain active until the end of your billing period. No questions asked.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ink">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-graphite">
            Straight answers to common questions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-mist">
                <AccordionTrigger className="text-left text-ink hover:text-teal">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-graphite">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
