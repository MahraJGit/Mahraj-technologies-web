"use client";

import SectionHeading from "../shared/SectionHeading";
import type { ProcessStep } from "@/lib/services/types";

interface ProcessSectionProps {
  heading?: string;
  description?: string;
  steps: ProcessStep[];
}

export default function ProcessSection({
  heading = "Our Process",
  description,
  steps,
}: ProcessSectionProps) {
  return (
    <section className="bg-black py-12 lg:py-18 border-b border-zinc-900/50">
      <div className="site-container">
        <SectionHeading title={heading} description={description} align="left" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div key={step.step} className="relative pl-6 border-l border-zinc-800 lg:border-l-0 lg:pl-0 lg:pt-0 group">
              <div className="hidden md:block absolute top-6 left-0 w-50 h-[1px] bg-primary z-0 group-hover:w-75 transition-all duration-500" />
              <div className="bg-primary w-16 h-16 flex items-center justify-center rounded-2xl">
                <span className="text-white text-[16px] font-bold uppercase tracking-widest">
                  {step.step}
                </span>
              </div>
              <h3 className="text-white text-2xl lg:text-3xl font-black uppercase leading-tight mt-4 mb-4">
                {step.title}
              </h3>
              <p className="text-zinc-400 text-sm lg:text-base leading-relaxed max-w-[300px]">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="lg:hidden mt-8 w-16 h-[1px] bg-zinc-800" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
