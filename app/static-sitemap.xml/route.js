import { NextResponse } from "next/server";
import { getAllServiceSlugs } from "@/lib/services/registry";

export const revalidate = 3600;

export async function GET() {
    const baseUrl = "https://mahrajtechnologies.com";

    const currentDate = new Date();

    const staticRoutes = [
        {
            path: "",
            priority: 1.0,
            changeFrequency: "weekly",
        },
        {
            path: "/services",
            priority: 0.9,
            changeFrequency: "monthly",
        },
        ...getAllServiceSlugs().map((slug) => ({
            path: `/services/${slug}`,
            priority: 0.85,
            changeFrequency: "monthly",
        })),
        {
            path: "/case-studies",
            priority: 0.8,
            changeFrequency: "monthly",
        },
        {
            path: "/pricing",
            priority: 0.7,
            changeFrequency: "monthly",
        },
        {
            path: "/blogs",
            priority: 0.7,
            changeFrequency: "daily",
        },
        {
            path: "/careers",
            priority: 0.6,
            changeFrequency: "monthly",
        },
        {
            path: "/contact",
            priority: 0.6,
            changeFrequency: "monthly",
        },
        {
            path: "/privacy-policy",
            priority: 0.3,
            changeFrequency: "yearly",
        },
        {
            path: "/terms-and-conditions",
            priority: 0.4,
            changeFrequency: "yearly",
        },
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>
${staticRoutes.map((route) => `
    <url>
        <loc>${baseUrl}${route.path}</loc>
        <lastmod>${currentDate.toISOString()}</lastmod>
        <changefreq>${route.changeFrequency}</changefreq>
        <priority>${route.priority}</priority>

        ${(route.images || [])
            .map(
                (image) => `
            <image:image>
                <image:loc>${image}</image:loc>
            </image:image>
        `
            )
            .join("")}
    </url>
`).join("")}
</urlset>`;

    return new NextResponse(xml, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}