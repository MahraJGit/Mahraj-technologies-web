"use client";

import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';

const phases = [
  {
    id: "01",
    title: "Administrative Support",
    code: "SYST_AUDIT_0x1",
    description: "We provide reliable administrative support to manage emails, scheduling, documentation, and reporting. Our virtual assistance services improve business efficiency, streamline operations, and help teams focus on core growth activities.",
  },
  {
    id: "02",
    title: "Task Management Assistance",
    code: "STR_BUILD_0x2",
    description: "Our team handles task management with proper organization and follow-ups. We ensure smooth workflow coordination, timely execution, and productivity improvement using digital tools and structured virtual support systems for businesses.",
  },
  {
    id: "03",
    title: "Calendar & Email Management",
    code: "STAGED_SYNC_0x3",
    description: "We manage calendars and emails professionally to avoid missed opportunities and delays. Our virtual assistants organize meetings, prioritize communication, and maintain smooth scheduling for better time management and workflow efficiency.",
  },
  {
    id: "04",
    title: "Customer Support Handling",
    code: "FORENSIC_QA_0x4",
    description: "We provide responsive customer support assistance to maintain client satisfaction. Our virtual assistance ensures timely replies, query handling, and professional communication that improve customer experience and strengthen brand trust online.",
  },
  {
    id: "05",
    title: "Data Entry & Research",
    code: "EDGE_OPT_0x5",
    description: "Our team handles accurate data entry and detailed online research tasks. Our virtual assistants ensure error-free documentation, organized data systems, and insightful research that supports business decisions and operational improvements effectively.",
  },
  {
    id: "06",
    title: "Business Operations Support",
    code: "AI_WATCH_0x6",
    description: "We assist in daily business operations to reduce workload and improve productivity. Our virtual assistance services help streamline processes, manage repetitive tasks, and ensure the smooth execution of business activities consistently.",
  },
];

const ScrollDepthLabel = ({ scrollProgress }) => {
  const [hex, setHex] = useState("0x00");
  useMotionValueEvent(scrollProgress, "change", (latest) => {
    const val = (Math.floor(latest * 255)).toString(16).toUpperCase().padStart(2, "0");
    setHex(`0x${val}`);
  });
  return <span>{hex} // SCROLL DEPTH</span>;
};

const TechnicalDeco = ({ scrollProgress }) => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(228, 36, 47, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(228, 36, 47, 0.1) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-12  text-[9px] text-zinc-600 text-right">
        <div className="flex flex-col gap-2">
          <span className="text-primary font-bold uppercase tracking-widest">SYSTEM_HEALTH</span>
          <span className="opacity-40">OPTIMIZED_100%</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-primary font-bold uppercase tracking-widest">NODE_CONNECT</span>
          <span className="opacity-40">ENCRYPTED // TLS_1.3</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-primary font-bold uppercase tracking-widest">ARCH_V5.2</span>
          <span className="opacity-40">MAHRAJ_INTERNAL_DOCS</span>
        </div>
      </div>
      <div className="absolute bottom-24 right-12 hidden lg:flex flex-col gap-1  text-[8px] text-zinc-500 tracking-tighter text-right">
        <span>LAT: 25.1023° N // LON: 55.1713° E</span>
        <span>SECURE_ENCLAVE_READY</span>
      </div>
    </div>
  );
};

const PhaseContent = ({ phase, index, scrollProgress }) => {
  const totalPhases = phases.length;
  const span = 1 / totalPhases;
  const start = index * span;
  const end = (index + 1) * span;
  const fadeInStart = index === 0 ? 0 : Math.max(0, start - 0.02);
  const fadeInEnd = Math.min(start + 0.05, end);
  const fadeOutStart = Math.max(fadeInEnd + 0.08, end - 0.05);
  const fadeOutEnd = end;
  const range = [fadeInStart, fadeInStart + 0.001, fadeInEnd, fadeOutStart, fadeOutEnd - 0.001, fadeOutEnd];
  const opacity = useTransform(scrollProgress, range, [0, 0, 1, 1, 0, 0]);
  const x = useTransform(scrollProgress, range, [100, 100, 0, 0, -100, -100]);
  const scale = useTransform(scrollProgress, range, [0.98, 0.98, 1, 1, 1.02, 1.02]);

  return (
    <motion.div
      style={{ opacity, x, scale, zIndex: totalPhases - index }}
      className="absolute inset-x-0 bottom-0 top-32 flex items-center justify-start pointer-events-none"
    >
      {/* Responsive Container: Less padding on smaller laptops (lg) */}
      <div className="w-full md:w-3/5 lg:w-3/4 xl:w-1/2 p-6 lg:p-12 xl:p-24 2xl:p-32 text-left">

        {/* Background ID Number: Smaller on smaller laptops (lg) */}
        <div className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03]">
          <span
            className="text-[150px] lg:text-[250px] xl:text-[400px] 2xl:text-[600px] font-black leading-none"
            style={{ WebkitTextStroke: '1px #E4242F', color: 'transparent' }}
          >
            {phase.id}
          </span>
        </div>

        {/* Content Grouping: Tighter gap on smaller laptops (lg) */}
        <div className="relative z-10 flex flex-col items-start gap-4 lg:gap-8">
          {/* <div className="flex items-center gap-4">
            <div className="w-12 h-[2px] bg-primary animate-pulse" />
            <span className="text-primary  text-sm tracking-[0.5em] font-bold uppercase">
              {phase.code}
            </span>
          </div> */}
          <h3 className="text-white text-3xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-black tracking-tight uppercase leading-[0.85] max-w-2xl">
            {phase.title}
          </h3>
          <div className="flex flex-col gap-4 lg:gap-6 max-w-xl">
            <p className="text-zinc-300  text-xs lg:text-base xl:text-lg 2xl:text-xl leading-relaxed tracking-wide">
              {phase.description}
            </p>
            {/* <div className="flex items-center gap-4 text-zinc-600  text-[10px] tracking-widest uppercase">
              <span>SECURE_DATA_READY</span>
              <div className="w-8 h-[1px] bg-zinc-800" />
              <span>NODE_{phase.id}_STABLE</span>
            </div> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const MobileFlow = () => {
  return (
    <div className="py-20 px-6 space-y-32 flex flex-col">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-[1px] bg-primary" />
          <span className="text-white  text-[10px] tracking-[0.5em] uppercase font-bold">
            What we offer
          </span>
        </div>
        {/* <h2 className="text-zinc-500  text-[10px] tracking-[0.2em] uppercase italic">
          Architecting the digital frontier // v1.0
        </h2> */}
      </div>

      {phases.map((phase) => (
        <div key={phase.id} className="relative">
          {/* <div className="absolute -top-10 -left-4 select-none pointer-events-none opacity-[0.05]">
            <span
              className="text-[120px] font-black leading-none"
              style={{ WebkitTextStroke: '1px #E4242F', color: 'transparent' }}
            >
              {phase.id}
            </span>
          </div> */}
          <div className="relative z-10 space-y-6">
            {/* <div className="flex items-center gap-2">
              <div className="w-6 h-[1px] bg-primary" />
              <span className="text-primary  text-[10px] tracking-widest font-bold uppercase">
                {phase.code}
              </span>
            </div> */}
            <h3 className="text-white text-3xl font-black tracking-tight uppercase leading-tight">
              {phase.title}
            </h3>
            <p className="text-zinc-400  text-sm leading-relaxed">
              {phase.description}
            </p>
            {/* <div className="flex items-center gap-3 text-zinc-600  text-[8px] tracking-[0.3em] uppercase border-t border-zinc-900 pt-4">
              <span>SECURE_DATA</span>
              <div className="w-4 h-[1px] bg-zinc-800" />
              <span>NODE_STABLE</span>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default function OperationalFlow() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.2", "end end"]
  });

  return (
    <section ref={containerRef} className="bg-black relative">
      {/* Mobile/Tablet Layout (< 1024px) */}
      <div className="block lg:hidden">
        <MobileFlow />
      </div>

      {/* Desktop Layout (>= 1024px) */}
      <div className="hidden lg:block h-[720vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col bg-[#050505]">
          {/* <TechnicalDeco scrollProgress={scrollYProgress} /> */}
          <div className="absolute left-8 top-1/4 bottom-1/4 w-[2px] bg-zinc-900 overflow-hidden z-50">
            <motion.div
              style={{ scaleY: scrollYProgress, originY: 0 }}
              className="w-full h-full bg-primary shadow-[0_0_15px_#E4242F]"
            />
          </div>
          <div className="absolute top-12 left-12 z-50 pointer-events-none text-left">
            <div className="flex flex-col gap-3 items-start">
              <div className="flex items-center gap-4">
                <div className="w-16 h-[2px] bg-primary" />
                <span className="text-white  text-sm tracking-[0.5em] uppercase font-bold">
                  What We Offer
                </span>
              </div>
              {/* <span className="text-zinc-500  text-[10px] tracking-[0.2em] uppercase italic">
                Architecting the digital frontier // v1.0
              </span> */}
            </div>
          </div>
          <div className="relative flex-1">
            {phases.map((phase, index) => (
              <PhaseContent key={phase.id} phase={phase} index={index} scrollProgress={scrollYProgress} />
            ))}
          </div>
          <div className="absolute bottom-12 left-12 right-12 flex items-center justify-between z-10 pointer-events-none">
            <motion.div className="flex items-center gap-4 text-zinc-600  text-[9px] tracking-widest uppercase">
              {/* <div className="w-1.5 h-1.5 bg-primary animate-pulse" /> */}
              {/* <span>ARCHITECT_NODE // READY</span> */}
            </motion.div>
            <div className=" text-[9px] text-zinc-600 tracking-widest uppercase">
              <ScrollDepthLabel scrollProgress={scrollYProgress} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
