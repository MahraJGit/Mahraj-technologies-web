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
  const [hoveredRow, setHoveredRow] = React.useState(null);
  const [hoveredCol, setHoveredCol] = React.useState(null);

  const headers = [
    { title: "Feature Set", col: 0 },
    { title: "Dedicated", col: 1 },
    { title: "Project-Based", col: 2 },
    { title: "Maintenance", col: 3 }
  ];

  const handleMouseEnter = (row, col) => {
    setHoveredRow(row);
    setHoveredCol(col);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
    setHoveredCol(null);
  };

  return (
    <section className="py-16 lg:py-24 bg-[#050505] border-t border-zinc-900/50">
      <div className="site-container">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase">
            Service <br />
            <span className="text-zinc-600">Specifications</span>
          </h2>
        </div>

        <div className="overflow-x-auto lg:overflow-x-visible">
          <table className="w-full text-left border-collapse min-w-[800px] lg:min-w-0">
            <thead>
              <tr className="border-b border-zinc-900 pb-12">
                {headers.map((header) => (
                  <th
                    key={header.col}
                    className={`py-8 px-4 font-black uppercase transition-colors duration-300
                      ${header.col === 0 ? 'text-xs' : 'text-base'}
                      ${hoveredCol === header.col ? 'text-white' : 'text-zinc-600'}
                    `}
                  >
                    {header.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-900/50">
              {specifications.map((spec, rIndex) => (
                <motion.tr
                  key={rIndex}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: rIndex * 0.1
                  }}
                  className="transition-colors"
                >
                  <td
                    className="py-10 px-4 cursor-default"
                    onMouseEnter={() => handleMouseEnter(rIndex, 0)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span className={`text-sm font-bold uppercase transition-colors duration-300
                      ${hoveredRow === rIndex ? 'text-white' : 'text-zinc-600'}
                    `}>
                      {spec.feature}
                    </span>
                  </td>
                  <td
                    className="py-10 px-4 cursor-default"
                    onMouseEnter={() => handleMouseEnter(rIndex, 1)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span className={`text-base font-bold uppercase transition-colors duration-300 whitespace-nowrap
                      ${hoveredRow === rIndex && hoveredCol === 1 ? 'text-white' : 'text-zinc-600'}
                    `}>
                      {spec.dedicated}
                    </span>
                  </td>
                  <td
                    className="py-10 px-4 cursor-default"
                    onMouseEnter={() => handleMouseEnter(rIndex, 2)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span className={`text-base font-bold uppercase transition-colors duration-300 whitespace-nowrap
                      ${hoveredRow === rIndex && hoveredCol === 2 ? 'text-white' : 'text-zinc-600'}
                    `}>
                      {spec.project}
                    </span>
                  </td>
                  <td
                    className="py-10 px-4 cursor-default"
                    onMouseEnter={() => handleMouseEnter(rIndex, 3)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span className={`text-base font-bold uppercase transition-colors duration-300 whitespace-nowrap
                      ${hoveredRow === rIndex && hoveredCol === 3 ? 'text-white' : 'text-zinc-600'}
                    `}>
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
