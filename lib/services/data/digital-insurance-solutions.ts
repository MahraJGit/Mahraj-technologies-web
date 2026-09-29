import type { ServiceDetailData } from "../types";
import salesforce from "@/public/CompanySvgs/salesforce.svg";
import guidewire from "@/public/CompanySvgs/guidewire.svg";
import duckCreek from "@/public/CompanySvgs/duck-creek.svg";
import majesco from "@/public/CompanySvgs/majesco.svg";
import ibm from "@/public/CompanySvgs/ibm.svg";
import consultingImage from "@/public/dashboard.jpg";

export const digitalInsuranceSolutionsData: ServiceDetailData = {
  slug: "digital-insurance-solutions",
  title: "Digital Insurance Solutions",
  seo: {
    metaTitle: "Digital Insurance Solutions | Mahraj Technologies",
    metaDescription:
      "Digital insurance solutions from Mahraj Technologies—modernize policy management, claims, underwriting, fraud detection, and customer portals for insurers and brokers.",
    focusKeyword: "digital insurance solutions",
  },
  hero: {
    eyebrow: "HOME / SERVICES / DIGITAL INSURANCE SOLUTIONS",
    titleLight: "Digital Insurance Solutions",
    titleDark: "",
    description:
      "Still managing insurance with outdated systems? Digital insurance solutions make every policy, claim, and customer interaction faster and simpler.",
  },
  serviceTypesHeading: "Types of Digital Insurance Solutions",
  serviceTypesDescription: "",
  serviceTypes: [
    {
      icon: "fileText",
      title: "Policy Management Systems",
      description:
        "Centralizes policy creation, renewals, updates, and documentation to streamline every stage of the insurance lifecycle.",
    },
    {
      icon: "clipboardCheck",
      title: "Claims Management Solutions",
      description:
        "Speeds up claim submissions, approvals, and settlements while reducing errors and improving overall policyholder satisfaction.",
    },
    {
      icon: "users",
      title: "Customer Self-Service Portals",
      description:
        "Empowers policyholders to manage policies, file claims, and access documents anytime without contacting support agents.",
    },
    {
      icon: "smartphone",
      title: "Insurance Mobile Applications",
      description:
        "Gives customers instant access to policies, claims, payments, and support through a smooth and user-friendly mobile experience.",
    },
    {
      icon: "brainCircuit",
      title: "Underwriting Automation Solutions",
      description:
        "Uses AI and data analytics to evaluate risks faster, reduce manual work, and improve underwriting accuracy significantly.",
    },
    {
      icon: "headphones",
      title: "Insurance CRM Solutions",
      description:
        "Manages policyholder relationships, automates follow-ups, and delivers personalized experiences that improve retention and customer loyalty.",
    },
    {
      icon: "shieldAlert",
      title: "Fraud Detection & Risk Analytics",
      description:
        "Identifies suspicious claims, analyzes risk patterns, and protects insurance businesses from financial losses caused by fraud.",
    },
    {
      icon: "lineChart",
      title: "Digital Payment & Billing Solutions",
      description:
        "Simplifies premium collections, automates billing cycles, and offers multiple payment options for a seamless policyholder experience.",
    },
  ],
  processHeading: "How Our Experts Handle Your Digital Insurance Solutions",
  processDescription: "",
  process: [
    {
      step: "01",
      title: "Discovery & Assessment",
      description:
        "We analyze your insurance operations, identify digital gaps, and define the right solutions to modernize your business effectively.",
    },
    {
      step: "02",
      title: "Solution Design",
      description:
        "Our experts design tailored systems covering policy management, CRM, underwriting automation, and mobile application architecture for your needs.",
    },
    {
      step: "03",
      title: "Development & Integration",
      description:
        "We build and integrate claims, fraud detection, payment, and self-service portal solutions into one seamless digital insurance ecosystem.",
    },
    {
      step: "04",
      title: "Launch & Support",
      description:
        "We deploy your complete digital insurance solution, monitor performance, resolve issues quickly, and provide ongoing support for continuous improvement.",
    },
  ],
  comparison: {
    heading: "Digital Insurance Solutions vs. Manual Insurance Processes",
    description: "",
    featureColumnLabel: "Features",
    columnDigital: "Digital Insurance Solutions",
    columnTraditional: "Manual Insurance Processes",
    rows: [
      {
        feature: "Processing Speed",
        digital: "Processes policies and claims instantly online.",
        traditional: "Takes days or weeks to process manually.",
      },
      {
        feature: "Data Accuracy",
        digital: "Reduces errors through automated data management.",
        traditional: "Relies on human entry with frequent mistakes.",
      },
      {
        feature: "Customer Access",
        digital: "Accessible anytime through mobile and web portals.",
        traditional: "Requires in-person visits or phone calls only.",
      },
      {
        feature: "Fraud Detection",
        digital: "Identifies fraud instantly using AI and analytics.",
        traditional: "Struggles to detect fraud without digital tools.",
      },
      {
        feature: "Operational Cost",
        digital: "Reduces costs through automation and efficiency.",
        traditional: "High costs due to paperwork and manual labor.",
      },
    ],
  },
  toolsHeading: "Digital Insurance Tools",
  toolsDescription:
    "Reliable digital insurance depends on the right technology. We use industry-trusted platforms to automate workflows, manage policies, detect fraud, process claims, and deliver seamless experiences for both insurers and policyholders.",
  tools: [
    { icon: salesforce },
    { icon: guidewire },
    { icon: duckCreek },
    { icon: majesco },
    { icon: ibm },
  ],
  testimonialsHeading: "Testimonials",
  testimonialsDescription: "",
  testimonials: [
    {
      quote:
        "Billing and premium collection was a constant headache. Mahraj automated our entire payment system. Collections improved. Errors disappeared. Everything now runs smoothly and on time.",
      name: "Fatima Al-Mansoori",
      position: "Finance Director",
    },
    {
      quote:
        "Our underwriting process was slow and full of manual errors. Their team automated everything with precision. Risk evaluation became faster and far more accurate. Our underwriting team now handles double the volume with half the effort and zero frustration.",
      name: "Priya Kapoor",
      position: "Underwriting Manager",
    },
    {
      quote:
        "Fraud was costing us heavily every quarter. They implemented smart risk analytics that caught suspicious claims instantly. Losses reduced dramatically within weeks.",
      name: "George Bennett",
      position: "Risk Manager",
    },
  ],
  consultingHeading: "Expert Digital Insurance Consulting",
  consultingDescription:
    "Modern insurance requires more than digital tools. It needs connected systems that improve speed, security, and customer experience. Our experts evaluate your current insurance processes, identify inefficiencies, and recommend practical digital solutions that simplify policy management, automate claims, strengthen fraud prevention, and support long term business growth.",
  consultingImage,
  onlinePresenceHeading: "Delivering Digital Insurance Solutions Worldwide",
  onlinePresenceDescription:
    "Businesses across Dubai, Islamabad, and the USA rely on our digital insurance expertise to modernize their operations. We help insurance providers improve policy management, simplify claims processing, strengthen customer engagement, and build secure digital platforms that support growth in today's evolving insurance industry.",
  industriesHeading: "Industries We've Served",
  industriesDescription:
    "We've partnered with insurance businesses across diverse sectors, delivering digital insurance solutions that streamline operations, improve customer experiences, and support long-term growth.",
  industries: [
    {
      title: "Health Insurance Companies' Digital Marketing",
      description:
        "Health insurers partnered with us to modernize policy management, automate member services, integrate CRM systems, and simplify claims processing.",
    },
    {
      title: "Life Insurance Providers Digital Marketing",
      description:
        "Life insurance providers relied on our expertise for underwriting automation, customer portals, policy administration, and secure digital workflows.",
    },
    {
      title: "Auto Insurance Companies' Digital Marketing",
      description:
        "Auto insurers trusted our solutions to accelerate claims processing, improve policy management, automate payments, and enhance customer experiences.",
    },
    {
      title: "Property & Home Insurance Providers Digital Marketing",
      description:
        "Property insurance providers implemented our digital solutions to manage policies, streamline claims, improve customer communication, and automate daily operations.",
    },
    {
      title: "Travel Insurance Providers Digital Marketing",
      description:
        "Travel insurers chose our expertise for mobile applications, self-service portals, digital policy management, and faster claims handling worldwide.",
    },
    {
      title: "Business & Commercial Insurance Digital Marketing",
      description:
        "Commercial insurers partnered with us to automate underwriting, centralize policy administration, strengthen risk management, and improve operational efficiency.",
    },
    {
      title: "Insurance Agencies & Brokers Digital Marketing",
      description:
        "Insurance agencies and brokers leveraged our CRM, policy management, customer portals, and workflow automation to deliver faster, more personalized services.",
    },
    {
      title: "InsurTech Companies' Digital Marketing",
      description:
        "InsurTech businesses worked with our team to build scalable insurance platforms, automate workflows, integrate APIs, and enhance digital customer experiences.",
    },
    {
      title: "Insurance Startups Digital Marketing",
      description:
        "Emerging insurance startups relied on our digital solutions to launch scalable platforms, automate operations, and build modern insurance ecosystems.",
    },
    {
      title: "Liability & Specialty Insurance Digital Marketing",
      description:
        "Specialty insurance providers trusted our expertise for claims automation, policy management, fraud detection, and secure digital insurance operations.",
    },
  ],
  locationsHeading: "Digital Insurance Experts Close to Your Business",
  locationsDescription:
    "No matter where your insurance business operates, our specialists are ready to deliver secure and scalable digital insurance solutions. From policy management and claims automation to customer portals and payment systems, we build technology that improves efficiency, enhances customer experiences, and supports sustainable business growth.",
  locations: [
    {
      title: "Digital Insurance Solutions Agency in Dubai",
      officeAddress:
        "B2B Office Tower, Office Number 2205, Marasi Drive Street, Business Bay, Dubai, UAE",
      officePhone: "+971 52 785 1523",
    },
    {
      title: "Digital Insurance Solutions Agency in Islamabad, Pakistan",
      officeAddress:
        "World Trade Center, Office Number 4087, Islamabad, Pakistan",
      officePhone: "+971 52 785 1523",
    },
    {
      title: "Digital Insurance Solutions Agency in USA (Remote-Based)",
      officeAddress:
        "Serving insurance providers remotely across the United States.",
      officePhone: "+971 52 785 1523",
    },
  ],
  faqsHeading: "FAQs",
  faqs: [
    {
      question: "Can you replace our existing legacy insurance system?",
      answer:
        "Yes! We migrate your data and operations from outdated legacy systems to modern digital insurance platforms smoothly.",
    },
    {
      question: "Do you build custom insurance solutions from scratch?",
      answer:
        "Yes! We build fully customized digital insurance systems tailored to your specific business model and operational needs.",
    },
    {
      question: "Do you provide staff training after implementation?",
      answer:
        "Yes! We provide complete training sessions for your team to ensure smooth adoption of all new digital tools.",
    },
    {
      question: "Can you add AI chatbots to our insurance platform?",
      answer:
        "Yes! We integrate AI-powered chatbots that handle policyholder queries, claims guidance, and support requests around the clock.",
    },
    {
      question: "Can small insurance startups afford your solutions?",
      answer:
        "Yes! We offer flexible pricing and scalable solutions designed to fit the budgets and growth stages of insurance startups.",
    },
    {
      question: "How do we get started with Mahraj Technologies?",
      answer:
        "Simply reach out through our contact page. Our team will assess your insurance operations and recommend the best digital solution for you.",
    },
  ],
};
