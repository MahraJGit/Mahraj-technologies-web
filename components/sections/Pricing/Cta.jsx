"use client";

import Image from "next/image";
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
                        priority
                    />
                </div>

                {/* Minimal Overlay */}
                <div className="absolute inset-0 bg-transparent z-10" />

                <div className="relative z-20 p-8 md:p-16 lg:p-24 flex flex-col lg:flex-row items-center justify-between w-full gap-12 lg:gap-16">
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-tight lg:leading-[0.95] mb-6 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)]">
                            Initiate Your <br />
                            <span className="text-primary italic">Neural Build</span>
                        </h2>
                        <p className="text-white text-base md:text-lg lg:text-xl font-black leading-relaxed max-w-xl mx-auto lg:mx-0 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)]">
                            Ready to deploy a high-performance engineering team? Our architects are on standby to
                            evaluate your technical requirements and initiate the onboarding sequence.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-4 sm:gap-6 w-full lg:w-auto shrink-0 justify-center">
                        <a
                            href="/contact"
                            className="bg-[#E4242F] text-white font-bold text-xs md:text-sm uppercase tracking-[0.25em] px-10 py-5 lg:px-12 lg:py-6 rounded-md hover:bg-[#c91d26] transition-all shadow-lg text-center w-full sm:w-auto lg:min-w-[240px]"
                        >
                            Contact Us
                        </a>
                        <button
                            onClick={() => openModal()}
                            className="bg-white text-black font-bold text-xs md:text-sm uppercase tracking-[0.25em] px-10 py-5 lg:px-12 lg:py-6 rounded-md hover:bg-zinc-200 transition-all shadow-lg text-center w-full sm:w-auto lg:min-w-[240px]"
                        >
                            Schedule a Call
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}