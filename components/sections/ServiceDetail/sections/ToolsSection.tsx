"use client";

import { motion } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";
import type { ServiceTool } from "@/lib/services/types";
import React from "react";
import Image from "next/image";

interface ToolsSectionProps {
  heading?: string;
  description?: string;
  tools: ServiceTool[];
}

export default function ToolsSection({
  heading = "Tools We Use",
  description,
  tools,
}: ToolsSectionProps) {
  return (
    <section className="bg-black py-12 lg:py-18 border-b border-zinc-900/50">
      <div className="max-w-7xl mx-auto ">

        <SectionHeading
          title={heading}
          description={description}
        />

        <motion.div
          className="relative overflow-hidden group mt-12"
          >
          <div className="flex items-center gap-16 md:gap-24 w-max animate-marquee-infinite group-hover:[animation-play-state:paused]">
            {tools.map((tool, index) => {

              return (
                <div
                key={`first-${index}`}
                  className="flex-shrink-0"
                >
                  <Image
                    src={tool.icon}
                    alt="Digital marketing tool"
                    width={32}
                    height={32}
                    className="object-contain w-32 md:w-32 h-auto"
                  />
                </div>
              );
            })}

            {tools.map((tool, index) => {

              return (
                <div
                key={`second-${index}`}
                className="flex-shrink-0"
                >
                  <Image
                    src={tool.icon}
                    alt="Digital marketing tool"
                    width={32}
                    height={32}
                    className="object-contain w-32 md:w-32 h-auto"
                  />
                </div>
              );
            })}
          </div>
        </motion.div>
                </div>
    </section>
  );
}