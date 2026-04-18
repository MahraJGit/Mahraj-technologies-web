"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useCalendly } from '@/context/CalendlyContext';

export default function CalendlyModal() {
  const { isModalOpen, closeModal, calendlyUrl } = useCalendly();

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [closeModal]);

  // Prevent background scroll when open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[1000px] h-full max-h-[800px] bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-zinc-900/50">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-[10px] font-black text-white uppercase">
                  Schedule Strategy Session
                </span>
              </div>
              <button
                onClick={closeModal}
                className="p-2 text-zinc-500 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content / Iframe */}
            <div className="flex-1 w-full h-full relative bg-white">
               {/* Embed the Calendly iframe */}
               <iframe
                 src={`${calendlyUrl}?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=E4242F`}
                 width="100%"
                 height="100%"
                 frameBorder="0"
                 title="Calendly Scheduling"
               ></iframe>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
