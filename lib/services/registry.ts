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
import { virtualAssistanceData } from "./data/virtual-assistance";
import { cyberSecurityData } from "./data/cyber-security";
import { artificialIntelligenceData } from "./data/artificial-intelligence";
import { softwareDevelopmentData } from "./data/software-development";
import { itSystemAuditData } from "./data/it-system-audit";
import { automotiveDigitalSolutionsData } from "./data/automotive-digital-solutions";
import { bankFintechData } from "./data/bank-fintech";

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
  [virtualAssistanceData.slug]: virtualAssistanceData,
  [cyberSecurityData.slug]: cyberSecurityData,
  [artificialIntelligenceData.slug]: artificialIntelligenceData,
  [softwareDevelopmentData.slug]: softwareDevelopmentData,
  [itSystemAuditData.slug]: itSystemAuditData,
  [automotiveDigitalSolutionsData.slug]: automotiveDigitalSolutionsData,
  [bankFintechData.slug]: bankFintechData,
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
  VIRT_AST: virtualAssistanceData.slug,
  CYB_SEC: cyberSecurityData.slug,
  ART_INT: artificialIntelligenceData.slug,
  SFT_DEV: softwareDevelopmentData.slug,
  IT_AUD: itSystemAuditData.slug,
  AUTO_DIG: automotiveDigitalSolutionsData.slug,
  BNK_FNT: bankFintechData.slug,
};
