"use client";

import React from 'react';

export default function LoadingOverlay({ isPending, message = "Loading..." }) {
  if (!isPending) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300">
      <div className="flex flex-col items-center gap-6">
        <div className="w-12 h-12 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
        <span className="text-[10px] font-black text-white uppercase tracking-[0.2em] animate-pulse">
          {message}
        </span>
      </div>
    </div>
  );
}
