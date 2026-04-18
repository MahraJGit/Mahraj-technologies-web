import React from 'react';
import WaveBackground from '@/components/ui/WaveBackground';

export default function PageHero({
  eyebrow = "Solutions for Growth",
  titleLight = "SERVICES",
  titleDark = "OVERVIEW",
  description = "Innovative digital solutions designed to scale your business. We combine strategic performance with seamless execution."
}) {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center border-b border-zinc-900/50 overflow-hidden">
      {/* Background layer */}
      <WaveBackground />

      {/* Content Layer */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-16">
        <div className="max-w-5xl">
          <p className="text-primary  text-xs md:text-sm uppercase mb-6 md:mb-8">
            {eyebrow}
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[90px] font-black leading-[0.9] uppercase mb-2">
            <span className="block text-white mb-2">{titleLight}</span>
            <span className="block text-zinc-400">{titleDark}</span>
          </h1>

          <p className="mt-8 md:mt-12 text-sm md:text-base text-zinc-500  leading-relaxed max-w-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
