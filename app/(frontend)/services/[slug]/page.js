import { notFound } from "next/navigation";
import ServiceDetailPage from "@/components/sections/ServiceDetail/ServiceDetailPage";
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/services/registry";
import { buildServiceMetadata } from "@/lib/services/seo";

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found | Mahraj Technologies" };
  }

  return buildServiceMetadata(service);
}

export default async function ServiceDetailRoute({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
