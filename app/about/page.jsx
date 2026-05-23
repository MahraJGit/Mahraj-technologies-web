import About from '@/components/sections/About/About';
import ClientRetention from '@/components/sections/About/ClientRetention';
import FAQs from '@/components/sections/About/FAQs';
import OurTeam from '@/components/sections/About/OurTeam';
import OurValues from '@/components/sections/About/OurValues';
import ProjectDevPlan from '@/components/sections/About/ProjectDevPlan';
import WhoWeAre from '@/components/sections/About/WhoWeAre';
import WhoWeWorkWith from '@/components/sections/About/WhoWeWorkWith';
import PageHero from '@/components/sections/PageHero';

export const metadata = {
    title: 'About Us | Mahraj Technologies',
    description: 'At Mahraj Technologies, we are a passionate team of innovators dedicated to building exceptional digital solutions that drive real business impact. Discover our story, mission, and the experts behind our success.',
    alternates: {
        canonical: "https://mahrajtechnologies.com/about",
    },
    publisher: "Mahraj Technologies"
};

export default async function AboutPage() {

    return (
        <main className="min-h-screen bg-black text-white">
            <PageHero
                eyebrow="HOME / About"
                titleLight="About Us"
                titleDark=""
                description="At Mahraj Technologies, we welcome passionate professionals to grow, innovate, and build impactful digital solutions together."
            />
            <WhoWeAre />
            <About />
            <ProjectDevPlan />
            <OurTeam />
            <OurValues />
            <WhoWeWorkWith />
            <ClientRetention />
            <FAQs />
        </main>
    );
}
