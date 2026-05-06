import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] mt-auto border-t border-zinc-900/50">
      {/* Top Section */}
      <div className="site-container py-16 lg:py-24">
        <div className="flex flex-col md:flex-row justify-between gap-12 lg:gap-23">

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
              <span className="font-semibold text-white text-xl">
                Mahraj Technologies
              </span>
            </Link>
            <p className="mt-8 text-sm text-zinc-400 leading-relaxed font-medium">
              Delivering innovation, performance, and measurable business growth.
            </p>
          </div>

          {/* Links Columns */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-12 md:gap-16 lg:gap-22">
            <div>
              <h3 className="text-white font-bold text-base mb-6">Company</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/services" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-base mb-6">Legal</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/privacy-policy" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us Column */}
            <div className="max-w-[280px]">
              <h3 className="text-white font-bold text-base mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="text-zinc-400 text-sm font-medium leading-relaxed">
                  B2B Office Tower - Office Number - 2209 - Marasi Drive Street - Business Bay - Dubai - UAE
                </li>
                <li className="text-zinc-400 text-sm font-medium leading-relaxed">
                  World Trade Center - Office Number - 4087 - Islamabad, Pakistan
                </li>
                <li>
                  <a href="tel:+971527851523" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors cursor-pointer">
                    +971 52 785 1523
                  </a>
                </li>
                <li className="text-zinc-400 text-sm font-medium pt-2">
                  <span className="block text-white mb-2">Open Hours:</span>
                  <div className="flex flex-col gap-1">
                    <span>Mon – Fri: 9 am – 6 pm</span>
                    <span>Saturday: 9 am – 4 pm</span>
                    <span>Sunday: CLOSED</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-black py-6 border-t border-zinc-900/80">
        <div className="site-container text-center text-xs text-zinc-500 font-medium">
          © {new Date().getFullYear()} Mahraj Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
