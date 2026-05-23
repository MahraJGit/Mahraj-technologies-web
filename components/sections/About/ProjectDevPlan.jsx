export default function ProjectDevPlan() {
    const steps = [
        {
            number: "01",
            title: "Understanding",
            description:
                "We study your business goals, audience, and operational needs before planning any solution.",
        },
        {
            number: "02",
            title: "Scalable Planning",
            description:
                "Every strategy, design, and development decision is created with future scalability in mind.",
        },
        {
            number: "03",
            title: "Clear Communication",
            description:
                "We maintain transparent communication throughout the project to keep everything aligned and efficient.",
        },
        {
            number: "04",
            title: "Deliver Incrementally",
            description:
                "We deliver progress in stages so clients can review, improve, and scale faster without delays.",
        },
        {
            number: "05",
            title: "Stay for Launch",
            description:
                "Our support continues during launch and post-launch stages to ensure stable performance and smooth growth.",
        },
    ];

    return (
        <section
            id="project-dev-plan"
            className="relative overflow-hidden bg-black py-12 lg:py-18"
        >
            <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl"></div>

            <div className="site-container relative z-10">

                <div className="mx-auto mb-14 max-w-3xl text-center">

                    <h2 className="mb-5 text-3xl font-bold uppercase text-white md:text-5xl">
                        Project Development Plan
                    </h2>

                    <p className="text-base leading-relaxed text-zinc-400 md:text-lg">
                        Our process is designed to keep projects clear, scalable, and business-focused from day one.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:bg-white/[0.05]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                            <div className="relative z-10 flex h-full flex-col">

                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary ring-1 ring-primary/20">
                                    {step.number}
                                </div>

                                <h3 className="mb-4 text-xl font-semibold text-white">
                                    {step.title}
                                </h3>

                                <p className="text-sm leading-relaxed text-zinc-400">
                                    {step.description}
                                </p>
                            </div>

                            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}