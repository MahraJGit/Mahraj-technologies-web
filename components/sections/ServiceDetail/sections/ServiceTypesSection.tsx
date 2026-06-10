"use client";

import { motion } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";
import { getServiceIcon } from "@/lib/services/icons";
import type { ServiceTypeItem } from "@/lib/services/types";
import React from "react";

interface ServiceTypesSectionProps {
  heading?: string;
  description?: string;
  items: ServiceTypeItem[];
}

export default function ServiceTypesSection({
  heading = "Service Types",
  description,
  items,
}: ServiceTypesSectionProps) {
  return (
    <section className="bg-black py-12 lg:py-18 border-b border-zinc-900/50">
      <div className="site-container">
        <SectionHeading title={heading} description={description} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {items.map((item, index) => {
            const Icon = getServiceIcon(item.icon);
            return (
              <div key={item.title} className="relative border border-zinc-900/80 group overflow-hidden">
                <div className="p-8 h-full flex flex-col min-h-[280px] transition-transform duration-500 ease-out group-hover:scale-[1.04]">
                  <div className="mb-6 w-8 h-8 flex items-center justify-center">
                    <div className="text-primary transition-all duration-500 group-hover:rotate-3 group-hover:scale-110">
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="text-white text-2xl font-bold mb-4 leading-[1.1] group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-zinc-500 text-base leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
