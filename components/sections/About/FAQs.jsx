"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQs() {
    const faqs = [
        {
            q: "Do you work with startups or only established businesses?",
            a: "Mahraj Technologies works with both startups and established businesses. We help brands build, improve, and scale their digital presence according to their growth stage.",
        },
        {
            q: "Can you redesign or improve an existing website or application?",
            a: "Yes, we upgrade existing websites and applications with improved design, better performance, and modern functionality to match current business needs.",
        },
        {
            q: "How long does it usually take to complete a project?",
            a: "Project timelines vary based on requirements and complexity. We follow a structured process with clear milestones and regular progress updates.",
        },
        {
            q: "What makes your digital marketing strategies results-focused?",
            a: "Our marketing strategies are based on data, audience behavior, and performance tracking to improve visibility, engagement, and business growth.",
        },
        {
            q: "Why do businesses choose Mahraj Technologies over traditional agencies?",
            a: "Businesses choose us for reliable communication, technical expertise, and long-term support. We focus on building lasting partnerships, not just completing projects.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative bg-black py-12 lg:py-18 overflow-hidden">

            <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 bg-primary/10 blur-3xl rounded-full" />

            <div className="site-container relative z-10 max-w-4xl">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-6xl font-bold text-white uppercase">
                        FAQs
                    </h2>
                </div>

                {/* FAQ GRID */}
                <div className="space-y-4">

                    {faqs.map((item, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.06]"
                        >

                            {/* 🔥 FULL CARD GLOW (like your reasons section) */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* QUESTION */}
                            <button
                                onClick={() => toggle(index)}
                                className="relative z-10 w-full flex items-center justify-between gap-4 text-left"
                            >
                                <span className="text-white font-medium">
                                    {item.q}
                                </span>

                                <span className="text-primary text-xl transition-transform duration-300">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </button>

                            {/* ANSWER */}
                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.2 }}
                                        className="mt-4 text-zinc-400 text-sm leading-relaxed"
                                    >
                                        {item.a}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* 🔥 BOTTOM LINE (same as your other section) */}
                            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}