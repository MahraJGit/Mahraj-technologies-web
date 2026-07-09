import type { ServiceDetailData } from "../types";
import aws from "@/public/CompanySvgs/aws.svg";
import googleMaps from "@/public/CompanySvgs/google_maps.svg";
import azure from "@/public/CompanySvgs/microsoft_azure.svg";
import androidAuto from "@/public/CompanySvgs/android_auto.svg";
import qtAutomotive from "@/public/CompanySvgs/qt-automotive.svg";
import nvidiaDrive from "@/public/CompanySvgs/nvidia.svg";
import samsara from "@/public/CompanySvgs/samsara.svg";
import consultingImage from "@/public/dashboard.jpg";

export const automotiveDigitalSolutionsData: ServiceDetailData = {
  slug: "automotive-digital-solutions",
  title: "Automotive Digital Solutions",
  seo: {
    metaTitle: "Automotive Digital Solutions | Mahraj Technologies",
    metaDescription:
      "Automotive digital solutions from Mahraj Technologies—simplify dealership and fleet workflows, connect vehicles, and improve customer satisfaction with smarter automotive technology.",
    focusKeyword: "automotive digital solutions",
  },
  hero: {
    eyebrow: "HOME / SERVICES / AUTOMOTIVE DIGITAL SOLUTIONS",
    titleLight: "Automotive Digital Solutions",
    titleDark: "",
    description:
      "Need smarter technology for your automotive business? Automotive digital solutions simplify workflows and improve customer satisfaction.",
  },
  serviceTypesHeading: "Types of Automotive Digital Solutions",
  serviceTypesDescription: "",
  serviceTypes: [
    {
      icon: "clipboardCheck",
      title: "Dealership Management Solutions (DMS)",
      description:
        "Streamlines every dealership operation, from inventory tracking and sales workflows to finance and customer records management.",
    },
    {
      icon: "truck",
      title: "Fleet & Telematics Solutions",
      description:
        "Monitors vehicle location, driver behavior, and fleet performance in real time for smarter operational decisions.",
    },
    {
      icon: "wifi",
      title: "Connected Vehicle Solutions",
      description:
        "Enables seamless communication between vehicles, infrastructure, and cloud systems for safer and more intelligent driving experiences.",
    },
    {
      icon: "wrench",
      title: "Predictive Maintenance Solutions",
      description:
        "Analyzes vehicle data continuously to forecast mechanical failures before they occur, reducing downtime and unexpected repair costs.",
    },
    {
      icon: "users",
      title: "Automotive CRM Solutions",
      description:
        "Strengthens dealership-customer relationships by managing leads, automating follow-ups, and delivering personalized experiences across every sales touchpoint.",
    },
    {
      icon: "batteryCharging",
      title: "EV Digital Solutions",
      description:
        "Supports electric vehicle ecosystems with smart charging management, battery monitoring, and digital tools built for sustainable mobility.",
    },
    {
      icon: "shoppingCart",
      title: "Automotive E-Commerce Solutions",
      description:
        "Empowers buyers to research, configure, finance, and purchase vehicles entirely online through a smooth digital retail experience.",
    },
    {
      icon: "cpu",
      title: "ADAS & Autonomous Driving Solutions",
      description:
        "Integrates advanced driver assistance technologies that enhance vehicle safety, automate critical responses, and accelerate autonomous driving development.",
    },
  ],
  processHeading: "Our Proven Automotive Digital Solutions Process",
  processDescription: "",
  process: [
    {
      step: "01",
      title: "Business Assessment",
      description:
        "We evaluate your automotive operations, business goals, and technology needs to identify the right digital transformation opportunities.",
    },
    {
      step: "02",
      title: "Solution Planning",
      description:
        "Our experts design a tailored solution, define key features, and create a scalable roadmap aligned with your business objectives.",
    },
    {
      step: "03",
      title: "Development & Integration",
      description:
        "We build, customize, and integrate digital solutions that improve operations, enhance customer experiences, and boost overall business efficiency.",
    },
    {
      step: "04",
      title: "Optimization & Support",
      description:
        "We continuously monitor performance, implement improvements, and provide ongoing support to keep your automotive solutions future-ready.",
    },
  ],
  comparison: {
    heading: "Automotive Digital Solutions vs. Traditional Automotive Management",
    description: "",
    featureColumnLabel: "Features",
    columnDigital: "Automotive Digital Solutions",
    columnTraditional: "Traditional Automotive Management",
    rows: [
      {
        feature: "Operations",
        digital: "Automates dealership and fleet workflows.",
        traditional: "Relies on manual and paper-based processes.",
      },
      {
        feature: "Data Access",
        digital: "Delivers real-time vehicle and business insights.",
        traditional: "Depends on delayed and manual reporting.",
      },
      {
        feature: "Customer Reach",
        digital: "Engages buyers through digital and online channels.",
        traditional: "Limits outreach to walk-ins and phone calls.",
      },
      {
        feature: "Maintenance",
        digital: "Predicts failures before they happen.",
        traditional: "Reacts to breakdowns after they occur.",
      },
      {
        feature: "Scalability",
        digital: "Scales easily with business growth.",
        traditional: "Struggles to adapt to increasing demands.",
      },
    ],
  },
  toolsHeading: "Automotive Digital Solutions Tools",
  toolsDescription:
    "Modern automotive solutions rely on advanced technologies to improve operations, connect vehicles, manage fleets, and enhance customer experiences. We use trusted platforms and development tools to build secure, scalable, and future-ready automotive digital solutions.",
  tools: [
    { icon: aws },
    { icon: azure },
    { icon: googleMaps },
    { icon: androidAuto },
    { icon: qtAutomotive },
    { icon: nvidiaDrive },
    { icon: samsara },
  ],
  testimonialsHeading: "Testimonials",
  testimonialsDescription: "",
  testimonials: [
    {
      quote:
        "Switching to EV felt scary at first. Their team built smart charging and battery tools that made the change smooth and truly simple.",
      name: "Michael Turner",
      position: "Fleet Operations Manager",
    },
    {
      quote:
        "We run over 200 vehicles across three cities. They gave us live fleet tracking that really works. Fuel costs dropped, driver safety improved, and we finally sleep at night.",
      name: "Ahmed Al Mansoori",
      position: "Logistics Director",
    },
    {
      quote:
        "Predictive maintenance sounded like a buzzword until Mahraj Technologies built it for us. Now we spot engine issues weeks early. Repair costs dropped fast across our fleet.",
      name: "Sarah Collins",
      position: "Transport Manager",
    },
  ],
  consultingHeading: "Automotive Digital Solutions Consulting",
  consultingDescription:
    "Our automotive digital solutions help dealerships, fleets, and mobility businesses run smoother and smarter. We connect vehicles, systems, and customer data into one experience, replacing manual work with real time insights and automation. From dealerships to connected vehicles, we build technology that keeps you moving ahead.",
  consultingImage: consultingImage,
  onlinePresenceHeading: "Our Global Automotive Reach",
  onlinePresenceDescription:
    "With dedicated teams operating across Dubai, Islamabad, and the USA, we serve automotive businesses in multiple regions and markets. Our focus on innovation, smart technology, and performance-driven results helps dealerships, fleets, and automotive brands build stronger operations in a rapidly evolving industry.",
  locationsHeading: "Your Trusted Automotive Digital Solutions Partner Nearby",
  locationsDescription:
    "With a solid presence across multiple locations, our automotive digital solutions team delivers technology built around your specific business model. We combine deep industry knowledge, smart system integration, and results-focused development to help automotive businesses operate efficiently and grow confidently.",
  locations: [
    {
      title: "ADS Agency in Dubai",
      officeAddress:
        "B2B Office Tower, Office Number 2205, Marasi Drive Street, Business Bay, Dubai, UAE",
      officePhone: "+971 52 785 1523",
    },
    {
      title: "ADS Agency in Islamabad, Pakistan",
      officeAddress:
        "World Trade Center, Office Number 4087, Islamabad, Pakistan",
      officePhone: "+971 52 785 1523",
    },
    {
      title: "ADS Agency in USA (Remote-Based)",
      officeAddress: "Serving automotive clients remotely across the United States.",
      officePhone: "+971 52 785 1523",
    },
  ],
  faqsHeading: "FAQs",
  faqs: [
    {
      question: "Can your solutions integrate with our existing systems?",
      answer:
        "Yes, our solutions connect smoothly with your current systems. We build custom integrations so nothing needs to be replaced from scratch.",
    },
    {
      question: "How do you ensure data security and privacy?",
      answer:
        "We use encrypted systems and strict access controls. Your data stays protected at every stage of the process.",
    },
    {
      question: "Can your solutions support multiple business locations?",
      answer:
        "Yes, our platforms scale across multiple locations easily. You get one dashboard with real time data from every site.",
    },
    {
      question: "How long does an automotive digital solutions project take?",
      answer:
        "Timelines depend on project size and complexity. Most solutions launch within a few weeks to a few months.",
    },
    {
      question: "What industries within automotive do you serve?",
      answer:
        "We serve dealerships, fleet operators, EV companies, and mobility startups. Our solutions fit various automotive business models.",
    },
  ],
};
