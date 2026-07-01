import type { ServiceDetailData } from "../types";
import openai from "@/public/CompanySvgs/openai.svg";
import gemini from "@/public/CompanySvgs/google-gemini.svg";
import consultingImage from "@/public/dashboard.jpg";
import claude from "@/public/CompanySvgs/claude.svg";
import tensorflow from "@/public/CompanySvgs/tensorflow.svg";
import pytorch from "@/public/CompanySvgs/pytorch.svg";
import langchain from "@/public/CompanySvgs/langchain.svg";
import azure from "@/public/CompanySvgs/microsoft_azure.svg";

export const artificialIntelligenceData: ServiceDetailData = {
  slug: "artificial-intelligence",
  title: "Artificial Intelligence",
  seo: {
    metaTitle: "Artificial Intelligence Services | Mahraj Technologies",
    metaDescription:
      "Artificial intelligence from Mahraj Technologies—unlock smarter insights, automate workflows, and build scalable AI solutions tailored to your business goals.",
    focusKeyword: "artificial intelligence",
  },
  hero: {
    eyebrow: "HOME / SERVICES / ARTIFICIAL INTELLIGENCE",
    titleLight: "Artificial Intelligence",
    titleDark: "",
    description:
      "Want to unlock the power of your data? Artificial Intelligence delivers smarter insights and more efficient business operations.",
  },
  serviceTypesHeading: "Types of Artificial Intelligence",
  serviceTypesDescription: "",
  serviceTypes: [
    {
      icon: "target",
      title: "Artificial Narrow AI",
      description:
        "Designed to perform specific tasks efficiently, delivering accurate results within predefined functions and specialized business applications.",
    },
    {
      icon: "layers",
      title: "Artificial General Intelligence (AGI)",
      description:
        "Aims to think, learn, and solve problems across different domains with human-like intelligence and adaptability.",
    },
    {
      icon: "trendUp",
      title: "Artificial Super Intelligence (ASI)",
      description:
        "Represents a theoretical AI that surpasses human intelligence across reasoning, creativity, decision-making, and complex problem-solving abilities.",
    },
    {
      icon: "monitor",
      title: "Reactive Machine AI",
      description:
        "Responds only to current inputs without storing previous experiences, making decisions based entirely on present situations.",
    },
    {
      icon: "lineChart",
      title: "Limited Memory AI",
      description:
        "Learns from historical data and recent interactions, enabling smarter predictions and continuously improving decision-making over time.",
    },
    {
      icon: "users",
      title: "Theory of Mind AI",
      description:
        "Focuses on understanding human emotions, intentions, and behavior to enable more natural and intelligent interactions.",
    },
    {
      icon: "shieldCheck",
      title: "Self-Aware AI",
      description:
        "Represents a future AI concept capable of self-consciousness, independent thinking, and understanding its own existence.",
    },
    {
      icon: "code",
      title: "Generative AI",
      description:
        "Creates original content such as text, images, code, audio, and videos using advanced machine learning models.",
    },
  ],
  processHeading: "How We Deliver AI Solutions",
  processDescription: "",
  process: [
    {
      step: "01",
      title: "Discovery",
      description:
        "We dig into your goals, untangle existing workflows, and pinpoint exactly where AI can move the needle most for your business.",
    },
    {
      step: "02",
      title: "AI Strategy",
      description:
        "Our experts map the right approach, evaluate suitable models, and architect solutions engineered around your specific business objectives.",
    },
    {
      step: "03",
      title: "Development",
      description:
        "We build, train, and integrate AI systems that automate repetitive tasks, sharpen decision-making, and elevate overall business performance.",
    },
    {
      step: "04",
      title: "Optimization",
      description:
        "We track AI performance relentlessly, fine-tune models continuously, and push accuracy higher to deliver lasting business value over time.",
    },
  ],
  comparison: {
    heading: "AI vs. Machine Learning",
    description: "",
    featureColumnLabel: "Features",
    columnDigital: "AI",
    columnTraditional: "Machine Learning",
    rows: [
      {
        feature: "Definition",
        digital: "Broader concept of machines mimicking intelligence.",
        traditional: "Subset of AI that learns from data.",
      },
      {
        feature: "Goal",
        digital: "Simulate human reasoning and decision-making.",
        traditional: "Improve accuracy through pattern recognition.",
      },
      {
        feature: "Approach",
        digital: "Combines rules, logic, and learning systems.",
        traditional: "Relies purely on data-driven algorithms.",
      },
      {
        feature: "Examples",
        digital: "Chatbots, robotics, and virtual assistants.",
        traditional: "Recommendation engines and fraud detection.",
      },
      {
        feature: "Dependency",
        digital: "Can function with rules, not only data.",
        traditional: "Fully dependent on training data quality.",
      },
    ],
  },
  toolsHeading: "Artificial Intelligence Tools",
  toolsDescription:
    "AI tools have become essential for businesses looking to automate processes, analyze data, and deliver smarter solutions at scale. From machine learning models to natural language processing, the right platforms turn AI strategy into measurable results.",
  tools: [
    { icon: openai },
    { icon: gemini },
    { icon: claude },
    { icon: tensorflow },
    { icon: pytorch },
    { icon: langchain },
    { icon: azure },
  ],
  testimonialsHeading: "Testimonials",
  testimonialsDescription: "",
  testimonials: [
    {
      quote:
        "This company developed AI solutions that made our work easier, helped us make smarter decisions, and supported our business growth. The solution grew with our needs, and we're extremely happy with the results.",
      name: "James Wilson",
      position: "Founder & CEO",
    },
    {
      quote:
        "From AI strategy to deployment, the team understood our business needs perfectly. Their solution improved data analysis, accelerated decision-making, and helped us deliver better customer experiences with measurable efficiency gains.",
      name: "Sophia Mitchell",
      position: "Director of Digital Transformation",
    },
    {
      quote:
        "Their AI experts transformed our complex workflows into intelligent automated processes. We now save time, reduce errors, and make smarter business decisions every day.",
      name: "Emily Roberts",
      position: "Chief Operations Officer",
    },
  ],
  consultingHeading: "AI Strategy & Implementation",
  consultingDescription:
    "Adopting AI is not just about technology, it is about knowing where it actually moves your business forward. We help you evaluate use cases, choose the right models, plan integration, and assess scalability. Whether you are exploring AI for the first time or refining an existing system, we provide the strategic clarity needed to reduce risk and build solutions that truly last.",
  consultingImage: consultingImage,
  onlinePresenceHeading: "Powering Businesses Worldwide with AI",
  onlinePresenceDescription:
    "From Dubai to Islamabad and across the United States, businesses turn to us to translate complex AI concepts into real, working solutions. We blend deep technical expertise with practical business thinking, helping organizations automate smarter, decide faster, and unlock new levels of efficiency wherever they operate.",
  locationsHeading: "A Trusted Name in Artificial Intelligence",
  locationsDescription:
    "Every successful AI deployment starts with the right foundation. We help businesses navigate AI model selection, data readiness, and seamless system integration, turning AI from a concept into a measurable competitive advantage that enhances efficiency, accelerates innovation, and drives sustainable growth.",
  locations: [
    {
      title: "Artificial Intelligence Agency in Dubai",
      officeAddress:
        "B2B Office Tower, Office Number 2205, Marasi Drive Street, Business Bay, Dubai, UAE",
      officePhone: "+971 52 785 1523",
    },
    {
      title: "Artificial Intelligence Agency in Islamabad, Pakistan",
      officeAddress:
        "World Trade Center, Office Number 4087, Islamabad, Pakistan",
      officePhone: "+971 52 785 1523",
    },
    {
      title: "Artificial Intelligence Agency in USA",
      officeAddress: "Serving clients remotely across the United States.",
      officePhone: "+971 52 785 1523",
    },
  ],
  faqsHeading: "Artificial Intelligence FAQs",
  faqs: [
    {
      question: "How do I know which type of AI fits my business?",
      answer:
        "It depends on your goals and challenges. During our discovery phase, we evaluate your workflows and recommend the right AI approach for you.",
    },
    {
      question: "How long does an AI project usually take?",
      answer:
        "Timelines vary based on complexity. Simple solutions take a few weeks, while advanced custom AI systems may take 2-3 months.",
    },
    {
      question: "How much does an AI solution cost?",
      answer:
        "Cost depends on project scope, data requirements, and complexity. We provide a clear quote after understanding your specific business needs.",
    },
    {
      question: "Do you offer a free consultation before starting a project?",
      answer:
        "Yes, we do. Our initial consultation helps us understand your goals and gives you a clear picture of the right AI approach.",
    },
    {
      question: "How do I get started with your AI services?",
      answer:
        "Simply reach out to us. We will schedule a consultation, assess your needs, and guide you through the next steps.",
    },
  ],
};
