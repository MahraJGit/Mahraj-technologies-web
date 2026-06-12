import Hero from "@/components/sections/Home/Hero";
import Services from "@/components/sections/Home/Services";
import Industries from "@/components/sections/Home/Industries";
import CompanyLogoMarquee from "@/components/sections/About/CompanyLogoMarquee";

export default function HomePage() {
  return (
    <main className="w-full">
      <Hero />
      <Services />
      <CompanyLogoMarquee />
      <Industries />
    </main>
  );
}
