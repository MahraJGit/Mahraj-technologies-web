import PageHero from "@/components/sections/PageHero";
import PricingCards from "@/components/sections/Pricing/PricingCards";
import ProtocolSpecifications from "@/components/sections/Pricing/ProtocolSpecifications";
import Cta from "@/components/sections/Pricing/Cta";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <PageHero
        eyebrow="MAHRAJ / PRICING"
        titleLight="PRICING &"
        titleDark="Service Models"
        description="High-performance engineering teams, precision-built MVPs, and redundant maintenance protocols. Select the engagement layer that aligns with your technical roadmap."
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
