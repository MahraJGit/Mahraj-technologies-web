import type { ServiceDetailData } from "../types";
import github from "@/public/CompanySvgs/github.svg";
import react from "@/public/CompanySvgs/reactjs_logo.svg";
import google from "@/public/CompanySvgs/google.svg";
import aws from "@/public/CompanySvgs/aws.svg";
import azure from "@/public/CompanySvgs/azure.svg";
import xcode from "@/public/CompanySvgs/xcode.svg";
import flutter from "@/public/CompanySvgs/flutter.svg";
import firebase from "@/public/CompanySvgs/firebase.svg";
import consultingImage from "@/public/dashboard.jpg";

export const mobileAppDevelopmentData: ServiceDetailData = {
  slug: "mobile-app-development",
  title: "Mobile App Development",
  seo: {
    metaTitle: "Mobile App Development Services | Mahraj Technologies",
    metaDescription:
      "Mobile app development from Mahraj Technologies—build high-performance Android, iOS, and cross-platform applications with strategic planning, scalable architecture, and user-focused design.",
    focusKeyword: "mobile app development",
  },
  hero: {
    eyebrow: "HOME / SERVICES / MOBILE APP DEVELOPMENT",
    titleLight: "Mobile App Development",
    titleDark: "",
    description:
      "Want a faster, more direct way to connect with your audience? Mobile development puts your brand's full power directly into your customers' hands.",
  },
  serviceTypesHeading: "Types of Mobile App Development",
  serviceTypesDescription: "",
  serviceTypes: [
    {
      icon: "smartphone",
      title: "Android App Development",
      description:
        "Building apps specifically for Android devices using Kotlin or Java, targeting billions of global users.",
    },
    {
      icon: "monitor",
      title: "iOS App Development",
      description:
        "Creating apps exclusively for Apple devices using Swift or Objective-C, known for a premium user experience.",
    },
    {
      icon: "layers",
      title: "Cross Platform App Development",
      description:
        "Writing a single codebase that runs on both Android and iOS, saving time and development cost.",
    },
    {
      icon: "layout",
      title: "Flutter App Development",
      description:
        "Google's UI toolkit that builds visually rich, natively compiled apps for mobile from one codebase.",
    },
    {
      icon: "code",
      title: "React Native App Development",
      description:
        "Meta's framework that uses JavaScript to build near native mobile apps for both major platforms simultaneously.",
    },
    {
      icon: "settings",
      title: "Native Mobile App Development",
      description:
        "Building separate apps for each platform using platform specific languages, delivering the best possible performance and experience.",
    },
    {
      icon: "link2",
      title: "Progressive Web App Development",
      description:
        "Web apps that behave like native mobile apps, installable, fast, and functional even without internet.",
    },
    {
      icon: "users",
      title: "Enterprise Mobile App Development",
      description:
        "Building secure, scalable apps designed for large organizations to streamline internal operations and workforce productivity.",
    },
  ],
  processHeading: "Our Mobile App Development Process",
  processDescription: "",
  process: [
    {
      step: "01",
      title: "Planning",
      description:
        "We define app objectives, user expectations, and growth requirements before development begins.",
    },
    {
      step: "02",
      title: "Prototyping",
      description:
        "We create interactive app prototypes to test features, navigation, and user experience before development begins.",
    },
    {
      step: "03",
      title: "Development",
      description:
        "Our team builds reliable mobile applications with clean architecture, optimized performance, and future scalability.",
    },
    {
      step: "04",
      title: "Refinement",
      description:
        "After deployment, we monitor performance, analyze user behavior, and refine features for long term growth.",
    },
  ],
  comparison: {
    heading: "Native Mobile App Development vs. Cross-Platform App Development",
    description: "",
    featureColumnLabel: "Features",
    columnDigital: "Native Mobile App Development",
    columnTraditional: "Cross-Platform App Development",
    rows: [
      {
        feature: "Development Approach",
        digital: "Separate codebase for each platform.",
        traditional: "Single codebase for multiple platforms.",
      },
      {
        feature: "Performance",
        digital: "Delivers maximum speed and responsiveness.",
        traditional: "Provides strong performance for most applications.",
      },
      {
        feature: "Device Integration",
        digital: "Full access to platform specific features.",
        traditional: "Supports common device features across platforms.",
      },
      {
        feature: "Development Time",
        digital: "Requires more time and resources.",
        traditional: "Faster development and deployment process.",
      },
      {
        feature: "Maintenance",
        digital: "Updates managed separately for each platform.",
        traditional: "Easier maintenance through a unified codebase.",
      },
    ],
  },
  toolsHeading: "Mobile App Development Tools",
  toolsDescription:
    "Building high quality mobile applications requires the right combination of development, testing, collaboration, and deployment tools. We leverage industry leading technologies to create reliable, scalable, and high performing mobile experiences.",
  tools: [
    { icon: github },
    { icon: google },
    { icon: react },
    { icon: azure },
    { icon: firebase },
    { icon: xcode },
    { icon: aws },
    { icon: flutter },
  ],
  testimonialsHeading: "Testimonials",
  testimonialsDescription:
    "Client success is our greatest achievement. Here's what businesses say about working with Mahraj Technologies.",
  testimonials: [
    {
      quote:
        "Three developers had tried building this platform before. None delivered. This team came in, understood the brief properly, and launched on time. The app runs clean with zero major issues since go live.",
      name: "James Okonkwo",
      position: "Startup Founder",
    },
    {
      quote:
        "The app Mahraj Technologies built didn't just look good, it actually worked the way our customers expected. Inquiries went up, complaints went down. Honestly didn't expect results this fast from a first launch.",
      name: "Daniel Mercer",
      position: "Founder, RetailEdge Solutions",
    },
    {
      quote:
        "Scaled from 5,000 to 10,000 monthly active users, and the app didn't flinch once. Performance held up exactly the way they promised during the planning phase. That's rare.",
      name: "Omar Farooq",
      position: "E-commerce Director, NovaMart",
    },
  ],
  consultingHeading: "Mobile App Development Consulting",
  consultingDescription:
    "Our mobile app development consultation helps businesses evaluate app ideas, platform selection, feature planning, user experience, scalability, and technical requirements. Whether you're launching a new application or improving an existing one, we provide strategic guidance to reduce development risks, improve functionality, and create a stronger foundation for long term success.",
  consultingImage: consultingImage,
  onlinePresenceHeading: "Trusted by Businesses Across the Globe",
  onlinePresenceDescription:
    "Businesses across Dubai, Islamabad, and the USA rely on our mobile app development expertise to transform ideas into high performing applications. By combining strategic planning, user focused experiences, and scalable technologies, we help organizations create mobile solutions that support growth, engagement, and long term digital success.",
  locationsHeading: "Your Reliable Mobile App Development Partner",
  locationsDescription:
    "Every successful mobile application begins with the right technical direction. We help businesses navigate development challenges, refine application requirements, and implement practical mobile solutions that improve efficiency, strengthen user engagement, and support evolving business needs in a rapidly changing digital environment.",
  locations: [
    {
      title: "Mobile App Development Agency in Dubai",
      officeAddress:
        "B2B Office Tower, Office Number 2205, Marasi Drive Street, Business Bay, Dubai, UAE",
      officePhone: "+971 52 785 1523",
    },
    {
      title: "Mobile App Development Agency in Islamabad, Pakistan",
      officeAddress:
        "World Trade Center, Office Number 4087, Islamabad, Pakistan",
      officePhone: "+971 52 785 1523",
    },
    {
      title: "Mobile App Development Agency in USA (Remote-Based)",
      officeAddress: "Serving clients remotely across the United States.",
      officePhone: "+971 52 785 1523",
    },
  ],
  faqs: [
    {
      question: "How much does mobile app development cost?",
      answer:
        "The cost depends on the app's features, complexity, platforms, and development requirements. Every project is priced based on its specific scope.",
    },
    {
      question: "Can you build apps for both Android and iPhone?",
      answer:
        "Yes! Mobile applications can be developed for Android, iPhone, or both platforms depending on your business goals and audience.",
    },
    {
      question: "How often should a mobile app be updated?",
      answer:
        "Regular updates help maintain security, improve performance, and introduce new features. Update frequency depends on business needs and user feedback.",
    },
    {
      question: "Can you redesign an existing mobile application?",
      answer:
        "Yes! Existing applications can be redesigned to improve usability, modernize the interface, and enhance overall user experience.",
    },
    {
      question: "Can features be added after the app is launched?",
      answer:
        "Absolutely! Mobile applications can be expanded over time with new features, integrations, and functionality as business requirements evolve.",
    },
  ],
};
