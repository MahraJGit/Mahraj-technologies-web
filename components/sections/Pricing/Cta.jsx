"use client";

import Image from "next/image";
import Link from 'next/link';
import { motion } from "framer-motion";
import bgimg from "@/public/pricingctacontrast.png";
import { useCalendly } from "@/context/CalendlyContext";

export default function Cta() {
    const { openModal } = useCalendly();
    return (
        <section className="py-24 bg-[#050505] px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-[1600px] mx-auto relative rounded-[2.5rem] overflow-hidden border border-zinc-900 bg-black flex flex-col items-center group shadow-2xl">
                {/* Understated Background Layer - Restored Object-Cover */}
                <div className="absolute inset-0 z-0 opacity-15">
                    <Image
                        src={bgimg}
                        alt="CTA Background"
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                    />
                </div>

                {/* Minimal Overlay */}
                <div className="absolute inset-0 bg-transparent z-10" />

                <div className="relative z-20 p-8 md:p-16 lg:p-24 flex flex-col lg:flex-row items-center justify-between w-full gap-12 lg:gap-16">
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-4xl xl:text-6xl font-black text-white uppercase tracking-[ -0.04em] leading-[1.05] md:leading-[0.95] lg:leading-[0.9] mb-8">
                            Let&apos;s Build Something <br className="hidden md:block" />
                            <span className="text-primary">Great Together</span>
                        </h2>
                        <p className="text-zinc-400 text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Ready to deploy a high-performance engineering team? Our architects are on standby to
                            evaluate your technical requirements and initiate the onboarding sequence.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center justify-center gap-6">
                        <Link href="/contact" className="w-full sm:w-auto">
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "rgba(228, 36, 47, 0)",
                                    color: "#E4242F"
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto px-10 py-5 bg-primary border border-zinc-700 text-white text-xs tracking-[0.3em] uppercase font-bold transition-colors shadow-lg lg:min-w-[240px]"
                            >
                                Contact Us
                            </motion.button>
                        </Link>

                        <motion.button
                            onClick={() => openModal()}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(255, 255, 255, 0)",
                                color: "#ffffff"
                            }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto px-10 py-5 bg-white border border-zinc-700 text-black text-xs tracking-[0.3em] uppercase font-bold transition-all lg:min-w-[240px]"
                        >
                            Schedule a Call
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}