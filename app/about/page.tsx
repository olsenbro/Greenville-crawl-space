import {
  ServicePageTemplate,
  ServiceSection,
  ProcessSteps,
} from "@/components/service/ServicePageTemplate";
import { getWebPageSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "About Greenville Crawl Space Pros | How It Works",
  description:
    "Greenville Crawl Space Pros connects Upstate SC homeowners with vetted, licensed local crawl space specialists. Learn how our free referral service works.",
  canonical: "/about",
});

const howItWorksSteps = [
  {
    title: "Submit your address and a description of the issue",
    description:
      "Tell us what's going on — musty odors, standing water, sagging floors, or just a routine inspection request.",
  },
  {
    title: "We match you with a local specialist",
    description:
      "We connect you with a vetted, licensed crawl space specialist who actually serves your area — favoring locally-owned shops over national franchises that already have their own lead pipeline.",
  },
  {
    title: "They contact you directly",
    description:
      "Your matched specialist reaches out to schedule a free, no-obligation inspection and estimate — usually within one business day.",
  },
  {
    title: "You decide",
    description:
      "There's never any cost or pressure for the referral itself. You choose whether to move forward with the work.",
  },
];

const aboutFaqs = [
  {
    question: "Is there a cost to use this service?",
    answer:
      "No. Requesting an estimate through Greenville Crawl Space Pros is always free, with no obligation to hire the contractor you're matched with.",
  },
  {
    question: "Do you perform the crawl space work yourselves?",
    answer:
      "No — we're a referral service, not a contractor. All encapsulation, repair, mold remediation, and related work is performed by independent, licensed local specialists.",
  },
  {
    question: "Will more than one contractor contact me?",
    answer:
      "Typically just one — the specialist we match you with. Because many homeowners in Upstate SC also call several companies directly when comparing quotes, you may occasionally hear from a contractor you contacted separately; that's not something we control.",
  },
];

export default function AboutPage() {
  return (
    <ServicePageTemplate
      h1="How Greenville Crawl Space Pros Works"
      quickAnswer="We're a free referral service that connects Upstate SC homeowners with vetted, licensed local crawl space specialists — not a contractor ourselves."
      intro={[
        "Greenville Crawl Space Pros connects homeowners across Greenville and Upstate South Carolina with vetted, licensed local specialists for crawl space encapsulation, vapor barrier installation, mold remediation, and structural repair.",
      ]}
      breadcrumbs={[{ label: "About" }]}
      breadcrumbPath="/about"
      schema={getWebPageSchema(
        "/about",
        "About Greenville Crawl Space Pros",
        "How Greenville Crawl Space Pros' free referral service works, and why we vet local specialists instead of national franchises.",
      )}
      faqs={aboutFaqs}
      faqTitle="Questions About How This Works"
    >
      <ServiceSection title="What This Site Is">
        <p>
          We&apos;re a free referral service, not a contractor. When you request an
          estimate through this site, we match you with a qualified local crawl space
          specialist who serves your area and follows up directly — there&apos;s no cost
          or obligation to you, and no markup added to your project.
        </p>
      </ServiceSection>

      <ServiceSection title="Why We Exist" className="bg-neutral">
        <p>
          Upstate South Carolina&apos;s humid climate and clay soil create some of the
          most common crawl space problems in the region — but finding a contractor
          who&apos;s actually local, licensed, and not a national franchise chasing
          volume can be harder than it should be. We research and vet local specialists
          so homeowners don&apos;t have to.
        </p>
      </ServiceSection>

      <ServiceSection title="What Happens After You Request an Estimate">
        <ProcessSteps steps={howItWorksSteps} />
      </ServiceSection>
    </ServicePageTemplate>
  );
}
