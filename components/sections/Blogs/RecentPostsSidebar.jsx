"use client";

import React, { useTransition } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

export default function RecentPostsSidebar({ recentPosts }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleNavigation = (slug) => {
    startTransition(() => {
      router.push(`/blogs/${slug}`);
    });
  };

  return (
    <>
      {/* Loading Overlay */}
      {isPending && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300">
          <div className="flex flex-col items-center gap-6">
            <div className="w-12 h-12 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
            <span className="text-[10px] font-black text-white uppercase tracking-[0.2em] animate-pulse">
              Loading Article...
            </span>
          </div>
        </div>
      )}

      <div>
        <span className="text-[10px] font-bold text-zinc-700 uppercase mb-8 block flex items-center gap-3">
          <span className="w-6 h-[1px] bg-primary" />
          RECENT BLOGS
        </span>
        <div className="space-y-8">
          {recentPosts.map((rPost) => (
            <div
              key={rPost.slug}
              onClick={() => handleNavigation(rPost.slug)}
              className="group block cursor-pointer"
            >
              <div className="flex flex-col gap-2">
                <h5 className="text-white font-black uppercase text-xs leading-tight group-hover:text-primary transition-colors line-clamp-2">
                  {rPost.title}
                </h5>
                <div className="flex items-center gap-2 text-zinc-600 font-bold uppercase text-[8px]">
                  {new Date(rPost.publishedAt).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
                  <ChevronRight className="w-2 h-2 group-hover:translate-x-1 transition-transform text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
