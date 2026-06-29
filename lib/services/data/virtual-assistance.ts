import type { ServiceDetailData } from "../types";
import consultingImage from "@/public/dashboard.jpg";

import slack from "@/public/CompanySvgs/slack.svg";
import trello from "@/public/CompanySvgs/trello.svg";
import zoom from "@/public/CompanySvgs/zoom.svg";
import googleWorkspace from "@/public/CompanySvgs/google-workspace.svg";
import asana from "@/public/CompanySvgs/asana.svg";
import clockify from "@/public/CompanySvgs/clockify.svg";
import dropbox from "@/public/CompanySvgs/dropbox.svg";

export const virtualAssistanceData: ServiceDetailData = {
  slug: "virtual-assistance",
  title: "Virtual Assistance",
  seo: {
    metaTitle: "Virtual Assistance Services | Mahraj Technologies",
    metaDescription:
      "Reliable virtual assistance from Mahraj Technologies—admin support, executive tasks, customer service, social media, e-commerce, and more to keep your business running efficiently from anywhere.",
    focusKeyword: "virtual assistance",
  },
  hero: {
    eyebrow: "HOME / SERVICES / VIRTUAL ASSISTANCE",
    titleLight: "Virtual Assistance",
    titleDark: "",
    description:
      "Finding it hard to manage everything alone? Virtual assistance provides reliable support for your everyday business needs.",
  },
  serviceTypesHeading: "Types of Virtual Assistance",
  serviceTypesDescription: "",
  serviceTypes: [
    {
      icon: "settings",
      title: "General Administrative Assistance",
      description:
        "Keeps daily business operations organized by managing emails, calendars, documents, scheduling, and routine administrative responsibilities efficiently.",
    },
    {
      icon: "users",
      title: "Executive Virtual Assistance",
      description:
        "Supports executives by handling meetings, travel arrangements, confidential tasks, and priority schedules with professionalism and accuracy.",
    },
    {
      icon: "mail",
      title: "Customer Support Assistance",
      description:
        "Provides prompt customer support through email, chat, and calls, improving satisfaction while maintaining positive business relationships.",
    },
    {
      icon: "trendUp",
      title: "Sales Virtual Assistance",
      description:
        "Assists sales teams by managing leads, scheduling appointments, updating CRM systems, and supporting daily sales activities.",
    },
    {
      icon: "share2",
      title: "Social Media Virtual Assistance",
      description:
        "Manages social media accounts by scheduling content, responding to messages, and maintaining consistent audience engagement across platforms.",
    },
    {
      icon: "megaphone",
      title: "Digital Marketing Assistance",
      description:
        "Supports marketing campaigns through content management, email marketing, reporting, research, and day-to-day digital marketing activities.",
    },
    {
      icon: "shoppingCart",
      title: "E-commerce Virtual Assistance",
      description:
        "Handles product listings, inventory updates, order processing, and customer inquiries to keep online stores running efficiently.",
    },
    {
      icon: "barChart3",
      title: "Accounting Virtual Assistance",
      description:
        "Manages invoices, expense tracking, bookkeeping, financial records, and routine accounting tasks with accuracy and confidentiality.",
    },
  ],
  processHeading: "Our Step-by-Step Virtual Assistance Process",
  processDescription: "",
  process: [
    {
      step: "01",
      title: "Requirement Assessment",
      description:
        "We understand your business, daily tasks, priorities, and workflows to assign the right virtual assistance support.",
    },
    {
      step: "02",
      title: "Task Planning",
      description:
        "Responsibilities are organized, priorities are set, and clear workflows are created for efficient daily task management.",
    },
    {
      step: "03",
      title: "Dedicated Execution",
      description:
        "Our virtual assistants complete assigned tasks accurately, communicate proactively, and maintain consistent productivity throughout the process.",
    },
    {
      step: "04",
      title: "Performance Optimization",
      description:
        "We review completed work, gather feedback, refine workflows, and continuously improve efficiency to support your business growth.",
    },
  ],
  comparison: {
    heading: "Virtual Assistant vs. In-House Assistant",
    description: "",
    featureColumnLabel: "Features",
    columnDigital: "Virtual Assistant",
    columnTraditional: "In-House Assistant",
    rows: [
      {
        feature: "Cost & Overhead",
        digital: "No salary, benefits, or office costs.",
        traditional: "Fixed salary plus benefits and workspace.",
      },
      {
        feature: "Availability",
        digital: "Works across time zones and weekends.",
        traditional: "Limited to standard office hours only.",
      },
      {
        feature: "Scalability",
        digital: "Scale up or down instantly as needed.",
        traditional: "Scaling requires hiring and long onboarding.",
      },
      {
        feature: "Communication",
        digital: "All coordination via digital tools.",
        traditional: "Direct, face-to-face access every day.",
      },
      {
        feature: "Skill Access",
        digital: "Global talent with specialized skills.",
        traditional: "Limited to local candidates available.",
      },
    ],
  },
  toolsHeading: "Virtual Assistant Tools",
  toolsDescription:
    "Virtual assistants rely on a powerful set of digital tools to stay organized, communicate effectively, and deliver results from anywhere in the world. These tools replace the physical office and keep every task, deadline, and conversation in one place.",
  tools: [
    { icon: slack },
    { icon: trello },
    { icon: zoom },
    { icon: googleWorkspace },
    { icon: asana },
    { icon: clockify },
    { icon: dropbox },
  ],
  testimonialsHeading: "Testimonials",
  testimonialsDescription:
    "Hundreds of businesses trust us daily. Here's what a few of them had to say.",
  testimonials: [
    {
      quote:
        "Hiring a virtual assistant from Mahraj Technologies was one of our smartest decisions. They managed customer inquiries, organized daily operations, and kept everything running smoothly without constant supervision.",
      name: "Jessica Bennett",
      position: "Founder",
    },
    {
      quote:
        "I expected help with routine tasks, but received much more. Their proactive communication, organization, and attention to detail improved productivity across our entire business.",
      name: "Ryan Foster",
      position: "Managing Director",
    },
    {
      quote:
        "I was drowning in campaign management and reporting tasks. Their digital marketing assistance took over seamlessly. Within two weeks, my team was focused on strategy instead of repetitive daily work. Highly recommended.",
      name: "James R.",
      position: "Marketing Director",
    },
  ],
  consultingHeading: "Virtual Assistance Consulting",
  consultingDescription:
    "Running a business is demanding and no one should do it alone. Our virtual assistance consulting helps you identify exactly where support is needed, streamline your daily operations, and build a workflow that works without the chaos. We assess your workload, match you with the right expertise, and keep your business moving forward.",
  consultingImage: consultingImage,
  onlinePresenceHeading: "Locations We Serve",
  onlinePresenceDescription:
    "We proudly serve businesses in Dubai, Islamabad, and across the United States, delivering remote support that feels anything but distant. Our virtual assistants work as a true extension of your team, adapting to your time zone, tools, and goals. Distance is never a barrier when the right systems are in place.",
  locationsHeading: "Your Trusted Virtual Assistance Partner, Wherever You Are",
  locationsDescription:
    "Whether you are a solo entrepreneur or a growing enterprise, we provide dedicated virtual assistance tailored to your business needs. From day-to-day admin to specialized support, our team handles the work so you can lead with focus and confidence.",
  locations: [
    {
      title: "Virtual Assistance Agency in Dubai",
      officeAddress: "B2B Office Tower, Office Number 2205, Marasi Drive Street, Business Bay, Dubai, UAE",
      officePhone: "+971 52 785 1523",
    },
    {
      title: "Virtual Assistance Agency in Islamabad, Pakistan",
      officeAddress: "World Trade Center, Office Number 4087, Islamabad, Pakistan",
      officePhone: "+971 52 785 1523",
    },
    {
      title: "Virtual Assistance Agency in USA",
      officeAddress: "Serving clients remotely across the United States.",
      officePhone: "+971 52 785 1523",
    },
  ],
  faqsHeading: "Virtual Assistance FAQs",
  faqs: [
    {
      question: "Can your virtual assistants work in my time zone?",
      answer:
        "Yes, absolutely. Our virtual assistants are flexible and adapt to your preferred working hours. We ensure smooth collaboration no matter where you are located.",
    },
    {
      question: "Do you sign confidentiality agreements (NDAs)?",
      answer:
        "Yes, we do. Client confidentiality is our top priority. Every virtual assistant signs an NDA before starting work to keep your data fully protected.",
    },
    {
      question: "How do I get started with your virtual assistance service?",
      answer:
        "Getting started is simple. Contact us, share your requirements, and we match you with the right virtual assistant. You can be up and running within 24-48 hours.",
    },
    {
      question: "How do you ensure smooth communication throughout the project?",
      answer:
        "We use reliable tools like Slack, Zoom, and email for daily updates. Your virtual assistant stays proactive, responsive, and transparent at every step of the process.",
    },
    {
      question: "What makes your virtual assistance service different?",
      answer:
        "We go beyond basic task completion. Our virtual assistants are skilled, reliable, and fully dedicated to your business goals. You get quality support without the overhead of a full-time hire.",
    },
  ],
};
