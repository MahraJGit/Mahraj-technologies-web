import type { StaticImageData } from "next/image";
import type { ServiceIconName } from "./icons";

export interface ServiceSeo {
  metaTitle: string;
  metaDescription: string;
  focusKeyword?: string;
}

export interface ServiceHero {
  eyebrow?: string;
  titleLight: string;
  titleDark?: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export interface ServiceTypeItem {
  icon: ServiceIconName;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ComparisonRow {
  feature: string;
  digital: string;
  traditional: string;
}

export interface ServiceComparison {
  heading?: string;
  description?: string;
  featureColumnLabel?: string;
  columnDigital: string;
  columnTraditional: string;
  rows: ComparisonRow[];
}

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface ServiceCaseStudy {
  id: string;
  title: string;
  overview: string;
  results: CaseStudyMetric[];
}

export interface ServiceTool {
  icon: StaticImageData | string;
}

export interface ServiceTestimonial {
  quote: string;
  name: string;
  position: string;
}

export interface ServiceLocation {
  title: string;
  officeAddress: string;
  officePhone: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServicePageCard {
  id: string;
  code: string;
  title: string;
  description: string;
  features: string[];
  icon: ServiceIconName;
}

export interface ServiceDetailData {
  slug: string;
  title: string;
  seo: ServiceSeo;
  hero: ServiceHero;
  serviceTypes?: ServiceTypeItem[];
  serviceTypesHeading?: string;
  serviceTypesDescription?: string;
  process?: ProcessStep[];
  processHeading?: string;
  processDescription?: string;
  comparison?: ServiceComparison;
  caseStudies?: ServiceCaseStudy[];
  caseStudiesHeading?: string;
  tools?: ServiceTool[];
  toolsHeading?: string;
  toolsDescription?: string;
  testimonials?: ServiceTestimonial[];
  testimonialsHeading?: string;
  testimonialsDescription?: string;
  consultingHeading?: string;
  consultingDescription?: string;
  onlinePresenceHeading?: string;
  onlinePresenceDescription?: string;
  consultingImage?: StaticImageData | string;
  locations?: ServiceLocation[];
  locationsHeading?: string;
  locationsDescription?: string;
  faqs?: ServiceFaq[];
  faqsHeading?: string;
}
