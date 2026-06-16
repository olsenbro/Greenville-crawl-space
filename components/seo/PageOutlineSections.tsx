import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SchemaScript } from "@/components/SchemaScript";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { SERVICE_PAGES } from "@/components/service/ServiceInternalLinks";
import { getFaqPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

type OutlineProps = {
  city?: string;
  className?: string;
};

type ServicesOutlineProps = OutlineProps & {
  excludeSlug?: string;
  heading?: string;
};

export function ServicesOutline({
  city = "Greenville, SC",
  excludeSlug,
  heading,
  className = "bg-neutral section-padding",
}: ServicesOutlineProps) {
  const services = excludeSlug
    ? SERVICE_PAGES.filter((page) => page.slug !== excludeSlug)
    : SERVICE_PAGES;

  return (
    <section className={className} aria-labelledby="services-outline-heading">
      <div className="container-narrow mx-auto max-w-3xl">
        <h2
          id="services-outline-heading"
          className="font-display text-3xl font-semibold text-primary sm:text-4xl"
        >
          {heading ?? `What Crawl Space Services Are Available in ${city}?`}
        </h2>
        <p className="mt-4 text-lg text-muted">
          Connect with local specialists for encapsulation, moisture control, mold treatment, and
          structural repair throughout {city} and the Upstate.{" "}
          <Link href="/areas-served" className="font-semibold text-primary hover:underline">
            View all service areas
          </Link>
          {" · "}
          <Link href="/" className="font-semibold text-primary hover:underline">
            Greenville home
          </Link>
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {services.map(({ href, label }) => (
            <li key={href}>
              <h3 className="font-display text-lg font-semibold text-primary">
                <Link
                  href={href}
                  className="flex items-center gap-2 rounded-lg bg-white px-5 py-4 shadow-sm transition-colors hover:bg-primary hover:text-white"
                >
                  {label}
                  <ArrowRight className="ml-auto h-4 w-4 shrink-0" aria-hidden="true" />
                </Link>
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function PricingOutline({
  city = "Greenville, SC",
  className = "bg-white section-padding",
}: OutlineProps) {
  return (
    <section className={className} aria-labelledby="pricing-outline-heading">
      <div className="container-narrow mx-auto max-w-3xl">
        <h2
          id="pricing-outline-heading"
          className="font-display text-3xl font-semibold text-primary sm:text-4xl"
        >
          How Much Does Crawl Space Work Cost in {city}?
        </h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
          <p>
            Full crawl space encapsulation in the {city} area typically runs{" "}
            <strong className="text-dark">$5,000–$9,000</strong>, including a 20-mil vapor barrier,
            vent sealing, and commercial dehumidifier. Vapor barrier-only work runs $1,500–$3,500.
            Mold treatment, joist repair, or drainage add to the total depending on conditions.
          </p>
          <p>
            <Link
              href="/crawl-space-encapsulation-cost"
              className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
            >
              View the full 2025 cost guide
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export function ServiceAreaOutline({
  city = "Greenville, SC",
  className = "bg-neutral section-padding",
  showMap = true,
}: OutlineProps & { showMap?: boolean }) {
  return (
    <section className={className} aria-labelledby="service-area-outline-heading">
      <div className="container-narrow mx-auto max-w-3xl">
        <ServiceAreaMap
          headingId="service-area-outline-heading"
          heading={`Where Is the ${city} Crawl Space Service Area?`}
          description={`Greenville Crawl Space Pros connects homeowners across Greenville County and the Upstate with licensed crawl space specialists. Call ${siteConfig.phone} to confirm coverage in your area.`}
          showMap={showMap}
        />
      </div>
    </section>
  );
}

type FaqOutlineItem = {
  question: string;
  answer: string;
};

type FaqOutlineProps = OutlineProps & {
  items?: FaqOutlineItem[];
  heading?: string;
  /** Page path for FAQPage JSON-LD when items are provided (e.g. "/contact") */
  schemaPath?: string;
};

export function FaqOutline({
  city = "Greenville, SC",
  items,
  heading,
  schemaPath,
  className = "bg-white section-padding",
}: FaqOutlineProps) {
  return (
    <>
      {items && items.length > 0 && schemaPath ? (
        <SchemaScript schema={getFaqPageSchema(items, schemaPath)} />
      ) : null}
      <section className={className} aria-labelledby="faq-outline-heading">
      <div className="container-narrow mx-auto max-w-3xl">
        <h2
          id="faq-outline-heading"
          className="font-display text-3xl font-semibold text-primary sm:text-4xl"
        >
          {heading ?? `What Are Common Crawl Space Questions in ${city}?`}
        </h2>
        {items && items.length > 0 ? (
          <div className="mt-8 space-y-6">
            {items.map(({ question, answer }) => (
              <article
                key={question}
                className="rounded-xl border border-primary/10 bg-neutral p-6"
              >
                <h3 className="font-display text-lg font-semibold text-primary sm:text-xl">
                  {question}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{answer}</p>
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-lg text-muted">
            Get answers on encapsulation cost, process, mold, humidity, and repairs for {city}{" "}
            homeowners.
          </p>
        )}
        <p className="mt-6">
          <Link
            href="/faq"
            className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
          >
            Browse all crawl space FAQ
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </p>
      </div>
    </section>
    </>
  );
}
