import type { ServiceDetailData } from "../types";
import googleAnalytics from "@/public/CompanySvgs/googleAnalytics.svg";
import canva from "@/public/CompanySvgs/canva.svg";
import metaAdsManager from "@/public/CompanySvgs/meta-ads.svg";
import hootsuite from "@/public/CompanySvgs/hootsuite.svg";
import semrush from "@/public/CompanySvgs/semrush.svg";
import nielsen from "@/public/CompanySvgs/nielsen.svg";
import consultingImage from "@/public/dashboard.jpg";

export const fmcgMarketingData: ServiceDetailData = {
  slug: "fmcg-marketing",
  title: "FMCG Marketing",
  seo: {
    metaTitle: "FMCG Marketing Services | Mahraj Technologies",
    metaDescription:
      "FMCG marketing from Mahraj Technologies—drive awareness, shelf visibility, and everyday sales with digital, influencer, trade, and promotional campaigns.",
    focusKeyword: "FMCG marketing agency",
  },
  hero: {
    eyebrow: "HOME / SERVICES / FMCG MARKETING",
    titleLight: "FMCG Marketing",
    titleDark: "",
    description:
      "Want your products to sell faster? FMCG marketing helps brands attract customers and increase everyday sales.",
  },
  serviceTypesHeading: "Types of FMCG Marketing",
  serviceTypesDescription: "",
  serviceTypes: [
    {
      icon: "share2",
      title: "Digital & Social Media Marketing",
      description:
        "Promotes FMCG brands across social platforms to drive awareness, engagement, and direct product sales online.",
    },
    {
      icon: "shoppingCart",
      title: "In-Store & Trade Marketing",
      description:
        "Boosts product visibility through shelf placements, displays, and retailer partnerships to influence purchase decisions.",
    },
    {
      icon: "users",
      title: "Influencer Marketing",
      description:
        "Leverages trusted creators to authentically promote FMCG products and reach highly targeted consumer audiences faster.",
    },
    {
      icon: "tv",
      title: "TV & Mass Media Marketing",
      description:
        "Uses television, radio, and print to build strong brand recall and reach millions of consumers simultaneously.",
    },
    {
      icon: "megaphone",
      title: "Promotional Marketing",
      description:
        "Drives immediate product sales through discounts, limited offers, bundle deals, and seasonal campaigns that attract buyers.",
    },
    {
      icon: "search",
      title: "Content & SEO Marketing",
      description:
        "Creates valuable content and optimizes search visibility to attract, educate, and convert the right consumers online.",
    },
    {
      icon: "mapPin",
      title: "Experiential & Sampling Marketing",
      description:
        "Lets consumers experience products firsthand through live events, free samples, and interactive brand activations.",
    },
    {
      icon: "refreshCw",
      title: "Customer Loyalty & Retention Marketing",
      description:
        "Rewards repeat buyers through loyalty programs, personalized offers, and engagement strategies that build long-term brand relationships.",
    },
  ],
  processHeading: "The Strategy Behind Our FMCG Marketing Success",
  processDescription: "",
  process: [
    {
      step: "01",
      title: "Market Research",
      description:
        "We study your target consumers, analyze competitors, and identify the right channels to position your FMCG brand effectively.",
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description:
        "Our team builds a focused marketing plan covering digital, influencer, promotional, and trade strategies tailored to your product goals.",
    },
    {
      step: "03",
      title: "Campaign Execution",
      description:
        "We launch and manage campaigns across social media, retail, mass media, and live sampling events to maximize brand reach.",
    },
    {
      step: "04",
      title: "Track & Optimize",
      description:
        "We monitor campaign performance, measure results, and continuously refine strategies to improve loyalty, retention, and overall marketing success.",
    },
  ],
  comparison: {
    heading: "FMCG Marketing vs. Traditional Marketing",
    description: "",
    featureColumnLabel: "Features",
    columnDigital: "FMCG Marketing",
    columnTraditional: "Traditional Marketing",
    rows: [
      {
        feature: "Primary Focus",
        digital: "Targets mass consumers with fast-moving products.",
        traditional: "Targets broad audiences without product urgency.",
      },
      {
        feature: "Campaign Speed",
        digital: "Launches and adapts campaigns quickly.",
        traditional: "Follows slow and rigid campaign timelines.",
      },
      {
        feature: "Consumer Reach",
        digital: "Reaches buyers through digital and retail channels.",
        traditional: "Relies heavily on print, TV, and billboards.",
      },
      {
        feature: "Purchase Cycle",
        digital: "Drives frequent and repeat purchases.",
        traditional: "Focuses on one-time or infrequent buying.",
      },
      {
        feature: "Performance Tracking",
        digital: "Measures results in real time using data.",
        traditional: "Lacks precise and immediate performance insights.",
      },
    ],
  },
  toolsHeading: "FMCG Marketing Tools",
  toolsDescription:
    "Effective FMCG marketing depends on the right tools. We use industry-trusted platforms to run targeted campaigns, track consumer behavior, measure brand performance, and create compelling content that drives product visibility and sales across every channel.",
  tools: [
    // TODO: add Meta Ads Manager, Hootsuite, SEMrush, Nielsen, Kantar, Bazaarvoice SVGs
    { icon: googleAnalytics },
    { icon: canva },
    { icon: metaAdsManager },
    { icon: hootsuite },
    { icon: semrush },
    { icon: nielsen },
  ],
  testimonialsHeading: "Testimonials",
  testimonialsDescription: "",
  testimonials: [
    {
      quote:
        "Their influencer marketing approach was highly effective. Our new product launch reached thousands of buyers instantly. Mahraj Technologies truly understands FMCG consumer behavior.",
      name: "Sofia Brennan",
      position: "Head of Growth",
    },
    {
      quote:
        "We ran promotions but never saw real results. Mahraj redesigned our entire campaign approach. They used the right channels and the right timing. Our product sell-through rate improved dramatically within the first month.",
      name: "Carlos Mendez",
      position: "Marketing Director",
    },
    {
      quote:
        "TV advertising alone was not enough for us. Mahraj added digital layers to our media strategy. Results were far stronger and measurable.",
      name: "Sofia Reyes",
      position: "Marketing Head",
    },
  ],
  consultingHeading: "FMCG Marketing Consulting",
  consultingDescription:
    "Struggling to move products off shelves faster? Our FMCG marketing services help brands connect with the right consumers, increase purchase frequency, and build lasting brand recognition in competitive markets.",
  consultingImage: consultingImage,
  onlinePresenceHeading: "Our FMCG Market Reach",
  onlinePresenceDescription:
    "With active teams across Dubai, Islamabad, and the USA, we serve FMCG brands across multiple regions and retail landscapes. Our commitment to consumer insights, campaign performance, and brand growth helps product companies stay visible, competitive, and relevant in an ever-changing marketplace.",
  locationsHeading: "Your Trusted FMCG Marketing Partner Near You",
  locationsDescription:
    "With a strong presence across multiple locations, our FMCG marketing team delivers strategies built around your product category and target consumer. We combine market research, creative campaigns, and retail-focused execution to help FMCG brands increase sales and grow consumer loyalty consistently.",
  locations: [
    {
      title: "FMCG Marketing Agency in Dubai",
      officeAddress:
        "B2B Office Tower, Office Number 2205, Marasi Drive Street, Business Bay, Dubai, UAE",
      officePhone: "+971 52 785 1523",
    },
    {
      title: "FMCG Marketing Agency in Islamabad, Pakistan",
      officeAddress:
        "World Trade Center, Office Number 4087, Islamabad, Pakistan",
      officePhone: "+971 52 785 1523",
    },
    {
      title: "FMCG Marketing Agency in USA (Remote-Based)",
      officeAddress: "Serving FMCG brands remotely across the United States.",
      officePhone: "+971 52 785 1523",
    },
  ],
  faqsHeading: "FAQs",
  faqs: [
    {
      question: "What makes FMCG marketing different from other marketing?",
      answer:
        "FMCG marketing focuses on high-volume, fast-moving products. It requires faster campaigns, frequent consumer touchpoints, and strong retail presence. The competition is intense, and consumer decisions happen quickly.",
    },
    {
      question: "Do you work with small FMCG brands or only large ones?",
      answer:
        "We work with all brand sizes. Whether you are a startup or an established name, we build strategies that fit your budget and goals. Every product deserves the right marketing.",
    },
    {
      question: "Do you handle packaging and product branding too?",
      answer:
        "Yes! We design packaging that stands out on shelves and screens. Strong branding builds instant consumer trust. We make sure your product looks as good as it performs.",
    },
    {
      question: "Can you run campaigns in multiple languages?",
      answer:
        "Yes! We create campaigns in multiple languages for diverse markets. Each campaign is culturally relevant and consumer-friendly. We help your brand connect naturally with every audience.",
    },
    {
      question: "Do you offer category management support?",
      answer:
        "Yes! We analyze your product category and identify growth opportunities. We improve your positioning within retail environments. This helps your brand perform better against competitors on every shelf.",
    },
    {
      question: "How quickly can we see results from FMCG marketing?",
      answer:
        "Most campaigns show early results within 30 to 60 days. Speed depends on your channels, budget, and product type. We track performance from day one and optimize quickly.",
    },
  ],
};
