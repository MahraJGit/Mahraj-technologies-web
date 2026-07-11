import type { ServiceDetailData } from "../types";
import stripe from "@/public/CompanySvgs/stripe.svg";
import firebase from "@/public/CompanySvgs/firebase.svg";
import plaid from "@/public/CompanySvgs/plaid.svg";
import marqeta from "@/public/CompanySvgs/marqeta.svg";
import mambu from "@/public/CompanySvgs/mambu.svg";
import finastra from "@/public/CompanySvgs/finastra.svg";
import consultingImage from "@/public/dashboard.jpg";

export const bankFintechData: ServiceDetailData = {
  slug: "bank-fintech",
  title: "Bank & Fintech",
  seo: {
    metaTitle: "Bank & Fintech Solutions | Mahraj Technologies",
    metaDescription:
      "Bank & fintech solutions from Mahraj Technologies—streamline financial operations, secure payments, and enhance customer satisfaction with modern banking technology.",
    focusKeyword: "bank and fintech solutions",
  },
  hero: {
    eyebrow: "HOME / SERVICES / BANK & FINTECH",
    titleLight: "Bank & Fintech",
    titleDark: "",
    description:
      "Ready to transform your banking services? Bank & fintech solutions streamline financial operations and enhance customer satisfaction.",
  },
  serviceTypesHeading: "Types of Bank & Fintech",
  serviceTypesDescription: "",
  serviceTypes: [
    {
      icon: "monitor",
      title: "Digital Banking Solutions",
      description:
        "Delivers seamless online banking experiences, letting customers manage accounts, transfers, and payments anytime.",
    },
    {
      icon: "link2",
      title: "Payment Gateway Solutions",
      description:
        "Processes secure online transactions, connecting merchants, banks, and customers for fast digital payments daily.",
    },
    {
      icon: "smartphone",
      title: "Mobile Banking Applications",
      description:
        "Lets customers manage accounts, transfer funds, check balances, and pay bills through secure mobile apps easily.",
    },
    {
      icon: "briefcase",
      title: "Digital Wallet Solutions",
      description:
        "Stores payment details securely, enabling quick, contactless transactions across online and offline platforms.",
    },
    {
      icon: "clipboardCheck",
      title: "Loan Management Systems",
      description:
        "Automates loan origination, approval, disbursement, and repayment tracking for banks and lending institutions.",
    },
    {
      icon: "shieldAlert",
      title: "Fraud Detection & Risk Management",
      description:
        "Uses AI-driven analytics to detect suspicious activity, preventing fraud and reducing financial risks instantly.",
    },
    {
      icon: "server",
      title: "Core Banking Solutions",
      description:
        "Centralizes banking operations, enabling real-time processing of accounts, transactions, and customer records.",
    },
    {
      icon: "lineChart",
      title: "Financial Analytics & Reporting Solutions",
      description:
        "Transforms raw financial data into actionable insights, supporting smarter decisions and regulatory reporting.",
    },
  ],
  processHeading: "Our Proven Bank & Fintech Process",
  processDescription: "",
  process: [
    {
      step: "01",
      title: "Discovery",
      description:
        "We audit your compliance gaps, legacy systems, fraud risks, and customer pain points to map a fintech solution that fits your real banking challenges.",
    },
    {
      step: "02",
      title: "Strategy",
      description:
        "Our experts map core features, security layers, KYC and AML checks, and system integrations into a scalable roadmap built for your growing institution.",
    },
    {
      step: "03",
      title: "Development",
      description:
        "We build secure banking systems with encrypted transactions, load testing, and compliance checks so every payment and transfer runs without any failure.",
    },
    {
      step: "04",
      title: "Optimization",
      description:
        "After launch, we track uptime, patch vulnerabilities, refine slow workflows, and offer round-the-clock support to keep your platform running smoothly.",
    },
  ],
  comparison: {
    heading: "Bank & Fintech vs. Traditional Banking",
    description: "",
    featureColumnLabel: "Features",
    columnDigital: "Bank & Fintech",
    columnTraditional: "Traditional Banking",
    rows: [
      {
        feature: "Primary Focus",
        digital: "Delivers fast, app-based financial services.",
        traditional: "Delivers services through physical bank branches.",
      },
      {
        feature: "Technology Used",
        digital: "Uses AI, APIs, and cloud-based systems.",
        traditional: "Uses legacy systems and manual processes.",
      },
      {
        feature: "Transaction Speed",
        digital: "Processes payments instantly, 24/7.",
        traditional: "Processes payments within standard banking hours.",
      },
      {
        feature: "Customer Access",
        digital: "Accessible anytime via mobile or web.",
        traditional: "Requires in-person visits for most services.",
      },
      {
        feature: "Innovation",
        digital: "Constantly adds new digital features.",
        traditional: "Updates slowly due to legacy infrastructure.",
      },
    ],
  },
  toolsHeading: "Bank & Fintech Tools",
  toolsDescription:
    "Every fintech product runs on more than one platform. Payments need a processor, fraud checks need real-time data, and customer records need a database that won't buckle under load. We pair the right tool to the right job, so security, compliance, and performance are built in from day one, not patched on after launch.",
  tools: [
    { icon: stripe },
    { icon: plaid },
    { icon: marqeta },
    { icon: mambu },
    { icon: finastra },
    { icon: firebase },
  ],
  testimonialsHeading: "Testimonials",
  testimonialsDescription: "",
  testimonials: [
    {
      quote:
        "Our payment processing became much faster after working with Mahraj Technologies. The platform is stable, secure, and easy for both our staff and customers to use.",
      name: "Olivia Harris",
      position: "Payments Manager",
    },
    {
      quote:
        "Fraud prevention was one of our biggest concerns. Their team introduced smart security features that strengthened protection without making the customer experience complicated. We now operate with much greater confidence.",
      name: "Emily Carter",
      position: "Finance Director",
    },
    {
      quote:
        "Their team built a reliable mobile banking solution that customers found simple to use. Support remained excellent even after launch.",
      name: "Michael Foster",
      position: "Digital Banking Manager",
    },
  ],
  consultingHeading: "Bank & Fintech Solutions",
  consultingDescription:
    "Financial institutions can't afford outdated systems or security blind spots. Our bank and fintech services help banks, lenders, and payment platforms modernize their operations from the ground up. We assess existing infrastructure, uncover hidden compliance and security risks, and design technology that improves efficiency, protects customer data, and supports long-term growth.",
  consultingImage: consultingImage,
  onlinePresenceHeading: "Our Global Footprint",
  onlinePresenceDescription:
    "Operating across Dubai, Islamabad, and the USA, we support financial institutions navigating different regulatory environments and market demands. Our focus on security, compliance, and scalable technology helps banks and fintech companies build platforms that perform reliably no matter where their customers are.",
  locationsHeading: "Reliable Bank & Fintech Partner Near You",
  locationsDescription:
    "With teams based across multiple regions, we build secure, compliant financial technology suited to each market's specific regulatory needs. Our approach combines deep technical expertise, security-first design, and dependable support to help institutions grow with confidence.",
  locations: [
    {
      title: "Bank & Fintech Agency in Dubai",
      officeAddress:
        "B2B Office Tower, Office Number 2205, Marasi Drive Street, Business Bay, Dubai, UAE",
      officePhone: "+971 52 785 1523",
    },
    {
      title: "Bank & Fintech Agency in Islamabad, Pakistan",
      officeAddress:
        "World Trade Center, Office Number 4087, Islamabad, Pakistan",
      officePhone: "+971 52 785 1523",
    },
    {
      title: "Bank & Fintech Agency in USA (Remote-Based)",
      officeAddress: "Serving clients remotely across the United States.",
      officePhone: "+971 52 785 1523",
    },
  ],
  faqsHeading: "FAQs",
  faqs: [
    {
      question: "Can you integrate with our existing banking system?",
      answer:
        "Yes! We connect with most core banking systems, payment gateways, and APIs. Our team reviews your setup first to plan a smooth integration.",
    },
    {
      question: "Do you sign an NDA before starting work?",
      answer:
        "Yes, always. We sign an NDA before any project discussion begins. Your data and business details stay fully confidential.",
    },
    {
      question: "What happens if our system goes down?",
      answer:
        "Our support team responds immediately. We diagnose the issue and restore service as fast as possible. You get updates throughout the process.",
    },
    {
      question: "Do you help with regulatory approvals?",
      answer:
        "Yes! We build systems that follow compliance standards from the start. Our team also guides you through documentation needed for approvals.",
    },
    {
      question: "Do you offer ongoing maintenance packages?",
      answer:
        "Yes, we do. Our maintenance plans cover updates, security patches, and performance checks. You choose a plan that fits your needs.",
    },
    {
      question: "How do we get started with your team?",
      answer:
        "Simply contact us directly. We'll schedule a quick discovery call. From there, we map out your project together.",
    },
  ],
};
