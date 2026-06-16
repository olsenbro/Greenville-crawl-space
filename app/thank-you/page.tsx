import Link from "next/link";
import { ArrowRight, Home, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PhoneLink } from "@/components/PhoneLink";
import { AuthoritySection } from "@/components/AuthorityCitation";
import { getWebPageSchema } from "@/lib/schema";
import { getAuthorityForPath } from "@/lib/authorities";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { SchemaScript } from "@/components/SchemaScript";

export const metadata = {
  ...buildPageMetadata({
    title: "Thank You | Greenville Crawl Space Estimate Request",
    description:
      "Your crawl space estimate request was received. We will connect you with a local Greenville specialist shortly. Call now for immediate help with your project.",
    canonical: "/thank-you",
    absoluteTitle: true,
  }),
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <SchemaScript
        schema={getWebPageSchema(
          "/thank-you",
          "Thank You — Estimate Request Received",
          "Confirmation page after submitting a crawl space estimate request.",
        )}
      />

      <Breadcrumbs items={[{ label: "Thank You" }]} path="/thank-you" />

      <section className="section-padding bg-neutral">
        <div className="container-narrow mx-auto max-w-xl text-center">
          <p className="label-caps mb-3 text-primary">Request Received</p>
          <h1 className="font-display text-4xl font-semibold text-primary sm:text-5xl">
            Thank You — We&apos;ll Be in Touch
          </h1>
          <p className="mt-4 text-lg text-muted">
            Your free crawl space estimate request was submitted. A local specialist will contact you
            shortly — usually within one business day.
          </p>

          <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted">
              Need Immediate Help?
            </p>
            <PhoneLink
              source="thank_you_page"
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
            <Link href="/faq" className="btn-secondary inline-flex items-center gap-2">
              Read FAQ
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <AuthoritySection source={getAuthorityForPath("/thank-you")} className="bg-white" />
    </>
  );
}
