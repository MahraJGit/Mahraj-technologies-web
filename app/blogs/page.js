import PageHero from "@/components/sections/PageHero";
import BlogGrid from "@/components/sections/Blogs/BlogGrid";

export const metadata = {
  title: "Protocol Logs | Mahraj Technologies",
  description: "Deep dives into real-time 3D engines, edge protocols, and neural architectures. Access the technical breakthroughs of Mahraj Technologies.",
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-black">
      <PageHero
        eyebrow="TECHNICAL ARCHIVE"
        titleLight="PROTOCOL"
        titleDark="Logs & Briefs"
        description="Deep dives into our recent technical breakthroughs, real-time architectures, and neural synchronization protocols."
      />
      <BlogGrid />
    </main>
  );
}
