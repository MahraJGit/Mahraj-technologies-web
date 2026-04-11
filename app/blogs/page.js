import PageHero from "@/components/sections/PageHero";
import BlogGrid from "@/components/sections/Blogs/BlogGrid";
import { client } from "@/lib/sanity";
import { getAllPosts } from "@/lib/queries";

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateMetadata() {
  return {
    title: "Protocol Logs | Mahraj Technologies",
    description: "Deep dives into real-time 3D engines, edge protocols, and neural architectures. Access the technical breakthroughs of Mahraj Technologies.",
  };
}

export default async function BlogsPage() {
  const posts = await client.fetch(getAllPosts);

  return (
    <main className="min-h-screen bg-black">
      <PageHero
        eyebrow="MAHRAJ / BLOGS"
        titleLight="Our"
        titleDark="Knowledge HUB"
        description="Explore our expert insights, digital strategies, and industry trends to help grow your business online."
      />
      <BlogGrid posts={posts} />
    </main>
  );
}
