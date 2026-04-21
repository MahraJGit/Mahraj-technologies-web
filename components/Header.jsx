"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/logo.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import { useCalendly } from "@/context/CalendlyContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useCalendly();

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blogs", href: "/blogs" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full relative z-50">
      <nav className="site-container flex items-center justify-between py-4 lg:py-5">

        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="flex items-center gap-2 lg:gap-3">
            <Image
              src={logo}
              alt="Mahraj Technologies"
              width={40}
              height={40}
              className="w-auto h-8 lg:h-10 object-contain"
            />
            <span className="text-white text-lg xl:text-xl hidden sm:block lg:hidden xl:block font-bebas-neue">
              Mahraj Technologies
            </span>
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-5 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`nav-link text-sm xl:text-base ${pathname === link.href ? "active" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 sm:gap-5">
          <motion.button
            onClick={() => openModal()}
            animate={{
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-flex items-center justify-center bg-[#E4242F] text-white px-5 py-2.5 lg:px-7 lg:py-3 rounded-md font-bold text-xs md:text-sm uppercase hover:bg-[#c91d26] transition-colors shadow-lg"
          >
            SCHEDULE A CALL
          </motion.button>

          <button
            className="lg:hidden p-2 text-white hover:text-[#E4242F] transition-colors focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out w-full absolute bg-black/95 backdrop-blur-md shadow-2xl ${isMenuOpen ? "max-h-[500px] opacity-100 border-b border-gray-800/50" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 py-6 space-y-6 flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className={`text-base font-medium transition-colors ${pathname === link.href ? "text-primary px-2 border-l-2 border-primary" : "text-gray-300 hover:text-white"}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
