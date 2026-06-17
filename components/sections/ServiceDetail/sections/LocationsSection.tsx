"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import type { ServiceLocation } from "@/lib/services/types";
import React from "react";

interface LocationsSectionProps {
  heading?: string;
  description?: string;
  locations: ServiceLocation[];
}

export default function LocationsSection({
  heading,
  description,
  locations,
}: LocationsSectionProps) {
  return (
    <section className="bg-black py-12 lg:py-18 border-b border-zinc-900/50">
      <div className="site-container">
        <SectionHeading title={heading} description={description} />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
  {locations.map((location) => (
    <div
      key={location.title}
      className="group p-6 lg:p-8 border border-zinc-900 bg-zinc-950/50 hover:border-primary/30 transition-colors rounded-lg flex flex-col gap-4"
    >
      <MapPin className="text-primary" size={28} strokeWidth={1.5} />

      <h3 className="text-white text-2xl lg:text-3xl h-17 font-black uppercase">
        {location.title}
      </h3>

      <p className="text-primary text-xs uppercase font-bold">
        {location.officePhone}
      </p>

      <p className="text-zinc-400 text-sm lg:text-base leading-relaxed">
        {location.officeAddress}
      </p>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}
