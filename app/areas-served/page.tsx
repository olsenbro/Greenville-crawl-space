import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PhoneLink } from "@/components/PhoneLink";
import { AuthoritySection } from "@/components/AuthorityCitation";
import { ServiceLinksGrid } from "@/components/service/ServiceLinksGrid";
import { hubAreaCards } from "@/lib/areas-served";
import { getAuthorityForPath } from "@/lib/authorities";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildPageMetadata({
  title: "Crawl Space Encapsulation Near Me | Upstate SC Service Area",
  description:
    "Crawl space encapsulation, vapor barriers, and repair throughout Upstate South Carolina — Greenville, Simpsonville, Greer, Spartanburg, Anderson, Mauldin, and Taylors. Free inspections.",
  canonical: "/areas-served",
});

export default function AreasServedPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Areas Served" }]} path="/areas-served" />

      <section className="relative overflow-hidden bg-primary text-white">
        <div className="container-narrow section-padding">
          <div className="mx-auto max-w-3xl text-center">
            <p className="label-caps mb-4 text-accent-light">Service Areas</p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-balance sm:text-5xl">
              Crawl Space Services Throughout Upstate South Carolina
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/90">
              Upstate SC presents a perfect storm for crawl space problems: some of the highest
              humidity in the nation, red clay soil that holds moisture against foundations, older
              homes built with open-vent crawl spaces, and rapid suburban growth putting new
              construction on disturbed, poorly draining sites. We encapsulate, repair, and
              dehumidify crawl spaces across Greenville County, Spartanburg County, Anderson County,
              and surrounding communities.
            </p>
            <PhoneLink className="btn-primary mt-8 inline-flex items-center gap-2 px-8 py-4 text-base">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {siteConfig.phone}
            </PhoneLink>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral">
        <div className="container-narrow">
          <h2 className="text-center font-display text-3xl font-semibold sm:text-4xl">
            Cities We Serve
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted">
            Select your city for local crawl space services, pricing, and scheduling information.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hubAreaCards.map((area) =>
              area.hasPage && area.slug ? (
                <Link
                  key={area.slug}
                  href={`/areas-served/${area.slug}`}
                  className="group rounded-xl border border-primary/10 bg-white p-6 shadow-sm transition-all hover:border-primary hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-semibold text-primary group-hover:text-primary-dark">
                        {area.name}, {area.state}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{area.description}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                        View local services
                        <ArrowRight
                          className="h-4 w-4 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              ) : (
                <article
                  key={area.name}
                  className="rounded-xl border border-primary/10 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-primary">
                        {area.name}, {area.state}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{area.description}</p>
                      <Link
                        href="/contact"
                        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                      >
                        Request service
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <AuthoritySection source={getAuthorityForPath("/areas-served")} />

      <section className="bg-white section-padding">
        <div className="container-narrow mx-auto max-w-3xl">
          <ServiceLinksGrid title="Crawl Space Services Available" />
          <p className="mt-6 text-center text-muted">
            <Link href="/contact" className="font-semibold text-primary hover:underline">
              Schedule a free inspection in your area →
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-neutral section-padding">
        <div className="container-narrow mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold">Counties &amp; Regions Covered</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Greenville County",
              "Spartanburg County",
              "Anderson County",
              "Pickens County",
              "Laurens County",
            ].map((region) => (
              <span
                key={region}
                className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white"
              >
                {region}
              </span>
            ))}
          </div>
          <p className="mt-8 text-lg text-muted">
            Not sure if we serve your area? Call{" "}
            <PhoneLink className="font-semibold text-primary hover:underline" /> — we&apos;ll confirm
            coverage and schedule your free inspection.
          </p>
        </div>
      </section>

      <section className="bg-accent section-padding text-white">
        <div className="container-narrow mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Schedule Service in Your Area
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Free crawl space inspections throughout Upstate SC. Most inspections scheduled within the
            same week.
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
              Request Inspection Online
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
