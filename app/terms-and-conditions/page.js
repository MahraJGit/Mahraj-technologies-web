import PageHero from "@/components/sections/PageHero";

export const metadata = {
  title: "Terms & Conditions | Mahraj Technologies",
  description: "Terms and Conditions for Mahraj Technologies",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <PageHero
        eyebrow="MAHRAJ / LEGAL"
        titleLight="Terms &"
        titleDark=" Conditions"
        description="These Terms & Conditions govern your access to and use of our website and services. By using our website, you agree to comply with and be bound by these terms."
      />

      <section className="relative py-16 lg:py-24 overflow-hidden bg-[radial-gradient(circle_at_1px_1px,#18181b_1px,transparent_0)] bg-[size:40px_40px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-zinc-300">
          <div className="space-y-12">

            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                If you do not agree with any part of these terms, you must discontinue use of our services immediately.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-primary pl-4">Services Overview</h2>
              <p className="leading-relaxed">
                Mahraj Technologies provides digital services, including but not limited to web development, software solutions, design, and technology consulting.
              </p>
              <p className="leading-relaxed">
                All services are subject to availability and may be modified, updated, or discontinued at any time without prior notice.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-primary pl-4">User Responsibilities</h2>
              <p className="leading-relaxed">By using our website, you agree that:</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                <li>You will provide accurate and complete information.</li>
                <li>You will use the website only for lawful purposes.</li>
                <li>You will not misuse, disrupt, or attempt to gain unauthorized access to our systems.</li>
                <li>You will comply with all applicable laws and regulations.</li>
              </ul>
              <p className="leading-relaxed mt-4 text-zinc-300">
                Failure to comply may result in suspension or termination of access.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-primary pl-4">Intellectual Property Rights</h2>
              <p className="leading-relaxed">
                All content on this website, including text, graphics, logos, designs, software, and code, is the property of Mahraj Technologies and is protected by intellectual property laws.
              </p>
              <p className="leading-relaxed mt-4">You may not:</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                <li>Copy, reproduce, or distribute any content.</li>
                <li>Use our materials for commercial purposes without permission.</li>
                <li>Modify or exploit any part of the website.</li>
              </ul>
              <p className="leading-relaxed mt-4 text-zinc-300">
                Limited access is granted for personal or business use only.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-primary pl-4">Project Terms & Payments</h2>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                <li>All project scopes, timelines, and costs are agreed upon before project initiation.</li>
                <li>Payments must be made according to agreed milestones or invoices.</li>
                <li>Delays in payment may result in project suspension.</li>
                <li>We reserve the right to revise pricing if the project scope changes.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-primary pl-4">Third-Party Tools & Services</h2>
              <p className="leading-relaxed">
                Our services may include integrations or the use of third-party tools, platforms, or services.
              </p>
              <p className="leading-relaxed mt-4">We are not responsible for:</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                <li>Third-party service interruptions.</li>
                <li>External platform policies or changes.</li>
                <li>Any losses caused by third-party systems.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-primary pl-4">Prohibited Activities</h2>
              <p className="leading-relaxed">Users are strictly prohibited from:</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                <li>Engaging in fraudulent or illegal activities.</li>
                <li>Attempting to breach website security.</li>
                <li>Distributing harmful software or malicious code.</li>
                <li>Using the website for unauthorized commercial purposes.</li>
              </ul>
              <p className="leading-relaxed mt-4 text-zinc-300">
                Any violation may lead to legal action or permanent restriction.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-primary pl-4">Service Availability</h2>
              <p className="leading-relaxed">
                We strive to maintain uninterrupted access to our website and services. However, we do not guarantee:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                <li>Continuous availability.</li>
                <li>Error-free performance.</li>
                <li>Immediate fixes for technical issues.</li>
              </ul>
              <p className="leading-relaxed mt-4 text-zinc-300">
                We may suspend or restrict access for maintenance or upgrades at any time.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-primary pl-4">Limitation of Liability</h2>
              <p className="leading-relaxed">Mahraj Technologies shall not be held liable for:</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                <li>Any direct or indirect damages arising from the use of the service.</li>
                <li>Loss of business, revenue, or data.</li>
                <li>Delays or interruptions beyond our control.</li>
              </ul>
              <p className="leading-relaxed mt-4 text-zinc-300">
                Use of our services is at your own risk.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-primary pl-4">Disclaimer</h2>
              <p className="leading-relaxed">
                All services and website content are provided on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis. We make no warranties regarding:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                <li>Accuracy or completeness of information.</li>
                <li>Suitability for specific purposes.</li>
                <li>Continuous or secure operation.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-primary pl-4">Termination of Use</h2>
              <p className="leading-relaxed">
                We reserve the right to suspend or terminate your access to our website or services without prior notice if:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                <li>You violate these Terms.</li>
                <li>You engage in harmful or unlawful behavior.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-primary pl-4">Governing Law</h2>
              <p className="leading-relaxed">
                These Terms &amp; Conditions shall be governed by and interpreted in accordance with applicable laws and jurisdiction relevant to our business operations.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-primary pl-4">Dispute Resolution</h2>
              <p className="leading-relaxed">In case of any disputes:</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                <li>Both parties agree to attempt resolution through mutual discussion.</li>
                <li>If unresolved, disputes may be handled through legal proceedings under applicable laws.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-primary pl-4">Changes to Terms</h2>
              <p className="leading-relaxed">
                We may update these Terms &amp; Conditions at any time. Continued use of our website after updates indicates your acceptance of the revised terms.
              </p>
            </div>

            <div className="space-y-4 bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Contact Information</h2>
              <p className="leading-relaxed mb-4 text-zinc-300">
                For any questions regarding these Terms &amp; Conditions, please contact us:
              </p>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <strong className="text-white w-20">Email:</strong> hr@mahrajtechnologies.com
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <strong className="text-white w-20">Phone:</strong> +971 52 785 1523
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                  <strong className="text-white w-20 flex-shrink-0">Address:</strong>
                  <div className="flex flex-col gap-2">
                    <span>B2B Office Tower - Office Number - 2209 - Marasi Drive Street - Business Bay - Dubai</span>
                    <span>World Trade Center - Office Number - 4087 - Islamabad, Pakistan</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-8 border-t border-zinc-800 text-center">
              <p className="text-sm text-zinc-500 font-medium">
                Entire Agreement: These Terms &amp; Conditions constitute the complete agreement between you and Mahraj Technologies regarding the use of our website and services.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
