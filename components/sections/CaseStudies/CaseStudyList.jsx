"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import cs1 from '@/public/casestudy-1.png';
import cs2 from '@/public/casestudy-2.png';
import cs3 from '@/public/casestudy-3.png';

const projects = [
  {
    id: "01",
    category: "Case Study 01",
    year: "2023",
    title: "E-Commerce Growth System",
    problem: "The client struggled with low website traffic, poor conversions, and inconsistent lead generation, resulting in weak online sales performance.",
    solution: "We implemented SEO optimization, targeted digital marketing campaigns, and a structured sales funnel that increased traffic by 68% and conversions by 42%.",
    outcome: "68% Increase in Website Traffic. 42% Boost in Conversion Rate.",
    image: cs1,
    imgTitle: "E-Commerce Growth System"
  },
  {
    id: "02",
    category: "Case Study 02",
    year: "2023",
    title: "Local Business Lead Expansion",
    problem: "The business had minimal online visibility, low-quality leads, and inefficient customer acquisition strategies, limiting consistent monthly revenue growth opportunities significantly.",
    solution: "We built a lead generation system using SEO, landing pages, and paid campaigns, resulting in 3x more qualified leads within months.",
    outcome: "3x Growth in Qualified Leads. 55% Improvement in Lead Quality",
    image: cs2,
    imgTitle: "Local Business Lead Expansion"
  },
  {
    id: "03",
    category: "Case Study 03",
    year: "2023",
    title: "SaaS Platform User Growth",
    problem: "The SaaS platform faced high bounce rates, unclear UI structure, and very low trial sign-ups despite having a strong market product.",
    solution: "We redesigned UX with conversion-focused wireframes, A/B tested onboarding flows, and optimized interactions to boost engagement and retention effectively.",
    outcome: "60% Increase in User Engagement. 48% Higher Trial Sign-ups",
    image: cs3,
    imgTitle: "SaaS Platform User Growth"
  }
];

const CaseStudyRow = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24 py-16 lg:py-24 border-b border-zinc-900/50 last:border-0`}>

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
            title={project.imgTitle}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
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
          <span className="text-primary  text-[10px] font-bold uppercase transition-colors hover:text-white cursor-default">
            {project.category}
          </span>
          <div className="w-8 h-[1px] bg-zinc-800" />
          <span className="text-zinc-600  text-[10px]">
            {project.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-white text-3xl lg:text-5xl font-black uppercase leading-none mb-12">
          {project.title}
        </h3>

        {/* Breakdown Sections */}
        <div className="space-y-12">
          <div>
            <h4 className="text-primary  text-[13px] uppercase font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-[1px] bg-primary" />
              PROBLEM
            </h4>
            <p className="text-zinc-400  text-base lg:text-lg leading-relaxed max-w-xl">
              {project.problem}
            </p>
          </div>

          <div>
            <h4 className="text-primary  text-[13px] uppercase font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-[1px] bg-primary" />
              SOLUTION
            </h4>
            <p className="text-zinc-400  text-base lg:text-lg leading-relaxed max-w-xl">
              {project.solution}
            </p>
          </div>

          <div className="pt-10 border-t border-zinc-900">
            <h4 className="text-primary  text-[13px] uppercase font-bold mb-6">
              OUTCOME
            </h4>
            <div className="text-white font-black text-2xl leading-tight">
              {project.outcome.split('. ').map((stat, i) => (
                <span key={i} className="block">
                  {stat.match(/\d+%|\d+x|\d+\.\d+%|[+\-]|Zero/i) ? (
                    <span>
                      {stat.split(' ').map((word, j) => (
                        <span key={j} className={word.match(/\d+%|\d+x|\d+\.\d+%|[+\-]|Zero/i) ? "text-primary" : ""}>
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
    <section className="bg-black py-16 lg:py-24">
      <div className="site-container">
        {projects.map((project, index) => (
          <CaseStudyRow key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
