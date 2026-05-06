import teamImg from "@/public/team.png";

export default function OurTeam() {
    return (
        <section className="bg-body py-20 overflow-hidden">
            <div className="w-full relative">
                <div className="site-container mb-12">
                    <div className="flex flex-col gap-4 text-center">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase">
                            Meet <br />
                            <span className="text-zinc-600">Our Team</span>
                        </h2>
                    </div>
                </div>

                <div className="relative w-full">
                    <div className="absolute top-0 left-0 w-full h-20 md:h-40 bg-gradient-to-b from-black via-black/40 to-transparent z-20" />

                    <div className="relative z-10 bg-primary/60 flex items-center justify-center overflow-hidden">
                        <div className="absolute top-[30%] -translate-y-1/2 left-0 w-full z-0 pointer-events-none">
                            <div className="flex w-max animate-marquee-infinite whitespace-nowrap opacity-20">
                                {[...Array(8)].map((_, i) => (
                                    <span key={i} className="text-white text-6xl md:text-9xl font-black uppercase px-12">
                                        our strength behind success
                                    </span>
                                ))}
                            </div>
                        </div>

                        <img
                            src={teamImg.src}
                            alt="Mahraj Team"
                            className="relative z-10 w-full h-auto"
                        />
                    </div>

                    <div className="absolute bottom-0 left-0 w-full h-20 md:h-40 bg-gradient-to-t from-black via-black/40 to-transparent z-20" />
                </div>



            </div>
        </section>
    );
}
