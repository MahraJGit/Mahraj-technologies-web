import { client } from "@/lib/sanity";
import { getAllPosts } from "@/lib/queries";

export default async function sitemap() {
  const baseUrl = "https://mahrajtechnologies.com";

  // Fetch all posts to generate dynamic URLs
  let posts = [];
  try {
    posts = await client.fetch(getAllPosts);
  } catch (error) {
    console.error("Error fetching posts for sitemap:", error);
  }

  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.publishedAt || new Date()),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const routes = [
    "",
    "/services",
    "/case-studies",
    "/pricing",
    "/blogs",
    "/careers",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    "/sitemap",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? 'daily' : 'monthly',
    priority: route === "" ? 1 : 0.7,
  }));

  return [...routes, ...blogUrls];
}
