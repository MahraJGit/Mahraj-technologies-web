import type { ServiceDetailData } from "../types";
import figma from "@/public/CompanySvgs/figma.svg";
import sketch from "@/public/CompanySvgs/sketch.svg";
import balsamiq from "@/public/CompanySvgs/balsamiq.svg";
import invision from "@/public/CompanySvgs/invision.svg";
import hotjar from "@/public/CompanySvgs/hotjar.svg";
import maze from "@/public/CompanySvgs/maze.svg";
import consultingImage from "@/public/dashboard.jpg";

export const uiUxDesignData: ServiceDetailData = {
  slug: "ui-ux-design",
  title: "UI UX Design",
  seo: {
    metaTitle: "UI UX Design Services | Mahraj Technologies",
    metaDescription:
      "UI UX design services from Mahraj Technologies—create smoother, more engaging digital experiences that improve usability, strengthen engagement, and keep users coming back.",
    focusKeyword: "UI UX design",
  },
  hero: {
    eyebrow: "HOME / SERVICES / UI UX DESIGN",
    titleLight: "UI UX Design",
    titleDark: "",
    description:
      "Is your website losing visitors too quickly? UI UX design creates smoother and more engaging experiences that keep users coming back.",
  },
  serviceTypesHeading: "Types of UI UX Design",
  serviceTypesDescription: "",
  serviceTypes: [
    {
      icon: "smartphone",
      title: "Mobile App Design",
      description:
        "Designed for seamless mobile experiences, focusing on usability, navigation, engagement, and platform specific interactions.",
    },
    {
      icon: "monitor",
      title: "Web Application Design",
      description:
        "Built for functionality and efficiency, ensuring users can complete tasks smoothly across web platforms.",
    },
    {
      icon: "barChart3",
      title: "Dashboard Design",
      description:
        "Transforms complex data into clear visuals, helping users monitor performance and make informed decisions.",
    },
    {
      icon: "target",
      title: "Landing Page Design",
      description:
        "Created to drive specific actions through focused layouts, persuasive messaging, and streamlined user journeys.",
    },
    {
      icon: "layout",
      title: "Website Design",
      description:
        "Combines visual appeal with usability, creating engaging experiences that support business and user goals.",
    },
    {
      icon: "shoppingCart",
      title: "E-commerce UI Design",
      description:
        "Optimized for product discovery, trust building, and smooth purchasing experiences that encourage conversions.",
    },
    {
      icon: "settings",
      title: "Enterprise Software Design",
      description:
        "Designed for complex workflows, improving productivity through organized interfaces and efficient user interactions.",
    },
    {
      icon: "layers",
      title: "Responsive Design",
      description:
        "Ensures consistent experiences across desktops, tablets, and smartphones without compromising usability or performance.",
    },
  ],
  processHeading: "Our 4 Steps UI UX Design Process",
  processDescription: "",
  process: [
    {
      step: "01",
      title: "Discovery",
      description:
        "We define user needs, map journeys, and gather insights to uncover audience behaviors and design opportunities.",
    },
    {
      step: "02",
      title: "User Journey Mapping",
      description:
        "We analyze user interactions, identify friction points, and optimize key touchpoints for a smoother experience.",
    },
    {
      step: "03",
      title: "Wireframing",
      description:
        "We create structured blueprints that organize content, improve navigation flow, and support user focused experiences.",
    },
    {
      step: "04",
      title: "UI Design",
      description:
        "We craft visually engaging interfaces that strengthen brand identity while improving usability and interaction quality.",
    },
  ],
  comparison: {
    heading: "UI Design vs. UX Design",
    description: "",
    columnDigital: "UI Design",
    columnTraditional: "UX Design",
    rows: [
      {
        feature: "Primary Focus",
        digital: "Focuses on visual appearance and interface design.",
        traditional: "Focuses on overall user experience and usability.",
      },
      {
        feature: "Goal",
        digital: "Creates attractive and engaging digital interfaces.",
        traditional: "Improves user satisfaction and interaction flow.",
      },
      {
        feature: "Key Elements",
        digital: "Uses colors, typography, icons, and layouts.",
        traditional: "Uses research, journeys, and user behavior insights.",
      },
      {
        feature: "User Interaction",
        digital: "Defines how the interface looks and feels.",
        traditional: "Defines how users navigate and complete tasks.",
      },
      {
        feature: "Success Measure",
        digital: "Evaluated through visual consistency and appeal.",
        traditional: "Evaluated through usability, efficiency, and satisfaction.",
      },
    ],
  },
  toolsHeading: "UI UX Design Tools",
  toolsDescription:
    "Good design doesn't happen by accident, it happens with the right tools in the right hands. We work with industry leading platforms that let us move fast, collaborate clearly, and validate every decision before it reaches your users.",
  tools: [
    { icon: figma },
    { icon: sketch },
    { icon: balsamiq },
    { icon: invision },
    { icon: hotjar },
    { icon: maze },
  ],
  testimonialsHeading: "Testimonials",
  testimonialsDescription: "",
  testimonials: [
    {
      quote:
        "We'd invested heavily in features over the years, but usage remained lower than expected. Mahraj Technologies helped us understand the product from our users' perspective. The new experience feels much easier to use, and engagement has improved across important areas of the platform.",
      name: "David Reynolds",
      position: "SaaS Founder",
    },
    {
      quote:
        "Honestly, I wasn't fully convinced at first because previous redesign projects delivered very little. This time was different. The interface became cleaner, navigation felt natural, and new users started finding their way around without needing extra help.",
      name: "Michael Anderson",
      position: "Product Director",
    },
    {
      quote:
        "What impressed me most wasn't the design itself, but the results it delivered. Prospects now move through our platform more confidently, interactions feel more meaningful, and the overall experience better reflects the quality of our brand.",
      name: "Victoria Hughes",
      position: "Business Development Director",
    },
  ],
  consultingHeading: "UI/UX Design Consulting",
  consultingDescription:
    "Our UI/UX design consulting services help align user satisfaction with business growth. We evaluate your existing applications, identify friction points affecting engagement, and provide strategic design recommendations. Whether you need a product audit or guidance for a redesign, we deliver the insights needed to create effective, user focused digital experiences that support long term success.",
  consultingImage: consultingImage,
  onlinePresenceHeading: "Our Presence Across Global Industries",
  onlinePresenceDescription:
    "Businesses across different industries trust our UI/UX design expertise to create better digital experiences. Serving clients in Dubai, Islamabad, and the USA, we design user focused interfaces that improve usability, strengthen engagement, and support long term business growth while meeting the unique needs of diverse audiences and markets.",
  locationsHeading: "UI UX Design Experts Near You",
  locationsDescription:
    "Looking for experienced UI/UX design experts? You don't need to look far. We help businesses create user friendly digital experiences that improve engagement, strengthen brand perception, and support business growth. From strategy to design, we're here to deliver practical solutions that help your website or application perform at its best.",
  locations: [
    {
      title: "UI UX Design Agency in Dubai",
      officeAddress:
        "B2B Office Tower, Office Number 2205, Marasi Drive Street, Business Bay, Dubai, UAE",
      officePhone: "+971 52 785 1523",
    },
    {
      title: "UI UX Design Agency in Islamabad, Pakistan",
      officeAddress:
        "World Trade Center, Office Number 4087, Islamabad, Pakistan",
      officePhone: "+971 52 785 1523",
    },
    {
      title: "UI UX Design Agency in USA (Remote-Based)",
      officeAddress: "Serving clients remotely across the United States.",
      officePhone: "+971 52 785 1523",
    },
  ],
  faqs: [
    {
      question: "How long does a typical UI/UX design project take?",
      answer:
        "Project timelines depend on complexity. Simple websites may take 2–4 weeks, while larger applications or SaaS platforms can take 8–12 weeks.",
    },
    {
      question: "Do you provide the code for the designs you create?",
      answer:
        "We deliver developer ready design files through tools like Figma. If needed, our development team can also build the final product.",
    },
    {
      question: "Can you redesign an existing website or mobile application?",
      answer:
        "Yes! We review your current platform, identify usability issues, and redesign the experience to improve performance and user satisfaction.",
    },
    {
      question: "Why should my business invest in custom UI/UX design?",
      answer:
        "Custom UI/UX design improves usability, increases conversions, reduces frustration, and helps users engage with your product more effectively.",
    },
    {
      question: "How do you ensure the design matches our brand?",
      answer:
        "We align every design with your brand identity, visual style, audience expectations, and business goals to create a consistent user experience.",
    },
  ],
};
