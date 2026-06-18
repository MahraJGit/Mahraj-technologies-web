import type { ServiceDetailData } from "../types";
import hubspot from "@/public/CompanySvgs/hubspot.svg";
import brevo from "@/public/CompanySvgs/brevo.svg";
import googleAds from "@/public/CompanySvgs/google_ads.svg";
import consultingImage from "@/public/dashboard.jpg";
import pipedrive from "@/public/CompanySvgs/pipedrive.svg";
import cognism from "@/public/CompanySvgs/cognism.svg";
import expandi from "@/public/CompanySvgs/Expandi.svg";
import jotform from "@/public/CompanySvgs/jotform.svg";
export const leadGenerationData: ServiceDetailData = {
  slug: "lead-generation",
  title: "Lead Generation",
  seo: {
    metaTitle: "Lead Generation Services | Mahraj Technologies",
    metaDescription:
      "Lead generation services from Mahraj Technologies—attract qualified prospects through targeted outreach, content, SEO, and paid campaigns to build a consistent pipeline of high-value business opportunities.",
    focusKeyword: "lead generation",
  },
  hero: {
    eyebrow: "HOME / SERVICES / LEAD GENERATION",
    titleLight: "Lead Generation",
    titleDark: "",
    description:
      "Looking for more qualified prospects? Lead generation helps connect your business with potential customers.",
  },
  serviceTypesHeading: "Types of Lead Generation",
  serviceTypesDescription: "",
  serviceTypes: [
    {
      icon: "fileText",
      title: "Content Marketing",
      description:
        "We craft valuable, targeted content that attracts the right prospects, builds lasting trust, and drives qualified business leads consistently.",
    },
    {
      icon: "share2",
      title: "Social Media Marketing",
      description:
        "We use powerful social platforms to engage the right audiences, grow brand visibility, and turn followers into potential leads.",
    },
    {
      icon: "mail",
      title: "Email Marketing",
      description:
        "We design targeted email campaigns that nurture warm prospects, strengthen relationships, and inspire meaningful actions that move customers forward.",
    },
    {
      icon: "search",
      title: "SEO",
      description:
        "We boost your search rankings to attract high-intent visitors who are actively looking for exactly what your business offers.",
    },
    {
      icon: "users",
      title: "Cold Calling",
      description:
        "We reach potential prospects through smart, strategic outreach calls carefully designed to spark interest and open real business opportunities.",
    },
    {
      icon: "link2",
      title: "Cold Mailing",
      description:
        "We craft personalized cold email campaigns that grab attention, generate genuine interest, and start valuable conversations with the right people.",
    },
    {
      icon: "smartphone",
      title: "WhatsApp Outreach",
      description:
        "We use direct, personal WhatsApp communication to engage prospects quickly, build rapport faster, and accelerate your lead generation results.",
    },
    {
      icon: "megaphone",
      title: "Paid Advertising",
      description:
        "We run laser-targeted ad campaigns across top platforms to drive qualified traffic, increase conversions, and maximize your lead acquisition ROI.",
    },
  ],
  processHeading: "How Do We Generate Quality Leads?",
  processDescription:
    "Our lead generation process is built to attract high-intent prospects, improve conversion potential, and create consistent business opportunities.",
  process: [
    {
      step: "01",
      title: "Analyze",
      description:
        "We identify audience behaviour, market trends, and opportunities that support more effective lead acquisition.",
    },
    {
      step: "02",
      title: "Strategy",
      description:
        "Every campaign is tailored to your goals, ensuring a focused approach to lead generation.",
    },
    {
      step: "03",
      title: "Outreach",
      description:
        "We connect with qualified prospects through targeted channels that encourage meaningful engagement.",
    },
    {
      step: "04",
      title: "Results",
      description:
        "Continuous optimization and performance tracking help maximize lead quality and long term growth.",
    },
  ],
  comparison: {
    heading: "Lead Generation vs. Lead Management",
    description: "",
    columnDigital: "Lead Generation",
    columnTraditional: "Lead Management",
    rows: [
      {
        feature: "Purpose",
        digital: "Attracts potential customers.",
        traditional: "Organizes generated leads.",
      },
      {
        feature: "Pipeline Impact",
        digital: "Generates new business opportunities.",
        traditional: "Tracks prospect interactions.",
      },
      {
        feature: "Prospect Focus",
        digital: "Increases qualified prospects.",
        traditional: "Nurtures potential customers.",
      },
      {
        feature: "Growth Outcome",
        digital: "Expands the sales pipeline.",
        traditional: "Improves conversion efficiency.",
      },
      {
        feature: "Primary Goal",
        digital: "Focuses on customer acquisition.",
        traditional: "Supports the sales process.",
      },
    ],
  },
  toolsHeading: "Lead Generation Tools",
  toolsDescription:
    "Generating quality leads demands the right tools. We use industry-leading platforms to identify prospects, streamline outreach, track engagement, and turn more opportunities into real business results.",
  tools: [
    { icon: hubspot },
    { icon: brevo },
    { icon: googleAds },
    { icon: pipedrive },
    { icon: cognism },
    { icon: expandi },
    { icon: jotform },
  ],
  testimonialsHeading: "Testimonials",
  testimonialsDescription:
    "Client success is our greatest achievement. Here's what businesses say about working with Mahraj Technologies.",
  testimonials: [
    {
      quote:
        "What impressed us most was the strategic thinking behind every step. The entire lead generation process was carefully planned and executed. We saw a clear rise in qualified inquiries and stronger business opportunities that directly impacted our bottom line.",
      name: "Christopher Reed",
      position: "Chief Executive Officer",
    },
    {
      quote:
        "The LinkedIn outreach campaign went beyond our expectations. The messaging felt natural and genuine. Response rates climbed steadily, and we finally started having real conversations with high-value prospects we had never been able to reach before.",
      name: "Lauren Hayes",
      position: "Business Growth Manager",
    },
    {
      quote:
        "Their lead generation specialists gave our sales team a serious competitive edge. The combination of deep research, precise targeting, and smart outreach created a consistent and reliable flow of high-quality opportunities every single week.",
      name: "Samantha Lewis",
      position: "Revenue Growth Consultant",
    },
  ],
  consultingHeading: "Lead Generation Consulting",
  consultingDescription:
    "Our lead generation consulting services help businesses refine targeting, optimize outreach strategies, and improve lead quality. We evaluate existing acquisition efforts, identify growth opportunities, and provide actionable recommendations designed to generate more qualified prospects and support sustainable business growth.",
  consultingImage: consultingImage,
  onlinePresenceHeading: "Our International Presence",
  onlinePresenceDescription:
    "Our lead generation expertise extends across Dubai, Islamabad, and the USA, helping businesses reach the right prospects with confidence. Through targeted acquisition strategies, audience insights, and performance-focused outreach, we support stronger customer connections, increased inquiries, and consistent business development opportunities for growth.",
  locationsHeading: "Your Partner for Consistent Lead Generation",
  locationsDescription:
    "Generating a steady flow of qualified prospects requires the right strategy, targeting, and execution. Our lead generation solutions are designed to attract high value opportunities, improve engagement, and help businesses build a stronger pipeline that supports sustainable long term growth.",
  locations: [
    {
      title: "Lead Generation Agency in Dubai",
      officeAddress:
        "B2B Office Tower, Office Number 2205, Marasi Drive Street, Business Bay, Dubai, UAE",
      officePhone: "+971 52 785 1523",
    },
    {
      title: "Lead Generation Agency in Islamabad, Pakistan",
      officeAddress:
        "World Trade Center, Office Number 4087, Islamabad, Pakistan",
      officePhone: "+971 52 785 1523",
    },
    {
      title: "Lead Generation Agency in USA (Remote-Based)",
      officeAddress: "Serving clients remotely across the United States.",
      officePhone: "+971 52 785 1523",
    },
  ],
  faqs: [
    {
      question: "Why is lead generation important for businesses?",
      answer:
        "Lead generation helps businesses attract potential customers and create new sales opportunities. It supports sustainable growth by maintaining a consistent pipeline of qualified prospects.",
    },
    {
      question: "What makes a lead qualified?",
      answer:
        "A qualified lead is someone who matches your target audience and has demonstrated genuine interest in your products or services. These prospects are more likely to convert into customers.",
    },
    {
      question: "Which lead generation channels are most effective?",
      answer:
        "The most effective channels depend on your audience and industry. Common options include SEO, email marketing, social media marketing, paid advertising, and targeted outreach campaigns.",
    },
    {
      question: "What should businesses expect from a lead generation partner?",
      answer:
        "Businesses should expect strategic planning, transparent communication, performance tracking, and a focus on generating relevant, high quality leads that support growth objectives.",
    },
    {
      question: "What makes Mahraj Technologies different?",
      answer:
        "Mahraj Technologies combines data-driven strategies, targeted outreach, and industry expertise to generate meaningful business opportunities. Our focus remains on lead quality, measurable results, and long term client success.",
    },
  ],
};
