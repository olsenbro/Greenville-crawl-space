import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { AuthoritySection } from "@/components/AuthorityCitation";
import { PhoneLink } from "@/components/PhoneLink";
import { SchemaScript } from "@/components/SchemaScript";
import { ServiceLinksGrid } from "@/components/service/ServiceLinksGrid";
import { PricingOutline, ServiceAreaOutline } from "@/components/seo/PageOutlineSections";
import { LocationLinksOutline, RelatedGuidesLinks } from "@/components/seo/InternalLinksSections";
import { PageQuickAnswer } from "@/components/seo/PageQuickAnswer";
import { allFaqItems, faqCategories } from "@/lib/faq-page-data";
import { getAuthoritiesForPath } from "@/lib/authorities";
import { getFaqPageSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildPageMetadata({
  title: "Crawl Space FAQ Greenville SC | Encapsulation Answers",
  description:
    "Crawl space FAQ for Greenville, SC homeowners. Answers on encapsulation cost, process, mold, humidity, and repairs from local specialists. Get a free estimate.",
  canonical: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <SchemaScript schema={getFaqPageSchema(allFaqItems, "/faq")} />

      <Breadcrumbs items={[{ label: "FAQ" }]} path="/faq" />

      <section className="relative overflow-hidden bg-primary text-white">
        <div className="container-narrow section-padding">
          <div className="mx-auto max-w-3xl text-center">
            <p className="label-caps mb-4 text-accent-light">FAQ</p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-balance sm:text-5xl">
              Crawl Space Encapsulation FAQ — Greenville, South Carolina
            </h1>
            <PageQuickAnswer className="mx-auto mt-4 max-w-3xl text-xl font-semibold leading-snug text-white sm:text-2xl">
              Crawl space encapsulation in Greenville, SC costs $5,000–$9,000, takes 2–4 days, and
              includes a 20-mil vapor barrier, sealed vents, and a commercial dehumidifier.
            </PageQuickAnswer>
            <p className="mt-6 text-lg leading-relaxed text-white/90">
              Honest answers about crawl space moisture, encapsulation, mold, dehumidifiers, costs,
              and what to expect — connecting Greenville-area homeowners with trusted local specialists.
            </p>
            <PhoneLink className="btn-primary mt-8 inline-flex items-center gap-2 px-8 py-4 text-base">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Still have questions? Call {siteConfig.phone}
            </PhoneLink>
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow mx-auto max-w-3xl">
          <FaqAccordion categories={faqCategories} />
        </div>
      </section>

      <AuthoritySection sources={getAuthoritiesForPath("/faq")} className="bg-neutral" />

      <PricingOutline className="bg-white section-padding border-t border-primary/10" />

      <section className="bg-neutral section-padding border-t border-primary/10">
        <div className="container-narrow mx-auto max-w-3xl">
          <ServiceLinksGrid title="What Crawl Space Services Are Available in Greenville, SC?" />
          <p className="mt-6 text-center">
            <Link
              href="/crawl-space-encapsulation-cost"
              className="font-semibold text-primary hover:underline"
            >
              View 2025 cost guide →
            </Link>
            {" · "}
            <Link href="/contact" className="font-semibold text-primary hover:underline">
              {siteConfig.cta.primary} →
            </Link>
          </p>
        </div>
      </section>

      <ServiceAreaOutline className="bg-white section-padding border-t border-primary/10" />

      <LocationLinksOutline className="bg-neutral section-padding border-t border-primary/10" />

      <RelatedGuidesLinks
        excludeHref="/faq"
        className="bg-white section-padding border-t border-primary/10"
      />

      <section className="bg-accent section-padding text-white">
        <div className="container-narrow mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            {siteConfig.cta.defaultHeading}
          </h2>
          <p className="mt-4 text-lg text-white/90">{siteConfig.cta.defaultBody}</p>
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
