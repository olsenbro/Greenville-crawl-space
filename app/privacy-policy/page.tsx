import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PhoneLink } from "@/components/PhoneLink";
import { SchemaScript } from "@/components/SchemaScript";
import { getWebPageSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildPageMetadata({
  title: "Privacy Policy | Greenville Crawl Space Pros",
  description: `Privacy policy for ${siteConfig.name}. How we collect, use, and protect information submitted through this website.`,
  canonical: "/privacy-policy",
});

const pageSchema = getWebPageSchema(
  "/privacy-policy",
  "Privacy Policy",
  `How ${siteConfig.name} collects, uses, and protects information submitted through this website.`,
);

export default function PrivacyPolicyPage() {
  return (
    <>
      <SchemaScript schema={pageSchema} />
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} path="/privacy-policy" />

      <section className="bg-primary text-white section-padding">
        <div className="container-narrow mx-auto max-w-3xl">
          <p className="label-caps mb-4 text-accent-light">Legal</p>
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-white/80">Last updated: September 2026</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto max-w-3xl space-y-8 text-dark">
          <p>
            {siteConfig.name} operates {siteConfig.url.replace("https://", "")}. This Privacy
            Policy explains how we collect, use, and protect information when you visit this
            website, call the number listed on it, or submit a request for an estimate.
          </p>

          <div>
            <h2 className="font-display text-2xl font-semibold text-primary">What We Collect</h2>
            <p className="mt-3">
              When you submit the estimate form or call us, we may collect your name, phone number,
              email address, property address or city, details about your home and crawl space
              concern, and any notes you provide. We also collect standard web analytics data such
              as pages visited, approximate location, device and browser type, and referring URL.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-primary">How We Use It</h2>
            <p className="mt-3">
              {siteConfig.name} is a referral service. Information you submit is shared with an
              independent, licensed local crawl space specialist so they can contact you to schedule
              an inspection and provide an estimate. We also use it to follow up on your request and
              to improve this website. We do not sell your personal information.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-primary">Cookies and Analytics</h2>
            <p className="mt-3">
              We use Google Analytics and similar tools to understand how visitors use the site,
              including phone clicks and form submissions. These tools may set cookies. You can
              control or block cookies through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-primary">Calls and Messages</h2>
            <p className="mt-3">
              Calls to the number on this site may be recorded or logged for quality and lead
              tracking purposes. By submitting the form, you agree that we or a matched specialist
              may contact you by phone, text, or email about your request.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-primary">Your Choices</h2>
            <p className="mt-3">
              To have your information removed or to ask a question about this policy, contact us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-semibold text-accent underline">
                {siteConfig.email}
              </a>{" "}
              or call{" "}
              <PhoneLink source="privacy_policy" className="font-semibold text-accent underline">
                {siteConfig.phone}
              </PhoneLink>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
