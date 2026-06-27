import type { ServiceDetailData } from "./types";
import { digitalMarketingData } from "./data/digital-marketing";
import { searchEngineOptimizationData } from "./data/search-enginer-optimization";
import { leadGenerationData } from "./data/lead-generation";
import { salesFunnelDevelopmentData } from "./data/sales-funnel-development";
import { webDevelopmentData } from "./data/web-development";
import { mobileAppDevelopmentData } from "./data/mobile-app-development";
import { uiUxDesignData } from "./data/ui-ux-design";
import { graphicDesignData } from "./data/graphic-design";
import { softwareQualityAssuranceData } from "./data/software-quality-assurance";

const servicesBySlug: Record<string, ServiceDetailData> = {
  [digitalMarketingData.slug]: digitalMarketingData,
  [searchEngineOptimizationData.slug]: searchEngineOptimizationData,
  [leadGenerationData.slug]: leadGenerationData,
  [salesFunnelDevelopmentData.slug]: salesFunnelDevelopmentData,
  [webDevelopmentData.slug]: webDevelopmentData,
  [mobileAppDevelopmentData.slug]: mobileAppDevelopmentData,
  [uiUxDesignData.slug]: uiUxDesignData,
  [graphicDesignData.slug]: graphicDesignData,
  [softwareQualityAssuranceData.slug]: softwareQualityAssuranceData,
};

export const allServices: ServiceDetailData[] = Object.values(servicesBySlug);

export function getServiceBySlug(slug: string): ServiceDetailData | undefined {
  return servicesBySlug[slug];
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(servicesBySlug);
}

/** Maps ServiceCards `code` values to detail page slugs when a page exists */
export const serviceCodeToSlug: Record<string, string> = {
  DIG_MKT: digitalMarketingData.slug,
  SEO_OPT: searchEngineOptimizationData.slug,
  LEAD_GEN: leadGenerationData.slug,
  FUNNEL_DEV: salesFunnelDevelopmentData.slug,
  WEB_DEV: webDevelopmentData.slug,
  MOB_DEV: mobileAppDevelopmentData.slug,
  UI_UX: uiUxDesignData.slug,
  GRAPHICS: graphicDesignData.slug,
  QA_TEST: softwareQualityAssuranceData.slug,
};
