import type { ServiceDetailData } from "../types";
import nessus from "@/public/CompanySvgs/nessus.svg";
import qualys from "@/public/CompanySvgs/qualys.svg";
import splunk from "@/public/CompanySvgs/splunk.svg";
import ibm from "@/public/CompanySvgs/ibm.svg";
import tenable from "@/public/CompanySvgs/tenable.svg";
import auditboard from "@/public/CompanySvgs/auditboard.svg";
import consultingImage from "@/public/dashboard.jpg";

export const itSystemAuditData: ServiceDetailData = {
  slug: "it-system-audit",
  title: "IT System Audit",
  seo: {
    metaTitle: "IT System Audit Services | Mahraj Technologies",
    metaDescription:
      "IT audit services from Mahraj Technologies identify risks, strengthen your technology environment, and deliver clear compliance and security recommendations.",
    focusKeyword: "IT system audit",
  },
  hero: {
    eyebrow: "HOME / SERVICES / IT SYSTEM AUDIT",
    titleLight: "IT System Audit",
    titleDark: "",
    description:
      "Unsure if your IT systems are secure? IT audit services identify risks and strengthen your technology environment.",
  },
  serviceTypesHeading: "Types of IT Audit Services",
  serviceTypesDescription: "",
  serviceTypes: [
    {
      icon: "server",
      title: "Information Systems Audit",
      description:
        "Reviews IT systems, controls, and processes to ensure data accuracy, security, and operational reliability across the organization.",
    },
    {
      icon: "network",
      title: "Network Security Audit",
      description:
        "Examines network infrastructure, access controls, and security configurations to identify vulnerabilities and prevent unauthorized access.",
    },
    {
      icon: "shield",
      title: "Cybersecurity Audit",
      description:
        "Evaluates existing security measures, threat detection capabilities, and incident response plans to strengthen overall cyber defense.",
    },
    {
      icon: "shieldCheck",
      title: "Compliance Audit",
      description:
        "Ensures IT systems and processes align with industry regulations, legal requirements, and established data protection standards.",
    },
    {
      icon: "layers",
      title: "Cloud Infrastructure Audit",
      description:
        "Assesses cloud environments, data storage practices, access management, and configuration settings for security and performance compliance.",
    },
    {
      icon: "code",
      title: "Application Audit",
      description:
        "Analyzes software applications for security vulnerabilities, performance issues, coding errors, and compliance with development best practices.",
    },
    {
      icon: "fileText",
      title: "Data Management Audit",
      description:
        "Reviews how business data is collected, stored, protected, and managed to ensure accuracy, integrity, and regulatory compliance.",
    },
    {
      icon: "briefcase",
      title: "IT Governance Audit",
      description:
        "Evaluates IT policies, decision-making frameworks, and management practices to ensure technology aligns with overall business objectives.",
    },
  ],
  processHeading: "Our Approach to IT Auditing",
  processDescription: "",
  process: [
    {
      step: "01",
      title: "Audit Assessment",
      description:
        "We review your IT infrastructure, business objectives, and existing controls to define the audit scope and priorities.",
    },
    {
      step: "02",
      title: "Risk Evaluation",
      description:
        "Our experts identify vulnerabilities, security gaps, compliance issues, and operational risks affecting your technology environment.",
    },
    {
      step: "03",
      title: "Audit Execution",
      description:
        "We perform detailed assessments across systems, networks, applications, cloud environments, and data management to validate performance and security.",
    },
    {
      step: "04",
      title: "Reporting & Recommendations",
      description:
        "You receive a comprehensive audit report with prioritized findings, practical recommendations, and a clear roadmap for strengthening your IT environment.",
    },
  ],
  comparison: {
    heading: "IT Audit vs. Traditional Audit",
    description: "",
    featureColumnLabel: "Features",
    columnDigital: "IT Audit",
    columnTraditional: "Traditional Audit",
    rows: [
      {
        feature: "Primary Focus",
        digital: "Reviews digital systems, data, and IT controls.",
        traditional: "Reviews financial records and accounting processes.",
      },
      {
        feature: "Scope",
        digital: "Covers networks, software, cloud, and cybersecurity.",
        traditional: "Covers transactions, ledgers, and financial statements.",
      },
      {
        feature: "Tools Used",
        digital: "Uses automated scanning and digital audit tools.",
        traditional: "Uses manual inspection and document verification.",
      },
      {
        feature: "Risk Area",
        digital: "Identifies cyber threats and system vulnerabilities.",
        traditional: "Identifies financial errors and fraud risks.",
      },
      {
        feature: "Output",
        digital: "Delivers a technical security and compliance report.",
        traditional: "Delivers a financial accuracy and compliance report.",
      },
    ],
  },
  toolsHeading: "IT Audit Tools",
  toolsDescription:
    "Effective IT auditing depends on the right set of tools to assess systems, detect vulnerabilities, ensure compliance, and deliver accurate findings. The right platforms give auditors complete visibility into every layer of your IT environment.",
  tools: [
    { icon: nessus },
    { icon: splunk },
    { icon: ibm },
    { icon: tenable },
    { icon: qualys },
    { icon: auditboard },
  ],
  testimonialsHeading: "Testimonials",
  testimonialsDescription: "",
  testimonials: [
    {
      quote:
        "Their IT audit uncovered critical vulnerabilities we had completely missed. Systems are now secure, compliant, and performing at a level we never thought possible.",
      name: "Mark Davidson",
      position: "IT Director",
    },
    {
      quote:
        "We had serious concerns about how our business data was being stored and managed. Their data management audit gave us complete visibility, tightened our access controls, and ensured we met every compliance requirement our industry demands.",
      name: "Richard Cole",
      position: "Managing Director",
    },
    {
      quote:
        "Their cloud infrastructure audit identified misconfigurations putting our data at serious risk. Everything was resolved quickly, and our cloud environment has never been more secure.",
      name: "Jessica Morgan",
      position: "Cloud Operations Manager",
    },
  ],
  consultingHeading: "IT Audit Consulting That Goes Beyond the Surface",
  consultingDescription:
    "Most businesses assume their IT systems are secure until an audit proves otherwise. We help you take a clear, unbiased look at your technology environment, identify what is working, expose what is not, and build a structured plan to fix it. From system controls to compliance readiness, our IT audit consulting gives you the confidence that your technology is actually protecting your business.",
  consultingImage: consultingImage,
  onlinePresenceHeading:
    "Auditing IT Environments Across Dubai, Islamabad & the USA",
  onlinePresenceDescription:
    "Businesses across three regions trust us to assess their IT environments with precision and professionalism. Whether you operate a single office or manage infrastructure across multiple locations, our audit experts adapt to your environment, industry, and compliance requirements, delivering findings that are accurate, actionable, and tailored to your specific risk exposure.",
  locationsHeading: "The IT Audit Partner That Tells You the Truth",
  locationsDescription:
    "A good IT audit is not just a checklist, it is an honest evaluation of where your technology stands and where it needs to go. We work closely with your team, examine every layer of your IT environment, and deliver recommendations that are clear, prioritized, and practical. No jargon, and no generic reports, because we offer real insights your business can act on.",
  locations: [
    {
      title: "IT Audit Agency in Dubai",
      officeAddress:
        "B2B Office Tower, Office Number 2205, Marasi Drive Street, Business Bay, Dubai, UAE",
      officePhone: "+971 52 785 1523",
    },
    {
      title: "IT Audit Agency in Islamabad, Pakistan",
      officeAddress:
        "World Trade Center, Office Number 4087, Islamabad, Pakistan",
      officePhone: "+971 52 785 1523",
    },
    {
      title: "IT Audit Agency in USA",
      officeAddress: "Serving clients remotely across the United States.",
      officePhone: "+971 52 785 1523",
    },
  ],
  faqsHeading: "IT Audit FAQs",
  faqs: [
    {
      question: "How do I know if my business needs an IT audit?",
      answer:
        "If your systems handle sensitive data, face compliance requirements, or have never been formally reviewed, you need an IT audit. Any business relying on technology to operate should audit regularly.",
    },
    {
      question: "Do you sign a confidentiality agreement before starting?",
      answer:
        "Yes, absolutely. We sign an NDA before accessing any system, data, or documentation. Your business information remains fully confidential throughout the entire audit process.",
    },
    {
      question: "Who from our team needs to be involved during the audit?",
      answer:
        "Typically, your IT manager, compliance officer, and department heads. We keep involvement minimal and structured so daily operations are not disrupted during the audit.",
    },
    {
      question: "How do you stay up to date on the latest IT audit standards?",
      answer:
        "Our team continuously monitors industry frameworks like ISACA, COBIT, and ISO 27001. We regularly update our audit methodologies to reflect the latest standards and emerging threats.",
    },
    {
      question: "How do we get started with your IT audit services?",
      answer:
        "Simply contact us to schedule a free consultation. We will assess your needs, define the audit scope, and walk you through the next steps clearly.",
    },
  ],
};
