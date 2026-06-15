import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { PhoneLink } from "@/components/PhoneLink";
import { SchemaScript } from "@/components/SchemaScript";
import { ServiceLinksGrid } from "@/components/service/ServiceLinksGrid";
import { allFaqItems, faqCategories } from "@/lib/faq-page-data";
import { getFaqPageSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildPageMetadata({
  title: "Crawl Space Encapsulation FAQ | Greenville SC Questions Answered",
  description:
    "All your crawl space encapsulation questions answered. Greenville, SC homeowners ask about cost, process, mold, humidity, and more.",
  canonical: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <SchemaScript schema={getFaqPageSchema(allFaqItems)} />

      <Breadcrumbs items={[{ label: "FAQ" }]} path="/faq" />

      <section className="relative overflow-hidden bg-primary text-white">
        <div className="container-narrow section-padding">
          <div className="mx-auto max-w-3xl text-center">
            <p className="label-caps mb-4 text-accent-light">FAQ</p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-balance sm:text-5xl">
              Crawl Space Encapsulation FAQ — Greenville, South Carolina
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/90">
              Honest answers about crawl space moisture, encapsulation, mold, dehumidifiers, costs,
              and what to expect — from the team that inspects and repairs crawl spaces across
              Upstate SC every day.
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

      <section className="bg-neutral section-padding">
        <div className="container-narrow mx-auto max-w-3xl">
          <ServiceLinksGrid title="Crawl Space Services" />
          <p className="mt-6 text-center">
            <Link
              href="/crawl-space-encapsulation-cost"
              className="font-semibold text-primary hover:underline"
            >
              View 2025 cost guide →
            </Link>
            {" · "}
            <Link href="/contact" className="font-semibold text-primary hover:underline">
              Schedule a free inspection →
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-accent section-padding text-white">
        <div className="container-narrow mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Ready to Schedule a Free Inspection?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            We&apos;ll inspect your crawl space, answer your questions on site, and provide a written
            quote with no obligation.
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
