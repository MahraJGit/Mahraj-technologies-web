import PageHero from "@/components/sections/PageHero";
import PricingCards from "@/components/sections/Pricing/PricingCards";
import ProtocolSpecifications from "@/components/sections/Pricing/ProtocolSpecifications";
import Cta from "@/components/sections/Pricing/Cta";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <PageHero
        eyebrow="MAHRAJ / PRICING"
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
