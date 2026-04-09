import PageHero from "@/components/sections/PageHero";
import CaseStudyList from "@/components/sections/CaseStudies/CaseStudyList";

export const metadata = {
  title: "Case Studies | Mahraj Technologies",
  description: "Explore how we solve complex structural problems through aggressive clarity and technical soul.",
};

export default function CaseStudiesPage() {
  return (
    <main className="w-full bg-black min-h-screen">
      <PageHero
        eyebrow="MAHRAJ / CASE STUDIES"
        titleLight="THE ARCHITECTURE OF"
        titleDark="IMPACT."
        description="We don't just ship features. We solve complex structural problems through aggressive clarity and technical soul. Explore our recent engineering triumphs."
      />

      <CaseStudyList />
    </main>
  );
}
