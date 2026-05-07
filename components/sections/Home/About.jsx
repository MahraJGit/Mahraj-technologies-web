"use client";

import Image from "next/image";
import aboutImg from "@/public/about.png";

export default function About() {
  return (
    <section id="about" className="w-full bg-[#050505] py-16 lg:py-24 relative z-10">
      <div className="site-container">

        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase">
            About
          </h2>
          <p className="text-zinc-400 text-lg font-medium">
            What Makes Mahraj Technologies Different?
          </p>
        </div>

        {/* Content Row */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Image Column */}
          <div className="w-full lg:w-1/2 relative">
            <Image
              src={aboutImg}
              alt="Enterprise Logistics Platform rendering"
              title="Enterprise Delivery Management Solution"
              className="w-full h-auto rounded-2xl object-cover border border-zinc-800/60 shadow-2xl shadow-primary/5"
            />
          </div>

          {/* Text Column */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {/* <h3 className="text-2xl md:text-[32px] font-bold text-white mb-6 leading-tight">
              Enterprise Logistics Platform
            </h3> */}
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-medium">
              Tired of digital agencies that promise results but fail to deliver? Here we come. We are not just another service provider, we operate as a strategic digital partner focused on business transformation and measurable outcomes. Our approach is built on clarity, innovation, and performance, helping brands strengthen their digital presence, improve user experience, and achieve consistent long-term growth with confidence.
            </p>

            <ul className="mt-10 space-y-5 text-zinc-300 font-medium">
              <li className="flex items-center gap-4">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-sm shadow-[0_0_10px_rgba(228,36,47,0.3)]">
                  ✓
                </span>
                Strategic digital transformation focus
              </li>
              <li className="flex items-center gap-4">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-sm shadow-[0_0_10px_rgba(228,36,47,0.3)]">
                  ✓
                </span>
                Performance-driven business mindset
              </li>
              <li className="flex items-center gap-4">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-sm shadow-[0_0_10px_rgba(228,36,47,0.3)]">
                  ✓
                </span>
                User experience-centered approach
              </li>
              <li className="flex items-center gap-4">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-sm shadow-[0_0_10px_rgba(228,36,47,0.3)]">
                  ✓
                </span>
                Scalable and future-ready solutions
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}