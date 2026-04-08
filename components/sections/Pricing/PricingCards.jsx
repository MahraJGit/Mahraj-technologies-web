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
        price: "$4,000",
        priceSub: "/mo",
        startingText: "Starting from (up to $5,600)",
        features: [
            { label: "1 Developer", value: "$4,000 - $5,600/mo", detail: "EST. 10 MONTHS" },
            { label: "3 Developers", value: "$11,000 - $15,000/mo", detail: "EST. 7 MONTHS" },
            { label: "5+ Developers", value: "$17,000 - $24,000/mo", detail: "SCALES INSTANTLY" }
        ],
        buttonText: "Build Your Team",
        isPrimary: false
    },
    {
        id: "project",
        title: "Project-Based",
        subtitle: "End-to-end MVP development.",
        icon: <DraftingCompass className="w-6 h-6 text-primary" />,
        price: "$15k",
        priceRange: "$40k",
        priceSub: "/total",
        startingText: "Flat fee for MVP/Small App",
        badge: "ARCHITECT FAVORITE",
        features: [
            { label: "Small App/MVP", value: "$15k - $40k", detail: "8-12 WEEKS" },
            { label: "Medium Platform", value: "$40k - $80k", detail: "4-6 MONTHS" },
            { label: "Enterprise System", value: "$80k - $150k+", detail: "6+ MONTHS" }
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
        priceSub: "/mo",
        startingText: "Essential Protection Package",
        features: [
            { label: "Essential", value: "$1,500/mo", detail: "15H INCLUDED" },
            { label: "Professional", value: "$3,500/mo", detail: "40H INCLUDED" },
            { label: "Enterprise", value: "$7,000+/mo", detail: "100H INCLUDED" }
        ],
        buttonText: "Get a Quote",
        isPrimary: false
    }
];

export default function PricingCards() {
    return (
        <section className="py-24 bg-[#050505]">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start justify-center">
                    {pricingData.map((card, index) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -10,
                                borderColor: "rgba(228, 36, 47, 0.4)",
                                backgroundColor: "rgba(9, 9, 11, 0.8)",
                                boxShadow: "0 25px 60px -15px rgba(228, 36, 47, 0.2)",
                                transition: { duration: 0.3 }
                            }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-10 md:p-14 rounded-3xl border border-zinc-900 bg-zinc-950/50 shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full mx-auto w-full max-w-[700px]`}
                        >
                            {/* Architect Badge */}
                            {card.badge && (
                                <div className="absolute top-0 right-0 left-0 flex justify-center pt-8">
                                    <span className="bg-primary text-white text-[10px] font-black tracking-[0.3em] px-5 py-2 rounded-full uppercase shadow-lg">
                                        {card.badge}
                                    </span>
                                </div>
                            )}

                            {/* Header */}
                            <div className="mb-12 pt-6">
                                <div className="mb-8 scale-150 origin-left">{card.icon}</div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3 leading-none">
                                    {card.title}
                                </h3>
                                <p className="text-zinc-500 text-sm font-medium max-w-[320px]">
                                    {card.subtitle}
                                </p>
                            </div>

                            {/* Pricing */}
                            <div className="mb-14">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-black text-white tracking-tighter">
                                        {card.price}
                                    </span>
                                    {card.priceRange && (
                                        <span className="text-2xl font-black text-zinc-700 tracking-tighter mx-1">- {card.priceRange}</span>
                                    )}
                                    <span className="text-lg font-bold text-zinc-500 uppercase">{card.priceSub}</span>
                                </div>
                                <p className="text-[11px] text-zinc-600 font-bold tracking-widest uppercase mt-4 opacity-80 font-mono">
                                    {card.startingText}
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className="flex-grow space-y-8 mb-14">
                                {card.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center justify-between border-b border-zinc-900 pb-5">
                                        <div className="flex items-center gap-4">
                                            <CheckCircle2 className="w-5 h-5 text-primary opacity-80" />
                                            <span className="text-sm font-bold text-zinc-300 uppercase tracking-tight">{feature.label}</span>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-base font-black text-white">{feature.value}</p>
                                            <p className="text-[10px] text-zinc-600 font-bold tracking-tight uppercase mt-0.5">{feature.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <motion.button
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                className={`w-full py-6 rounded-2xl font-black text-sm uppercase tracking-[0.25em] transition-all
                  ${card.isPrimary
                                        ? 'bg-primary text-white shadow-[0_10px_30px_-10px_rgba(228,36,47,0.5)] hover:bg-red-600'
                                        : 'bg-zinc-900 text-white hover:bg-zinc-800 border border-zinc-800'}`}
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