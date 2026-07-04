import { Poppins, Bebas_Neue } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-bebas-neue",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en-US" className={`${poppins.variable} ${bebasNeue.variable}`} data-scroll-behavior="smooth">
      <head>
        <link rel="preload" href="/hero-bg-poster.png" as="image" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
