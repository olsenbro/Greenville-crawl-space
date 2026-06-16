import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PhoneLink } from "@/components/PhoneLink";
import { SiteLogo } from "@/components/SiteLogo";
import { serviceAreas, serviceLinks, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-neutral">
      <div className="container-narrow section-padding grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5">
          <Link
            href="/"
            className="inline-flex items-center gap-3 font-display text-xl font-semibold leading-tight text-neutral"
            aria-label={`${siteConfig.name} home`}
          >
            <SiteLogo size={36} className="rounded-md" />
            <span>
              Greenville Crawl Space{" "}
              <span className="relative inline-block">
                Pros
                <span
                  className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-accent"
                  aria-hidden="true"
                />
              </span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-neutral/80">
            Connecting Upstate South Carolina homeowners with trusted crawl space specialists.
          </p>
        </div>

        <div>
          <h3 className="label-caps text-neutral/60">Contact</h3>
          <address className="mt-4 space-y-3 not-italic">
            <p className="text-sm font-semibold text-neutral">{siteConfig.name}</p>
            <p className="flex items-start gap-2 text-sm text-neutral/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{siteConfig.formattedAddress}</span>
            </p>
            <p>
              <PhoneLink className="inline-flex items-center gap-2 text-sm font-semibold text-neutral/90 transition-colors hover:text-accent-light">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                {siteConfig.phone}
              </PhoneLink>
            </p>
            <p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-sm text-neutral/80 transition-colors hover:text-accent-light"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                {siteConfig.email}
              </a>
            </p>
            <p className="flex items-start gap-2 text-sm text-neutral/80">
              <Clock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{siteConfig.businessHoursLabel}</span>
            </p>
          </address>
        </div>

        <div>
          <h3 className="label-caps text-neutral/60">Services</h3>
          <ul className="mt-4 space-y-2">
            {serviceLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-neutral/80 transition-colors hover:text-accent-light"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="label-caps text-neutral/60">Service Areas</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
            {serviceAreas.map((area) => (
              <li key={area} className="text-sm text-neutral/80">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-narrow px-4 py-5 sm:px-6 lg:px-8">
          <p className="mt-4 pt-4 text-xs leading-[1.7] text-white/45">
            Greenville Crawl Space Pros is a local lead generation and referral service that connects
            homeowners with licensed crawl space contractors in the Greenville, SC area and throughout
            Upstate South Carolina. We do not directly perform crawl space encapsulation, repair, mold
            remediation, or any related services. All work is performed by independent licensed
            contractors. Pricing information on this site reflects typical market rates and is provided
            for general reference only — actual pricing is determined by the contractor performing your
            project. Availability of free estimates, warranty terms, and service guarantees vary by
            contractor and should be confirmed directly with your service provider before work begins.
          </p>
          <div className="mt-4 flex flex-col items-center justify-between gap-3 text-center text-sm text-neutral/70 sm:flex-row">
            <p>&copy; 2026 Greenville Crawl Space Pros</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="transition-colors hover:text-accent-light">
                Privacy Policy
              </Link>
              <span aria-hidden="true">|</span>
              <Link href="/sitemap.xml" className="transition-colors hover:text-accent-light">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
