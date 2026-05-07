"use client";

import { motion } from "framer-motion";
import Link from 'next/link';
import { useCalendly } from "@/context/CalendlyContext";

export default function ServiceCta() {
    const { openModal } = useCalendly();

    return (
        <section className="relative w-full py-16 lg:py-24 overflow-hidden bg-black">
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-65"
                    style={{
                        backgroundImage: 'url("/ServiceCtaSection.png")',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-black/90" />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative z-10 site-container text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Main Heading */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase mb-8 leading-none">
                        Want smoother business operations?
                    </h2>

                    {/* Technical Subheading */}
                    <p className="max-w-xl mx-auto text-zinc-400  text-sm md:text-lg leading-relaxed mb-12 opacity-80">
                        Let&apos;s streamline your operations for better efficiency, productivity, and smooth business workflow management.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/contact" className="w-full sm:w-auto">
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "rgba(228, 36, 47, 0)",
                                    color: "#E4242F"
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto px-10 py-5 bg-primary border border-zinc-700 text-white text-xs uppercase font-bold transition-colors shadow-lg "
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
                            className="w-full sm:w-auto px-10 py-5 bg-white border border-zinc-700 text-black text-xs uppercase font-bold transition-all"
                        >
                            Schedule a Call
                        </motion.button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}