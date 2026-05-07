import PageHero from "@/components/sections/PageHero";
import CaseStudyList from "@/components/sections/CaseStudies/CaseStudyList";

export const metadata = {
  title: "Digital Solutions Case Studies |Mahraj Technologies",
  description: "Our digital solutions case studies showcase real projects, results, and success stories, showing how strategies and technology drive business growth smoothly.",
  alternates: {
    canonical: "https://mahrajtechnologies.com/case-studies",
  }
};

export default function CaseStudiesPage() {
  return (
    <main className="w-full bg-black min-h-screen">
      <PageHero
        eyebrow="HOME / CASE STUDIES"
        titleLight="Our Success"
        titleDark="STORIES"
        description="Explore how we&apos;ve helped businesses achieve measurable growth through strategic digital solutions, improved performance, and consistent long-term success across industries."
      />

      <CaseStudyList />
    </main>
  );
}
