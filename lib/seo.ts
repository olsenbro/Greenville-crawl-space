import type { Metadata } from "next";
import type { MetadataRoute } from "next";
import { siteConfig, toCanonicalUrl } from "./site-config";

type GenerateMetadataOptions = {
  title: string;
  description: string;
  /** Full URL or path (e.g. "/crawl-space-encapsulation") */
  canonical: string;
  ogImage?: string;
  ogImageAlt?: string;
  /** When true, bypasses the root layout title template */
  absoluteTitle?: boolean;
};

function resolveCanonical(canonical: string): string {
  const url = canonical.startsWith("http")
    ? canonical
    : `${siteConfig.schemaUrl}${canonical.startsWith("/") ? canonical : `/${canonical}`}`;
  return toCanonicalUrl(url);
}

/** Shared metadata helper for all pages */
export function buildPageMetadata({
  title,
  description,
  canonical,
  ogImage = siteConfig.ogImagePath,
  ogImageAlt = siteConfig.imageAlt.og,
  absoluteTitle = true,
}: GenerateMetadataOptions): Metadata {
  const canonicalUrl = resolveCanonical(canonical);
  const ogImageUrl = ogImage.startsWith("http")
    ? ogImage
    : `${siteConfig.schemaUrl}${ogImage.startsWith("/") ? ogImage : `/${ogImage}`}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      locale: "en_US",
      siteName: siteConfig.name,
      images: [{ url: ogImageUrl, width: 512, height: 512, alt: ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
    robots: { index: true, follow: true },
  };
}

/** @deprecated Use buildPageMetadata */
export function createPageMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  return buildPageMetadata({ title, description, canonical: path, absoluteTitle: false });
}

/** @deprecated Use buildPageMetadata */
export function createServiceMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return buildPageMetadata({ title, description, canonical: path });
}

export function robotsConfig(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.schemaUrl}/sitemap.xml`,
  };
}
