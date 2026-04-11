import PageHero from "@/components/sections/PageHero";
import ServiceCards from "@/components/sections/Services/ServiceCards";
import OperationalFlow from "@/components/sections/Services/OperationalFlow";
import ServiceCta from "@/components/sections/Services/ServiceCta";

export const metadata = {
  title: "Services | Mahraj Technologies",
};

export default function ServicesPage() {
  return (
    <main className="w-full">
      <PageHero
        eyebrow="MAHRAJ / SERVICES"
        titleLight="Our Core"
        titleDark="Digital Solutions"
        description="At Mahraj Technologies, we deliver integrated digital solutions designed to drive growth, performance, and business success."
      />

      <ServiceCards />

      {/* Operational Flow Section */}
      <OperationalFlow />

      {/* Service CTA Section */}
      <ServiceCta />
    </main>
  );
}
