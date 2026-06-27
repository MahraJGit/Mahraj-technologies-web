import type { ServiceDetailData } from "../types";
import selenium from "@/public/CompanySvgs/selenium.svg";
import cypress from "@/public/CompanySvgs/cypress.svg";
import jira from "@/public/CompanySvgs/jira.svg";
import postman from "@/public/CompanySvgs/postman.svg";
import testrail from "@/public/CompanySvgs/testrail.svg";
import browserstack from "@/public/CompanySvgs/browserstack.svg";
import consultingImage from "@/public/dashboard.jpg";

export const softwareQualityAssuranceData: ServiceDetailData = {
  slug: "software-quality-assurance",
  title: "Software Quality Assurance",
  seo: {
    metaTitle: "Software Quality Assurance Services | Mahraj Technologies",
    metaDescription:
      "Software quality assurance from Mahraj Technologies—deliver reliable, stable applications through structured testing, performance validation, and clear defect reporting across platforms.",
    focusKeyword: "software quality assurance",
  },
  hero: {
    eyebrow: "HOME / SERVICES / SOFTWARE QUALITY ASSURANCE",
    titleLight: "Software Quality Assurance",
    titleDark: "",
    description:
      "Worried about software bugs affecting performance? Our software quality assurance helps deliver reliable and stable applications.",
  },
  serviceTypesHeading: "Types of Software Quality Assurance",
  serviceTypesDescription: "",
  serviceTypes: [
    {
      icon: "code",
      title: "Unit Testing",
      description:
        "Tests individual functions and components early, helping identify coding issues before they affect larger systems.",
    },
    {
      icon: "link2",
      title: "Integration Testing",
      description:
        "Verifies that connected modules work together correctly, ensuring smooth communication between different software components.",
    },
    {
      icon: "monitor",
      title: "System Testing",
      description:
        "Evaluates the complete application to confirm all features function properly within the intended environment.",
    },
    {
      icon: "users",
      title: "End-to-End Testing",
      description:
        "Simulates real user interactions to validate complete workflows and ensure seamless application performance.",
    },
    {
      icon: "lineChart",
      title: "Performance Testing",
      description:
        "Measures speed, stability, and responsiveness under heavy workloads. Identifies bottlenecks and stress-tests apps for peak reliability.",
    },
    {
      icon: "trendUp",
      title: "Regression Testing",
      description:
        "Retests existing functionality after updates, ensuring new changes do not introduce unexpected issues.",
    },
    {
      icon: "shieldCheck",
      title: "Smoke Testing",
      description:
        "Performs quick checks on critical features to confirm the application is stable for further testing.",
    },
    {
      icon: "shieldAlert",
      title: "User Acceptance Testing (UAT)",
      description:
        "Allows end users to validate functionality, ensuring the software meets business requirements and expectations.",
    },
  ],
  processHeading: "Our Proven Software Quality Assurance Process",
  processDescription: "",
  process: [
    {
      step: "01",
      title: "Test Planning",
      description:
        "We study your project requirements deeply, identify high-risk areas early, and build a precise testing strategy around your actual goals.",
    },
    {
      step: "02",
      title: "Test Design",
      description:
        "Our QA specialists craft detailed test cases that cover every critical user path, edge case, and functional requirement your software demands.",
    },
    {
      step: "03",
      title: "Test Execution",
      description:
        "We run thorough manual and automated tests across features, APIs, integrations, and real user workflows, leaving no room for hidden bugs.",
    },
    {
      step: "04",
      title: "Validation & Reporting",
      description:
        "Every defect is logged, retested after fixes, and delivered in a clear report with actionable insights your development team can act on immediately.",
    },
  ],
  comparison: {
    heading: "Software Quality Assurance vs. Software Quality Control",
    description: "",
    featureColumnLabel: "Features",
    columnDigital: "Software Quality Assurance",
    columnTraditional: "Software Quality Control",
    rows: [
      {
        feature: "Purpose",
        digital: "Prevents defects before they occur.",
        traditional: "Detects defects after they occur.",
      },
      {
        feature: "Process Focus",
        digital: "Improves the development process.",
        traditional: "Tests the final software product.",
      },
      {
        feature: "Team Involvement",
        digital: "Involves the entire development team.",
        traditional: "Handled by dedicated testing teams.",
      },
      {
        feature: "Approach",
        digital: "Proactive and process-driven.",
        traditional: "Reactive and product-driven.",
      },
      {
        feature: "Primary Goal",
        digital: "Ensures quality is built in early.",
        traditional: "Confirms the product meets standards.",
      },
    ],
  },
  toolsHeading: "Software Quality Assurance Tools",
  toolsDescription:
    "Reliable software depends on effective QA tools. We use trusted platforms to detect issues, automate testing, track performance, and ensure applications work smoothly across different devices, browsers, and environments.",
  tools: [
    { icon: selenium },
    { icon: cypress },
    { icon: jira },
    { icon: postman },
    { icon: testrail },
    { icon: browserstack },
  ],
  testimonialsHeading: "Testimonials",
  testimonialsDescription:
    "Real results speak louder than promises. See what our clients say after working with Mahraj Technologies.",
  testimonials: [
    {
      quote:
        "We had a mobile app failing across different browsers and devices. Mahraj ran full BrowserStack testing and mapped every failure. Within days, everything worked perfectly. Their process was clean, fast, and incredibly thorough.",
      name: "James Whitford",
      position: "Co-Founder",
    },
    {
      quote:
        "Our API kept failing during third-party integrations. Nobody could figure out why. Mahraj used Postman and ran deep integration testing. They found the exact issue within hours. Absolutely brilliant team to work with.",
      name: "Ravi Kapoor",
      position: "Backend Architect",
    },
    {
      quote:
        "Instead of simply reporting issues, they provided meaningful insights into recurring quality problems. That helped our developers improve processes and reduce bugs in future releases.",
      name: "Daniel Brooks",
      position: "Software Development Manager",
    },
  ],
  consultingHeading: "Software Quality Assurance Services",
  consultingDescription:
    "Bugs slow businesses down. Our software quality assurance services give your team the clarity and confidence to ship reliable software. We test deeply, report clearly, and help you fix issues before they reach your users.",
  consultingImage: consultingImage,
  onlinePresenceHeading: "Where We Deliver Quality",
  onlinePresenceDescription:
    "With testing teams operating across Dubai, Islamabad, and the USA, we support software projects in multiple regions and time zones. Our QA specialists stay ahead of evolving technologies, helping businesses maintain stable, high-performing applications in a fast-moving digital world.",
  locationsHeading: "Reliable Software QA Partner Near You",
  locationsDescription:
    "With an established presence across multiple locations, our software quality assurance team delivers testing solutions built around your product's specific needs. We combine structured test planning, hands-on execution, and performance-driven reporting to help development teams release software with confidence.",
  locations: [
    {
      title: "Software QA Services in Dubai",
      officeAddress:
        "B2B Office Tower, Office Number 2205, Marasi Drive Street, Business Bay, Dubai, UAE",
      officePhone: "+971 52 785 1523",
    },
    {
      title: "Software QA Services in Islamabad, Pakistan",
      officeAddress:
        "World Trade Center, Office Number 4087, Islamabad, Pakistan",
      officePhone: "+971 52 785 1523",
    },
    {
      title: "Software QA Services in USA (Remote-Based)",
      officeAddress: "Serving clients remotely across the United States.",
      officePhone: "+971 52 785 1523",
    },
  ],
  faqsHeading: "Software Quality Assurance FAQs",
  faqs: [
    {
      question: "How long does a typical QA project take?",
      answer:
        "It depends on your project size. Small projects take a few days while larger ones can take a few weeks.",
    },
    {
      question: "Do you offer one-time testing or ongoing QA support?",
      answer:
        "We offer both options. You can choose a single testing cycle or continuous QA support based on your needs.",
    },
    {
      question: "How do you handle urgent testing requests?",
      answer:
        "We offer priority support for tight deadlines. Just contact us and we will arrange a fast turnaround for your project.",
    },
    {
      question: "Can you test our software across different operating systems?",
      answer:
        "Yes! We test across Windows, macOS, Linux, and major mobile operating systems to ensure consistent performance everywhere.",
    },
    {
      question: "How do we get started with Mahraj Technologies?",
      answer:
        "Simply reach out through our contact page. Our team will review your project and recommend the best testing approach for you.",
    },
  ],
};
