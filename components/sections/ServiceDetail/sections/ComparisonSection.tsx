"use client";

import { motion } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";
import type { ServiceComparison } from "@/lib/services/types";
import React from "react";

interface ComparisonSectionProps {
  comparison: ServiceComparison;
}

export default function ComparisonSection({ comparison }: ComparisonSectionProps) {
  return (
    <section className="bg-black py-12 lg:py-18 border-b border-zinc-900/50">
      <div className="site-container">
        {comparison.heading && (
          <SectionHeading
            className="max-w-[700px]"
            title={comparison.heading}
            description={comparison.description}
          />
        )}

        <div className="overflow-x-auto rounded-2xl border border-zinc-900">
          <table className="min-w-[800px] w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-900 bg-zinc-950/80">
                <th className="p-6 text-[10px] font-bold uppercase text-zinc-500 w-1/4">
                  Feature
                </th>
                <th className="p-6 text-sm font-black uppercase text-primary w-[37.5%]">
                  {comparison.columnDigital}
                </th>
                <th className="p-6 text-sm font-black uppercase text-zinc-400 w-[37.5%]">
                  {comparison.columnTraditional}
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row, index) => (
                <tr
                  key={row.feature}
                  className={`border-b border-zinc-900/80 ${
                    index % 2 === 0 ? "bg-black" : "bg-zinc-950/30"
                  }`}
                >
                  <td className="p-6 text-white font-medium text-sm">{row.feature}</td>
                  <td className="p-6 text-zinc-400 text-sm leading-relaxed">{row.digital}</td>
                  <td className="p-6 text-zinc-500 text-sm leading-relaxed">{row.traditional}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <div className="md:hidden space-y-6">
          {comparison.rows.map((row, index) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 space-y-4"
            >
              <h3 className="text-white font-bold uppercase text-sm">{row.feature}</h3>
              <div>
                <span className="text-primary text-[10px] font-bold uppercase block mb-2">
                  {comparison.columnDigital}
                </span>
                <p className="text-zinc-400 text-sm leading-relaxed">{row.digital}</p>
              </div>
              <div className="pt-4 border-t border-zinc-900">
                <span className="text-zinc-500 text-[10px] font-bold uppercase block mb-2">
                  {comparison.columnTraditional}
                </span>
                <p className="text-zinc-500 text-sm leading-relaxed">{row.traditional}</p>
              </div>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
