import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Tag, Hash } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import blogImg from '@/public/BlogImg.png';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Protocol Not Found" };

  return {
    title: `${post.title} | Mahraj Technologies`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Simple next post logic for navigation
  const currentIndex = blogPosts.findIndex((p) => p.id === post.id);
  const nextPost = blogPosts[(currentIndex + 1) % blogPosts.length];

  return (
    <main className="min-h-screen bg-black pt-32 pb-24">
      {/* Article Header / Hero */}
      <header className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Breadcrumbs */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-primary transition-colors text-[10px] font-black uppercase tracking-[0.3em] mb-12 group"
        >
          <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
          Back to Protocol Logs
        </Link>

        {/* Title Stack */}
        <div className="space-y-6 max-w-4xl">
          <div className="flex items-center gap-4">
            <span className="bg-[#E4242F] text-white text-[10px] font-black tracking-widest px-3 py-1.5 uppercase">
              {post.category}
            </span>
            <span className="text-[10px] font-bold text-zinc-600 tracking-[0.2em]">{post.ref}</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.95]">
            {post.title}
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl font-bold leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </header>

      {/* Featured Visual */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-sm border border-white/10">
          <Image
            src={blogImg}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        </div>
      </section>

      {/* Article Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-20">
        {/* Main Protocol Content */}
        <div className="flex-1">
          <article className="prose prose-invert prose-zinc max-w-none 
            prose-h2:text-white prose-h2:text-3xl prose-h2:font-black prose-h2:uppercase prose-h2:tracking-tight prose-h2:mt-12 prose-h2:mb-6
            prose-p:text-zinc-400 prose-p:text-lg prose-p:leading-relaxed prose-p:mb-8
            prose-strong:text-white prose-strong:font-bold
          ">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {/* Footer Metadata / Tags */}
          <div className="mt-20 pt-12 border-t border-white/10 flex flex-wrap gap-12">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest flex items-center gap-2">
                <Calendar className="w-3 h-3" /> Published Date
              </span>
              <span className="text-white font-bold text-sm tracking-wide">{post.date}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest flex items-center gap-2">
                <Tag className="w-3 h-3" /> Classification
              </span>
              <span className="text-white font-bold text-sm tracking-wide">{post.filter}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest flex items-center gap-2">
                <Hash className="w-3 h-3" /> Node Access
              </span>
              <span className="text-white font-bold text-sm tracking-wide">Secured</span>
            </div>
          </div>
        </div>

        {/* Sidebar / Reading Actions */}
        <aside className="lg:w-80 shrink-0">
          <div className="sticky top-32 space-y-12">
            {/* Subscription Mini Node */}
            <div className="p-8 bg-zinc-950 border border-white/5 rounded-sm">
              <h4 className="text-white font-black uppercase tracking-tighter text-xl mb-4">Protocol Updates</h4>
              <p className="text-zinc-500 text-sm font-medium mb-6">Stay synchronized with our latest technical breakthroughs.</p>
              <Link
                href="/blogs"
                className="inline-block w-full bg-white text-black font-black text-[10px] uppercase tracking-[0.2em] py-4 text-center hover:bg-primary hover:text-white transition-all"
              >
                Return to Archive
              </Link>
            </div>

            {/* Next Protocol Mini Node */}
            <div className="group">
              <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.3em] mb-4 block">Next Strategy</span>
              <Link href={`/blogs/${nextPost.slug}`} className="block space-y-4">
                <div className="relative aspect-video rounded-sm overflow-hidden border border-white/5 opacity-60 group-hover:opacity-100 transition-opacity">
                  <Image
                    src={blogImg}
                    alt="Next Post"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h5 className="text-white font-black uppercase tracking-tight text-lg group-hover:text-primary transition-colors leading-tight">
                  {nextPost.title}
                </h5>
                <div className="flex items-center gap-2 text-primary font-black uppercase text-[10px] tracking-widest">
                  Read Next <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>
        </aside>
      </section>

      {/* Global CTA Integration */}
      <section className="mt-32 border-t border-white/5 pt-24">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h3 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8">
            Ready to Implement <span className="text-primary italic">Precision?</span>
          </h3>
          <Link
            href="/contact"
            className="inline-block bg-[#E4242F] text-white font-black px-12 py-6 rounded-md uppercase tracking-[0.3em] text-[11px] hover:bg-white hover:text-black transition-all shadow-xl"
          >
            Connect with Architects
          </Link>
        </div>
      </section>
    </main>
  );
}
