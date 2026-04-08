import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] mt-auto border-t border-zinc-900/50">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-24">
        <div className="flex flex-col md:flex-row justify-between gap-12 lg:gap-24">

          {/* Brand Column */}
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-3 inline-flex">
              <Image
                src={logo}
                alt="Mahraj Technologies"
                width={40}
                height={40}
                className="w-auto h-10 object-contain"
              />
              <span className="font-semibold text-white text-xl tracking-tight">
                Mahraj Technologies
              </span>
            </Link>
            <p className="mt-8 text-sm text-zinc-400 leading-relaxed font-medium">
              Engineering premium digital solutions for forward-thinking enterprises.
            </p>
          </div>

          {/* Links Columns */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-12 md:gap-16 lg:gap-26">
            <div>
              <h3 className="text-white font-bold text-base mb-6 tracking-wide">Company</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/about" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-base mb-6 tracking-wide">Legal</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/privacy" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us Column */}
            <div className="max-w-[280px]">
              <h3 className="text-white font-bold text-base mb-6 tracking-wide">Contact Us</h3>
              <ul className="space-y-4">
                <li className="text-zinc-400 text-sm font-medium leading-relaxed">
                  B2B Office Tower - Office Number - 2209 - Marasi Drive Street - Business Bay - Dubai
                </li>
                <li>
                  <a href="tel:+971508831201" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors cursor-pointer">
                    +971 50 883 1201
                  </a>
                </li>
                <li className="text-zinc-400 text-sm font-medium pt-2">
                  <span className="block text-white mb-1">Open Hours:</span>
                  Mon – Sat: 9 am – 6 pm<br />
                  Sunday: CLOSED
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-black py-6 border-t border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center text-xs text-zinc-500 font-medium tracking-wide">
          © {new Date().getFullYear()} Mahraj Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
