import {
  BulletList,
  ProcessSteps,
  ServicePageTemplate,
  ServiceSection,
} from "@/components/service/ServicePageTemplate";
import { getServiceSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildPageMetadata({
  title: "Crawl Space Mold Removal Greenville SC | Treatment Before Encapsulation",
  description:
    `Mold in your Greenville crawl space? We treat and remove crawl space mold before encapsulation to stop it at the source. Free inspection — ${siteConfig.phone}.`,
  canonical: "/mold-in-crawl-space",
});

const treatmentSteps = [
  {
    title: "Identify the mold source",
    description:
      "We locate all affected areas, assess mold type and extent, and identify the moisture source that allowed growth.",
  },
  {
    title: "Contain and treat",
    description:
      "Affected areas are treated with professional-grade antimicrobial products formulated for porous wood surfaces.",
  },
  {
    title: "Remove unsalvageable material",
    description:
      "Severely rotted or structurally compromised wood is removed and replaced before encapsulation begins.",
  },
  {
    title: "Fix the moisture source",
    description:
      "Drainage, vapor barrier, vent sealing, and dehumidifier installation address the conditions that caused mold.",
  },
  {
    title: "Encapsulate to prevent recurrence",
    description:
      "Full encapsulation seals the space and maintains humidity below mold-growth thresholds year-round.",
  },
];

const faqs = [
  {
    question: "Is crawl space mold dangerous to my health?",
    answer:
      "Mold spores from crawl spaces can enter living areas through the stack effect. Some people experience allergy-like symptoms. If you have health concerns, consult your doctor — we focus on eliminating the source through proper treatment and encapsulation.",
  },
  {
    question: "Can I use bleach to kill crawl space mold?",
    answer:
      "Bleach kills surface mold on non-porous materials but does not penetrate porous wood where mold roots (hyphae) grow. It can also add moisture to wood surfaces. Professional antimicrobial treatment is the correct approach for joists and subfloor.",
  },
  {
    question: "How long does mold treatment take?",
    answer:
      "Most residential crawl space mold treatments are completed in 1–2 days depending on extent. Structural repairs or joist replacement needed alongside treatment will extend the timeline.",
  },
  {
    question: "Will mold come back after treatment?",
    answer:
      "Not if the moisture source is eliminated. Mold treatment without fixing humidity and moisture is temporary. That's why we always pair treatment with encapsulation — treating mold without stopping moisture is a band-aid.",
  },
];

export default function MoldInCrawlSpacePage() {
  return (
    <ServicePageTemplate
      h1="Crawl Space Mold in Greenville, SC — What to Know and What to Do"
      intro={[
        "Mold in your crawl space isn't just a nuisance below your floor — it affects the air your family breathes every day.",
        "We treat crawl space mold at the source, then encapsulate to stop it from coming back.",
      ]}
      breadcrumbs={[
        { label: "Services", href: "/mold-in-crawl-space" },
        { label: "Mold in Crawl Space" },
      ]}
      serviceSlug="mold-in-crawl-space"
      schema={getServiceSchema({
        name: "Crawl Space Mold Treatment",
        description:
          "Professional crawl space mold treatment and remediation before encapsulation in Greenville, SC.",
        path: "/mold-in-crawl-space",
      })}
      faqs={faqs}
      ctaHeading="Mold Won't Fix Itself — Act Now"
      ctaBody="Schedule a free crawl space inspection. We'll identify the mold, find the moisture source, and give you a treatment plan."
    >
      <ServiceSection title="Why Crawl Space Mold Is Common in Greenville">
        <p>
          Greenville&apos;s combination of high humidity, clay soil that holds moisture against foundations,
          and older open-vent crawl space construction creates ideal mold conditions. Many Upstate homes
          built before modern building science understanding have crawl spaces that actively pull humid
          air inside — exactly what mold needs to thrive.
        </p>
      </ServiceSection>

      <ServiceSection title="How Mold Spreads From Your Crawl Space to Your Home" className="bg-neutral">
        <p>
          As air in your home heats and rises, it creates negative pressure that pulls replacement air
          upward from the crawl space through gaps in flooring, HVAC ducts, and plumbing penetrations.
          This <strong className="text-dark">stack effect</strong> means up to 50% of the air on your
          first floor may originate below your home — carrying mold spores with it.
        </p>
        <p>
          You may never see mold in your crawl space, but if you smell mustiness indoors, your HVAC
          system is likely distributing what grows below.
        </p>
      </ServiceSection>

      <ServiceSection title="Types of Mold Commonly Found in SC Crawl Spaces">
        <p>Common species found in Upstate crawl spaces include:</p>
        <BulletList
          items={[
            "Penicillium — blue/green growth on wood and insulation, common in damp conditions",
            "Aspergillus — found on damp organic materials, multiple species with varying characteristics",
            "Stachybotrys — often called 'black mold,' associated with chronically wet cellulose materials",
          ]}
        />
        <p>
          Mold identification requires proper assessment. If you have health concerns related to mold
          exposure, consult a medical professional. Our role is eliminating the source through proper
          treatment and moisture control.
        </p>
      </ServiceSection>

      <ServiceSection title="Our Mold Treatment Process" className="bg-neutral">
        <ProcessSteps steps={treatmentSteps} />
      </ServiceSection>

      <ServiceSection title="Why Encapsulation Alone Won't Fix Mold">
        <p>
          Encapsulating over active mold traps moisture and spores against wood surfaces and allows
          mold to continue growing in the dark, sealed environment.{" "}
          <strong className="text-dark">Treatment must come first</strong> — then encapsulation prevents
          recurrence by controlling humidity permanently.
        </p>
      </ServiceSection>

      <ServiceSection title="What NOT to Do" className="bg-neutral">
        <BulletList
          items={[
            "Don't use bleach on porous wood — it kills surface mold but not roots embedded in joists",
            "Don't encapsulate over active mold — this traps the problem and allows continued growth",
            "Don't ignore musty odors — they often indicate mold you can't see from the access point",
            "Don't run a household dehumidifier in an unsealed crawl space — it won't solve the problem",
            "Don't disturb large mold areas without containment — this can spread spores throughout the home",
          ]}
        />
      </ServiceSection>

      <ServiceSection title="Crawl Space Mold Treatment Cost">
        <p>
          Mold treatment before encapsulation typically runs{" "}
          <strong className="text-dark">$500 to $2,000</strong> depending on extent, affected surface
          area, and whether structural wood replacement is needed alongside treatment.
        </p>
        <p>
          Full encapsulation after treatment adds $3,500–$8,000 for a standard home. We provide itemized
          pricing during your free inspection so you understand the full scope before committing.
        </p>
      </ServiceSection>
    </ServicePageTemplate>
  );
}
