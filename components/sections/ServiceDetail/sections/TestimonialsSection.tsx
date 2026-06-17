"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import type { ServiceTestimonial } from "@/lib/services/types";
import React from "react";

interface TestimonialsSectionProps {
  heading?: string;
  description?: string;
  testimonials: ServiceTestimonial[];
}

const cardVariants = {
  enter: (direction: number) => ({
    rotateY: direction > 0 ? -75 : 75,
    opacity: 0,
    scale: 0.92,
    z: -80,
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] as const },
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
    z: 0,
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: (direction: number) => ({
    rotateY: direction > 0 ? 75 : -75,
    opacity: 0,
    scale: 0.92,
    z: -80,
    transition: { duration: 0.52, ease: [0.4, 0, 0.2, 1] as const },
  }),
};

function TestimonialCard({ item }: { item: ServiceTestimonial }) {
  return (
    <blockquote className="relative p-8 md:p-10 rounded-2xl border border-white/10 bg-white/[0.03] flex flex-col h-full group hover:border-primary/30 hover:bg-white/[0.06] transition-colors duration-300 [backface-visibility:hidden]">
      <p className="relative z-10 text-zinc-300 text-base md:text-lg leading-relaxed mb-8 flex-1 italic">
        &ldquo;{item.quote}&rdquo;
      </p>
      <footer className="relative z-10 pt-6 border-t border-zinc-900">
        <cite className="not-italic">
          <span className="block text-white font-bold">{item.name}</span>
          <span className="block text-zinc-500 text-sm mt-1">{item.position}</span>
        </cite>
      </footer>
    </blockquote>
  );
}

export default function TestimonialsSection({
  heading,
  description,
  testimonials,
}: TestimonialsSectionProps) {
  const [[currentIndex, direction], setSlide] = useState<[number, number]>([0, 0]);
  const [slideHeight, setSlideHeight] = useState(0);
  const measureRef = useRef<HTMLDivElement>(null);
  const hasMultiple = testimonials.length > 1;

  useLayoutEffect(() => {
    const updateHeight = () => {
      if (!measureRef.current) return;
      const heights = Array.from(
        measureRef.current.querySelectorAll("[data-testimonial-measure]")
      ).map((el) => el.getBoundingClientRect().height);
      if (heights.length > 0) {
        setSlideHeight(Math.max(...heights));
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [testimonials]);

  const goTo = (index: number) => {
    if (index === currentIndex) return;
    const nextDirection = index > currentIndex ? 1 : -1;
    setSlide([index, nextDirection]);
  };

  const goNext = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    setSlide([nextIndex, 1]);
  };

  const goPrev = () => {
    const nextIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    setSlide([nextIndex, -1]);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="relative bg-black py-12 lg:py-18 border-b border-zinc-900/50 overflow-hidden">
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 bg-primary/10 blur-3xl rounded-full pointer-events-none" />

      <div className="site-container relative z-10">
        <SectionHeading title={heading} description={description} />

        <div className="relative max-w-3xl mx-auto">
          <div
            ref={measureRef}
            aria-hidden
            className="pointer-events-none invisible absolute inset-x-0 top-0"
          >
            {testimonials.map((item, index) => (
              <div key={`measure-${item.name}-${index}`} data-testimonial-measure>
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>

          <div
            className="relative [perspective:1200px]"
            style={{
              height: slideHeight > 0 ? slideHeight : undefined,
              minHeight: slideHeight > 0 ? undefined : 280,
              transformStyle: "preserve-3d",
            }}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={`${current.name}-${currentIndex}`}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 w-full [transform-style:preserve-3d]"
              >
                <TestimonialCard item={current} />
              </motion.div>
            </AnimatePresence>
          </div>

          {hasMultiple && (
            <div className="mt-8 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-colors hover:border-primary/40 hover:bg-primary/10"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((item, index) => (
                  <button
                    key={`${item.name}-${index}`}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-current={index === currentIndex ? "true" : undefined}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-primary"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-colors hover:border-primary/40 hover:bg-primary/10"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
