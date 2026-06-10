"use client";

import { motion } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";
import type { ServiceCaseStudy } from "@/lib/services/types";
import React from "react";

interface CaseStudiesSectionProps {
  heading?: string;
  caseStudies: ServiceCaseStudy[];
}

export default function CaseStudiesSection({
  heading = "Case Studies",
  caseStudies,
}: CaseStudiesSectionProps) {
  return (
    <section className="bg-black py-12 lg:py-18 border-b border-zinc-900/50">
      <div className="site-container">
        <SectionHeading title={heading} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <article
              key={study.id}
              className="group flex flex-col h-full p-8 border border-zinc-900 bg-zinc-950/50 hover:border-primary/30 transition-colors rounded-lg"
            >
              <span className="text-primary text-[10px] font-bold uppercase mb-4">
                Case Study {study.id}
              </span>
              <h3 className="text-white text-2xl font-black uppercase leading-tight mb-6 ">
                {study.title}
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed mb-8 flex-1">
                {study.overview}
              </p>

              <div className="pt-8 border-t border-zinc-900 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                {study.results.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-4 bg-black border border-zinc-900 rounded-lg group-hover:border-primary/20 transition-colors"
                  >
                    <div className="text-primary font-black text-2xl lg:text-3xl leading-none mb-2">
                      {metric.value}
                    </div>
                    <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-wide">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
