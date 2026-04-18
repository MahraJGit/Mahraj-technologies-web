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
  const [percent, setPercent] = useState("0%");
  useMotionValueEvent(scrollProgress, "change", (latest) => {
    setPercent(`${Math.round(latest * 100)}%`);
  });
  return <span>{percent} COMPLETED</span>;
};

const TechnicalDeco = ({ scrollProgress }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Subtle Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(228, 36, 47, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(228, 36, 47, 0.1) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }}
      />
    </div>
  );
};

const PhaseContent = ({ phase, index, scrollProgress }) => {
  const totalPhases = phases.length;
  const span = 1 / totalPhases;
  const start = index * span;
  const end = (index + 1) * span;

  const fadeInStart = index === 0 ? 0 : Math.max(0, start - 0.05);
  const fadeInEnd = Math.min(start + 0.05, end);
  const fadeOutStart = Math.max(fadeInEnd + 0.1, end - 0.05);
  const fadeOutEnd = end;

  const range = [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd];

  const opacity = useTransform(scrollProgress, range, [0, 1, 1, 0]);
  const y = useTransform(scrollProgress, range, [40, 0, 0, -40]);
  const scale = useTransform(scrollProgress, range, [0.98, 1, 1, 1.02]);

  return (
    <motion.div
      style={{
        opacity,
        y,
        scale,
        zIndex: totalPhases - index
      }}
      className="absolute inset-0 flex items-center justify-start pointer-events-none"
    >
      <div className="site-container w-full h-full flex items-center">
        <div className="w-full md:w-4/5 lg:w-3/4 xl:w-1/2 p-6 lg:p-12 xl:p-24 text-left relative">
          <div className="relative z-10 flex flex-col items-start gap-8 lg:gap-12">
            <div className="flex flex-col gap-6">
              {/* <span className="text-primary text-[10px] md:text-xs font-black uppercase">
                PHASE_0{phase.id}
              </span> */}
              <h3 className="text-white text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black uppercase leading-[0.95] max-w-4xl">
                {phase.title}
              </h3>

              <div className="flex flex-col gap-8 max-w-xl">
                <p className="text-zinc-400 text-sm lg:text-lg xl:text-xl leading-relaxed font-medium">
                  {phase.description}
                </p>
                <div className="w-16 h-[1px] bg-zinc-800" />
              </div>
            </div>
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
          <span className="text-white text-[10px] uppercase font-bold">
            What we offer
          </span>
        </div>
      </div>

      {phases.map((phase) => (
        <div key={phase.id} className="relative">
          <div className="relative z-10 space-y-6">
            <span className="text-primary text-[10px] font-black uppercase">
              PHASE_0{phase.id}
            </span>
            <h3 className="text-white text-3xl font-black uppercase leading-tight">
              {phase.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {phase.description}
            </p>
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

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="bg-black relative">
      {/* Mobile/Tablet Layout (< 1024px) */}
      <div className="block lg:hidden">
        <MobileFlow />
      </div>

      {/* Desktop Layout (>= 1024px) */}
      <div className="hidden lg:block h-[720vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col bg-black">
          <TechnicalDeco scrollProgress={smoothProgress} />

          <div className="site-container h-full relative flex flex-col">
            {/* Minimal Progress Bar */}
            <div className="absolute left-8 top-1/4 bottom-1/4 w-[1px] bg-zinc-900 overflow-hidden z-50">
              <motion.div
                style={{ scaleY: smoothProgress, originY: 0 }}
                className="w-full h-full bg-primary"
              />
            </div>

            {/* Top Label */}
            <div className="absolute top-12 left-12 z-50 pointer-events-none text-left">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-primary" />
                <span className="text-white text-[10px] uppercase font-bold">
                  What We Offer
                </span>
              </div>
            </div>

            {/* Central Phases */}
            <div className="relative flex-1">
              {phases.map((phase, index) => (
                <PhaseContent key={phase.id} phase={phase} index={index} scrollProgress={smoothProgress} />
              ))}
            </div>

            {/* Bottom Status */}
            <div className="absolute bottom-12 left-12 right-12 flex items-center justify-between z-10 pointer-events-none">
              {/* <div className="flex items-center gap-3 text-zinc-600 text-[9px] uppercase font-bold">
                <div className="w-1 h-1 bg-zinc-800 rounded-full" />
                <span>Operational_Systems_Ready</span>
              </div> */}
              <div className="text-[9px] text-zinc-600 uppercase font-bold">
                <ScrollDepthLabel scrollProgress={smoothProgress} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
