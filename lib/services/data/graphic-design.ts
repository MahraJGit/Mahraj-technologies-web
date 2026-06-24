import type { ServiceDetailData } from "../types";
import figma from "@/public/CompanySvgs/figma.svg";
import canva from "@/public/CompanySvgs/canva.svg";
import sketch from "@/public/CompanySvgs/sketch.svg";
import adobe from "@/public/CompanySvgs/adobe.svg";
import adobePS from "@/public/CompanySvgs/adobe-photoshop.svg";
import adobeAE from "@/public/CompanySvgs/adobe-aftereffects.svg";
import adobePR from "@/public/CompanySvgs/adobe-premierepro.svg";
import consultingImage from "@/public/dashboard.jpg";

export const graphicDesignData: ServiceDetailData = {
  slug: "graphic-design",
  title: "Graphic Design",
  seo: {
    metaTitle: "Graphic Design Services | Mahraj Technologies",
    metaDescription:
      "Graphic design services from Mahraj Technologies—memorable logos, brand identity, social media creatives, and marketing visuals that strengthen recognition and help your business stand out.",
    focusKeyword: "graphic design",
  },
  hero: {
    eyebrow: "HOME / SERVICES / GRAPHIC DESIGN",
    titleLight: "Graphic Design",
    titleDark: "",
    description:
      "Looking for designs that people remember? Graphic design turns ideas into powerful visual experiences.",
  },
  serviceTypesHeading: "Types of Graphic Design",
  serviceTypesDescription: "",
  serviceTypes: [
    {
      icon: "target",
      title: "Logo Design",
      description:
        "We design unique, memorable logos that truly represent your brand and help people recognize you instantly, everywhere.",
    },
    {
      icon: "palette",
      title: "Brand Identity Design",
      description:
        "We build a consistent visual identity using colors, fonts, and design elements that build trust and recognition.",
    },
    {
      icon: "share2",
      title: "Social Media Design",
      description:
        "We create scroll-stopping social media content that grabs attention, boosts engagement, and strengthens your brand's online presence.",
    },
    {
      icon: "megaphone",
      title: "Marketing & Advertising Design",
      description:
        "We craft persuasive marketing materials that clearly communicate your message and help your campaigns perform better and convert.",
    },
    {
      icon: "shoppingCart",
      title: "Packaging Design",
      description:
        "We design eye-catching packaging that makes your product stand out on shelves and influences customer buying decisions.",
    },
    {
      icon: "monitor",
      title: "Digital Graphics Design",
      description:
        "We create polished digital assets for websites, emails, and online platforms that improve how your brand communicates visually.",
    },
    {
      icon: "fileText",
      title: "Presentation Design",
      description:
        "We turn your ideas into clean, professional presentations that explain information clearly and keep your audience fully engaged.",
    },
    {
      icon: "penTool",
      title: "Illustration Design",
      description:
        "We craft custom illustrations that add personality to your brand, simplify complex ideas, and create memorable visual experiences.",
    },
  ],
  processHeading: "Our Process for Delivering Memorable Designs",
  processDescription: "",
  process: [
    {
      step: "01",
      title: "Creative Discovery",
      description:
        "We start by understanding your brand, audience, and goals, building a clear direction before any design begins.",
    },
    {
      step: "02",
      title: "Concept Development",
      description:
        "Our designers explore different styles, ideas, and messaging to shape concepts that truly align with your objectives.",
    },
    {
      step: "03",
      title: "Design Creation",
      description:
        "We bring concepts to life with polished graphics, balancing creativity, brand consistency, and clear visual communication throughout.",
    },
    {
      step: "04",
      title: "Review & Refinement",
      description:
        "Your feedback matters. We refine every detail carefully to deliver designs that are impactful, professional, and ready to use.",
    },
  ],
  comparison: {
    heading: "Graphic Design vs. UI UX Design",
    description: "",
    columnDigital: "Graphic Design",
    columnTraditional: "UI UX Design",
    rows: [
      {
        feature: "Primary Focus",
        digital: "Creates visual assets and branding materials.",
        traditional: "Creates user-friendly and intuitive digital experiences.",
      },
      {
        feature: "Main Goal",
        digital: "Strengthens brand recognition and appeal.",
        traditional: "Improves usability, engagement, and user satisfaction.",
      },
      {
        feature: "Key Elements",
        digital: "Uses logos, graphics, colors, and illustrations.",
        traditional: "Uses research, wireframes, journeys, and interfaces.",
      },
      {
        feature: "User Interaction",
        digital: "Focuses on how designs look visually.",
        traditional: "Focuses on how users navigate and interact.",
      },
      {
        feature: "Success Measure",
        digital: "Measured by visual impact and brand consistency.",
        traditional: "Measured by usability, efficiency, and user experience quality.",
      },
    ],
  },
  toolsHeading: "Graphic Design Tools",
  toolsDescription:
    "Exceptional design requires more than creativity, it requires the right tools. We use industry-leading graphic design software to create professional visuals, maintain design consistency, and deliver high-quality creative assets across digital and print platforms.",
  tools: [
    { icon: adobePS },
    { icon: adobe },
    { icon: figma },
    { icon: adobeAE },
    { icon: canva },
    { icon: adobePR },
    { icon: sketch },
  ],
  testimonialsHeading: "Testimonials",
  testimonialsDescription: "",
  testimonials: [
    {
      quote:
        "Professional, fast, and incredibly creative. They took our rough ideas and turned them into polished designs that exceeded our expectations every single time.",
      name: "Daniel Foster",
      position: "Business Owner",
    },
    {
      quote:
        "Mahraj completely transformed our brand identity. The logo, colors, and overall design felt so professional and unique. Our customers instantly noticed the difference, and our brand finally feels memorable and consistent.",
      name: "Emily Carter",
      position: "Brand Strategist",
    },
    {
      quote:
        "The illustration work added so much personality to our brand. Every design felt thoughtful, original, and perfectly aligned with our message and audience.",
      name: "Olivia Bennett",
      position: "Marketing Manager",
    },
  ],
  consultingHeading: "Graphic Design Consulting",
  consultingDescription:
    "Graphic design consulting helps businesses build a stronger, more consistent visual presence. We assess your branding, marketing materials, and digital assets to uncover improvement opportunities. From brand identity to campaign visuals and creative direction, we offer practical, actionable guidance that helps your business communicate clearly and stand out in competitive markets.",
  consultingImage: consultingImage,
  onlinePresenceHeading: "Our Growing Worldwide Presence",
  onlinePresenceDescription:
    "Our growing presence across Dubai, Islamabad, and the USA reflects the trust businesses place in our creative expertise. From startups to established brands, we strengthen visual identities through impactful design. Combining creativity, consistency, and strategic thinking, we help businesses build stronger connections with audiences across diverse markets.",
  locationsHeading: "Professional Graphic Design Services Near You",
  locationsDescription:
    "Professional graphic design services are closer than you think. Whether you need branding, marketing materials, social media creatives, or custom visuals, we help bring your ideas to life with impactful designs. Our focus is on creating professional, memorable, and results-driven graphics that strengthen your brand and help your business stand out.",
  locations: [
    {
      title: "Graphic Design Agency in Dubai",
      officeAddress:
        "B2B Office Tower, Office Number 2205, Marasi Drive Street, Business Bay, Dubai, UAE",
      officePhone: "+971 52 785 1523",
    },
    {
      title: "Graphic Design Agency in Islamabad, Pakistan",
      officeAddress:
        "World Trade Center, Office Number 4087, Islamabad, Pakistan",
      officePhone: "+971 52 785 1523",
    },
    {
      title: "Graphic Design Agency in USA (Remote-Based)",
      officeAddress: "Serving clients remotely across the United States.",
      officePhone: "+971 52 785 1523",
    },
  ],
  faqs: [
    {
      question: "Can I request revisions during the design process?",
      answer:
        "Yes, absolutely. We welcome feedback and refine designs until they truly match your vision.",
    },
    {
      question: "What information do you need before starting a project?",
      answer:
        "We need your brand details, goals, target audience, and any design preferences. This helps us create the right direction from the start.",
    },
    {
      question: "Do you offer design support for ongoing projects?",
      answer:
        "Yes, we do. We provide continued support for brands needing regular design updates and new content.",
    },
    {
      question: "What happens if I need additional design assets later?",
      answer:
        "No problem! You can request new assets anytime, and we'll create them to match your existing brand style.",
    },
    {
      question: "Do you provide source files with the final designs?",
      answer:
        "Yes, source files are provided upon request. This gives you full flexibility for future edits.",
    },
  ],
};
