import { NextResponse } from "next/server";
import { client } from "@/lib/sanity";

export const revalidate = 3600;

export async function GET() {
    const baseUrl = "https://mahrajtechnologies.com";

    let posts = [];

    try {
        posts = await client.fetch(
            `*[_type == "post"] | order(publishedAt desc) {
                "slug": slug.current,
                _updatedAt,
                publishedAt,
                "imageUrl": mainImage.asset->url
            }`,
            {},
            {
                next: { revalidate: 3600 },
            }
        );
    } catch (error) {
        console.error("Error fetching posts for sitemap:", error);
    }

    const currentDate = new Date();

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>
${posts
            .map(
                (post) => `
    <url>
        <loc>${baseUrl}/blogs/${post.slug}</loc>
        <lastmod>${new Date(
                    post._updatedAt || post.publishedAt || currentDate
                ).toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>

        ${post.imageUrl
                        ? `
        <image:image>
            <image:loc>${post.imageUrl}</image:loc>
        </image:image>
        `
                        : ""
                    }
    </url>
`
            )
            .join("")}
</urlset>`;

    return new NextResponse(xml, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}