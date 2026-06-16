import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CORE_SERVICE_SLUGS,
  isCoreServiceSlug,
  servicePageModules,
} from "@/lib/service-pages";

type ServicePageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return CORE_SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  if (!isCoreServiceSlug(params.slug)) {
    return {};
  }

  const pageModule = await servicePageModules[params.slug]();
  return pageModule.metadata;
}

export default async function ServicePage({ params }: ServicePageProps) {
  if (!isCoreServiceSlug(params.slug)) {
    notFound();
  }

  const pageModule = await servicePageModules[params.slug]();
  const Content = pageModule.default;
  return <Content />;
}
