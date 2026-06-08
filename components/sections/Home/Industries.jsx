import { ArrowRight } from "lucide-react";
import Link from "next/link";
const b2b = "/IndustriesSvg/b2b-marketing.svg";
const bank = "/IndustriesSvg/bank.svg";
const construction = "/IndustriesSvg/construction.svg";
const cybersecurity = "/IndustriesSvg/cybersecurity.svg";
const ecommerce = "/IndustriesSvg/ecommerce.svg";
const realEstate = "/IndustriesSvg/realEstate.svg";
const events = "/IndustriesSvg/events.svg";
const entertainment = "/IndustriesSvg/entertainment.svg";
const hotel = "/IndustriesSvg/hotel.svg";
const dentist = "/IndustriesSvg/dentist.svg";
const manufacturing = "/IndustriesSvg/manufacturing.svg";
const plumbing = "/IndustriesSvg/plumbing.svg";
const software = "/IndustriesSvg/software.svg";
const technology = "/IndustriesSvg/technology.svg";
const smallBusiness = "/IndustriesSvg/smallBusiness.svg";

const industries = [
    {
        icon: b2b,
        title: "B2B Digital Marketing",
        description: "We turn complex B2B sales cycles into a consistent, scalable pipeline through SEO, LinkedIn strategy, and content that speaks directly to decision-makers."
    },
    {
        icon: bank,
        title: "Bank Digital Marketing",
        description: "We help banks build digital trust through compliant content, targeted campaigns, and UX strategies that convert first-time browsers into loyal customers."
    },
    {
        icon: construction,
        title: "Construction Digital Marketing",
        description: "We position construction brands where project owners search through local SEO, targeted ads, and authority content that attracts high-value contracts."
    },
    {
        icon: cybersecurity,
        title: "Cybersecurity Digital Marketing",
        description: "We market cybersecurity firms to buyers who want proof, not promises, using technical content, thought leadership, and campaigns that build credibility fast."
    },
    {
        icon: ecommerce,
        title: "Ecommerce Digital Marketing",
        description: "From first click to repeat purchase, we build ecommerce growth engines using SEO, performance ads, and CRO strategies that consistently raise ROAS and cut CAC."
    },
    {
        icon: realEstate,
        title: "Real Estate Digital Marketing",
        description: "We help real estate brands dominate search, generate qualified buyer inquiries, and build a digital presence that sells properties, not just showcases them."
    },
    {
        icon: events,
        title: "Events Digital Marketing",
        description: "We drive registrations before the event, engagement during it, and brand recall after, through paid ads, email strategy, and social content that fills seats."
    },
    {
        icon: entertainment,
        title: "Entertainment Digital Marketing",
        description: "We grow entertainment brands by turning audiences into loyal communities with platform-native content and data-driven campaigns that scale online visibility."
    },
    {
        icon: hotel,
        title: "Hotel Digital Marketing",
        description: "We reduce OTA dependency and increase direct bookings through Google Ads, SEO, and retention campaigns that turn one-time guests into brand advocates."
    },
    {
        icon: dentist,
        title: "Dental Clinics Digital Marketing",
        description: "We fill appointment books for dental clinics using local SEO, Google Maps optimization, and patient-focused ad campaigns that build trust before walk-ins."
    },
    {
        icon: manufacturing,
        title: "Manufacturing Digital Marketing",
        description: "We bridge the factory floor and digital buyer, helping manufacturers generate industrial leads through SEO, trade-focused content, and targeted B2B ad campaigns."
    },
    {
        icon: plumbing,
        title: "Plumbing Digital Marketing",
        description: "We get plumbers found when it matters most through local search, Google Maps, and pay-per-call campaigns that turn urgent searches into booked service calls."
    },
    {
        icon: software,
        title: "Software Digital Marketing",
        description: "We market SaaS and software to the right users, combining product-led content, demo-focused ads, and lifecycle campaigns that reduce churn and grow MRR."
    },
    {
        icon: technology,
        title: "Technology Digital Marketing",
        description: "We help tech brands earn authority in crowded markets through thought leadership, paid media, and conversion strategies that fuel consistent pipeline growth."
    },
    {
        icon: smallBusiness,
        title: "Small Business Digital Marketing",
        description: "We give small businesses a strong digital presence, scalable SEO, smart ad budgets, and practical strategies that compete with larger brands without big spend."
    },
]

export default function Industries() {
    return (
        <section className="py-16 lg:py-24">
            <div className="site-container">
                {/* Section Heading */}
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase">
                        Industries
                    </h2>
                    <p className="text-zinc-400 text-lg font-medium">
                        We build specialized services for teams solving enterprise and operational software challenges.
                    </p>

                    {/* <div className="flex justify-center md:justify-end my-4">
                        <Link href={"/industries"} className="inline-flex items-center gap-2 font-semibold text-primary">
                            Explore All Industries
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div> */}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                    {
                        industries.map((item) => (
                            <div key={item.title} className="flex flex-col gap-4  p-4 border border-zinc-800 rounded-lg hover:bg-zinc-900 transition-colors">
                                <img src={item.icon} alt="" className="" width={40} height={40} />
                                <h4 className="text-lg font-semibold text-white min-h-10">{item.title}</h4>
                                <p className="text-zinc-400 text-sm font-medium">{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}