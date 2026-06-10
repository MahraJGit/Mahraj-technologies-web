import type { ServiceDetailData, ServiceFaq } from "./types";

const BASE_URL = "https://mahrajtechnologies.com";

export function getServiceCanonical(slug: string): string {
  return `${BASE_URL}/services/${slug}`;
}

export function buildServiceMetadata(service: ServiceDetailData) {
  const canonical = getServiceCanonical(service.slug);

  return {
    title: service.seo.metaTitle,
    description: service.seo.metaDescription,
    keywords: service.seo.focusKeyword,
    alternates: { canonical },
    publisher: "Mahraj Technologies",
    openGraph: {
      title: service.seo.metaTitle,
      description: service.seo.metaDescription,
      url: canonical,
      type: "website" as const,
    },
  };
}

export function buildServiceSchema(service: ServiceDetailData) {
  const canonical = getServiceCanonical(service.slug);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.seo.metaDescription,
    url: canonical,
    provider: {
      "@type": "Organization",
      name: "Mahraj Technologies",
      url: BASE_URL,
    },
    areaServed: ["Dubai", "Islamabad", "United States"],
    serviceType: service.title,
  };
}

export function buildFaqSchema(faqs: ServiceFaq[]) {
  if (!faqs?.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(service: ServiceDetailData) {
  const canonical = getServiceCanonical(service.slug);

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${BASE_URL}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: canonical,
      },
    ],
  };
}
