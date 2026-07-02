import type { ServiceDetailData } from "../types";
import github from "@/public/CompanySvgs/github.svg";
import docker from "@/public/CompanySvgs/docker.svg";
import jenkins from "@/public/CompanySvgs/jenkins.svg";
import jira from "@/public/CompanySvgs/jira.svg";
import postman from "@/public/CompanySvgs/postman.svg";
import selenium from "@/public/CompanySvgs/selenium.svg";
import kubernetes from "@/public/CompanySvgs/kubernetes.svg";
import consultingImage from "@/public/dashboard.jpg";

export const softwareDevelopmentData: ServiceDetailData = {
  slug: "software-development",
  title: "Software Development",
  seo: {
    metaTitle: "Software Development Services | Mahraj Technologies",
    metaDescription:
      "Software development services from Mahraj Technologies—build custom, enterprise, and cloud-based software that automates workflows, improves productivity, and scales with your business.",
    focusKeyword: "software development",
  },
  hero: {
    eyebrow: "HOME / SERVICES / SOFTWARE DEVELOPMENT",
    titleLight: "Software Development",
    titleDark: "",
    description:
      "Ready to replace manual processes with smarter systems? Software development helps automate workflows and improve productivity.",
  },
  serviceTypesHeading: "Types of Software Development",
  serviceTypesDescription: "",
  serviceTypes: [
    {
      icon: "code",
      title: "Custom Software Development",
      description:
        "Builds tailored software solutions designed specifically to match your business processes, goals, and long-term operational requirements.",
    },
    {
      icon: "users",
      title: "Enterprise Software Development",
      description:
        "Supports large organizations with scalable software that streamlines operations, improves collaboration, and increases overall business efficiency.",
    },
    {
      icon: "monitor",
      title: "Web Application Development",
      description:
        "Creates secure, browser-based applications that provide fast access, seamless functionality, and consistent user experiences across devices.",
    },
    {
      icon: "smartphone",
      title: "Mobile App Development",
      description:
        "Develops high-performance mobile applications that improve customer engagement, accessibility, and business productivity on every platform.",
    },
    {
      icon: "server",
      title: "Cloud Software Development",
      description:
        "Delivers cloud-based applications that offer flexibility, secure access, easy scalability, and reliable performance from anywhere.",
    },
    {
      icon: "layers",
      title: "SaaS (Software as a Service) Development",
      description:
        "Builds subscription-based software platforms that are accessible online, easy to maintain, and continuously updated for users.",
    },
    {
      icon: "link2",
      title: "API Development & Integration",
      description:
        "Connects applications and systems securely, enabling seamless data exchange, automation, and improved communication between business platforms.",
    },
    {
      icon: "shieldCheck",
      title: "Software Maintenance & Support",
      description:
        "Ensures software remains secure, updated, optimized, and fully functional through continuous monitoring, improvements, and technical support.",
    },
  ],
  processHeading: "How We Build Your Software",
  processDescription: "",
  process: [
    {
      step: "01",
      title: "Discovery",
      description:
        "We go beyond requirements, like mapping your business objectives, simplifying workflows, and building a development roadmap that leaves zero room for confusion.",
    },
    {
      step: "02",
      title: "Planning",
      description:
        "Our experts engineer the full solution structure, define must-have features, and design a scalable foundation before a single line of code is written.",
    },
    {
      step: "03",
      title: "Build & Test",
      description:
        "We develop secure, high-performance software while running continuous tests across functionality, security, and performance, catching issues before they ever reach you.",
    },
    {
      step: "04",
      title: "Launch & Support",
      description:
        "Go-live is just the beginning. We monitor performance closely, resolve issues fast, roll out improvements, and keep your software sharp for the long run.",
    },
  ],
  comparison: {
    heading: "Software Development vs. Web Development",
    description: "",
    columnDigital: "Software Development",
    columnTraditional: "Web Development",
    rows: [
      {
        feature: "Primary Focus",
        digital: "Builds applications for desktop, mobile, or enterprise.",
        traditional: "Builds websites and web-based applications.",
      },
      {
        feature: "Output",
        digital: "Standalone software installed on devices or servers.",
        traditional: "Accessible through browsers without installation.",
      },
      {
        feature: "Complexity",
        digital: "Handles complex logic, data, and system integration.",
        traditional: "Focuses on UI, functionality, and user experience.",
      },
      {
        feature: "Technologies",
        digital: "Java, C++, Python, and .NET frameworks.",
        traditional: "HTML, CSS, JavaScript, and web frameworks.",
      },
      {
        feature: "Deployment",
        digital: "Deployed on local systems, cloud, or enterprise servers.",
        traditional: "Deployed on web hosting or cloud platforms.",
      },
    ],
  },
  toolsHeading: "Software Development Tools",
  toolsDescription:
    "Modern software development demands the right stack of tools to write clean code, manage teams, test efficiently, and ship on time. The right platforms keep development organized, collaborative, and built for performance from day one.",
  tools: [
    { icon: github },
    { icon: docker },
    { icon: jenkins },
    { icon: jira },
    { icon: postman },
    { icon: selenium },
    { icon: kubernetes },
  ],
  testimonialsHeading: "Testimonials",
  testimonialsDescription: "",
  testimonials: [
    {
      quote:
        "Our outdated systems slowed every department. Mahraj Technologies developed software that simplified daily operations, reduced manual work, and gave our team a much faster way to get things done.",
      name: "Nathan Brooks",
      position: "Operations Director",
    },
    {
      quote:
        "The communication throughout the project was outstanding. Every milestone was delivered on schedule, and the final software matched our requirements far better than we expected.",
      name: "Daniel Hughes",
      position: "Business Development Manager",
    },
    {
      quote:
        "Our previous software created more problems than solutions. Mahraj Technologies rebuilt the platform with cleaner workflows, stronger performance, and features that genuinely improved how our team works.",
      name: "Emily Foster",
      position: "Managing Director",
    },
  ],
  consultingHeading: "Software Solutions That Actually Work",
  consultingDescription:
    "Bad software slows everything down, and most businesses don't realize it until the damage is done. We help you assess your current systems, define the right solution, and plan development that actually fits your operations. From idea validation to technical scoping, we eliminate guesswork and build a clear path toward software that works the way your business needs it.",
  consultingImage: consultingImage,
  onlinePresenceHeading: "Serving Software Solutions Across Three Regions",
  onlinePresenceDescription:
    "From Dubai to Islamabad and across the United States, growing businesses trust us to turn complex requirements into reliable, high-performance software. We bring together technical depth and business understanding to build solutions that don't just function, they scale, adapt, and deliver long term value no matter where you operate.",
  locationsHeading: "The Software Development Partner Your Business Deserves",
  locationsDescription:
    "Great software is not built by accident. It starts with deep understanding, honest planning, and a team that treats your goals as their own. We work alongside your business to design, develop, and deliver software solutions that reduce inefficiency, solve real problems, and grow with you every step of the way.",
  locations: [
    {
      title: "Software Development Agency in Dubai",
      officeAddress:
        "B2B Office Tower, Office Number 2205, Marasi Drive Street, Business Bay, Dubai, UAE",
      officePhone: "+971 52 785 1523",
    },
    {
      title: "Software Development Agency in Islamabad, Pakistan",
      officeAddress:
        "World Trade Center, Office Number 4087, Islamabad, Pakistan",
      officePhone: "+971 52 785 1523",
    },
    {
      title: "Software Development Agency in USA",
      officeAddress: "Serving clients remotely across the United States.",
      officePhone: "+971 52 785 1523",
    },
  ],
  faqs: [
    {
      question: "How do I know if I need custom software?",
      answer:
        "If your current tools are slowing your team down or failing to meet your specific needs, custom software is the right move. We help you evaluate whether a custom solution is the smartest investment for your business.",
    },
    {
      question: "How long does a software project take to complete?",
      answer:
        "It depends on the complexity and scope of the project. Simple solutions can be delivered in 4 to 8 weeks, while larger enterprise systems may take 3 to 6 months.",
    },
    {
      question: "How much does custom software development cost?",
      answer:
        "Pricing varies based on features, complexity, and timeline. We provide a detailed quote after our discovery session so you know exactly what to expect before we begin.",
    },
    {
      question: "How do we track development progress throughout the project?",
      answer:
        "We keep you informed at every stage. Through regular updates, milestone reports, and dedicated communication channels, you always know exactly where your project stands.",
    },
    {
      question: "Do you provide training after the software is delivered?",
      answer:
        "Yes, absolutely. We provide hands-on training to ensure your team understands how to use the software confidently. Ongoing support is also available after the launch.",
    },
  ],
};
