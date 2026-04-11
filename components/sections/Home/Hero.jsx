"use client";

import React from 'react';
import NeuralNetworkBackground from './NeuralNetworkBackground';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-100px)] py-12 md:py-24 items-center justify-center bg-transparent overflow-hidden px-4">
      {/* Dynamic Background */}
      <NeuralNetworkBackground />

      {/* Decorative Radial Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center pt-8">
        {/* High-Impact Title Stack */}
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-black tracking-tight text-white mb-8">
          Your Trusted Digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary animate-gradient-x">
            Growth Partner
          </span>
        </h1>


        <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-12 font-medium leading-relaxed">
          We are a results-driven digital agency delivering strategic solutions that help businesses scale, grow visibility, and achieve measurable online success.
        </p>

        {/* Interactive CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/contact" className="px-10 py-4 w-full sm:w-auto text-sm font-bold tracking-widest text-body uppercase bg-primary rounded-full hover:bg-[#c91d26] transition-colors shadow-lg">
            Contact Us
          </Link>

          <Link href="/services" className="flex items-center gap-2 justify-center px-10 py-4 w-full sm:w-auto text-sm font-bold tracking-widest text-white uppercase transition-all duration-300 border border-zinc-700 rounded-full hover:border-primary hover:bg-primary/20 backdrop-blur-sm group">
            View Our Services
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Minimalist Tech Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-zinc-800/50 pt-12 max-w-3xl mx-auto">
          <div>
            <div className="text-2xl font-bold text-white mb-1">95%</div>
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-1">80%</div>
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest">Visibility Growth</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-1">70%</div>
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest">Conversion Increase</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-1">60%</div>
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest">Lead Growth</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </section>
  );
}
