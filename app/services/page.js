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
        titleLight="SERVICES"
        titleDark="ARCHITECTURE"
        description="Precision-engineered digital infrastructure. Mahraj Technologies deploys monolithic stability with neural-link adaptability."
      />

      <ServiceCards />

      {/* Operational Flow Section */}
      <OperationalFlow />

      {/* Service CTA Section */}
      <ServiceCta />
    </main>
  );
}
