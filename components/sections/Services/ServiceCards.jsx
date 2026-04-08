"use client";

import React from 'react';

const services = [
  {
    id: "01",
    code: "ENT_ARCH",
    title: "ENTERPRISE ARCHITECTURE",
    description: "Comprehensive structural blueprints for global-scale digital ecosystems and high-availability systems.",
    features: ["SCALABLE MICROSERVICES", "LEGACY SYSTEM OVERHAUL", "MULTI-TENANT FABRIC"],
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    id: "02",
    code: "CLD_SCALE",
    title: "CLOUD SCALABILITY",
    description: "Elastic resource management designed for explosive growth without compromising performance or latency.",
    features: ["AUTOSCALING CLUSTERS", "SERVERLESS PIPELINES", "GLOBAL CDN DEPLOYMENT"],
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  },
  {
    id: "03",
    code: "CIN_UIUX",
    title: "CINEMATIC UI/UX",
    description: "Immersive, high-fidelity interfaces that merge brutalist aesthetics with fluid, human-centric motion.",
    features: ["KINETIC DEPTH LAYERING", "NEUROMORPHIC DESIGN", "LATENCY-FREE MOTION"],
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: "04",
    code: "CYBER_SEC",
    title: "CYBERSECURITY",
    description: "Hardened, zero-trust protocols protecting critical infrastructure from advanced persistent threats.",
    features: ["ZERO-TRUST GATEWAYS", "QUANTUM ENCRYPTION", "PENETRATION AUDITS"],
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: "05",
    code: "AI_INTEG",
    title: "AI INTEGRATION",
    description: "Deploying neural nodes into existing workflows to automate complex decision-making processes.",
    features: ["LLM CUSTOM TUNING", "PREDICTIVE MODELING", "COMPUTER VISION NODES"],
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: "06",
    code: "WEB3_BC",
    title: "WEB3 & BLOCKCHAIN",
    description: "Decentralized protocols for transparent, immutable transactions and secure data ownership.",
    features: ["SMART CONTRACT AUDITS", "DAPP ARCHITECTURE", "LAYER 2 SCALING"],
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: "07",
    code: "MOB_NATIVE",
    title: "MOBILE NATIVE",
    description: "High-performance native applications for iOS and Android, optimized for low-latency hardware integration.",
    features: ["SWIFT & KOTLIN ENGINE", "OFFLINE-FIRST SYNC", "BIOMETRIC SECURITY"],
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: "08",
    code: "DATA_ANL",
    title: "DATA ANALYTICS",
    description: "Transforming raw data streams into actionable intelligence via real-time telemetry and visualization.",
    features: ["REAL-TIME TELEMETRY", "ETL PIPELINE DESIGN", "ANOMALY DETECTION"],
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
];

export default function ServiceCards() {
  return (
    <section className="bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-zinc-800/80">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-6 border-b border-zinc-800/80 
                       md:border-r md:[&:nth-child(2n)]:border-r-0 
                       lg:border-r lg:[&:nth-child(4n)]:border-r-0 
                       flex flex-col min-h-[300px] md:min-h-[380px] lg:min-h-[440px]"
          >
            {/* Header: Icon and Index */}
            <div className="flex justify-between items-start mb-8">
              <div>
                {service.icon}
              </div>
              <div className="text-[10px]  text-zinc-600 tracking-widest pt-2">
                {service.id} / {service.code}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-white text-3xl font-bold tracking-tight mb-6 leading-[1.1]">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-zinc-500  text-base leading-relaxed mb-8 max-w-xs">
              {service.description}
            </p>

            {/* Features list */}
            <div className="mt-auto">
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[11px]  text-zinc-400 tracking-widest uppercase">
                    <span className="w-1.5 h-1.5 bg-primary shadow-[0_0_5px_rgba(228,36,47,0.4)]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
