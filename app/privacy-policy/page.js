import PageHero from "@/components/sections/PageHero";

export const metadata = {
  title: "Privacy Policy | Mahraj Technologies",
  description: "Privacy Policy for Mahraj Technologies",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <PageHero
        eyebrow="MAHRAJ / LEGAL"
        titleLight="Privacy"
        titleDark=" Policy"
        description="Learn how we collect, use, disclose, and safeguard your data when you visit our website or use our services."
      />

      <section className="relative py-16 lg:py-24 overflow-hidden bg-[radial-gradient(circle_at_1px_1px,#18181b_1px,transparent_0)] bg-[size:40px_40px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-zinc-300">
          <div className="space-y-12">

            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                Your privacy is important to us, and we are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website or use our services.
              </p>
              <p className="text-lg leading-relaxed">
                By accessing our website, you agree to the terms outlined in this policy.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-primary pl-4">Information We Collect</h2>

              <h3 className="text-xl font-semibold text-white mt-6">Personal Information</h3>
              <p className="leading-relaxed">We may collect personal information that you voluntarily provide, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company details</li>
                <li>Project requirements or inquiries</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-8">Non-Personal Information</h3>
              <p className="leading-relaxed">We automatically collect certain data when you visit our website, such as:</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Pages visited</li>
                <li>Time and date of visits</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-primary pl-4">How We Use Your Information</h2>
              <p className="leading-relaxed">We use the collected information for purposes including:</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                <li>Providing and improving our services.</li>
                <li>Responding to inquiries and providing customer support.</li>
                <li>Personalizing user experience.</li>
                <li>Sending updates, newsletters, or promotional content.</li>
                <li>Ensuring website security and performance.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-primary pl-4">Cookies and Tracking Technologies</h2>
              <p className="leading-relaxed">We use cookies and similar tracking technologies to enhance your browsing experience. These help us:</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                <li>Understand user behavior.</li>
                <li>Improve website functionality.</li>
                <li>Analyze traffic trends.</li>
              </ul>
              <p className="leading-relaxed mt-4">
                You can choose to disable cookies through your browser settings.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-primary pl-4">Data Sharing and Disclosure</h2>
              <p className="leading-relaxed">We do not sell, trade, or rent your personal information. However, we may share your data with:</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                <li>Trusted service providers assisting in website operations.</li>
                <li>Legal authorities, when required by law.</li>
                <li>Third parties in case of business transfers or mergers.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-primary pl-4">Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, misuse, or disclosure. While we strive to protect your information, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-primary pl-4">Third-Party Services</h2>
              <p className="leading-relaxed">
                Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those external platforms. We encourage users to review their privacy policies.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-primary pl-4">Your Data Protection Rights</h2>
              <p className="leading-relaxed">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                <li>Access your personal data.</li>
                <li>Request correction or deletion.</li>
                <li>Withdraw consent at any time.</li>
                <li>Object to data processing.</li>
                <li>Request data portability.</li>
              </ul>
              <p className="leading-relaxed mt-4">
                To exercise these rights, please contact us.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-primary pl-4">Data Retention</h2>
              <p className="leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy or comply with legal obligations.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-primary pl-4">Children’s Privacy</h2>
              <p className="leading-relaxed">
                Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-primary pl-4">Changes to This Privacy Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage users to review this policy periodically.
              </p>
            </div>

            <div className="space-y-4 bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Contact Us</h2>
              <p className="leading-relaxed mb-4 text-zinc-300">
                If you have any questions or concerns regarding this Privacy Policy, you can contact us:
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
                Consent: By using our website, you hereby consent to our Privacy Policy and agree to its terms.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
