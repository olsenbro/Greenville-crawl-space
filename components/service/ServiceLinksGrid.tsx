import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICE_PAGES } from "@/components/service/ServiceInternalLinks";

type ServiceLinksGridProps = {
  excludeSlug?: string;
  title?: string;
  showTitle?: boolean;
  className?: string;
};

export function ServiceLinksGrid({
  excludeSlug,
  title = "Find Local Crawl Space Specialists",
  showTitle = true,
  className = "",
}: ServiceLinksGridProps) {
  const pages = excludeSlug
    ? SERVICE_PAGES.filter((page) => page.slug !== excludeSlug)
    : SERVICE_PAGES;

  return (
    <div className={className}>
      {showTitle && title ? (
        <h2 className="font-display text-2xl font-semibold text-primary">{title}</h2>
      ) : null}
      <ul className={`grid gap-3 sm:grid-cols-2 ${showTitle && title ? "mt-6" : ""}`}>
        {pages.map(({ href, label }) => (
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
  );
}
