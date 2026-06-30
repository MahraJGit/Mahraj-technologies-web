import type { ServiceDetailData } from "../types";
import crowdstrikeFalcon from "@/public/CompanySvgs/crowdstrike-falcon.svg";
import paloAltoNetworks from "@/public/CompanySvgs/palo_alto_networks.svg";
import fortinet from "@/public/CompanySvgs/fortinet.svg";
import wireshark from "@/public/CompanySvgs/wireshark.svg";
import splunk from "@/public/CompanySvgs/splunk.svg";
import nessus from "@/public/CompanySvgs/nessus.svg";
import consultingImage from "@/public/dashboard.jpg";
import burpSuite from "@/public/CompanySvgs/burpsuite.svg";
export const cyberSecurityData: ServiceDetailData = {
  slug: "cyber-security",
  title: "Cyber Security",
  seo: {
    metaTitle: "Cyber Security Services | Mahraj Technologies",
    metaDescription:
      "Cyber security from Mahraj Technologies—protect your business, data, and systems from digital attacks with network, cloud, endpoint, and zero trust security solutions.",
    focusKeyword: "cyber security",
  },
  hero: {
    eyebrow: "HOME / SERVICES / CYBER SECURITY",
    titleLight: "Cyber Security",
    titleDark: "",
    description:
      "Worried about growing cyber threats? Cyber security protects your business, data, and systems from digital attacks.",
  },
  serviceTypesHeading: "Types of Cyber Security",
  serviceTypesDescription: "",
  serviceTypes: [
    {
      icon: "server",
      title: "Network Security",
      description:
        "Protects your business network by preventing unauthorized access, cyber threats, and suspicious activity across connected systems and devices.",
    },
    {
      icon: "layers",
      title: "Cloud Security",
      description:
        "Secures cloud environments through advanced protection, access controls, and continuous monitoring to safeguard critical business data.",
    },
    {
      icon: "code",
      title: "Application Security",
      description:
        "Strengthens web and mobile applications by identifying vulnerabilities and protecting software from evolving cyber attacks and exploits.",
    },
    {
      icon: "monitor",
      title: "Endpoint Security",
      description:
        "Protects laptops, desktops, and mobile devices from malware, ransomware, phishing, and unauthorized access across your organization.",
    },
    {
      icon: "shieldCheck",
      title: "Data Security",
      description:
        "Safeguards sensitive business information through encryption, access management, and secure storage to reduce the risk of data breaches.",
    },
    {
      icon: "smartphone",
      title: "Mobile Security",
      description:
        "Secures smartphones and tablets against cyber threats while protecting business applications, communications, and confidential mobile data.",
    },
    {
      icon: "shieldAlert",
      title: "Zero Trust Security",
      description:
        "Verifies every user and device before granting access, minimizing security risks through continuous authentication and strict access controls.",
    },
    {
      icon: "settings",
      title: "Managed Security Services (MSS)",
      description:
        "Provides continuous security monitoring, threat detection, incident response, and expert support to keep your business protected around the clock.",
    },
  ],
  processHeading: "Our Process for Stronger Cyber Protection",
  processDescription: "",
  process: [
    {
      step: "01",
      title: "Security Assessment",
      description:
        "We dig deep into your existing systems, uncover hidden vulnerabilities, and map every potential entry point before a single protection strategy is built.",
    },
    {
      step: "02",
      title: "Risk Analysis",
      description:
        "Our experts don't just list threats, they prioritize them. We assess real security gaps and craft a response plan built around your specific business exposure.",
    },
    {
      step: "03",
      title: "Security Implementation",
      description:
        "We deploy layered security controls, harden your defenses, and configure protections that cover your systems, networks, and sensitive data from every angle.",
    },
    {
      step: "04",
      title: "Continuous Monitoring",
      description:
        "Threats don't sleep and neither does our monitoring. We detect, respond, and refine your security posture around the clock to keep your business one step ahead.",
    },
  ],
  comparison: {
    heading: "Cyber Security vs. Information Security",
    description: "",
    featureColumnLabel: "Features",
    columnDigital: "Cyber Security",
    columnTraditional: "Information Security",
    rows: [
      {
        feature: "Primary Focus",
        digital: "Protects digital systems and networks.",
        traditional: "Protects all forms of information.",
      },
      {
        feature: "Scope",
        digital: "Covers online threats and cyberattacks.",
        traditional: "Covers both digital and physical data.",
      },
      {
        feature: "Main Threat",
        digital: "Hackers, malware, and ransomware.",
        traditional: "Unauthorized access and data breaches.",
      },
      {
        feature: "Key Tools",
        digital: "Firewalls, antivirus, and encryption.",
        traditional: "Policies, access controls, and audits.",
      },
      {
        feature: "Goals",
        digital: "Prevent and respond to cyber threats.",
        traditional: "Ensure data confidentiality and integrity.",
      },
    ],
  },
  toolsHeading: "Cyber Security Tools",
  toolsDescription:
    "Strong cyber security depends on the right tools working together. We use trusted security platforms to detect threats, protect systems, monitor network activity, and respond quickly to potential cyber risks across your business.",
  tools: [
    { icon: crowdstrikeFalcon },
    { icon: paloAltoNetworks },
    { icon: fortinet },
    { icon: wireshark },
    { icon: splunk },
    { icon: nessus },
    { icon: burpSuite },
  ],
  testimonialsHeading: "Testimonials",
  testimonialsDescription:
    "Our results speak through our clients. See how we have helped businesses take control of their cyber security.",
  testimonials: [
    {
      quote:
        "Protecting patient data is non-negotiable in our industry. Their data security and zero trust implementation gave us complete control over who accesses what. Compliance became straightforward. Truly exceptional cyber security expertise.",
      name: "Michael Turner",
      position: "Chief Information Security Officer",
    },
    {
      quote:
        "Their cyber security team identified vulnerabilities we never knew existed. Our network is now fully protected and we sleep better at night.",
      name: "Robert K.",
      position: "IT Manager",
    },
    {
      quote:
        "After a ransomware scare, we turned to their team for help. They assessed our entire system, implemented layered security controls, and set up continuous monitoring. We haven't had a single incident since.",
      name: "David Collins",
      position: "Managing Director",
    },
  ],
  consultingHeading: "Cyber Security Consulting",
  consultingDescription:
    "Your business faces new digital threats every single day, and most go unnoticed until damage is done. Our cyber security consulting cuts through the complexity, evaluates your current exposure, and builds a protection strategy that is practical, proactive, and built specifically around your business risks.",
  consultingImage: consultingImage,
  onlinePresenceHeading: "Businesses We Protect Across the Globe",
  onlinePresenceDescription:
    "From Dubai to Islamabad and across the United States, we safeguard businesses of every size against evolving cyber threats. Our security experts work remotely and on-site, adapting to your environment and ensuring no system, network, or data point is left unprotected, regardless of your location.",
  locationsHeading: "Your Reliable Cyber Security Partner, Near or Far",
  locationsDescription:
    "Cyber threats do not respect borders, and neither do we. We deliver dedicated cyber security solutions to businesses across multiple regions, combining deep technical expertise with a hands-on approach to keep your systems, data, and operations fully defended at all times.",
  locations: [
    {
      title: "Cyber Security Agency in Dubai",
      officeAddress:
        "B2B Office Tower, Office Number 2205, Marasi Drive Street, Business Bay, Dubai, UAE",
      officePhone: "+971 52 785 1523",
    },
    {
      title: "Cyber Security Agency in Islamabad, Pakistan",
      officeAddress:
        "World Trade Center, Office Number 4087, Islamabad, Pakistan",
      officePhone: "+971 52 785 1523",
    },
    {
      title: "Cyber Security Agency in USA",
      officeAddress: "Serving clients remotely across the United States.",
      officePhone: "+971 52 785 1523",
    },
  ],
  faqsHeading: "Cyber Security FAQs",
  faqs: [
    {
      question: "How long does a security assessment take?",
      answer:
        "It depends on your system size and complexity. Most assessments are completed within 3 to 7 business days.",
    },
    {
      question: "Do you work with small businesses or only large enterprises?",
      answer:
        "We work with businesses of all sizes. Every business deserves strong protection, regardless of scale or industry.",
    },
    {
      question:
        "What happens if a cyberattack occurs after your protection is in place?",
      answer:
        "We respond immediately. Our team investigates the breach, contains the threat, and restores security as fast as possible.",
    },
    {
      question: "Do you provide cyber security training for our staff?",
      answer:
        "Yes, we do. We train your team to recognize phishing, handle data safely, and follow strong security practices daily.",
    },
    {
      question: "Do you sign confidentiality agreements before starting work?",
      answer:
        "Absolutely! We sign NDAs before accessing any system or data. Your business information stays fully private and protected.",
    },
    {
      question: "What is your response time in case of an emergency?",
      answer:
        "Our team is available around the clock. Emergency response is initiated within the first hour of reporting an incident.",
    },
  ],
};
