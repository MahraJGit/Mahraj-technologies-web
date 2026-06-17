import type { ServiceDetailData } from "../types";
import googleAnalytics from "@/public/CompanySvgs/googleAnalytics.svg";
import ahrefs from "@/public/CompanySvgs/ahrefs.svg";
import moz from "@/public/CompanySvgs/moz.svg";
import screamingFrog from "@/public/CompanySvgs/screaming-frog.svg";
import consultingImage from "@/public/dashboard.jpg";
import googleAds from "@/public/CompanySvgs/google_ads.svg";
import ubersuggest from "@/public/CompanySvgs/ubersuggest.svg";
import googleTrends from "@/public/CompanySvgs/google-trends.svg";

export const searchEngineOptimizationData: ServiceDetailData = {
    slug: "search-engine-optimization",
    title: "Search Engine Optimization",
    seo: {
        metaTitle: "Search Engine Optimization Services | Mahraj Technologies",
        metaDescription:
            "Search Engine Optimization Services from Mahraj Technologies—Improving search visibility through strategic SEO, optimizing content, technical structure, and performance to drive higher rankings and organic growth.",
        focusKeyword: "search engine optimization",
    },
    hero: {
        eyebrow: "HOME / SERVICES / SEARCH ENGINE OPTIMIZATION",
        titleLight: "Search Engine Optimization",
        titleDark: "",
        description:
            "Struggling to appear in search results? SEO helps your website gain visibility and credibility.",
    },
    serviceTypesHeading: "Types of Search Engine Optimization",
    serviceTypesDescription: "",
    serviceTypes: [
        {
            icon: "link2",
            title: "On-Page SEO",
            description:
                "We optimize content, keywords, metadata, and site structure to help search engines rank your pages higher.",
        },
        {
            icon: "fileText",
            title: "Off-Page SEO",
            description:
                "We build your website's authority through earned backlinks, brand mentions, and strategic external optimization.",
        },
        {
            icon: "mail",
            title: "Technical SEO",
            description:
                "We fix crawlability and indexing issues, site speed, and technical gaps that quietly hold your rankings back.",
        },
        {
            icon: "barChart3",
            title: "Mobile SEO",
            description:
                "We optimize your site for mobile users, like faster load times, cleaner layouts, and a better overall experience.",
        },
        {
            icon: "smartphone",
            title: "Local SEO",
            description:
                "We improve your visibility in local search results so nearby customers find your business before your competitors.",
        },
        {
            icon: "megaphone",
            title: "E-commerce SEO",
            description:
                "We optimize product pages, categories, and site structure to drive more qualified traffic and increase online sales.",
        },
        {
            icon: "search",
            title: "White-Hat SEO",
            description:
                "We strictly follow search engine guidelines to build rankings the right way for results that actually last.",
        },
        {
            icon: "share2",
            title: "Black-Hat SEO",
            description:
                "We identify harmful SEO tactics used against your site and eliminate risks before they damage your rankings.",
        },
    ],
    processHeading: "Our Approach to Search Visibility",
    processDescription: "",
    process: [
        {
            step: "01",
            title: "Analysis",
            description:
                "We identify the opportunities and challenges that influence your search visibility and growth potential.",
        },
        {
            step: "02",
            title: "Planning",
            description:
                "A customized SEO roadmap ensures every action aligns with your business objectives.",
        },
        {
            step: "03",
            title: "Optimization",
            description:
                "We enhance key SEO elements to improve rankings, user experience, and website performance.",
        },
        {
            step: "04",
            title: "Growth",
            description:
                "Ongoing analysis and optimization help maintain momentum and generate sustainable organic results.",
        },
    ],
    comparison: {
        heading: "Semantic SEO vs Traditional SEO",
        description: "",
        columnDigital: "Semantic SEO",
        columnTraditional: "Traditional SEO",
        rows: [
            {
                feature: "Focus",
                digital: "Focuses on user intent and search context.",
                traditional: "Focuses on exact-match keywords.",
            },
            {
                feature: "Content Scope",
                digital: "Covers complete topics, not just keywords.",
                traditional: "Optimizes pages for specific search terms.",
            },
            {
                feature: "Query Coverage",
                digital: "Answers related search queries naturally.",
                traditional: "Prioritizes keyword placement and density.",
            },
            {
                feature: "Authority",
                digital: "Builds stronger topical authority.",
                traditional: "Targets individual keywords separately.",
            },
            {
                feature: "Algorithm Alignment",
                digital: "Supports modern search engine algorithms.",
                traditional: "Relies on conventional ranking techniques.",
            },
        ],
    },
    toolsHeading: "Search Engine Optimization Tools",
    toolsDescription:
        "Effective SEO requires the right tools to analyze performance, uncover opportunities, monitor rankings, and improve search visibility. We use trusted platforms to support informed optimization decisions and sustainable growth.",
    tools: [
        { icon: ahrefs },
        { icon: googleAnalytics },
        { icon: moz },
        { icon: screamingFrog },
        { icon: googleAds },
        { icon: ubersuggest },
        { icon: googleTrends },
    ],
    testimonialsHeading: "Testimonials",
    testimonialsDescription:
        "Client success is our greatest achievement. Here's what businesses say about working with Mahraj Technologies.",
    testimonials: [
        {
            quote:
                "Honestly didn't expect SEO to make this much of a difference for our content. They built a full topical strategy, fixed our internal linking, and now we rank for terms we never targeted before. The organic growth has been steady and sustainable.",
            name: "Olivia Carter",
            position: "Brand Development Lead",
        },
        {
            quote:
                "After months of inconsistent rankings, their technical SEO work brought real structure to our website. Load speed improved, crawl errors disappeared, and organic traffic started converting into actual leads within weeks.",
            name: "Daniel Foster",
            position: "Operations Director",
        },
        {
            quote:
                "This was not just about ranking higher. The SEO work improved how users engaged with our site, reduced the bounce rate, and built a stronger foundation for long-term organic growth we can actually rely on.",
            name: "Victoria Hayes",
            position: "Head of Digital Growth",
        },
    ],
    consultingHeading: "SEO Consulting",
    consultingDescription:
        "Our SEO consulting services help businesses identify opportunities to improve search performance and organic visibility. We assess your current SEO strategy, analyze technical and content-related factors, evaluate competitor positioning, and provide actionable recommendations designed to increase rankings, attract qualified traffic, and support long-term growth.",
    consultingImage: consultingImage,
    onlinePresenceHeading: "Our Global Presence",
    onlinePresenceDescription:
        "With SEO expertise serving businesses in Dubai, Islamabad, and across the USA, we help brands strengthen search visibility, improve organic rankings, and attract qualified traffic. Our strategic approach combines technical excellence, content optimization, and data-driven insights to support sustainable online growth and long-term search performance.",
    locationsHeading: "Your Partner for Local and Global SEO",
    locationsDescription:
        "Whether targeting local customers or expanding into broader markets, our SEO solutions are designed to improve search visibility, attract qualified traffic, and support sustainable growth. We help businesses strengthen their online presence through strategic optimization and measurable search performance improvements.",
    locations: [
        {
            title: "SEO Agency in Dubai",
            officeAddress:
                "B2B Office Tower, Office Number 2205, Marasi Drive Street, Business Bay, Dubai, UAE",
            officePhone: "+971 52 785 1523",
        },
        {
            title: "SEO Agency in Islamabad, Pakistan",
            officeAddress:
                "World Trade Center, Office Number 4087, Islamabad, Pakistan",
            officePhone: "+971 52 785 1523",
        },
        {
            title: "SEO Agency in USA (Remote-Based)",
            officeAddress: "Serving clients remotely across the United States.",
            officePhone: "+971 52 785 1523",
        },
    ],
    faqs: [
        {
            question: "Why is SEO important for business growth?",
            answer:
                "SEO improves online visibility, attracts qualified traffic, and helps businesses generate more opportunities through search.",
        },
        {
            question: "Is SEO a one-time process or an ongoing effort?",
            answer:
                "SEO is an ongoing process. Regular optimization is needed to maintain rankings and adapt to search engine updates.",
        },
        {
            question: "What factors affect search engine rankings?",
            answer:
                "Rankings are influenced by content quality, website performance, relevance, backlinks, and user experience.",
        },
        {
            question: "How do backlinks influence search rankings?",
            answer:
                "Quality backlinks help build website authority and signal trustworthiness to search engines, supporting higher rankings.",
        },
        {
            question: "What should businesses expect from professional SEO services?",
            answer:
                "Businesses can expect strategic recommendations, ongoing optimization, performance monitoring, and a focus on long-term organic growth.",
        },
    ],
};
