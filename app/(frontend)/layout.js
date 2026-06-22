import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CalendlyProvider } from "@/context/CalendlyContext";
import CalendlyModal from "@/components/ui/CalendlyModal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import GoogleAnalytics from "@/components/GoogleAnalytics";


export const metadata = {
  icons: {
    icon: "/logo.svg"
  },
  title: "Mahraj Technologies | Digital Innovation Agency",
  description:
    "Mahraj Technologies is a cutting-edge digital agency delivering world-class web development, app development, AI solutions, and product design services.",
  alternates: {
    canonical: "https://mahrajtechnologies.com",
  },
  publisher: "Mahraj Technologies",
  verification: {
    google: "zvJrwFGTgqB2HemXDyuoIc5jSoz7Cp1pG430dOPXU40",
  }
};

export default function FrontendLayout({ children }) {
  return (
    <>
      <GoogleAnalytics />
      <CalendlyProvider>
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CalendlyModal />
        <WhatsAppButton />
      </CalendlyProvider>
    </>
  );
}
