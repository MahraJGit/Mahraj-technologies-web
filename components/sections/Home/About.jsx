"use client";

import Image from "next/image";
import aboutImg from "@/public/about.png";

export default function About() {
  return (
    <section className="w-full bg-[#050505] py-16 md:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            About
          </h2>
          <p className="text-zinc-400 text-lg font-medium tracking-wide">
            Why choose Mahraj Technologies ?
          </p>
        </div>

        {/* Content Row */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Column */}
          <div className="w-full lg:w-1/2 relative">
            <Image 
              src={aboutImg} 
              alt="Enterprise Logistics Platform rendering" 
              className="w-full h-auto rounded-2xl object-cover border border-zinc-800/60 shadow-2xl shadow-primary/5"
            />
          </div>
          
          {/* Text Column */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl md:text-[32px] font-bold text-white mb-6 tracking-wide leading-tight">
              Enterprise Logistics Platform
            </h3>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-medium">
              Scaling a logistics platform to handle 1M+ daily transactions with 99.99% uptime. We re-architected their monolithic system into resilient microservices.
            </p>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-medium mt-6">
              By adopting a cloud-native architecture and integrating cutting-edge predictive AI algorithms, our engineers dramatically reduced systemic latency while enabling real-time, high-fidelity global fleet tracking.
            </p>

            <ul className="mt-10 space-y-5 text-zinc-300 font-medium">
              <li className="flex items-center gap-4">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-sm shadow-[0_0_10px_rgba(228,36,47,0.3)]">
                  ✓
                </span>
                100% Automated Deployment Pipelines
              </li>
              <li className="flex items-center gap-4">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-sm shadow-[0_0_10px_rgba(228,36,47,0.3)]">
                  ✓
                </span>
                Real-Time Predictive Edge Routing
              </li>
              <li className="flex items-center gap-4">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-sm shadow-[0_0_10px_rgba(228,36,47,0.3)]">
                  ✓
                </span>
                Multi-Region Failover Architecture
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}