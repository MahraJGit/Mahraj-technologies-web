"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "971508831201";
  const message = encodeURIComponent("Hi! I visited your website and would like to know more about your services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{
        scale: {
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        },
        opacity: { duration: 0.5 }
      }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-[90] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8 fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.513-2.961-2.628-.086-.115-.718-.954-.718-1.817 0-.863.454-1.288.614-1.46.16-.171.354-.215.472-.215s.236 0 .339.006c.113.003.264-.043.413.315.153.368.526 1.282.573 1.373.047.091.077.198.016.321-.06.122-.09.198-.18.302-.09.104-.189.231-.27.311-.091.09-.186.188-.081.368.105.18.468.772.999 1.246.685.611 1.261.801 1.442.887.181.086.286.072.394-.052.108-.124.468-.544.593-.729.123-.186.248-.157.417-.095s1.082.51 1.269.605c.189.095.313.146.359.224.046.079.046.456-.098.861z" />
        <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 1.763.459 3.419 1.261 4.865l-1.262 4.603 4.721-1.238c1.408.761 3.013 1.198 4.719 1.198 5.523 0 10.001-4.478 10.001-10.001 0-5.523-4.478-9.999-10.001-9.999zm.029 17.514c-1.503 0-2.973-.404-4.254-1.168l-3.056.801.815-2.969c-.836-1.314-1.277-2.842-1.277-4.417 0-4.69 3.815-8.505 8.507-8.505s8.504 3.815 8.504 8.505-3.813 8.505-8.504 8.505z" />
      </svg>

      {/* Tooltip */}
      {/* <span className="absolute left-full ml-4 px-3 py-2 bg-zinc-900 text-white text-[10px] font-bold uppercase rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-zinc-800">
        Chat with us
      </span> */}
    </motion.a>
  );
}
