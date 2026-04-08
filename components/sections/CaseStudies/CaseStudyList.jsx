"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    id: "01",
    category: "FINTECH",
    year: "2023",
    title: "Global Transaction Core",
    problem: "A legacy banking infrastructure failing to handle 50k concurrent TPS, resulting in 4.2% transaction drop rates during peak hours.",
    solution: "Redeveloped the middleware using a reactive microservices architecture and implemented a custom distributed locking mechanism.",
    outcome: "99.999% Uptime. +340% Capacity Increase.",
    image: "/casestudy1.png"
  },
  {
    id: "02",
    category: "LOGISTICS",
    year: "2023",
    title: "Neural Route Optimizer",
    problem: "Manual dispatching in complex urban environments led to 18% fuel waste and an average of 45-minute delivery delays.",
    solution: "Engineered a real-time AI engine that processes 200+ variables per second to dynamically re-route fleets.",
    outcome: "22% Fuel Reduction. -12min Avg Delivery Time.",
    image: "/casestudy2.png"
  },
  {
    id: "03",
    category: "HEALTH",
    year: "2023",
    title: "Patient Privacy Shield",
    problem: "Strict HIPAA compliance requirements and rising data breach threats made secure medical records sharing inefficient.",
    solution: "Built a zero-trust encrypted ledger for medical data with biometric-gated multi-party authorization.",
    outcome: "Zero Data Breaches. 100% Compliance Audit Pass.",
    image: "/casestudy3.png"
  }
];

const CaseStudyRow = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24 py-20 lg:py-32 border-b border-zinc-900/50 last:border-0`}>

      {/* Image Column */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2"
      >
        <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800/50 group">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </motion.div>

      {/* Content Column */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 flex flex-col justify-center"
      >
        {/* Meta Info */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-primary  text-[10px] tracking-[0.3em] font-bold uppercase transition-colors hover:text-white cursor-default">
            {project.category}
          </span>
          <div className="w-8 h-[1px] bg-zinc-800" />
          <span className="text-zinc-600  text-[10px] tracking-widest">
            {project.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-white text-3xl lg:text-5xl font-black tracking-tight uppercase leading-none mb-12 lg:whitespace-nowrap">
          {project.title}
        </h3>

        {/* Breakdown Sections */}
        <div className="space-y-12">
          <div>
            <h4 className="text-primary  text-[13px] tracking-[0.4em] uppercase font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-[1px] bg-primary" />
              PROBLEM
            </h4>
            <p className="text-zinc-400  text-base lg:text-lg leading-relaxed max-w-xl">
              {project.problem}
            </p>
          </div>

          <div>
            <h4 className="text-primary  text-[13px] tracking-[0.4em] uppercase font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-[1px] bg-primary" />
              SOLUTION
            </h4>
            <p className="text-zinc-400  text-base lg:text-lg leading-relaxed max-w-xl">
              {project.solution}
            </p>
          </div>

          <div className="pt-10 border-t border-zinc-900">
            <h4 className="text-primary  text-[13px] tracking-[0.4em] uppercase font-bold mb-6">
              OUTCOME
            </h4>
            <div className="text-white font-black text-2xl lg:text-4xl tracking-tight leading-tight">
              {project.outcome.split('. ').map((stat, i) => (
                <span key={i} className="block">
                  {stat.includes('+') || stat.includes('-') || stat.includes('Zero') || stat.includes('100%') ? (
                    <span>
                      {stat.split(' ').map((word, j) => (
                        <span key={j} className={word.match(/[+\-]|Zero|100%|99\.999\%/) ? "text-primary ml-1" : ""}>
                          {word}{' '}
                        </span>
                      ))}
                    </span>
                  ) : stat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default function CaseStudyList() {
  return (
    <section className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {projects.map((project, index) => (
          <CaseStudyRow key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
