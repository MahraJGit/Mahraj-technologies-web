"use client";

import WaveBackground from "@/components/ui/WaveBackground";
import type { ServiceHero } from "@/lib/services/types";
import React from "react";

interface HeroSectionProps {
  serviceTitle: string;
  hero: ServiceHero;
}

export default function HeroSection({ serviceTitle, hero }: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center border-b border-zinc-900/50 overflow-hidden">
      <WaveBackground />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-16">
          <div className="max-w-5xl">
            {hero.eyebrow && (
              <p className="text-primary text-xs md:text-sm uppercase mb-6 md:mb-8">
                {hero.eyebrow}
              </p>
            )}

            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[80px] font-black leading-[0.9] uppercase mb-2">
              <span className="block text-white mb-2">{hero.titleLight}</span>
              {hero.titleDark && (
                <span className="block text-zinc-400">{hero.titleDark}</span>
              )}
            </h1>

            <p className="mt-8 md:mt-10 text-sm md:text-base text-zinc-500 leading-relaxed max-w-xl">
              {hero.description}
            </p>
          </div>

        </div>
    </section>
  );
}
