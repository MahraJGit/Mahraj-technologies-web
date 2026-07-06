import PageHero from "@/components/sections/PageHero";
import ServiceCards from "@/components/sections/Services/ServiceCards";
import OperationalFlow from "@/components/sections/Services/OperationalFlow";
import ServiceCta from "@/components/sections/Services/ServiceCta";
import { servicesPageCards } from "@/lib/services/data/services-page";

export const metadata = {
  title: "Core Digital Services | Mahraj Technologies",
  description: "Our core digital services Mahraj Technologies deliver web development, SEO, automation, and marketing solutions to help businesses grow online.",
  alternates: {
    canonical: "https://mahrajtechnologies.com/services",
  },
  publisher: "Mahraj Technologies"
};

export default function ServicesPage() {
  return (
    <main className="w-full">
      <PageHero
        eyebrow="HOME / SERVICES"
        titleLight="Our Core"
        titleDark="Digital Solutions"
        description="At Mahraj Technologies, we deliver integrated digital solutions designed to drive growth, performance, and business success."
      />

      <ServiceCards services={servicesPageCards} />

      {/* Operational Flow Section */}
      <OperationalFlow />

      {/* Service CTA Section */}
      <ServiceCta />
    </main>
  );
}
