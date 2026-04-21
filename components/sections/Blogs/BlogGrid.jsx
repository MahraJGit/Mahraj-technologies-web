"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { urlFor } from '@/lib/sanity';
import { useRouter } from 'next/navigation';

export default function BlogGrid({ posts = [], totalPages, currentPage, activeFilter }) {
  const router = useRouter();
  const filters = ["ALL", "WEB DEVELOPMENT", "APP DEVELOPMENT", "SOFTWARE DEVELOPMENT", "DIGITAL MARKETING", "GRAPHIC DESIGNING"];

  const handleFilterChange = (filter) => {
    const params = new URLSearchParams();
    if (filter !== "ALL") params.set('filter', filter);
    params.set('page', '1'); // Reset to page 1 on filter change
    router.push(`/blogs?${params.toString()}`, { scroll: false });
  };

  const handlePageChange = (page) => {
    const params = new URLSearchParams();
    if (activeFilter !== "ALL") params.set('filter', activeFilter);
    params.set('page', page.toString());
    router.push(`/blogs?${params.toString()}`, { scroll: false });
  };

  return (
    <section className="py-16 lg:py-24 bg-black">
      <div className="site-container">
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
            <Link key={post._id} href={`/blogs/${post.slug}`}>
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
                  <span className="text-[10px] font-bold text-zinc-500">{post.ref || 'REF: INTERNAL'}</span>
                  <span className="text-[10px] font-bold text-zinc-500">
                    {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) : 'LOG_PENDING'}
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
            </Link>
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
          <div className="mt-20 flex items-center justify-center gap-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-6 py-3 border border-zinc-800 text-[10px] font-black uppercase transition-all
                ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'text-white hover:bg-white hover:text-black'}
              `}
            >
              PREV_LOG
            </button>
            
            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-10 h-10 flex items-center justify-center text-[10px] font-black transition-all border
                    ${currentPage === i + 1 
                      ? 'bg-primary border-primary text-white' 
                      : 'border-zinc-800 text-zinc-500 hover:border-white hover:text-white'
                    }
                  `}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-6 py-3 border border-zinc-800 text-[10px] font-black uppercase transition-all
                ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'text-white hover:bg-white hover:text-black'}
              `}
            >
              NEXT_LOG
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
