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
        titleLight="Our Success"
        titleDark="STORIES"
        description="Explore how we&apos;ve helped businesses achieve measurable growth through strategic digital solutions, improved performance, and consistent long-term success across industries."
      />

      <CaseStudyList />
    </main>
  );
}
