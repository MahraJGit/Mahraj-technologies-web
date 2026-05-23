"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
    { name: "aws", src: "/CompanySvgs/aws.svg" },
    { name: "github", src: "/CompanySvgs/github.svg" },
    { name: "google", src: "/CompanySvgs/google.svg" },
    { name: "azure", src: "/CompanySvgs/azure.svg" },
    { name: "stripe", src: "/CompanySvgs/stripe.svg" },
    { name: "ebay", src: "/CompanySvgs/ebay.svg" },
];

export default function CompanyLogoMarquee() {
    const displayLogos = [...logos, ...logos];

    return (
        <section className="w-full bg-[#050505] py-16 overflow-hidden border-t border-zinc-900/50">
            <div className="site-container mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-center text-zinc-500 uppercase">
                    Trusted By Industry Leaders
                </h3>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative py-4 flex overflow-hidden group"
            >
                <div className="flex items-center gap-16 md:gap-24 w-max animate-marquee-infinite group-hover:[animation-play-state:paused] px-8">
                    {displayLogos.map((logo, index) => (
                        <div
                            key={`${logo.name}-${index}`}
                            className="relative flex-shrink-0 transition-all duration-300"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                width={250}
                                height={250}
                                className="object-contain w-40 md:w-56 h-auto"
                            />
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}