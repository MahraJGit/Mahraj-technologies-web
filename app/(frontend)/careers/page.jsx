import PageHero from '@/components/sections/PageHero';
import JobCards from '@/components/sections/Careers/JobCards';
import { client } from "@/lib/sanity";
import { getAllJobs } from "@/lib/queries";

export const revalidate = 3600;

export const metadata = {
  title: 'Build the Future Tech Careers |Mahraj Technologies',
  description: 'We offer career opportunities at Mahraj Technologies where you can grow your skills, join innovative teams, and build the future tech careers with us.',
  alternates: {
    canonical: "https://mahrajtechnologies.com/careers",
  },
  publisher: "Mahraj Technologies"
};

export default async function CareersPage() {
  const jobs = await client.fetch(getAllJobs);

  return (
    <main className="min-h-screen bg-black text-white">
      <PageHero
        eyebrow="HOME / CAREERS"
        titleLight="Join"
        titleDark="Our Team"
        description="At Mahraj Technologies, we welcome passionate professionals to grow, innovate, and build impactful digital solutions together."
      />
      <JobCards jobs={jobs} />
    </main>
  );
}
