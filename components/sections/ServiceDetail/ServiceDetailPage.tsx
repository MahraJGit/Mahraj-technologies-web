import HeroSection from "./sections/HeroSection";
import ServiceTypesSection from "./sections/ServiceTypesSection";
import ProcessSection from "./sections/ProcessSection";
import ComparisonSection from "./sections/ComparisonSection";
import CaseStudiesSection from "./sections/CaseStudiesSection";
import ToolsSection from "./sections/ToolsSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import LocationsSection from "./sections/LocationsSection";
import FAQSection from "./sections/FAQSection";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
} from "@/lib/services/seo";
import type { ServiceDetailData } from "@/lib/services/types";
import ConsultingSection from "./sections/ConsultingSection";

interface ServiceDetailPageProps {
  service: ServiceDetailData;
}

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const serviceSchema = buildServiceSchema(service);
  const breadcrumbSchema = buildBreadcrumbSchema(service);
  const faqSchema = service.faqs?.length ? buildFaqSchema(service.faqs) : null;

  return (
    <main className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <HeroSection serviceTitle={service.title} hero={service.hero} />

      {service.serviceTypes && service.serviceTypes.length > 0 && (
        <ServiceTypesSection
          heading={service.serviceTypesHeading}
          description={service.serviceTypesDescription}
          items={service.serviceTypes}
        />
      )}

      {service.process && service.process.length > 0 && (
        <ProcessSection
          heading={service.processHeading}
          description={service.processDescription}
          steps={service.process}
        />
      )}

      {service.comparison && service.comparison.rows?.length > 0 && (
        <ComparisonSection comparison={service.comparison} />
      )}

      {/* {service.caseStudies && service.caseStudies.length > 0 && (
        <CaseStudiesSection
          heading={service.caseStudiesHeading}
          caseStudies={service.caseStudies}
        />
      )} */}

      {service.tools && service.tools.length > 0 && (
        <ToolsSection
          heading={service.toolsHeading}
          description={service.toolsDescription}
          tools={service.tools}
        />
      )}

      {service.testimonials && service.testimonials.length > 0 && (
        <TestimonialsSection
          heading={service.testimonialsHeading}
          description={service.testimonialsDescription}
          testimonials={service.testimonials}
        />
      )}

      {service.consultingHeading && service.consultingDescription && service.consultingImage && (
        <ConsultingSection
          consultingHeading={service.consultingHeading}
          consultingDescription={service.consultingDescription}
          consultingImage={service.consultingImage as string}
          onlinePresenceHeading={service.onlinePresenceHeading}
          onlinePresenceDescription={service.onlinePresenceDescription}
        />
      )}

      {service.locations && service.locations.length > 0 && (
        <LocationsSection
          heading={service.locationsHeading}
          description={service.locationsDescription}
          locations={service.locations}
        />
      )}  

      {service.faqs && service.faqs.length > 0 && (
        <FAQSection faqs={service.faqs} />
      )}
    </main>
  );
}
