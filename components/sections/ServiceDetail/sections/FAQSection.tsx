"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";
import type { ServiceFaq } from "@/lib/services/types";

interface FAQSectionProps {
  faqs: ServiceFaq[];
  heading?: string;
}

export default function FAQSection({ faqs, heading = "FAQs" }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-black py-12 lg:py-18 overflow-hidden border-b border-zinc-900/50">
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 bg-primary/10 blur-3xl rounded-full pointer-events-none" />

      <div className="site-container relative z-10 max-w-4xl">
        <SectionHeading title={heading} />

        <div className="space-y-4 lg:w-1/2 md:w-full mx-auto" role="list">
          {faqs.map((item, index) => (
            <div
              key={index}
              role="listitem"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.06]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <h3 className="sr-only">{item.question}</h3>
              <button
                type="button"
                id={`faq-question-${index}`}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                onClick={() => toggle(index)}
                className="relative z-10 w-full flex items-center justify-between gap-4 text-left"
              >
                <span className="text-white font-medium">{item.question}</span>
                <span className="text-primary text-xl transition-transform duration-300 shrink-0" aria-hidden>
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10 mt-4 text-zinc-400 text-sm leading-relaxed"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
