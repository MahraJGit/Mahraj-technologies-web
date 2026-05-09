// import { client } from "@/lib/sanity";

// export const revalidate = 3600;

// export default async function sitemap() {
//   const baseUrl = "https://mahrajtechnologies.com";

//   let posts = [];

//   try {
//     posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
//       "slug": slug.current,
//       _updatedAt,
//       publishedAt,
//       "imageUrl": mainImage.asset->url
//     }`, {}, {
//       next: { revalidate: 3600 },
//     });
//   } catch (error) {
//     console.error("Error fetching posts for sitemap:", error);
//   }

//   const currentDate = new Date();

//   const blogUrls = posts.map((post) => ({
//     url: `${baseUrl}/blogs/${post.slug}`,
//     lastModified: post._updatedAt || post.publishedAt || currentDate,
//     changeFrequency: "daily",
//     priority: 0.7,
//     images: post.imageUrl ? [post.imageUrl] : [],
//   }));

//   const staticRoutes = [
//     {
//       path: "",
//       priority: 1.0,
//       changeFrequency: "weekly",
//     },
//     {
//       path: "/services",
//       priority: 0.9,
//       changeFrequency: "monthly",
//     },
//     {
//       path: "/case-studies",
//       priority: 0.8,
//       changeFrequency: "monthly",
//       images: [
//         `${baseUrl}/casestudy-1.png`,
//         `${baseUrl}/casestudy-2.png`,
//         `${baseUrl}/casestudy-3.png`,
//       ]
//     },
//     {
//       path: "/pricing",
//       priority: 0.7,
//       changeFrequency: "monthly",
//     },
//     {
//       path: "/blogs",
//       priority: 0.7,
//       changeFrequency: "daily",
//     },
//     {
//       path: "/careers",
//       priority: 0.6,
//       changeFrequency: "monthly",
//     },
//     {
//       path: "/contact",
//       priority: 0.6,
//       changeFrequency: "monthly",
//     },
//     {
//       path: "/privacy-policy",
//       priority: 0.3,
//       changeFrequency: "yearly",
//     },
//     {
//       path: "/terms-and-conditions",
//       priority: 0.4,
//       changeFrequency: "yearly",
//     },
//   ];

//   const routes = staticRoutes.map((route) => ({
//     url: `${baseUrl}${route.path}`,
//     lastModified: currentDate,
//     changeFrequency: route.changeFrequency,
//     priority: route.priority,
//     images: route.images || [],
//   }));

//   return [...routes, ...blogUrls];
// }

export default function sitemap() {
  return [
    {
      url: "https://mahrajtechnologies.com/static-sitemap.xml",
      lastModified: new Date(),
    },
    {
      url: "https://mahrajtechnologies.com/blog-sitemap.xml",
      lastModified: new Date(),
    },
  ];
}