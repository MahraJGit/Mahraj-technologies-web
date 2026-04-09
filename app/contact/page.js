import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/Contact/ContactForm";
import ContactInfo from "@/components/sections/Contact/ContactInfo";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <PageHero
        eyebrow="MAHRAJ / CONTACT"
        titleLight="CONTACT"
        titleDark="SYSTEMS"
        description="Direct communication with our lead architects. Initiate technical inquiries for enterprise infrastructure, secure cloud deployment, and neural-link development."
      />

      <section className="relative py-24 lg:py-32 overflow-hidden bg-[radial-gradient(circle_at_1px_1px,#18181b_1px,transparent_0)] bg-[size:40px_40px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
