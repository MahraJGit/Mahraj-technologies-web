import PageHero from '@/components/sections/PageHero';
import JobCards from '@/components/sections/Careers/JobCards';
import { client } from "@/lib/sanity";
import { getAllJobs } from "@/lib/queries";

export const revalidate = 60;

export const metadata = {
  title: 'Careers | Mahraj Technologies',
  description: 'Join the Mahraj Technologies team. We are looking for talented individuals to help us build the future.',
};

export default async function CareersPage() {
  const jobs = await client.fetch(getAllJobs);

  return (
    <main className="min-h-screen bg-black text-white">
      <PageHero
        eyebrow="MAHRAJ / CAREERS"
        titleLight="Join"
        titleDark="Our Team"
        description="At Mahraj Technologies, we welcome passionate professionals to grow, innovate, and build impactful digital solutions together."
      />
      <JobCards jobs={jobs} />
    </main>
  );
}
