import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { AuthoritySection } from "@/components/AuthorityCitation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PhoneLink } from "@/components/PhoneLink";
import { SchemaScript } from "@/components/SchemaScript";
import { SiteLogo } from "@/components/SiteLogo";
import type { CityArea } from "@/lib/areas-served";
import { getNeighborHref } from "@/lib/areas-served";
import { getAuthoritiesForPath } from "@/lib/authorities";
import { getLocalBusinessSchema } from "@/lib/schema";
import { FaqOutline } from "@/components/seo/PageOutlineSections";
import { LocationLinksOutline, RelatedGuidesLinks } from "@/components/seo/InternalLinksSections";
import { PageQuickAnswer } from "@/components/seo/PageQuickAnswer";
import { CityGeographySection } from "@/components/areas/CityGeographySection";
import { serviceLinks, siteConfig } from "@/lib/site-config";

type CityPageTemplateProps = {
  city: CityArea;
};

export function CityPageTemplate({ city }: CityPageTemplateProps) {
  const authoritySources = getAuthoritiesForPath(`/areas-served/${city.slug}`);

  return (
    <>
      <SchemaScript schema={getLocalBusinessSchema(city.name, city.state)} />

      <Breadcrumbs
        items={[
          { label: "Areas Served", href: "/areas-served" },
          { label: city.name },
        ]}
        path={`/areas-served/${city.slug}`}
      />

      <section className="relative overflow-hidden bg-primary text-white">
        <div className="container-narrow section-padding">
          <div className="mx-auto max-w-3xl">
            <p className="label-caps mb-4 text-accent-light">Areas Served</p>
            <SiteLogo size={48} className="mb-5 rounded-lg" />
            <h1 className="font-display text-4xl font-semibold leading-tight text-balance sm:text-5xl">
              {city.h1}
            </h1>
            <PageQuickAnswer>{city.quickAnswer}</PageQuickAnswer>
            {city.intro.map((paragraph) => (
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
            What Crawl Space Problems Are Common in {city.name}, {city.state}?
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
            {city.body.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <CityGeographySection city={city} />

      <AuthoritySection sources={authoritySources} />

      <section className="bg-neutral section-padding">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            What Crawl Space Services Are Available in {city.name}?
          </h2>
          <p className="mt-4 text-lg text-muted">
            Connect with local specialists for these crawl space services throughout {city.name} and
            surrounding Upstate communities:
          </p>
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

      <section className="bg-white section-padding">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            How Much Does Crawl Space Encapsulation Cost in {city.name}, {city.state}?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Most full crawl space encapsulation projects in {city.name} run $5,000–$9,000 including a
            20-mil vapor barrier, vent sealing, wall insulation, and commercial dehumidifier. Vapor
            barrier-only installation runs $1,500–$3,500. Homes requiring mold treatment or joist
            repair before encapsulation typically fall in the $6,000–$15,000 range.{" "}
            <Link
              href="/crawl-space-encapsulation-cost"
              className="font-semibold text-primary hover:underline"
            >
              See our full 2025 Upstate SC price guide →
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-primary/5 section-padding">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-semibold">
            Which Nearby Cities Do We Serve From {city.name}?
          </h2>
          <p className="mt-4 text-lg text-muted">
            Also serving homeowners near {city.name}.{" "}
            <Link href="/areas-served" className="font-semibold text-primary hover:underline">
              View all Upstate SC service areas
            </Link>
            {" · "}
            <Link href="/" className="font-semibold text-primary hover:underline">
              Greenville crawl space home
            </Link>
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {city.neighbors.map((neighbor) => {
              const href = getNeighborHref(neighbor);
              return href ? (
                <Link
                  key={neighbor}
                  href={href}
                  className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
                >
                  {neighbor}
                </Link>
              ) : (
                <span
                  key={neighbor}
                  className="rounded-full bg-primary/20 px-5 py-2.5 text-sm font-medium text-primary"
                >
                  {neighbor}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      <RelatedGuidesLinks
        excludeHref={`/areas-served/${city.slug}`}
        className="bg-neutral section-padding border-t border-primary/10"
      />

      <LocationLinksOutline
        excludeCitySlug={city.slug}
        className="bg-white section-padding border-t border-primary/10"
      />

      <FaqOutline
        city={`${city.name}, ${city.state}`}
        className="bg-white section-padding border-t border-primary/10"
      />

      <section className="bg-accent section-padding text-white">
        <div className="container-narrow mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            How Do You Request a Free Crawl Space Estimate in {city.name}?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Connect with licensed crawl space specialists serving {city.name}, {city.stateName} and
            all of Upstate South Carolina.
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
