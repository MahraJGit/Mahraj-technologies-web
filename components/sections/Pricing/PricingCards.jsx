"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, DraftingCompass, ShieldCheck, CheckCircle2 } from 'lucide-react';

const pricingData = [
    {
        id: "dedicated",
        title: "Dedicated Team",
        subtitle: "Long-term strategic partnership.",
        icon: <Users className="w-6 h-6 text-primary" />,
        price: "$3,000",
        priceSub: "/months",
        startingText: "Starting from (up to $3,000)",
        features: [
            { label: "1 Developer", value: "$3,000 - $7,000/mo", detail: "EST. 10 MONTHS" },
            { label: "3 Developers", value: "$10,000 - $15,000/mo", detail: "EST. 7 MONTHS" },
            { label: "5+ Developers", value: "$15,000 - $20,000/mo", detail: "SCALES INSTANTLY" }
        ],
        buttonText: "Build Your Team",
        isPrimary: false
    },
    {
        id: "project",
        title: "Project-Based",
        subtitle: "End-to-end MVP development.",
        icon: <DraftingCompass className="w-6 h-6 text-primary" />,
        price: "$10k",
        priceRange: "$40k",
        priceSub: "/total",
        startingText: "Flat fee for MVP/Small App",
        badge: "ARCHITECT FAVORITE",
        features: [
            { label: "Small App/MVP", value: "$10k - $40k", detail: "8-12 WEEKS" },
            { label: "Medium Platform", value: "$30k - $80k", detail: "4-6 MONTHS" },
            { label: "Enterprise System", value: "$70k - $150k+", detail: "6+ MONTHS" }
        ],
        buttonText: "Discuss Your Project",
        isPrimary: true
    },
    {
        id: "maintenance",
        title: "Maintenance & Support",
        subtitle: "Infrastructure continuity.",
        icon: <ShieldCheck className="w-6 h-6 text-primary" />,
        price: "$1,500",
        priceSub: "/months",
        startingText: "Essential Protection Package",
        features: [
            { label: "Essential", value: "$1,500/mo", detail: "15H INCLUDED" },
            { label: "Professional", value: "$3,000/mo", detail: "40H INCLUDED" },
            { label: "Enterprise", value: "$6,000+/mo", detail: "100H INCLUDED" }
        ],
        buttonText: "Get a Quote",
        isPrimary: false
    }
];

export default function PricingCards() {
    return (
        <section className="py-16 lg:py-24 bg-[#050505]">
            <div className="site-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {pricingData.map((card, index) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -8,
                                scale: 1.03,
                                borderColor: "rgba(228, 36, 47, 0.4)",
                                backgroundColor: "rgba(9, 9, 11, 0.8)",
                                boxShadow: "0 25px 60px -15px rgba(228, 36, 47, 0.2)",
                                transition: { duration: 0.3 }
                            }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-8 lg:p-10 rounded-3xl border border-zinc-900 bg-zinc-950/50 shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full w-full group`}
                        >
                            {/* ... existing header and pricing content ... */}
                            <div className="mb-6">
                                <div className="mb-5 text-primary">{card.icon}</div>
                                <h3 className="text-xl font-black text-white uppercase mb-2 leading-none">
                                    {card.title}
                                </h3>
                                <p className="text-zinc-500 text-sm font-medium">
                                    {card.subtitle}
                                </p>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-black text-white">
                                        {card.price}
                                    </span>
                                    {card.priceRange && (
                                        <span className="text-xl font-black text-zinc-700 mx-1">- {card.priceRange}</span>
                                    )}
                                    <span className="text-base font-bold text-zinc-500 uppercase">{card.priceSub}</span>
                                </div>
                                <p className="text-[11px] text-zinc-600 font-bold uppercase mt-3 opacity-80 font-mono">
                                    {card.startingText}
                                </p>
                            </div>

                            <div className="flex-grow space-y-4 mb-8">
                                {card.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center justify-between border-b border-zinc-900 pb-4">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle2 className="w-4 h-4 text-primary opacity-80 shrink-0" />
                                            <span className="text-xs font-bold text-zinc-300 uppercase">{feature.label}</span>
                                        </div>
                                        <div className="text-right ml-2">
                                            <p className="text-sm font-black text-white">{feature.value}</p>
                                            <p className="text-[10px] text-zinc-600 font-bold uppercase mt-0.5">{feature.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-5 rounded-2xl font-black text-sm uppercase transition-all duration-300 bg-zinc-900 text-white border border-zinc-800 group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_10px_30px_-10px_rgba(228,36,47,0.4)]"
                            >
                                {card.buttonText}
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}