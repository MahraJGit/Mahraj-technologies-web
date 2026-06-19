import type { ServiceDetailData } from "./types";
import { digitalMarketingData } from "./data/digital-marketing";
import { searchEngineOptimizationData } from "./data/search-enginer-optimization";
import { leadGenerationData } from "./data/lead-generation";
import { salesFunnelDevelopmentData } from "./data/sales-funnel-development";

const servicesBySlug: Record<string, ServiceDetailData> = {
  [digitalMarketingData.slug]: digitalMarketingData,
  [searchEngineOptimizationData.slug]: searchEngineOptimizationData,
  [leadGenerationData.slug]: leadGenerationData,
  [salesFunnelDevelopmentData.slug]: salesFunnelDevelopmentData,
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
};
