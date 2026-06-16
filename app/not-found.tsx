import Link from "next/link";
import { ArrowRight, Home, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PhoneLink } from "@/components/PhoneLink";
import { AuthoritySection } from "@/components/AuthorityCitation";
import { SERVICE_PAGES } from "@/components/service/ServiceInternalLinks";
import { getAuthorityForPath } from "@/lib/authorities";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildPageMetadata({
  title: "Crawl Space Page Not Found | Greenville SC Home Services",
  description:
    "This page could not be found. Browse crawl space encapsulation, repair, and moisture control services in Greenville, SC. Call or request a free estimate today.",
  canonical: "/404",
});

export default function NotFound() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Page Not Found" }]} path="/404" />
      <section className="section-padding bg-neutral">
        <div className="container-narrow mx-auto max-w-xl text-center">
          <p className="label-caps mb-3">404</p>
          <h1 className="font-display text-4xl font-semibold text-primary sm:text-5xl">
            Page Not Found
          </h1>
          <p className="mt-4 text-lg text-muted">
            The page you&apos;re looking for doesn&apos;t exist or may have been moved. Try one of
            the links below, or call us directly.
          </p>

          <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted">
              Call for Immediate Help
            </p>
            <PhoneLink
              source="404_page"
              className="mt-2 inline-flex items-center gap-2 font-display text-3xl font-semibold text-accent transition-colors hover:text-accent-light"
            >
              <Phone className="h-7 w-7" aria-hidden="true" />
              {siteConfig.phone}
            </PhoneLink>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/" className="btn-primary inline-flex items-center gap-2">
              <Home className="h-4 w-4" aria-hidden="true" />
              Back to Homepage
            </Link>
            <Link href="/contact" className="btn-secondary inline-flex items-center gap-2">
              {siteConfig.cta.primary}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8">
            <p className="text-sm font-semibold text-dark">Popular services:</p>
            <ul className="mt-3 flex flex-wrap justify-center gap-3">
              {SERVICE_PAGES.slice(0, 4).map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <AuthoritySection source={getAuthorityForPath("/404")} className="bg-white" />
    </>
  );
}
