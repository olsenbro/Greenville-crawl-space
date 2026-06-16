import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { AuthoritySection } from "@/components/AuthorityCitation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PhoneLink } from "@/components/PhoneLink";
import { SchemaScript } from "@/components/SchemaScript";
import { SiteLogo } from "@/components/SiteLogo";
import type { NeighborhoodArea } from "@/lib/neighborhood-areas";
import { getNeighborhoodPath, getNeighborhoodsByCity } from "@/lib/neighborhood-areas";
import { getAuthoritiesForPath } from "@/lib/authorities";
import { getLocalBusinessSchema } from "@/lib/schema";
import { FaqOutline } from "@/components/seo/PageOutlineSections";
import { RelatedGuidesLinks } from "@/components/seo/InternalLinksSections";
import { PageQuickAnswer } from "@/components/seo/PageQuickAnswer";
import { serviceLinks, siteConfig } from "@/lib/site-config";

type NeighborhoodPageTemplateProps = {
  area: NeighborhoodArea;
};

export function NeighborhoodPageTemplate({ area }: NeighborhoodPageTemplateProps) {
  const pagePath = getNeighborhoodPath(area.slug);
  const authoritySources = getAuthoritiesForPath(pagePath);
  const siblingNeighborhoods = getNeighborhoodsByCity(area.citySlug).filter(
    (n) => n.slug !== area.slug,
  );

  const faqItems = [
    {
      question: `How much does crawl space encapsulation cost in ${area.name}, ${area.cityName}?`,
      answer: `Most full encapsulation projects in ${area.name} and surrounding ${area.cityName} ZIP codes (${area.zipCodes.join(", ")}) run $5,000–$9,000 including a 20-mil vapor barrier, vent sealing, and dehumidifier. Vapor barrier-only work runs $1,500–$3,500.`,
    },
    {
      question: `Which ZIP codes cover ${area.name}?`,
      answer: `${area.name} is served within ${area.cityName}, SC ZIP codes ${area.zipCodes.join(", ")}. A free estimate confirms coverage for your specific address near ${area.nearbyLandmark}.`,
    },
    {
      question: `What crawl space problems are common near ${area.nearbyLandmark}?`,
      answer: `Homes in ${area.name} commonly face open-vent humidity, failed vapor barriers, mold on joists, and moisture from Upstate red clay — especially in older subdivisions near ${area.secondaryLandmark}. Encapsulation seals the space and maintains 45–55% humidity year-round.`,
    },
  ];

  return (
    <>
      <SchemaScript schema={getLocalBusinessSchema(area.cityName, area.state)} />

      <Breadcrumbs
        items={[
          { label: "Areas Served", href: "/areas-served" },
          { label: area.cityName, href: `/areas-served/${area.citySlug}` },
          { label: area.name },
        ]}
        path={pagePath}
      />

      <section className="relative overflow-hidden bg-primary text-white">
        <div className="container-narrow section-padding">
          <div className="mx-auto max-w-3xl">
            <p className="label-caps mb-4 text-accent-light">
              {area.cityName}, {area.state} · Neighborhood
            </p>
            <SiteLogo size={48} className="mb-5 rounded-lg" />
            <h1 className="font-display text-4xl font-semibold leading-tight text-balance sm:text-5xl">
              {area.h1}
            </h1>
            <PageQuickAnswer>{area.quickAnswer}</PageQuickAnswer>
            {area.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="mt-5 text-lg leading-relaxed text-white/90">
                {paragraph}
              </p>
            ))}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <PhoneLink className="btn-primary justify-center px-8 py-4 text-base">
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {siteConfig.phone}
              </PhoneLink>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white hover:text-primary"
              >
                {siteConfig.cta.primary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            What Crawl Space Problems Are Common in {area.name}?
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
            {area.body.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-primary/10 bg-neutral section-padding">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Which ZIP Codes and Landmarks Are Near {area.name}?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {area.name} is part of {area.cityName}, {area.stateName}. Crawl space specialists serve
            homeowners throughout these ZIP codes and reference points:
          </p>
          <div className="mt-8 space-y-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-primary">ZIP Codes Served</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {area.zipCodes.map((zip) => (
                  <li
                    key={zip}
                    className="rounded-full bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm"
                  >
                    {zip}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-primary">Nearby Landmarks</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {[area.nearbyLandmark, area.secondaryLandmark, ...area.landmarks.slice(0, 3)].filter(
                  (item, i, arr) => arr.indexOf(item) === i,
                ).map((landmark) => (
                  <li
                    key={landmark}
                    className="rounded-full bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm"
                  >
                    {landmark}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 text-muted">
            <Link
              href={`/areas-served/${area.citySlug}`}
              className="font-semibold text-primary hover:underline"
            >
              View all {area.cityName} crawl space service areas →
            </Link>
          </p>
        </div>
      </section>

      <AuthoritySection sources={authoritySources} />

      <section className="bg-neutral section-padding">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            What Crawl Space Services Are Available in {area.name}?
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {serviceLinks.map(({ href, label }) => (
              <li key={href}>
                <h3 className="font-display text-base font-semibold text-primary">
                  <Link
                    href={href}
                    className="flex items-center gap-2 rounded-lg bg-white px-5 py-4 text-sm shadow-sm transition-colors hover:bg-primary hover:text-white"
                  >
                    {label}
                    <ArrowRight className="ml-auto h-4 w-4" aria-hidden="true" />
                  </Link>
                </h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {siblingNeighborhoods.length > 0 ? (
        <section className="bg-white section-padding">
          <div className="container-narrow mx-auto max-w-3xl">
            <h2 className="font-display text-2xl font-semibold">
              Which Other {area.cityName} Neighborhoods Do We Serve?
            </h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {siblingNeighborhoods.map((neighbor) => (
                <li key={neighbor.slug}>
                  <Link
                    href={getNeighborhoodPath(neighbor.slug)}
                    className="rounded-full bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
                  >
                    {neighbor.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <RelatedGuidesLinks className="bg-neutral section-padding border-t border-primary/10" />

      <FaqOutline
        city={`${area.name}, ${area.cityName}`}
        items={faqItems}
        schemaPath={pagePath}
        heading={`What Do ${area.name} Homeowners Ask About Crawl Spaces?`}
        className="bg-white section-padding border-t border-primary/10"
      />

      <section className="bg-accent section-padding text-white">
        <div className="container-narrow mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            How Do You Request a Free Estimate in {area.name}?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Connect with licensed crawl space specialists serving {area.name}, {area.cityName},{" "}
            {area.state} — including ZIP {area.zipCodes[0]} and surrounding areas.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <PhoneLink className="inline-flex items-center gap-3 rounded-lg bg-primary px-10 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-primary-dark">
              <Phone className="h-6 w-6" aria-hidden="true" />
              Call {siteConfig.phone}
            </PhoneLink>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-base font-semibold text-white underline-offset-4 hover:underline"
            >
              {siteConfig.cta.online}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
