import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityPageTemplate } from "@/components/areas/CityPageTemplate";
import { cityAreas, getCityBySlug } from "@/lib/areas-served";
import { buildPageMetadata } from "@/lib/seo";

type CityPageProps = {
  params: { city: string };
};

export function generateStaticParams() {
  return cityAreas.map((city) => ({ city: city.slug }));
}

export function generateMetadata({ params }: CityPageProps): Metadata {
  const city = getCityBySlug(params.city);
  if (!city) return {};

  return buildPageMetadata({
    title: city.title,
    description: city.description,
    canonical: `/areas-served/${city.slug}`,
  });
}

export default function CityAreaPage({ params }: CityPageProps) {
  const city = getCityBySlug(params.city);
  if (!city) notFound();

  return <CityPageTemplate city={city} />;
}
