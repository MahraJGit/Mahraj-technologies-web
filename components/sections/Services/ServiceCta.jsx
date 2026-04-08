"use client";

import { motion } from "framer-motion";

export default function ServiceCta() {
    return (
        <section className="relative w-full py-20 md:py-48 overflow-hidden bg-black">
            {/* Background Image with Cinematic Overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-65"
                    style={{
                        backgroundImage: 'url("/ServiceCtaSection.png")',
                    }}
                />
                {/* Vignette and Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-black/90" />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Main Heading */}
                    <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase mb-8 leading-none">
                        READY TO DEPLOY?
                    </h2>

                    {/* Technical Subheading */}
                    <p className="max-w-xl mx-auto text-zinc-400  text-sm md:text-lg leading-relaxed mb-12 opacity-80 tracking-wide">
                        Initialize your digital transformation. Our
                        architects are on standby to engineer your legacy.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto px-10 py-4 bg-primary text-white  text-xs tracking-[0.3em] uppercase font-bold shadow-[0_0_30px_rgba(228,36,47,0.3)] hover:shadow-[0_0_45px_rgba(228,36,47,0.5)] transition-all"
                        >
                            REQUEST PROTOCOL
                        </motion.button>

                        <motion.button
                            whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                            className="w-full sm:w-auto px-10 py-4 border border-zinc-700 text-white  text-xs tracking-[0.3em] uppercase font-bold transition-colors"
                        >
                            TECHNICAL SPECS
                        </motion.button>
                    </div>
                </motion.div>

                {/* Secondary Status Decoration */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.3 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-24 pt-8 border-t border-zinc-900 flex justify-between items-center text-[8px]  text-zinc-500 uppercase tracking-[0.5em]"
                >
                    <span>System Integrity: Verified</span>
                    <span className="hidden md:block">Session: Encrypted_AES_256</span>
                    <span>Status: Standby</span>
                </motion.div>
            </div>
        </section>
    );
}