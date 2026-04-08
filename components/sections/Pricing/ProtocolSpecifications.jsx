"use client";

import React from 'react';
import { motion } from 'framer-motion';

const specifications = [
  {
    feature: "Development Cycles",
    dedicated: "Continuous",
    project: "Milestone-driven",
    maintenance: "Ad-hoc"
  },
  {
    feature: "Code Ownership",
    dedicated: "Total",
    project: "Total (on delivery)",
    maintenance: "Total"
  },
  {
    feature: "Scalability Matrix",
    dedicated: "Instant",
    project: "Phase-locked",
    maintenance: "Fixed"
  },
  {
    feature: "Support Response",
    dedicated: "< 1 Hour",
    project: "< 4 Hours",
    maintenance: "< 2 Hours"
  }
];

export default function ProtocolSpecifications() {
  return (
    <section className="py-24 bg-[#050505] border-t border-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
            Protocol <br />
            <span className="text-zinc-600">Specifications</span>
          </h2>
        </div>

        <div className="overflow-x-auto lg:overflow-x-visible">
          <table className="w-full text-left border-collapse min-w-[800px] lg:min-w-0">
            <thead>
              <tr className="border-b border-zinc-900 pb-12">
                <th className="py-8 px-4 text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em] w-1/4">Feature Set</th>
                <th className="py-8 px-4 text-sm font-black text-white uppercase tracking-widest w-1/4">Dedicated</th>
                <th className="py-8 px-4 text-sm font-black text-primary uppercase tracking-widest w-1/4">Project-Based</th>
                <th className="py-8 px-4 text-sm font-black text-white uppercase tracking-widest w-1/4">Maintenance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-900/50">
              {specifications.map((spec, index) => (
                <motion.tr 
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1 
                  }}
                  className="group hover:bg-zinc-950/40 transition-colors"
                >
                  <td className="py-10 px-4">
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest group-hover:text-white transition-colors">
                      {spec.feature}
                    </span>
                  </td>
                  <td className="py-10 px-4">
                    <span className="text-sm font-bold text-white uppercase opacity-70 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {spec.dedicated}
                    </span>
                  </td>
                  <td className="py-10 px-4">
                    <span className="text-sm font-black text-white uppercase whitespace-nowrap">
                      {spec.project}
                    </span>
                  </td>
                  <td className="py-10 px-4">
                    <span className="text-sm font-bold text-white opacity-70 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {spec.maintenance}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
