export default function ClientRetention() {
    const reasons = [
        "Transparent Collaboration",
        "Growth-Focused Execution",
        "Reliable Technical Support",
        "Scalable Digital Solutions",
        "Long-Term Support",
        "Results-Driven Strategy",
    ];

    return (
        <section className="relative bg-black py-12 lg:py-18 overflow-hidden">

            <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 bg-primary/10 blur-3xl rounded-full" />

            <div className="site-container relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white uppercase leading-tight">
                            Why Our Clients Stay for 4+ Years
                        </h2>

                        <p className="mt-8 text-zinc-400 text-base md:text-lg leading-relaxed tracking-wide">
                            Businesses continue partnering with Mahraj Technologies because
                            we focus on consistent delivery, transparent communication, and
                            long-term business growth. Our clients trust us for reliable
                            support, strategic execution, and scalable digital solutions that
                            evolve with their business needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">

                        {reasons.map((item, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.06]"
                            >

                                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative z-10 flex items-center gap-4">

                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold ring-1 ring-primary/20">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>

                                    <h4 className="text-white font-medium">
                                        {item}
                                    </h4>

                                </div>

                                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full"></div>
                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </section>
    );
}