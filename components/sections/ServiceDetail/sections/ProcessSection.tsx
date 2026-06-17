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
            <div key={step.step} className="relative border border-primary/20 p-6 rounded-lg flex flex-col items-center justify-center">
              <div>
                <span className="text-primary/70 font-bebas-neue text-[36px] font-bold uppercase tracking-widest">
                  {step.step}
                </span>
              </div>
              <h3 className="text-primary text-sm font-black uppercase tracking-widest mt-4 mb-4">
                {step.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
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
