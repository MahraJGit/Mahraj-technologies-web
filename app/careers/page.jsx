import PageHero from '@/components/sections/PageHero';
import JobCards from '@/components/sections/Careers/JobCards';
import ApplicationForm from '@/components/sections/Careers/ApplicationForm';

export const metadata = {
  title: 'Careers | Mahraj Technologies',
  description: 'Join the Mahraj Technologies team. We are looking for talented individuals to help us build the future.',
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <PageHero
        eyebrow="MAHRAJ / CAREERS"
        titleLight="CAREERS"
        titleDark="AT MAHRAJ"
        description="We are always looking for talented individuals who are passionate about building the future of technology."
      />
      <JobCards />
      <ApplicationForm />
    </main>
  );
}
