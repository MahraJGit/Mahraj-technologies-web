"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import blogImg from '@/public/BlogImg.png';
import { blogPosts } from '@/lib/blog-data';

export default function BlogGrid() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const filters = ["ALL", "SYSTEMS", "NEURAL", "UI/UX"];

  const filteredPosts = activeFilter === "ALL"
    ? blogPosts
    : blogPosts.filter(post => post.filter === activeFilter);

  return (
    <section className="py-24 bg-black">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Protocol Logs Header & Filter */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Protocol Logs</h2>
            <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Deep dives into our recent technical breakthroughs.</p>
          </div>

          <div className="flex items-center gap-6 lg:gap-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`text-[11px] font-black uppercase tracking-[0.3em] transition-all relative py-2 ${activeFilter === f ? "text-primary" : "text-zinc-600 hover:text-white"
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
          {filteredPosts.map((post, index) => (
            <Link key={post.id} href={`/blogs/${post.slug}`}>
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden rounded-sm bg-zinc-900 mb-8 border border-white/5">
                  <Image
                    src={blogImg}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#E4242F] text-white text-[10px] font-black tracking-widest px-3 py-1.5 uppercase">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Metadata */}
                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                  <span className="text-[10px] font-bold text-zinc-500 tracking-[0.2em]">{post.ref}</span>
                  <span className="text-[10px] font-bold text-zinc-500 tracking-[0.2em]">{post.date}</span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-none mb-6 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-zinc-500 text-sm font-medium leading-relaxed mb-8 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Link */}
                <div className="flex items-center gap-2 group/link">
                  <span className="text-[11px] font-black text-white uppercase tracking-[0.3em] group-hover:text-primary transition-colors">
                    Read Protocol
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
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">
              Join the Dev Network
            </h3>
            <p className="text-zinc-500 text-sm font-medium mb-10 max-w-[280px]">
              Receive technical briefs and node updates directly to your terminal.
            </p>

            <div className="w-full space-y-4">
              <input
                type="email"
                placeholder="EMAIL_ADDRESS"
                className="w-full bg-black border border-white/10 px-6 py-4 text-xs font-bold tracking-widest text-white uppercase focus:outline-none focus:border-primary transition-colors"
              />
              <button className="w-full bg-white text-black font-black text-[11px] uppercase tracking-[0.3em] py-5 hover:bg-primary hover:text-white transition-all transform active:scale-95">
                Initialize Subscription
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
