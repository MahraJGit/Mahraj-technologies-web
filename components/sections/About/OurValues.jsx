export default function OurValues() {
    const values = [
        "Expertise",
        "Accountability",
        "Innovation",
        "Long-Term Commitment",
    ];

    return (
        <section className="relative bg-black py-12 lg:py-18 overflow-hidden">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] bg-primary/10 blur-3xl rounded-full" />

            <div className="site-container relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white uppercase leading-tight">
                            Our Values
                        </h2>

                        <p className="mt-6 text-zinc-400 text-base md:text-lg leading-relaxed">
                            At Mahraj Technologies, our values are built around expertise,
                            accountability, innovation, and long-term commitment. We believe
                            strong communication, technical excellence, and transparent
                            collaboration create successful digital partnerships.
                            <br /><br />
                            Our team continuously improves skills, adapts to changing technologies,
                            and focuses on delivering measurable business impact instead of temporary solutions.
                        </p>
                    </div>

                    {/* RIGHT SIDE (Visual Structure instead of empty space) */}
                    <div className="grid grid-cols-2 gap-5">

                        {values.map((item, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex items-center justify-center text-center min-h-[140px] transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.06]"
                            >

                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative z-10">
                                    <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center">
                                        <span className="h-2 w-2 rounded-full bg-primary"></span>
                                    </div>

                                    <h4 className="text-white font-semibold text-sm md:text-base">
                                        {item}
                                    </h4>
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