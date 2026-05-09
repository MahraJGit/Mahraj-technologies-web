"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NeuralNetworkBackground from './NeuralNetworkBackground';
import Link from 'next/link';

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 2) {
      setIsVideoLoaded(true);
    }

    // Fallback: Force load after 2.5 seconds in case video is blocked (e.g. iOS low power mode) or unsupported
    const fallbackTimeout = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 2500);

    return () => clearTimeout(fallbackTimeout);
  }, []);

  return (
    <section className="relative flex min-h-[calc(100vh-100px)] py-12 md:py-24 items-center justify-center overflow-hidden px-4 bg-[#050505]">
      <AnimatePresence>
        {!isVideoLoaded && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`absolute inset-0 bg-primary pointer-events-none ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
      />

      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={() => setIsVideoLoaded(true)}
        onError={() => setIsVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-none ${isVideoLoaded ? 'opacity-60' : 'opacity-0'}`}
        style={{ mixBlendMode: 'luminosity' }}
      >
        <source src="/herobg.webm" type="video/webm" />
      </video>

      <div className={`absolute inset-0 bg-[#000000] pointer-events-none transition-opacity duration-300 ${isVideoLoaded ? 'opacity-40' : 'opacity-0'}`} />

      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`} />

      <div className={`relative z-10 max-w-5xl mx-auto text-center pt-8 transition-opacity duration-300 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-black text-white mb-8">
          Your Trusted Digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary animate-gradient-x">
            Growth Partner
          </span>
        </h1>


        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white font-thin mb-12 font-medium leading-relaxed">
          We are a results-driven digital agency delivering strategic solutions that help businesses scale, grow visibility, and achieve measurable online success.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/contact" className="px-10 py-4 w-full sm:w-auto text-sm font-bold text-white uppercase bg-primary rounded-full hover:bg-[#c91d26] transition-colors shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
            Contact Us
          </Link>

          <Link
            href="/services"
            className="flex items-center gap-2 justify-center px-10 py-4 w-full sm:w-auto text-sm font-bold uppercase transition-all duration-300 bg-white/5 text-white rounded-full backdrop-blur-md hover:bg-white/10 group shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
          >
            View Our Services
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 max-w-3xl mx-auto">
          <div>
            <div className="text-2xl font-bold text-white mb-1">95%</div>
            <div className="text-[10px] text-zinc-300 uppercase">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-1">80%</div>
            <div className="text-[10px] text-zinc-300 uppercase">Visibility Growth</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-1">70%</div>
            <div className="text-[10px] text-zinc-300 uppercase">Conversion Increase</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-1">60%</div>
            <div className="text-[10px] text-zinc-300 uppercase">Lead Growth</div>
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
