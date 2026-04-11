"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const toPlainText = (blocks = []) => {
  if (typeof blocks === 'string') return blocks;
  return blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return '';
      }
      return block.children.map(child => child.text).join('');
    })
    .filter(Boolean)
    .join(' ');
};

export default function JobCards({ jobs = [] }) {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-black border-b border-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">Current Job Openings</h2>
          <p className="text-zinc-400 mt-4 max-w-2xl text-sm md:text-base">
            Explore exciting roles at Mahraj Technologies and become part of our growing, innovative digital team today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-zinc-900/40 border border-zinc-800 hover:border-[#E4242F]/50 transition-all duration-300 rounded-xl p-6 group cursor-pointer flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#E4242F]/10 text-[#E4242F] text-xs font-semibold tracking-wide uppercase border border-[#E4242F]/20">
                  {job.location || 'Remote'}
                </div>
                {job.type && (
                   <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                     {job.type}
                   </div>
                )}
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#E4242F] transition-colors">
                {job.title}
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                {toPlainText(job.description) || 'Technical detailed role within our engineering hub.'}
              </p>

              <div className="mt-auto pt-4 border-t border-zinc-800/50">
                <Link 
                  href={`/careers/apply?job=${encodeURIComponent(job.title)}`}
                  className="inline-flex items-center text-sm font-semibold text-white group-hover:text-[#E4242F] transition-colors"
                >
                  Apply Now
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
          
          {jobs.length === 0 && (
            <div className="col-span-full py-20 text-center border border-zinc-900 rounded-xl">
               <p className="text-zinc-500 font-bold uppercase tracking-[0.2em]">No open positions at this node.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
