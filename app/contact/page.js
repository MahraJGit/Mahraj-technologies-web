import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/Contact/ContactForm";
import ContactInfo from "@/components/sections/Contact/ContactInfo";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <PageHero
        eyebrow="MAHRAJ / CONTACT"
        titleLight="Get"
        titleDark=" In Touch"
        description="Have questions or ready to start your project? At Mahraj Technologies, we’re here to connect and support your digital journey."
      />

      <section className="relative py-16 lg:py-24 overflow-hidden bg-[radial-gradient(circle_at_1px_1px,#18181b_1px,transparent_0)] bg-[size:40px_40px]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
