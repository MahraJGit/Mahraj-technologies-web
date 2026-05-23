"use client";
import { ArrowRight, Code, PenTool, Smartphone } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link";

export default function Services() {
    const services = [
        {
            id: "01",
            code: "WEB_DEV",
            title: "WEB DEVELOPMENT",
            description: "We build high-performance, scalable websites focused on seamless user experience, speed optimization, and strong business conversion results.",
            features: ["FAST-LOADING WEBSITES", "SCALABLE ARCHITECTURE DESIGN", "RESPONSIVE USER EXPERIENCE", "SECURE CODE STRUCTURE"],
            icon: Code
        },
        {
            id: "02",
            code: "MOB_DEV",
            title: "MOBILE DEVELOPMENT",
            description: "We build high-performance mobile applications that deliver smooth user experiences and scalable digital solutions for modern businesses.",
            features: ["NATIVE APP BUILDS", "CROSS-PLATFORM APPS", "PERFORMANCE OPTIMIZATION", "USER-FOCUSED DESIGN"],
            icon: Smartphone
        },
        {
            id: "03",
            code: "GRAPHICS",
            title: "GRAPHIC DESIGN",
            description: "We create visually compelling brand designs that strengthen identity, improve engagement, and deliver consistent professional digital impressions.",
            features: ["BRAND-FOCUSED VISUALS", "CREATIVE DESIGN STRATEGY", "MODERN AESTHETIC STYLE", "CONSISTENT VISUAL IDENTITY"],
            icon: PenTool
        },
    ]
    return (
        <section className="bg-black py-16 lg:py-24">
            <div className="site-container">
                {/* Section Heading */}
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase">
                        Services
                    </h2>
                    <p className="text-zinc-400 text-lg font-medium">
                        We build specialized services for teams solving enterprise and operational software challenges.
                    </p>

                    <div className="flex justify-center md:justify-end my-4">
                        <Link href={"/services"} className="inline-flex items-center gap-2 font-semibold text-primary">
                            Explore All Services
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
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
    )
}