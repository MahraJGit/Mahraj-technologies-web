import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Tag, Hash, User, Clock, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import { client, urlFor } from "@/lib/sanity";
import { getPostBySlug, getAllPosts } from "@/lib/queries";
import PortableText from "@/components/PortableText";

export const revalidate = 60;

// Helper: Calculate Reading Time
function calculateReadingTime(content) {
  if (!content) return 0;
  const wordsPerMinute = 200;
  const text = content
    .filter((block) => block._type === 'block')
    .map((block) => block.children.map((child) => child.text).join(''))
    .join(' ');
  const wordCount = text.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}



export async function generateMetadata({ params }) {
  const { slug } = await params;
  if (!slug) return { title: "Protocol Logs | Mahraj Technologies" };

  const post = await client.fetch(getPostBySlug, { slug });
  if (!post) return { title: "Protocol Not Found" };

  const canonical = `https://mahraj.tech/blogs/${post.slug}`;

  return {
    title: post.seo?.metaTitle || `${post.title} | Mahraj Technologies`,
    description: post.seo?.metaDescription || post.excerpt,
    keywords: post.seo?.focusKeyword,
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
      url: canonical,
      images: post.seo?.ogImage ? [urlFor(post.seo.ogImage).url()] : (post.mainImage ? [urlFor(post.mainImage).url()] : []),
      type: 'article',
    },
  };
}

export async function generateStaticParams() {
  const posts = await client.fetch(getAllPosts);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  if (!slug) {
    notFound();
  }

  const post = await client.fetch(getPostBySlug, { slug });

  if (!post) {
    notFound();
  }

  const readingTime = calculateReadingTime(post.content);


  // Fetch all posts for sidebar logic
  const allPosts = await client.fetch(getAllPosts);
  const recentPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 5);

  // Technical SEO: JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.mainImage ? urlFor(post.mainImage).url() : undefined,
    "datePublished": post.publishedAt,
    "author": {
      "@type": "Person",
      "name": post.author?.name || "Mahraj Architect"
    }
  };

  const faqJsonLd = post.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <main className="min-h-screen bg-black pt-32 pb-24">
      {/* JSON-LD Injections */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Article Header / Hero */}
      <header className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-primary transition-colors text-[10px] font-black uppercase tracking-[0.3em] mb-12 group"
        >
          <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
          Back to Blogs
        </Link>

        <div className="space-y-8 max-w-4xl">
          <div className="flex flex-wrap items-center gap-6">
            {post.category && (
              <span className="bg-primary/10 text-primary text-[10px] font-black tracking-widest px-4 py-2 uppercase border border-primary/20">
                {post.category}
              </span>
            )}
            <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
              <Calendar className="w-3 h-3" />
              {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) : 'LOG_PENDING'}
            </div>
            <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
              <Clock className="w-3 h-3" />
              {readingTime} MIN READ
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl text-white uppercase tracking-tighter leading-[0.9]">
            {post.title}
          </h1>

          <p className="text-zinc-500 text-xl font-medium leading-relaxed max-w-2xl">
            {post.excerpt}
          </p>

        </div>
      </header>

      {/* Main Image */}
      <section className="max-w-[750px] mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm border border-white/5">
          {post.mainImage ? (
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.mainImage.alt || post.title}
              fill
              sizes="(max-width: 750px) 100vw, 750px"
              className="object-cover opacity-90"
              priority
            />
          ) : (
            <div className="w-full h-full bg-zinc-950 flex items-center justify-center">
              <Hash className="w-12 h-12 text-zinc-900" />
            </div>
          )}
        </div>
      </section>

      {/* Article Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-20">

        {/* Main Protocol Content */}
        <div className="lg:col-span-9">
          <div className="prose prose-invert prose-zinc max-w-none">
            <PortableText value={post.content} />
          </div>

          {/* Author Signature Section */}
          {post.author && (
            <div className="mt-20 p-8 bg-zinc-950 border border-zinc-900 rounded-sm flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-primary/20 shrink-0">
                {post.author.image ? (
                  <Image 
                    src={urlFor(post.author.image).url()} 
                    alt={post.author.name} 
                    fill 
                    sizes="96px"
                    className="object-cover" 
                  />
                ) : (
                  <User className="w-12 h-12 m-6 text-zinc-800" />
                )}
              </div>
              <div className="flex flex-col text-center md:text-left">
                <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-2">AUTHOR</span>
                <h4 className="text-white text-2xl font-black uppercase tracking-tight mb-4">{post.author.name}</h4>
                {post.author.bio && (
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-xl">
                    {post.author.bio}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Structured FAQs */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-32 border-t border-zinc-900 pt-20">
              <h3 className="text-white text-3xl font-black uppercase tracking-tight mb-12 flex items-center gap-4">
                <span className="text-primary">//</span> FREQUENTLY ASKED QUESTIONS
              </h3>
              <div className="space-y-3">
                {post.faqs.map((faq, i) => (
                  <div key={i} className="bg-zinc-950/50 p-8 border border-zinc-900 group transition-colors hover:border-zinc-800">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-primary font-black pt-1">Q_</span>
                      <h4 className="text-white font-bold uppercase tracking-tight text-lg">{faq.question}</h4>
                    </div>
                    <div className="flex items-start gap-4 text-zinc-500 leading-relaxed text-sm pl-8">
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {post.tags && (
            <div className="mt-20 flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span key={tag} className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest border border-zinc-900 px-3 py-1 bg-zinc-950">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar Right - Actions */}
        <aside className="lg:col-span-3">
          <div className="sticky top-32 space-y-12">
            <div>
              <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-[0.3em] mb-8 block flex items-center gap-3">
                <span className="w-6 h-[1px] bg-primary" />
                RECENT BLOGS
              </span>
              <div className="space-y-8">
                {recentPosts.map((rPost) => (
                  <Link key={rPost.slug} href={`/blogs/${rPost.slug}`} className="group block">
                    <div className="flex flex-col gap-2">
                      <h5 className="text-white font-black uppercase tracking-tight text-xs leading-tight group-hover:text-primary transition-colors line-clamp-2">
                        {rPost.title}
                      </h5>
                      <div className="flex items-center gap-2 text-zinc-600 font-bold uppercase text-[8px] tracking-[0.2em]">
                        {new Date(rPost.publishedAt).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
                        <ChevronRight className="w-2 h-2 group-hover:translate-x-1 transition-transform text-primary" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
