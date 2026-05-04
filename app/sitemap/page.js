import Link from 'next/link';
import { client } from "@/lib/sanity";
import { getAllPosts } from "@/lib/queries";
import fs from 'fs';
import path from 'path';

export const metadata = {
  title: "Sitemap | Mahraj Technologies",
  description: "Navigate easily through the Mahraj Technologies website with our complete HTML sitemap.",
};

export const revalidate = 60; // Revalidate every 60 seconds

// Helper to format path string into Title Case name
function formatName(basePath) {
  if (basePath === '') return 'Home';
  
  // Remove leading slash and split by slash
  const parts = basePath.replace(/^\//, '').split('/');
  
  // Format each part (e.g., "case-studies" -> "Case Studies")
  const formattedParts = parts.map(part => {
    return part.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  });
  
  return formattedParts.join(' ');
}

function getAppRoutes(dir = path.join(process.cwd(), 'app'), basePath = '') {
  let routes = [];
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        // Exclude specific directories, dynamic route segments (starting with '['), and route groups (starting with '(')
        if (
          !entry.name.startsWith('[') &&
          !entry.name.startsWith('(') &&
          !entry.name.startsWith('_') &&
          entry.name !== 'api' &&
          entry.name !== 'admin' &&
          entry.name !== 'sitemap'
        ) {
          routes.push(...getAppRoutes(path.join(dir, entry.name), `${basePath}/${entry.name}`));
        }
      } else if (entry.isFile() && (entry.name === 'page.js' || entry.name === 'page.jsx' || entry.name === 'page.tsx')) {
        routes.push({
          name: formatName(basePath),
          href: basePath === '' ? '/' : basePath
        });
      }
    }
  } catch (error) {
    console.error("Error reading directory:", error);
  }
  return routes;
}

export default async function SitemapPage() {
  const posts = await client.fetch(getAllPosts);

  const staticLinks = getAppRoutes();

  return (
    <main className="min-h-screen bg-[#050505]">
      <div className="pt-32 pb-12 text-center border-b border-zinc-800">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sitemap</h1>
        <p className="text-zinc-400">Navigate easily through all the pages of our website.</p>
      </div>

      <section className="relative py-16 lg:py-24 overflow-hidden bg-[radial-gradient(circle_at_1px_1px,#18181b_1px,transparent_0)] bg-[size:40px_40px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-zinc-300">
          <div className="space-y-12">
            
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-primary pl-4">Main Pages</h2>
              <ol className="flex flex-col space-y-3 mt-6 list-decimal pl-5 text-zinc-500">
                {staticLinks.map((link) => (
                  <li key={link.href} className="pl-2">
                    <Link href={link.href} className="text-lg text-zinc-400 hover:text-white hover:underline transition-colors duration-200 py-1">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ol>
            </div>

            {posts && posts.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-primary pl-4 mt-8">Blogs</h2>
                <ol className="flex flex-col space-y-3 mt-6 list-decimal pl-5 text-zinc-500">
                  {posts.map((post) => (
                    <li key={post._id} className="pl-2">
                      <Link href={`/blogs/${post.slug}`} className="text-zinc-400 hover:text-white hover:underline transition-colors duration-200 py-1" title={post.title}>
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            )}

          </div>
        </div>
      </section>
    </main>
  );
}
