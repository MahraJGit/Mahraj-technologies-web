import type { ServiceIndustry } from "@/lib/services/types";
import SectionHeading from "../shared/SectionHeading";

interface IndustriesServedSectionProps {
  heading?: string;
  description?: string;
  industries: ServiceIndustry[];
}

export default function IndustriesServedSection({
  heading = "Industries We've Served",
  description,
  industries,
}: IndustriesServedSectionProps) {
  return (
    <section className="bg-black py-12 lg:py-18 border-b border-zinc-900/50">
      <div className="site-container">
        <SectionHeading title={heading} description={description} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {industries.map((industry, index) => (
            <article
              key={industry.title}
              className="group relative overflow-hidden rounded-lg border border-zinc-900/80 p-6"
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <span className="mb-5 block text-sm text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-3 text-xl font-bold leading-tight text-white transition-colors group-hover:text-primary">
                  {industry.title}
                </h3>
                <p className="text-base leading-relaxed text-zinc-500 transition-colors group-hover:text-zinc-400">
                  {industry.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
