"use client";

import React from 'react';
import { motion } from 'framer-motion';

const jobs = [
  {
    id: 1,
    title: "Full Stack Developer",
    location: "IN-House",
    description: "Join our engineering team to architect and build scalable web applications using modern technologies like Next.js, React, and Node.js.",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    location: "IN-House",
    description: "Shape the visual identity and user experience of our digital products. Create intuitive, responsive, and stunning interfaces.",
  },
  {
    id: 3,
    title: "HR Professional",
    location: "IN-House",
    description: "Help us discover top talent and grow our phenomenal team while ensuring a thriving, supportive company culture.",
  }
];

export default function JobCards() {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-black border-b border-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">Open Positions</h2>
          <p className="text-zinc-400 mt-4 max-w-2xl text-sm md:text-base">
            Discover your next career move. We are actively looking for passionate individuals to join our mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-zinc-900/40 border border-zinc-800 hover:border-[#E4242F]/50 transition-all duration-300 rounded-xl p-6 group cursor-pointer flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#E4242F]/10 text-[#E4242F] text-xs font-semibold tracking-wide uppercase border border-[#E4242F]/20">
                  {job.location}
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#E4242F] transition-colors">
                {job.title}
              </h3>
              
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                {job.description}
              </p>
              
              <div className="mt-auto pt-4 border-t border-zinc-800/50">
                <a href="#apply-form" className="inline-flex items-center text-sm font-semibold text-white group-hover:text-[#E4242F] transition-colors">
                  Apply Now 
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
