export default function WhoWeWorkWith() {
    const clients = [
        "Startups",
        "Growing Businesses",
        "Established Companies",
        "Brands",
    ];

    const expertise = [
        "Development",
        "Marketing",
        "Branding",
        "SEO",
        "Automation",
        "Technical Support",
    ];

    return (
        <section className="relative bg-black py-12 lg:py-18 overflow-hidden">

            <div className="absolute top-0 right-0 h-[400px] w-[400px] bg-primary/10 blur-3xl rounded-full" />

            <div className="site-container relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white uppercase leading-tight">
                            Who We Work With
                        </h2>

                        <p className="mt-6 text-zinc-400 text-base md:text-lg leading-relaxed">
                            We work with startups, growing businesses, established companies,
                            and brands looking to strengthen their digital presence, improve
                            operations, and scale online growth.
                            <br /><br />
                            Our experience includes businesses that need development,
                            marketing, branding, SEO, automation, and long-term technical
                            support under one reliable team.
                        </p>
                    </div>

                    <div className="space-y-8">

                        <div>
                            <h4 className="text-sm uppercase tracking-widest text-zinc-500 mb-4">
                                Client Types
                            </h4>

                            <div className="grid grid-cols-2 gap-4">
                                {clients.map((item, i) => (
                                    <div
                                        key={i}
                                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex items-center justify-center text-center min-h-[60px] transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.06]"
                                    >
                                        <div className="text-white font-semibold text-sm">
                                            {item}
                                        </div>

                                        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full"></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm uppercase tracking-widest text-zinc-500 mb-4">
                                What We Handle
                            </h4>

                            <div className="flex flex-wrap gap-2">
                                {expertise.map((item, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-zinc-300 hover:border-primary/30 hover:text-white transition"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}