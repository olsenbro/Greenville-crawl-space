import Link from "next/link";
import { AlertTriangle, Check, Clock, Mail, MapPin, Phone, Star } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactMap } from "@/components/contact/ContactMap";
import { AuthoritySection } from "@/components/AuthorityCitation";
import { PhoneLink } from "@/components/PhoneLink";
import { SERVICE_PAGES } from "@/components/service/ServiceInternalLinks";
import { SchemaScript } from "@/components/SchemaScript";
import { getWebPageSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import { getAuthorityForPath } from "@/lib/authorities";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildPageMetadata({
  title: "Free Crawl Space Estimate Greenville SC | Call Today",
  description:
    "Connect with trusted local crawl space specialists in Greenville, SC. Request a free estimate for moisture, mold, structural, and vapor barrier concerns — no obligation.",
  canonical: "/contact",
});

const trustPoints = [
  "Licensed Local Pros",
  "No Obligation",
  "Free Estimates Available",
  "Upstate SC Coverage",
];

const testimonials = [
  {
    quote:
      "They found mold on our joists we never knew was there. Full report same day, encapsulation scheduled within the week.",
    name: "Patricia W., Simpsonville",
  },
  {
    quote:
      "Called Friday morning, inspected Monday. Honest assessment — told us exactly what we needed and what we didn't.",
    name: "James H., Greer",
  },
];

const pageSchema = getWebPageSchema(
  "/contact",
  "Request a Free Crawl Space Estimate",
  "Connect with a trusted local crawl space specialist in Greenville, SC for a free, no-obligation estimate.",
);

export default function ContactPage() {
  return (
    <>
      <SchemaScript schema={pageSchema} />

      <Breadcrumbs items={[{ label: "Contact" }]} path="/contact" />

      <section className="bg-primary text-white section-padding">
        <div className="container-narrow mx-auto max-w-3xl text-center">
          <p className="label-caps mb-4 text-accent-light">Contact</p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-balance sm:text-5xl">
            Request a Free Crawl Space Estimate
          </h1>
          <p className="mt-5 text-lg text-white/90">
            Connect with a licensed local specialist who can assess your crawl space and provide a
            clear recommendation — at no obligation to you.
          </p>
        </div>
      </section>

      <section className="section-padding bg-neutral">
        <div className="container-narrow grid gap-12 lg:grid-cols-2">
          <ContactForm />

          <div className="space-y-6">
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <p className="label-caps text-muted">Call or Text</p>
              <PhoneLink className="mt-2 inline-flex items-center gap-3 font-display text-3xl font-semibold text-accent transition-colors hover:text-accent-light sm:text-4xl">
                <Phone className="h-8 w-8 shrink-0" aria-hidden="true" />
                {siteConfig.phone}
              </PhoneLink>
              <p className="mt-3 text-sm text-muted">
                Fastest way to connect with a local crawl space specialist in your area.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm">
              <ul className="space-y-4">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-3 text-dark transition-colors hover:text-primary"
                  >
                    <Mail className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-muted">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    {siteConfig.businessHoursLabel}
                    <br />
                    Emergency consultations available
                  </span>
                </li>
                <li className="flex items-start gap-3 text-muted">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    Greenville County, Spartanburg County, Anderson County, Cherokee County
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-primary p-8 text-white shadow-sm">
              <ul className="space-y-3">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm font-medium">
                    <Check
                      className="h-5 w-5 shrink-0 text-accent-light"
                      strokeWidth={3}
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-danger/20 bg-danger/5 p-6">
              <p className="flex gap-3 text-sm leading-relaxed text-dark">
                <AlertTriangle
                  className="mt-0.5 h-5 w-5 shrink-0 text-danger"
                  aria-hidden="true"
                />
                <span>
                  Crawl space moisture problems get worse, not better. Early assessment saves
                  thousands in structural repair costs.
                </span>
              </p>
            </div>

            <div className="space-y-4">
              {testimonials.map(({ quote, name }) => (
                <blockquote
                  key={name}
                  className="rounded-xl border border-primary/10 bg-white p-5 shadow-sm"
                >
                  <div className="flex gap-0.5 text-accent" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-3.5 w-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-dark">&ldquo;{quote}&rdquo;</p>
                  <footer className="mt-2 text-xs font-semibold text-primary">— {name}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AuthoritySection source={getAuthorityForPath("/contact")} className="bg-white" />

      <ContactMap />

      <section className="border-t border-primary/10 bg-white section-padding">
        <div className="container-narrow">
          <h2 className="text-center font-display text-2xl font-semibold text-primary">
            Crawl Space Services Available
          </h2>
          <ul className="mt-6 flex flex-wrap justify-center gap-3">
            {SERVICE_PAGES.map(({ href, label }) => (
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
      </section>
    </>
  );
}
