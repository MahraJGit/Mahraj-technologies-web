import Hero from "@/components/sections/Home/Hero";
import About from "@/components/sections/Home/About";
import TeamMarquee from "@/components/sections/Home/TeamMarquee";

export default function HomePage() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <TeamMarquee />
    </main>
  );
}
