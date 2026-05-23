"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Search,
  UserPlus,
  Filter,
  Code,
  Smartphone,
  Layout,
  PenTool,
  CheckCircle,
  Headphones,
  Shield,
  BrainCircuitIcon,
} from 'lucide-react';

const services = [
  {
    id: "01",
    code: "DIG_MKT",
    title: "DIGITAL MARKETING",
    description: "We create data-driven digital marketing strategies that enhance brand visibility, improve audience engagement, and deliver consistent, measurable business growth.",
    features: ["AUDIENCE TARGETING", "BRAND VISIBILITY", "PERFORMANCE TRACKING", "CONVERSION GROWTH"],
    icon: BarChart3
  },
  {
    id: "02",
    code: "SEO_OPT",
    title: "SEARCH ENGINE OPTIMIZATION",
    description: "We improve search visibility through strategic SEO, optimizing content, technical structure, and performance to drive higher rankings and organic growth.",
    features: ["ORGANIC VISIBILITY BOOST", "KEYWORD OPTIMIZATION STRATEGY", "TECHNICAL STIE IMPROVEMENTS", "HIGHER SEARCH RANKINGS"],
    icon: Search
  },
  {
    id: "03",
    code: "LEAD_GEN",
    title: "LEAD GENERATION",
    description: "We build scalable lead generation systems that attract qualified prospects, improve conversion flow, and drive consistent business opportunities.",
    features: ["QUALIFIED PROSPECT TARGETING", "CONVERSION-FOCUSED FUNNELS", "DATA-DRIVEN ACQUISITION", "CONSISTENT BUSINESS PIPELINE"],
    icon: UserPlus
  },
  {
    id: "04",
    code: "FUNNEL_DEV",
    title: "SALES FUNNEL DEVELOPMENT",
    description: "We design high-converting sales funnels that guide potential customers through structured digital journeys to maximize conversions and business growth.",
    features: ["CONVERSION-FOCUSED FLOW", "AUDIENCE BEHAVIOR MAPPING", "LEAD NURTURING SYSTEM", "REVENUE OPTIMIZATION SYSTEM"],
    icon: Filter
  },
  {
    id: "05",
    code: "WEB_DEV",
    title: "WEB DEVELOPMENT",
    description: "We build high-performance, scalable websites focused on seamless user experience, speed optimization, and strong business conversion results.",
    features: ["FAST-LOADING WEBSITES", "SCALABLE ARCHITECTURE DESIGN", "RESPONSIVE USER EXPERIENCE", "SECURE CODE STRUCTURE"],
    icon: Code
  },
  {
    id: "06",
    code: "MOB_DEV",
    title: "MOBILE DEVELOPMENT",
    description: "We build high-performance mobile applications that deliver smooth user experiences and scalable digital solutions for modern businesses.",
    features: ["NATIVE APP BUILDS", "CROSS-PLATFORM APPS", "PERFORMANCE OPTIMIZATION", "USER-FOCUSED DESIGN"],
    icon: Smartphone
  },
  {
    id: "07",
    code: "UI_UX",
    title: "UI/UX DESIGN",
    description: "We design intuitive and conversion-focused digital experiences that enhance usability, engagement, and user satisfaction across every touchpoint.",
    features: ["USER-CENTERED DESIGN", "SMOOTH NAVIGATION FLOW", "CONVERSION-FOCUSED LAYOUTS", "MODERN VISUAL SYSTEMS"],
    icon: Layout
  },
  {
    id: "08",
    code: "GRAPHICS",
    title: "GRAPHIC DESIGN",
    description: "We create visually compelling brand designs that strengthen identity, improve engagement, and deliver consistent professional digital impressions.",
    features: ["BRAND-FOCUSED VISUALS", "CREATIVE DESIGN STRATEGY", "MODERN AESTHETIC STYLE", "CONSISTENT VISUAL IDENTITY"],
    icon: PenTool
  },
  {
    id: "09",
    code: "QA_TEST",
    title: "SOFTWARE QUALITY ASSURANCE",
    description: "We ensure your digital products meet the highest standards through structured testing, improving performance, reliability, and seamless user experience across platforms.",
    features: ["BUG-FREE DELIVERY", "PERFORMANCE TESTING", "SYSTEM RELIABILITY", "ERROR PREVENTION"],
    icon: CheckCircle
  },
  {
    id: "10",
    code: "VIRT_AST",
    title: "VIRTUAL ASSISTANCE",
    description: "We provide reliable virtual assistance support that streamlines daily operations, improves productivity, and ensures smooth business workflow management.",
    features: ["ADMINISTRATIVE SUPPORT", "TASK MANAGEMENT HELP", "REMOTE BUSINESS HANDLING", "TIME-SAVING EXECUTION"],
    icon: Headphones
  },
  {
    id: "11",
    code: "CYB_SEC",
    title: "Cyber Security",
    description: "We provide advanced cyber security solutions protecting digital assets, preventing threats, and ensuring secure business operations across all platforms.",
    features: ["Threat detection", "Network protection", "Data encryption", "Risk monitoring"],
    icon: Shield
  },
  {
    id: "12",
    code: "ART_INT",
    title: "Artificial Intelligence",
    description: "We deliver intelligent AI solutions that automate processes, enhance decision-making, and drive smarter digital transformation for modern businesses.",
    features: ["Process automation", "Predictive analytics", "Smart integration", "Data insights"],
    icon: BrainCircuitIcon
  },
  {
    id: "13",
    code: "SFT_DEV",
    title: "Software Development",
    description: "We deliver custom software solutions designed for business needs, ensuring scalability, performance, and seamless integration for long-term growth.",
    features: ["Software product development", "Software development consulting", "Custom Software Development", "Enterprise Software Solutions"],
    icon: Headphones
  },
];

export default function ServiceCards() {
  return (
    <section className="bg-black">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative border border-zinc-900/80"
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
                  <div className="text-[10px]  text-zinc-600 pt-2">
                    {service.id} / {service.code}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white text-3xl font-bold mb-6 leading-[1.1] group-hover:text-primary transition-colors min-h-[70px]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-500  text-base leading-relaxed mb-8 max-w-md group-hover:text-zinc-400 transition-colors">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="mt-auto">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-[11px]  text-zinc-400 uppercase group-hover:text-zinc-300 transition-colors">
                        {/* <span className="w-1.5 h-1.5 bg-primary shadow-[0_0_5px_rgba(228,36,47,0.4)]" /> */}
                        {/* <Terminal size={20} strokeWidth={1.5} className="text-primary" /> */}
                        <span className='text-primary text-1xl'>&gt;</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
