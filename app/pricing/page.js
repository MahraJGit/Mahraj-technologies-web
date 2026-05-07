import PageHero from "@/components/sections/PageHero";
import PricingCards from "@/components/sections/Pricing/PricingCards";
import ProtocolSpecifications from "@/components/sections/Pricing/ProtocolSpecifications";
import Cta from "@/components/sections/Pricing/Cta";

export const metadata = {
  title: "Digital Service Price Plan |Mahraj Technologies",
  description: "We offer digital service price plan options to fit business needs. Our pricing page helps you choose affordable digital solutions for growth and success.",
  alternates: {
    canonical: "https://mahrajtechnologies.com/pricing",
  },
  publisher: "Mahraj Technologies"
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <PageHero
        eyebrow="HOME / PRICING"
        titleLight="Our Pricing"
        titleDark="Structure"
        description="At Mahraj Technologies, we offer a transparent and flexible pricing structure designed to match business goals, ensuring value-driven digital solutions for every client."
      />

      {/* Pricing Cards Section */}
      <PricingCards />

      {/* Comparison Table Section */}
      <ProtocolSpecifications />

      {/* High-Fidelity CTA Section */}
      <Cta />
    </main>
  );
}
