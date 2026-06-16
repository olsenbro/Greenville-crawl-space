import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NeighborhoodPageTemplate } from "@/components/areas/NeighborhoodPageTemplate";
import { getNeighborhoodBySlug, getNeighborhoodPath, neighborhoodAreas } from "@/lib/neighborhood-areas";
import { buildPageMetadata } from "@/lib/seo";

type NeighborhoodPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return neighborhoodAreas.map((area) => ({ slug: area.slug }));
}

export function generateMetadata({ params }: NeighborhoodPageProps): Metadata {
  const area = getNeighborhoodBySlug(params.slug);
  if (!area) return {};

  return buildPageMetadata({
    title: area.title,
    description: area.description,
    canonical: getNeighborhoodPath(area.slug),
  });
}

export default function NeighborhoodAreaPage({ params }: NeighborhoodPageProps) {
  const area = getNeighborhoodBySlug(params.slug);
  if (!area) notFound();

  return <NeighborhoodPageTemplate area={area} />;
}
