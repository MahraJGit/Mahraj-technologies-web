"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function Counter({ target, start }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let current = 0;
        const end = Number(target);
        const duration = 2000;
        const stepTime = 20;
        const steps = duration / stepTime;
        const increment = end / steps;

        const timer = setInterval(() => {
            current += increment;

            if (current >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [start, target]);

    return <span>{count}%</span>;
}

export default function WhoWeAre() {
    const ref = useRef(null);

    // 👇 triggers when section enters viewport
    const isInView = useInView(ref, {
        once: true,       // run only once
        amount: 0.3       // 30% visible
    });

    const stats = [
        { number: 95, description: "CLIENT SATISFACTION" },
        { number: 80, description: "VISIBILITY GROWTH" },
        { number: 70, description: "CONVERSION INCREASE" },
        { number: 60, description: "LEAD GROWTH" },
    ];

    return (
        <section
            ref={ref}
            id="who-we-are"
            className="relative overflow-hidden bg-black py-12 lg:py-18"
        >
            <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

            <div className="site-container relative z-10">
                <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">

                    {/* LEFT TEXT */}
                    <div>
                        <h2 className="mb-6 text-4xl font-bold uppercase leading-tight text-white md:text-6xl">
                            Who We Are
                        </h2>

                        <p className="max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
                            We are a full-cycle digital solutions company built to
                            help businesses grow through technology, design, and
                            performance-driven marketing.
                            <br />
                            <br />
                            Our team works in a remote-based structure aligned with
                            European workflows while serving clients across the Gulf
                            region and global markets.
                            <br />
                            <br />
                            From startups to established businesses, we focus on
                            long-term collaboration, not one-time delivery.
                            <br />
                            <br />
                            Our engagement model is flexible, with contracts typically ranging from 3 months to 4 years, depending on business needs and growth scope.
                        </p>
                    </div>

                    {/* RIGHT STATS */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:bg-white/[0.06]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-all duration-300 group-hover:ring-primary/30">
                                        <h4 className="text-4xl font-bold text-white">
                                            <Counter
                                                target={stat.number}
                                                start={isInView}
                                            />
                                        </h4>
                                    </div>

                                    <p className="text-sm font-semibold tracking-[0.2em] text-zinc-200">
                                        {stat.description}
                                    </p>
                                </div>

                                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}