import PageHero from "@/components/sections/PageHero";
import BlogGrid from "@/components/sections/Blogs/BlogGrid";
import { client } from "@/lib/sanity";
import { getPaginatedPosts, getPostsCount } from "@/lib/queries";

export const revalidate = 3600;

export async function generateMetadata() {
  return {
    title: "Digital Business Blogs |Mahraj Technologies",
    description: "We share insights and updates on our digital business blog, covering trends, strategies, and ideas to help businesses grow with modern digital solutions.",
    alternates: {
      canonical: "https://mahrajtechnologies.com/blogs",
    },
    publisher: "Mahraj Technologies"
  };
}

export default async function BlogsPage({ searchParams }) {
  const params = await searchParams;
  const currentPage = parseInt(params?.page) || 1;
  const activeFilter = params?.filter || "ALL";
  const limit = 5;
  const start = (currentPage - 1) * limit;
  const end = start + limit;

  // Fetch posts and total count in parallel
  const [posts, totalCount] = await Promise.all([
    client.fetch(getPaginatedPosts, {
      category: activeFilter,
      start,
      end
    }),
    client.fetch(getPostsCount, {
      category: activeFilter
    })
  ]);

  const totalPages = Math.ceil(totalCount / limit);

  return (
    <main className="min-h-screen bg-black">
      <PageHero
        eyebrow="HOME / BLOGS"
        titleLight="Our"
        titleDark="Knowledge HUB"
        description="Explore our expert insights, digital strategies, and industry trends to help grow your business online."
      />
      <BlogGrid
        posts={posts}
        totalPages={totalPages}
        currentPage={currentPage}
        activeFilter={activeFilter}
      />
    </main>
  );
}
