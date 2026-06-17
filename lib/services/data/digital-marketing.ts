import type { ServiceDetailData } from "../types";
import googleAds from "@/public/CompanySvgs/google_ads.svg";
import hotjar from "@/public/CompanySvgs/hotjar.svg";
import brevo from "@/public/CompanySvgs/brevo.svg";
import hubspot from "@/public/CompanySvgs/hubspot.svg";
import googleAnalytics from "@/public/CompanySvgs/googleAnalytics.svg";
import canvas from "@/public/CompanySvgs/canva.svg";
import moz from "@/public/CompanySvgs/moz.svg";
import ahrefs from "@/public/CompanySvgs/ahrefs.svg";
import consultingImage from "@/public/dashboard.jpg";

export const digitalMarketingData: ServiceDetailData = {
  slug: "digital-marketing",
  title: "Digital Marketing",
  seo: {
    metaTitle: "Digital Marketing Services | Mahraj Technologies",
    metaDescription:
      "Data-driven digital marketing strategies from Mahraj Technologies—SEO, PPC, content, and affiliate marketing to grow visibility, engagement, and measurable business results.",
    focusKeyword: "digital marketing agency",
  },
  hero: {
    eyebrow: "HOME / SERVICES / DIGITAL MARKETING",
    titleLight: "Digital Marketing",
    titleDark: "",
    description:
      "Want to grow your brand faster? Digital marketing connects you with customers where they spend time.",
  },
  serviceTypesHeading: "Types of Digital Marketing",
  serviceTypesDescription:
    "",
  serviceTypes: [
    {
      icon: "link2",
      title: "Affiliate Marketing",
      description:
        "We build affiliate partnerships that expand brand reach, generate qualified leads, and increase sales revenue.",
    },
    {
      icon: "fileText",
      title: "Content Marketing",
      description:
        "We craft strategic content that attracts the right audience, builds lasting trust, and supports consistent growth.",
    },
    {
      icon: "mail",
      title: "Email Marketing",
      description:
        "We design targeted email campaigns that nurture leads, strengthen customer loyalty, and convert prospects into buyers.",
    },
    {
      icon: "barChart3",
      title: "Marketing Analytics",
      description:
        "We track campaign performance, measure real results, and deliver actionable insights that sharpen every marketing decision.",
    },
    {
      icon: "smartphone",
      title: "Mobile Marketing",
      description:
        "We build mobile-first strategies that reach users across smartphones, apps, and every major mobile touchpoint.",
    },

    {
      icon: "megaphone",
      title: "Pay-Per-Click (PPC)",
      description:
        "We run high-performance PPC campaigns that drive instant traffic, boost visibility, and maximize your advertising ROI.",
    },
    {
      icon: "search",
      title: "Search Engine Optimization (SEO)",
      description:
        "We optimize your website to rank higher in search, grow organic traffic, and strengthen your digital presence.",
    },
    {
      icon: "share2",
      title: "Social Media Marketing",
      description:
        "We run targeted social campaigns that grow brand awareness, build engaged communities, and drive measurable audience action.",
    },
  ],
  processHeading: "Our Proven Digital Marketing Process",
  processDescription:
    "",
  process: [
    {
      step: "01",
      title: "Discovery",
      description:
        "We uncover audience insights, market opportunities, and competitive advantages that shape successful marketing campaigns.",
    },
    {
      step: "02",
      title: "Execution",
      description:
        "Every strategy is implemented with precision, ensuring your brand reaches the right audience at the right time.",
    },
    {
      step: "03",
      title: "Performance",
      description:
        "We track key metrics, analyze results, and refine campaigns to deliver consistent and measurable growth.",
    },
    {
      step: "04",
      title: "Support",
      description:
        "Our team remains actively involved, providing expert guidance and ongoing optimization throughout the campaign lifecycle.",
    },
  ],
  comparison: {
    heading: "Digital Marketing vs Traditional Marketing",
    description:
      "",
    columnDigital: "Digital Marketing",
    columnTraditional: "Traditional Marketing",
    rows: [
      {
        feature: "Targeting",
        digital: "Targets specific audiences based on interests, behaviour, and demographics.",
        traditional: "Reaches a broader audience with limited targeting options.",
      },
      {
        feature: "Measurement",
        digital: "Provides real-time performance tracking and reporting.",
        traditional: "Performance is often difficult to measure accurately.",
      },
      {
        feature: "Cost Control",
        digital: "Allows quick campaign adjustments for improved results.",
        traditional: "Campaign changes can be time-consuming and costly.",
      },
      {
        feature: "Engagement",
        digital: "Supports direct engagement through multiple online channels.",
        traditional: "Relies on one-way communication through offline media.",
      },
      {
        feature: "Speed to Market",
        digital: "Offers measurable ROI and data-driven decision-making.",
        traditional: "ROI is harder to track and optimize.",
      },
    ],
  },
  caseStudiesHeading: "Case Studies",
  caseStudies: [
    {
      id: "01",
      title: "Scaling Organic Growth for a B2B Technology Brand",
      overview:
        "Generating qualified leads through organic search had become a major challenge for this technology company. By strengthening its SEO foundation, refining content strategy, and improving keyword positioning, we helped create a more sustainable growth channel.",
      results: [
        { value: "132%", label: "increase in organic traffic" },
        { value: "68%", label: "growth in qualified leads" },
        { value: "41%", label: "improvement in keyword visibility" },
        { value: "29%", label: "reduction in bounce rate" },
      ],
    },
    {
      id: "02",
      title: "Improving Paid Campaign Performance for an E-Commerce Business",
      overview:
        "Despite investing heavily in paid advertising, the brand was not achieving the expected return on investment. Our team restructured campaign targeting, optimized conversion paths, and leveraged performance data to improve overall campaign efficiency.",
      results: [
        { value: "87%", label: "increase in conversion rate" },
        { value: "52%", label: "lower cost per acquisition" },
        { value: "3.4X", label: "return on ad spend (ROAS)" },
        { value: "118%", label: "growth in online sales" },
      ],
    },
    {
      id: "03",
      title: "Strengthening Brand Engagement Through Social Media Marketing",
      overview:
        "Building meaningful audience engagement was the primary objective for this growing service provider. Through strategic content planning, consistent brand communication, and targeted social campaigns, we helped increase visibility and customer interaction across digital platforms.",
      results: [
        { value: "215%", label: "increase in engagement rate" },
        { value: "74%", label: "growth in follower base" },
        { value: "96%", label: "increase in website referrals" },
        { value: "57%", label: "significant improvement in brand awareness" },
      ],
    },
  ],
  toolsHeading: "Digital Marketing Tools",
  toolsDescription:
    "Our team uses advanced digital marketing tools to analyze performance, improve campaign effectiveness, and support data-driven growth strategies. These tools enable more accurate insights and better marketing outcomes.",
  tools: [
    {
      icon: googleAds,
    },
    {
      icon: brevo,
    },
    {
      icon: hubspot,
    },
    {
      icon: hotjar,
    },
    {
      icon: googleAnalytics,
    },
    {
      icon: canvas,
    },
    {
      icon: moz,
    },
    {
      icon: ahrefs,
    },
  ],
  testimonialsHeading: "Testimonials",
  testimonialsDescription:"Client success is our greatest achievement. Here's what businesses say about working with Mahraj Technologies.",
  testimonials: [
    {
      quote:
        "We had worked with agencies before, but the approach here was different. They took time to understand our market, built a strategy around our actual sales cycle, and kept us informed at every step. Within a few months, lead quality improved noticeably, and our organic visibility reached levels we hadn't seen before.",
      name: "Michael Anderson",
      position: "Marketing Director",
    },
    {
      quote:
        "Before making a single recommendation, they spent time learning how our business actually works. That made all the difference. The strategies they proposed were practical, well-timed, and built for our specific audience. We saw stronger brand recognition and a consistent rise in qualified inquiries over the engagement period.",
      name: "Jennifer Collins",
      position: "Head of Marketing",
    },
    {
      quote:
        "Every decision they made was backed by clear data and explained in plain language. There were no vague promises, just focused execution and honest reporting. Our digital presence grew steadily, and for the first time, our marketing efforts were directly contributing to pipeline growth.",
      name: "Sarah Mitchell",
      position: "Business Development Manager",
    },
  ],
  consultingHeading: "Digital Marketing Consulting",
  consultingDescription:
    "Our digital marketing consulting services provide the insights and guidance needed to strengthen your marketing efforts. We evaluate your current performance, identify opportunities, and develop strategic recommendations that help drive growth, improve visibility, and achieve measurable business results.",
  consultingImage: consultingImage,
  onlinePresenceHeading: "Online Presence",
  onlinePresenceDescription:
    "With a presence in Dubai, Islamabad, and the USA, we work with businesses across multiple regions to deliver impactful digital solutions. Our commitment to innovation, performance, and measurable results enables brands to build a stronger online presence and stay ahead in an evolving digital landscape.",
  locationsHeading: "Trusted Digital Marketing Agency in Your Area",
  locationsDescription:
    "With a strong presence across multiple locations, our digital marketing agency delivers customized solutions to increase visibility, generate quality leads, and drive business growth. We combine strategic planning, creative execution, and performance-focused marketing to help brands succeed online.",
  locations: [
    {
      title: "Digital Marketing Agency in Dubai",
      officeAddress: "B2B Office Tower, Office Number 2205, Marasi Drive Street, Business Bay, Dubai, UAE",
      officePhone: "+971 52 785 1523",
    },
    {
      title: "Digital Marketing Agency in Islamabad",
      officeAddress: "World Trade Center, Office Number 4087, Islamabad, Pakistan",
      officePhone: "+971 52 785 1523",
    },
    {
      title: "Digital Marketing Agency in USA",
      officeAddress: "Remote delivery across United States time zones",
      officePhone: "+971 52 785 1523",
    }
  ],
  faqs: [
    {
      question: "How do I know if my business needs digital marketing services?",
      answer:
        "If your business struggles to attract customers online or generate consistent leads, digital marketing can help. It improves visibility, audience reach, and growth opportunities.",
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer:
        "The timeline depends on the strategy and industry. Some campaigns show results within weeks, while long-term strategies like SEO may take several months.",
    },
    {
      question: "Can digital marketing help small businesses compete with larger brands?",
      answer:
        "Yes! Digital marketing allows small businesses to reach targeted audiences, build brand awareness, and compete effectively without large advertising budgets.",
    },
    {
      question: "How do you measure the success of a marketing campaign?",
      answer:
        "Success is measured through key metrics such as website traffic, lead generation, engagement, conversions, and return on investment (ROI).",
    },
    {
      question: "What should businesses look for in a digital marketing agency?",
      answer:
        "Look for an agency with proven experience, transparent communication, data-driven strategies, and a strong focus on measurable results.",
    }
  ]
};
