"use client";

import Image from "next/image";
import aboutImg from "@/public/about.png";

export default function About() {
  return (
    <section id="about" className="bg-black py-12 lg:py-18 relative z-10">
      <div className="site-container">

        {/* Section Heading */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase">
            What Makes Us Different?
          </h2>
          <p className="text-zinc-400 text-lg font-medium">
            We don’t work like a typical outsourcing agency. We work as a business growth partner focused on performance, scalability, and long-term success.
          </p>
        </div>

        {/* Content Row */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

          {/* Image Column */}
          <div className="w-full lg:w-1/2 relative h-full">
            <Image
              src={aboutImg}
              alt="Enterprise Logistics Platform rendering"
              title="Enterprise Delivery Management Solution"
              className="w-full h-full min-h-[640px] rounded-2xl object-cover border border-zinc-800/60 shadow-2xl shadow-primary/5"
            />
          </div>

          {/* Text Column */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">

            <ul className="mt-10 space-y-6">

              <li className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-primary/20 hover:bg-white/[0.05]">

                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary shadow-[0_0_15px_rgba(228,36,47,0.25)]">
                  ✓
                </span>

                <div>
                  <h4 className="mb-2 text-lg font-semibold text-white">
                    Business Partnership
                  </h4>

                  <p className="leading-relaxed text-zinc-400">
                    We work as an extension of your team, not just a service provider.
                    Every project is handled with business goals, scalability, and
                    long-term growth in mind.
                  </p>
                </div>
              </li>

              <li className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-primary/20 hover:bg-white/[0.05]">

                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary shadow-[0_0_15px_rgba(228,36,47,0.25)]">
                  ✓
                </span>

                <div>
                  <h4 className="mb-2 text-lg font-semibold text-white">
                    Time-Zone Alignment
                  </h4>

                  <p className="leading-relaxed text-zinc-400">
                    Our workflow adapts to the client’s working hours, ensuring smooth
                    communication, faster updates, and real-time collaboration across
                    different regions.
                  </p>
                </div>
              </li>

              <li className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-primary/20 hover:bg-white/[0.05]">

                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary shadow-[0_0_15px_rgba(228,36,47,0.25)]">
                  ✓
                </span>

                <div>
                  <h4 className="mb-2 text-lg font-semibold text-white">
                    Long-term Partnership
                  </h4>

                  <p className="leading-relaxed text-zinc-400">
                    We believe great digital products need continuous improvement.
                    That’s why many of our partnerships grow from short-term contracts
                    into long-term collaborations lasting years.
                  </p>
                </div>
              </li>

              <li className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-primary/20 hover:bg-white/[0.05]">

                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary shadow-[0_0_15px_rgba(228,36,47,0.25)]">
                  ✓
                </span>

                <div>
                  <h4 className="mb-2 text-lg font-semibold text-white">
                    Technical Excellence
                  </h4>

                  <p className="leading-relaxed text-zinc-400">
                    From digital business architecture and custom development to SEO,
                    paid marketing, performance optimization, and issue fixing, our
                    team handles every stage of digital growth with technical precision.
                  </p>
                </div>
              </li>

            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}