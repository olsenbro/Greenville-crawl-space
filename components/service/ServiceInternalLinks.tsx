import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const SERVICE_PAGES = [
  {
    slug: "crawl-space-encapsulation",
    href: "/crawl-space-encapsulation",
    label: "Crawl Space Encapsulation",
  },
  { slug: "vapor-barrier", href: "/vapor-barrier", label: "Vapor Barrier Installation" },
  { slug: "crawl-space-repair", href: "/crawl-space-repair", label: "Crawl Space Repair" },
  {
    slug: "dehumidifier-installation",
    href: "/dehumidifier-installation",
    label: "Dehumidifier Installation",
  },
  { slug: "mold-in-crawl-space", href: "/mold-in-crawl-space", label: "Mold in Crawl Space" },
  { slug: "floor-joist-repair", href: "/floor-joist-repair", label: "Floor Joist Repair" },
] as const;

export function getRelatedServices(currentSlug: string, count = 2) {
  return SERVICE_PAGES.filter((service) => service.slug !== currentSlug).slice(0, count);
}

type ServiceInternalLinksProps = {
  currentSlug: string;
};

export function ServiceInternalLinks({ currentSlug }: ServiceInternalLinksProps) {
  const related = getRelatedServices(currentSlug, 2);

  return (
    <section className="border-t border-primary/10 bg-neutral section-padding">
      <div className="container-narrow mx-auto max-w-3xl">
        <h2 className="font-display text-xl font-semibold text-primary">Explore More</h2>
        <ul className="mt-4 space-y-2 text-muted">
          <li>
            <Link
              href="/crawl-space-encapsulation-cost"
              className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
            >
              See our cost guide
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
            >
              Schedule a free inspection
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </li>
          <li>
            <Link
              href="/areas-served"
              className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
            >
              Areas we serve
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </li>
          {related.map(({ href, label }) => (
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
    </section>
  );
}
