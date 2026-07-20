"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { urlFor } from '@/lib/sanity';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import LoadingOverlay from '@/components/ui/LoadingOverlay';

export default function BlogGrid({ posts = [], totalPages, currentPage, activeFilter }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const filters = ["ALL", "WEB DEVELOPMENT", "APP DEVELOPMENT", "SOFTWARE DEVELOPMENT", "DIGITAL MARKETING", "GRAPHIC DESIGNING", "ARTIFICIAL INTELLIGENCE"];

  const handleFilterChange = (filter) => {
    startTransition(() => {
      const params = new URLSearchParams();
      if (filter !== "ALL") params.set('filter', filter);
      params.set('page', '1'); // Reset to page 1 on filter change
      router.push(`/blogs?${params.toString()}`, { scroll: false });
    });
  };

  const handlePageChange = (page) => {
    startTransition(() => {
      const params = new URLSearchParams();
      if (activeFilter !== "ALL") params.set('filter', activeFilter);
      params.set('page', page.toString());
      router.push(`/blogs?${params.toString()}`, { scroll: false });
    });
  };

  // Build a compact page list with ellipses for small screens / many pages
  // e.g. [1, '…', 4, 5, 6, '…', 12]
  const getVisiblePages = (total, current) => {
    if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);

    const pages = new Set([1, total, current]);
    if (current > 1) pages.add(current - 1);
    if (current < total) pages.add(current + 1);

    // Prefer neighbors near the ends so we don't jump from 1 straight to middle
    if (current <= 3) {
      pages.add(2);
      pages.add(3);
      pages.add(4);
    }
    if (current >= total - 2) {
      pages.add(total - 1);
      pages.add(total - 2);
      pages.add(total - 3);
    }

    const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < sorted.length; i++) {
      if (i > 0 && sorted[i] - sorted[i - 1] > 1) result.push('…');
      result.push(sorted[i]);
    }
    return result;
  };

  const visiblePages = getVisiblePages(totalPages, currentPage);

  return (
    <section className="py-16 lg:py-24 bg-black relative">
      {/* Loading Overlay */}
      <LoadingOverlay isPending={isPending} message="Loading latest updates..." />

      <div className="site-container font-sans">
        {/* Protocol Logs Header & Filter */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-3xl font-black text-white uppercase mb-4">Our Blogs</h2>
            <p className="text-zinc-500 text-sm font-bold uppercase">Stay updated with our latest blogs.</p>
          </div>

          <div className="flex items-center gap-6 lg:gap-10 overflow-x-auto whitespace-nowrap pb-2 scrollbar-none max-w-full scroll-smooth">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => handleFilterChange(f)}
                className={`text-[11px] font-black uppercase transition-all relative py-2 ${activeFilter === f ? "text-primary" : "text-white hover:text-primary"
                  }`}
              >
                {f}
                {activeFilter === f && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {posts.map((post, index) => (
            <div
              key={post._id}
              onClick={() => {
                startTransition(() => {
                  router.push(`/blogs/${post.slug}`);
                });
              }}
              className="contents cursor-pointer"
            >
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden rounded-sm bg-zinc-900 mb-8 border border-white/5">
                  {post.mainImage ? (
                    <Image
                      src={urlFor(post.mainImage).url()}
                      alt={post.title}
                      title={post.mainImage.originalFilename || post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-zinc-900">
                      <Terminal className="w-8 h-8 text-zinc-800" />
                    </div>
                  )}
                  {/* Category Badge */}
                  {post.category && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#E4242F] text-white text-[10px] font-black px-3 py-1.5 uppercase">
                        {post.category}
                      </span>
                    </div>
                  )}
                </div>

                {/* Metadata */}
                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                  <span className="text-[10px] font-bold text-zinc-500">{post.ref || 'MAHRAJ / INSIGHTS'}</span>
                  <span className="text-[10px] font-bold text-zinc-500">
                    {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) : 'PUBLISHED'}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black text-white uppercase leading-none mb-6 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-zinc-500 text-sm font-medium leading-relaxed mb-8 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Link */}
                <div className="flex items-center gap-2 group/link">
                  <span className="text-[11px] font-black text-white uppercase group-hover:text-primary transition-colors">
                    Read MORE
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary transition-transform group-hover/link:translate-x-2" />
                </div>
              </motion.article>
            </div>
          ))}

          {/* Newsletter Card Integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center justify-center p-12 bg-zinc-950 border border-white/5 rounded-sm min-h-[400px] text-center"
          >
            <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center mb-8">
              <Terminal className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-black text-white uppercase mb-4">
              Join our newsletter
            </h3>
            <p className="text-zinc-500 text-sm font-medium mb-10 max-w-[280px]">
              Get the latest updates and insights delivered straight to your inbox.
            </p>

            <div className="w-full space-y-4">
              <input
                type="email"
                placeholder="EMAIL_ADDRESS"
                className="w-full bg-black border border-white/10 px-6 py-4 text-xs font-bold text-white uppercase focus:outline-none focus:border-primary transition-colors"
              />
              <button className="w-full bg-white text-black font-black text-[11px] uppercase py-5 hover:bg-primary hover:text-white transition-all transform active:scale-95">
                SUBSCRIBE
              </button>
            </div>
          </motion.div>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-20 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className={`px-4 sm:px-6 py-3 border border-zinc-800 text-[10px] font-black uppercase transition-all shrink-0
                ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'text-white hover:bg-white hover:text-black'}
              `}
            >
              <span className="sm:hidden">PREV</span>
              <span className="hidden sm:inline">PREVIOUS</span>
            </button>

            <div className="flex items-center gap-1.5 sm:gap-2 order-first w-full sm:order-none sm:w-auto justify-center mb-2 sm:mb-0">
              {visiblePages.map((page, i) =>
                page === '…' ? (
                  <span
                    key={`ellipsis-${i}`}
                    className="w-8 h-10 sm:w-10 flex items-center justify-center text-[10px] font-black text-zinc-600 select-none"
                    aria-hidden
                  >
                    …
                  </span>
                ) : (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    aria-label={`Page ${page}`}
                    aria-current={currentPage === page ? 'page' : undefined}
                    className={`w-8 h-10 sm:w-10 flex items-center justify-center text-[10px] font-black transition-all border shrink-0
                      ${currentPage === page
                        ? 'bg-primary border-primary text-white'
                        : 'border-zinc-800 text-zinc-500 hover:border-white hover:text-white'
                      }
                    `}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className={`px-4 sm:px-6 py-3 border border-zinc-800 text-[10px] font-black uppercase transition-all shrink-0
                ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'text-white hover:bg-white hover:text-black'}
              `}
            >
              NEXT
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
