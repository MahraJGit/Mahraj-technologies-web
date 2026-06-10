"use client";

import { motion } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";
import type { ServiceTestimonial } from "@/lib/services/types";
import React from "react";

interface TestimonialsSectionProps {
  heading?: string;
  description?: string;
  testimonials: ServiceTestimonial[];
}

export default function TestimonialsSection({
  heading,
  description,
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="relative bg-black py-12 lg:py-18 border-b border-zinc-900/50 overflow-hidden">
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 bg-primary/10 blur-3xl rounded-full pointer-events-none" />

      <div className="site-container relative z-10">
        <SectionHeading title={heading} description={description} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <blockquote
              key={`${item.name}-${index}`}
              className="relative p-8 rounded-2xl border border-white/10 bg-white/[0.03] flex flex-col h-full group hover:border-primary/30 hover:bg-white/[0.06] transition-all duration-300"
            >
              <p className="relative z-10 text-zinc-300 text-base leading-relaxed mb-8 flex-1 italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="relative z-10 pt-6 border-t border-zinc-900">
                <cite className="not-italic">
                  <span className="block text-white font-bold">{item.name}</span>
                  <span className="block text-zinc-500 text-sm mt-1">{item.position}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
