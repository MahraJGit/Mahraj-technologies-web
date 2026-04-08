"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Network, 
  Cloud, 
  Layout, 
  Shield, 
  BrainCircuit, 
  Blocks, 
  Smartphone, 
  LineChart 
} from 'lucide-react';

const services = [
  {
    id: "01",
    code: "ENT_ARCH",
    title: "ENTERPRISE ARCHITECTURE",
    description: "Comprehensive structural blueprints for global-scale digital ecosystems and high-availability systems.",
    features: ["SCALABLE MICROSERVICES", "LEGACY SYSTEM OVERHAUL", "MULTI-TENANT FABRIC"],
    icon: Network
  },
  {
    id: "02",
    code: "CLD_SCALE",
    title: "CLOUD SCALABILITY",
    description: "Elastic resource management designed for explosive growth without compromising performance or latency.",
    features: ["AUTOSCALING CLUSTERS", "SERVERLESS PIPELINES", "GLOBAL CDN DEPLOYMENT"],
    icon: Cloud
  },
  {
    id: "03",
    code: "CIN_UIUX",
    title: "CINEMATIC UI/UX",
    description: "Immersive, high-fidelity interfaces that merge brutalist aesthetics with fluid, human-centric motion.",
    features: ["KINETIC DEPTH LAYERING", "NEUROMORPHIC DESIGN", "LATENCY-FREE MOTION"],
    icon: Layout
  },
  {
    id: "04",
    code: "CYBER_SEC",
    title: "CYBERSECURITY",
    description: "Hardened, zero-trust protocols protecting critical infrastructure from advanced persistent threats.",
    features: ["ZERO-TRUST GATEWAYS", "QUANTUM ENCRYPTION", "PENETRATION AUDITS"],
    icon: Shield
  },
  {
    id: "05",
    code: "AI_INTEG",
    title: "AI INTEGRATION",
    description: "Deploying neural nodes into existing workflows to automate complex decision-making processes.",
    features: ["LLM CUSTOM TUNING", "PREDICTIVE MODELING", "COMPUTER VISION NODES"],
    icon: BrainCircuit
  },
  {
    id: "06",
    code: "WEB3_BC",
    title: "WEB3 & BLOCKCHAIN",
    description: "Decentralized protocols for transparent, immutable transactions and secure data ownership.",
    features: ["SMART CONTRACT AUDITS", "DAPP ARCHITECTURE", "LAYER 2 SCALING"],
    icon: Blocks
  },
  {
    id: "07",
    code: "MOB_NATIVE",
    title: "MOBILE NATIVE",
    description: "High-performance native applications for iOS and Android, optimized for low-latency hardware integration.",
    features: ["SWIFT & KOTLIN ENGINE", "OFFLINE-FIRST SYNC", "BIOMETRIC SECURITY"],
    icon: Smartphone
  },
  {
    id: "08",
    code: "DATA_ANL",
    title: "DATA ANALYTICS",
    description: "Transforming raw data streams into actionable intelligence via real-time telemetry and visualization.",
    features: ["REAL-TIME TELEMETRY", "ETL PIPELINE DESIGN", "ANOMALY DETECTION"],
    icon: LineChart
  },
];

export default function ServiceCards() {
  return (
    <section className="bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-zinc-800/80">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative border-b border-zinc-900/80 
                       md:border-r md:[&:nth-child(2n)]:border-r-0 
                       lg:[&:nth-child(2n)]:border-r 
                       lg:[&:nth-child(4n)]:border-r-0 
                       bg-black group overflow-hidden"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="p-8 h-full flex flex-col min-h-[300px] md:min-h-[380px] lg:min-h-[440px] cursor-default"
            >
              {/* Header: Icon and Index */}
              <div className="flex justify-between items-start mb-8">
                <div className="text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
                <div className="text-[10px]  text-zinc-600 tracking-widest pt-2">
                  {service.id} / {service.code}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-white text-3xl font-bold tracking-tight mb-6 leading-[1.1] group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-500  text-base leading-relaxed mb-8 max-w-xs group-hover:text-zinc-400 transition-colors">
                {service.description}
              </p>

              {/* Features list */}
              <div className="mt-auto">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[11px]  text-zinc-400 tracking-widest uppercase group-hover:text-zinc-300 transition-colors">
                      <span className="w-1.5 h-1.5 bg-primary shadow-[0_0_5px_rgba(228,36,47,0.4)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
