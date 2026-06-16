import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cityAreas } from "@/lib/areas-served";
import { SERVICE_PAGES } from "@/components/service/ServiceInternalLinks";

export const GUIDE_PAGES = [
  { href: "/", label: "Greenville Crawl Space Home" },
  { href: "/what-is-encapsulation", label: "What Is Crawl Space Encapsulation?" },
  { href: "/crawl-space-encapsulation-cost", label: "2025 Encapsulation Cost Guide" },
  { href: "/encapsulation-vs-vapor-barrier", label: "Encapsulation vs. Vapor Barrier" },
  { href: "/faq", label: "Crawl Space FAQ" },
  { href: "/contact", label: "Request a Free Estimate" },
] as const;

type LinkSectionProps = {
  className?: string;
  excludeCitySlug?: string;
};

export function LocationLinksOutline({
  className = "bg-white section-padding border-t border-primary/10",
  excludeCitySlug,
}: LinkSectionProps) {
  const cities = excludeCitySlug
    ? cityAreas.filter((city) => city.slug !== excludeCitySlug)
    : cityAreas;

  return (
    <section className={className} aria-labelledby="location-links-heading">
      <div className="container-narrow mx-auto max-w-3xl">
        <h2
          id="location-links-heading"
          className="font-display text-3xl font-semibold text-primary sm:text-4xl"
        >
          Which Upstate SC Cities Have Crawl Space Service Areas?
        </h2>
        <p className="mt-4 text-lg text-muted">
          Find crawl space encapsulation, repair, and moisture control specialists by city — or{" "}
          <Link href="/areas-served" className="font-semibold text-primary hover:underline">
            browse all areas we serve
          </Link>
          .
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          <li>
            <Link
              href="/"
              className="flex items-center gap-2 rounded-lg bg-neutral px-5 py-4 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Greenville, SC
              <ArrowRight className="ml-auto h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
          </li>
          {cities.map(({ slug, name, state }) => (
            <li key={slug}>
              <Link
                href={`/areas-served/${slug}`}
                className="flex items-center gap-2 rounded-lg bg-neutral px-5 py-4 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
              >
                {name}, {state}
                <ArrowRight className="ml-auto h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

type RelatedGuidesLinksProps = LinkSectionProps & {
  excludeHref?: string;
  showServices?: boolean;
  serviceSlug?: string;
};

export function RelatedGuidesLinks({
  className = "bg-neutral section-padding border-t border-primary/10",
  excludeHref,
  showServices = true,
  serviceSlug,
}: RelatedGuidesLinksProps) {
  const guides = excludeHref
    ? GUIDE_PAGES.filter((page) => page.href !== excludeHref)
    : GUIDE_PAGES;
  const services = serviceSlug
    ? SERVICE_PAGES.filter((page) => page.slug !== serviceSlug)
    : SERVICE_PAGES;

  return (
    <section className={className} aria-labelledby="related-guides-heading">
      <div className="container-narrow mx-auto max-w-3xl">
        <h2
          id="related-guides-heading"
          className="font-display text-3xl font-semibold text-primary sm:text-4xl"
        >
          Which Crawl Space Pages Should You Read Next?
        </h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-semibold text-primary">Guides &amp; Resources</h3>
            <ul className="mt-4 space-y-2">
              {guides.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
                  >
                    {label}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {showServices ? (
            <div>
              <h3 className="font-display text-xl font-semibold text-primary">Crawl Space Services</h3>
              <ul className="mt-4 space-y-2">
                {services.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
                    >
                      {label}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/areas-served"
                    className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
                  >
                    Areas Served
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
