import { homeFaqPreview } from "@/lib/home-faq";
import { homeProcessSteps } from "@/lib/home-process-steps";
import { siteConfig, serviceAreas } from "@/lib/site-config";

export type SchemaObject = Record<string, unknown>;

export const HOME_PAGE_DESCRIPTION =
  "Wet or musty crawl space in Greenville, SC? Connect with local specialists for encapsulation, mold treatment, and moisture control. Get a free estimate.";

const HOME_PAGE_AREA_SERVED = [
  "Greenville SC",
  "Spartanburg SC",
  "Anderson SC",
  "Simpsonville SC",
  "Greer SC",
  "Taylors SC",
  "Easley SC",
  "Mauldin SC",
  "Duncan SC",
  "Fountain Inn SC",
] as const;

function getAreaServedCities(): SchemaObject[] {
  return serviceAreas.map((area) => ({
    "@type": "City",
    name: area,
    containedInPlace: { "@type": "State", name: "South Carolina" },
  }));
}

/** Serialize schema for dangerouslySetInnerHTML in script tags */
export function schemaToScriptHtml(schema: SchemaObject): string {
  return JSON.stringify(schema);
}

export function getLocalBusinessSchema(city?: string, state?: string): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.schemaUrl}/#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    url: siteConfig.schemaUrl,
    foundingDate: String(siteConfig.foundedYear),
    address: {
      "@type": "PostalAddress",
      addressLocality: city ?? siteConfig.address.city,
      addressRegion: state ?? siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: getAreaServedCities(),
    serviceType: [
      "Crawl Space Encapsulation",
      "Vapor Barrier Installation",
      "Crawl Space Repair",
      "Dehumidifier Installation",
      "Mold Treatment",
      "Floor Joist Repair",
    ],
    priceRange: "$$$",
    image: `${siteConfig.schemaUrl}${siteConfig.logoPath}`,
    logo: `${siteConfig.schemaUrl}${siteConfig.logoPath}`,
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.mapEmbedQuery)}`,
    openingHoursSpecification: siteConfig.openingHours.map(({ days, opens, closes }) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...days],
      opens,
      closes,
    })),
  };
}

export function localBusinessSchema(city?: string, state?: string): string {
  return schemaToScriptHtml(getLocalBusinessSchema(city, state));
}

export function getWebSiteSchema(): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.schemaUrl}/#website`,
    url: siteConfig.schemaUrl,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.schemaUrl}/#organization` },
  };
}

export function getWebPageSchema(path: string, title: string, description: string): SchemaObject {
  const url = `${siteConfig.schemaUrl}${path === "/" ? "" : path}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": `${siteConfig.schemaUrl}/#website` },
  };
}

export function getBreadcrumbListSchema(
  items: { name: string; url: string }[],
): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]): string {
  return schemaToScriptHtml(getBreadcrumbListSchema(items));
}

export function getServiceSchema(options: {
  name: string;
  description: string;
  path: string;
}): SchemaObject {
  const url = `${siteConfig.schemaUrl}${options.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: options.name,
    description: options.description,
    url,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.schemaUrl}/#organization`,
      name: siteConfig.name,
      telephone: siteConfig.phone,
      url: siteConfig.schemaUrl,
    },
    areaServed: getAreaServedCities(),
  };
}

export function serviceSchema(name: string, description: string, url: string): string {
  return schemaToScriptHtml({
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      url: siteConfig.schemaUrl,
    },
    areaServed: getAreaServedCities(),
  });
}

export function getFAQPageSchema(questions: { q: string; a: string }[]): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function faqSchema(questions: { q: string; a: string }[]): string {
  return schemaToScriptHtml(getFAQPageSchema(questions));
}

function buildFaqPageSchema(
  items: { question: string; answer: string }[],
  pagePath: string,
): SchemaObject {
  const normalizedPath = pagePath === "/" ? "" : pagePath;
  const url = `${siteConfig.schemaUrl}${normalizedPath}`;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getHomePageLocalBusinessSchema(): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.schemaUrl}/#organization`,
    name: "Greenville Crawl Space Pros",
    url: siteConfig.schemaUrl,
    telephone: siteConfig.phoneHref.replace("tel:", ""),
    email: siteConfig.email,
    description: HOME_PAGE_DESCRIPTION,
    areaServed: [...HOME_PAGE_AREA_SERVED],
    serviceType: "Crawl Space Encapsulation and Repair",
    priceRange: "$$$",
    image: `${siteConfig.schemaUrl}${siteConfig.ogImagePath}`,
  };
}

export function getHomeFaqSchema(): SchemaObject {
  return buildFaqPageSchema(homeFaqPreview.slice(0, 4), "/");
}

export function getHomePageHeadSchemas(): SchemaObject[] {
  return [getHomePageLocalBusinessSchema(), getHomeFaqSchema()];
}

export function getFaqPageSchema(
  items: { question: string; answer: string }[],
  pagePath = "/faq",
): SchemaObject {
  return buildFaqPageSchema(items, pagePath);
}

export function getArticleSchema(options: {
  path: string;
  headline: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
}): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: options.headline,
    description: options.description,
    url: `${siteConfig.schemaUrl}${options.path}`,
    ...(options.datePublished ? { datePublished: options.datePublished } : {}),
    ...(options.dateModified ? { dateModified: options.dateModified } : {}),
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

export function combineSchemas(...schemas: SchemaObject[]): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@graph": schemas.map(({ "@context": _ctx, ...rest }) => {
      void _ctx;
      return rest;
    }),
  };
}

export function getHowToSchema(): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${siteConfig.schemaUrl}/#process`,
    name: "How the Crawl Space Encapsulation Process Works",
    description:
      "The step-by-step crawl space encapsulation process used by licensed specialists serving Greenville and Upstate South Carolina.",
    step: homeProcessSteps.map(({ step, title, description }) => ({
      "@type": "HowToStep",
      position: step,
      name: title,
      text: description,
    })),
  };
}

/** WebSite and HowTo schemas for document head (LocalBusiness is homepage-only) */
export function getSiteHeadSchemas(): SchemaObject[] {
  return [getWebSiteSchema(), getHowToSchema()];
}

/** @deprecated Use getSiteHeadSchemas() for separate script tags */
export function getSiteHeadSchema(): SchemaObject {
  return combineSchemas(...getSiteHeadSchemas());
}
