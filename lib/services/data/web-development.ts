import type { ServiceDetailData } from "../types";
import react from "@/public/CompanySvgs/reactjs_logo.svg";
import nodejs from "@/public/CompanySvgs/nodejs-logo.svg";
import mongodb from "@/public/CompanySvgs/mongodb.svg";
import tailwind from "@/public/CompanySvgs/tailwindcss.svg";
import prisma from "@/public/CompanySvgs/Prisma.svg";
import stripe from "@/public/CompanySvgs/stripe.svg";
import laravel from "@/public/CompanySvgs/laravel.svg";
import consultingImage from "@/public/dashboard.jpg";


export const webDevelopmentData: ServiceDetailData = {
  slug: "web-development",
  title: "Web Development",
  seo: {
    metaTitle: "Web Development Services | Mahraj Technologies",
    metaDescription:
      "Web development services from Mahraj Technologies—build fast, scalable websites and web applications with modern technologies, strategic architecture, and performance-focused development.",
    focusKeyword: "web development",
  },
  hero: {
    eyebrow: "HOME / SERVICES / WEB DEVELOPMENT",
    titleLight: "Web Development",
    titleDark: "",
    description:
      "Need a website that drives business growth? Web development creates fast, scalable digital experiences.",
  },
  serviceTypesHeading: "Types of Web Development",
  serviceTypesDescription: "",
  serviceTypes: [
    {
      icon: "layout",
      title: "Front End Web Development",
      description:
        "We craft pixel perfect interfaces that guide visitors naturally, keeping them engaged from the first click.",
    },
    {
      icon: "server",
      title: "Back End Web Development",
      description:
        "We engineer the server side foundation that keeps your website fast, secure, and reliably operational.",
    },
    {
      icon: "layers",
      title: "Full Stack Web Development",
      description:
        "We handle everything from database to interface, delivering one cohesive, fully functional web product.",
    },
    {
      icon: "fileText",
      title: "CMS Based Web Development",
      description:
        "We build websites you actually own, where updating a page feels as simple as writing an email.",
    },
    {
      icon: "shoppingCart",
      title: "E-Commerce Web Development",
      description:
        "We design stores that remove friction at every step, turning browsers into buyers, consistently.",
    },
    {
      icon: "smartphone",
      title: "Progressive Web App Development",
      description:
        "We build web apps that load instantly, run offline, and feel native on any device.",
    },
    {
      icon: "monitor",
      title: "Responsive Web Development",
      description:
        "We make sure your website looks intentional and works flawlessly, whether on a phone or widescreen.",
    },
    {
      icon: "code",
      title: "API Integration and Custom Web Development",
      description:
        "We connect your tools and build what off-the-shelf solutions simply cannot do for your business.",
    },
  ],
  processHeading: "Our Blueprint for Web Excellence",
  processDescription: "",
  process: [
    {
      step: "01",
      title: "Strategy",
      description:
        "We dig into your business goals, audience behavior, and competitors before a single line of code is written.",
    },
    {
      step: "02",
      title: "Architecture",
      description:
        "Every feature, flow, and technology choice is mapped deliberately, so nothing is built twice or broken later.",
    },
    {
      step: "03",
      title: "Craft",
      description:
        "We build in focused sprints, sharing progress openly so your feedback shapes the product at every stage.",
    },
    {
      step: "04",
      title: "Refine",
      description:
        "Going live is just the beginning, we monitor, test, and refine until performance matches the original vision.",
    },
  ],
  comparison: {
    heading: "Web Development vs. Web Design",
    description: "",
    columnDigital: "Web Development",
    columnTraditional: "Web Design",
    rows: [
      {
        feature: "Primary Focus",
        digital: "Focuses on website functionality and performance.",
        traditional: "Focuses on website visuals and user experience.",
      },
      {
        feature: "Technical Scope",
        digital: "Handles back end systems and integrations.",
        traditional: "Creates layouts, colors, and interface elements.",
      },
      {
        feature: "Solution Depth",
        digital: "Creates secure and scalable web solutions.",
        traditional: "Improves usability and visitor engagement.",
      },
      {
        feature: "Capabilities",
        digital: "Supports advanced features and user interactions.",
        traditional: "Guides user interaction with website content.",
      },
      {
        feature: "Outcome",
        digital: "Turns visual designs into working websites.",
        traditional: "Strengthens brand identity through design.",
      },
    ],
  },
  toolsHeading: "Web Development Tools",
  toolsDescription:
    "We don't pick tools to follow trends, we choose what genuinely solves the problem, performs under pressure, and scales without breaking. Every technology in our stack is deliberate, tested, and chosen to serve your business, not our comfort zone.",
  tools: [
    { icon: react },
    { icon: nodejs },
    { icon: tailwind },
    { icon: mongodb },
    { icon: prisma },
    { icon: stripe },
    { icon: laravel },
  ],
  testimonialsHeading: "Testimonials",
  testimonialsDescription:
    "Client success is our greatest achievement. Here's what businesses say about working with Mahraj Technologies.",
  testimonials: [
    {
      quote:
        "They didn't just build pages, they studied how our customers actually behave online. The result was a faster, cleaner website that keeps visitors engaged and makes our brand look exactly where it should be.",
      name: "Rebecca Collins",
      position: "Client Services Manager",
    },
    {
      quote:
        "One of the biggest advantages was the scalability built into the project. The website was developed with future growth in mind, allowing us to expand features without major redevelopment.",
      name: "Jonathan Price",
      position: "Technology Consultant",
    },
    {
      quote:
        "Our previous website looked outdated and struggled with performance issues. The new platform is significantly faster, easier to manage, and provides a much better experience for both visitors and our internal team.",
      name: "Ryan Foster",
      position: "Operations Director",
    },
  ],
  consultingHeading: "Web Development Consultation",
  consultingDescription:
    "Our web development consultation assesses website structure, performance, functionality, and search accessibility to identify growth opportunities. We provide strategic recommendations on architecture, user experience, and scalability to help businesses build stronger, more effective digital experiences.",
  consultingImage: consultingImage,
  onlinePresenceHeading: "Our Reach Across Multiple Regions",
  onlinePresenceDescription:
    "With experience serving businesses across Dubai, Islamabad, and the USA, we develop websites that support growth in diverse markets. Our approach combines modern development practices, user focused functionality, and scalable solutions to help organizations strengthen their digital presence and deliver better online experiences.",
  locationsHeading: "Your Partner for Modern Web Development",
  locationsDescription:
    "We don't show up as vendors, we work as an extension of your team. From strategy to deployment, every decision is built around your goals, your users, and the digital growth your business is actively working toward.",
  locations: [
    {
      title: "Web Development Agency in Dubai",
      officeAddress:
        "B2B Office Tower, Office Number 2205, Marasi Drive Street, Business Bay, Dubai, UAE",
      officePhone: "+971 52 785 1523",
    },
    {
      title: "Web Development Agency in Islamabad, Pakistan",
      officeAddress:
        "World Trade Center, Office Number 4087, Islamabad, Pakistan",
      officePhone: "+971 52 785 1523",
    },
    {
      title: "Web Development Agency in USA (Remote-Based)",
      officeAddress: "Serving clients remotely across the United States.",
      officePhone: "+971 52 785 1523",
    },
  ],
  faqs: [
    {
      question: "How long does a website development project typically take?",
      answer:
        "Project timelines depend on complexity, features, and requirements. Most websites are completed within a few weeks.",
    },
    {
      question: "What information is needed before starting a website project?",
      answer:
        "We typically require business details, goals, content requirements, and preferred functionality. This helps define the project scope.",
    },
    {
      question: "How do you improve website loading speed?",
      answer:
        "We optimize code, images, and website architecture. This helps deliver faster performance and a better user experience.",
    },
    {
      question: "What happens if I need changes after launch?",
      answer:
        "Websites can be updated and enhanced after launch. Additional features, content updates, and improvements can be implemented as needed.",
    },
    {
      question: "What makes Mahraj Technologies different in web development?",
      answer:
        "We combine strategic planning, modern development practices, and business focused solutions. Our approach prioritizes performance, scalability, and long term digital growth.",
    },
  ],
};
