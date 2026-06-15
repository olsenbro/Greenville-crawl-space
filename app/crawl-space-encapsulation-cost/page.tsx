import Link from "next/link";
import {
  BulletList,
  ProcessSteps,
  ServiceComparisonTable,
  ServicePageTemplate,
  ServiceSection,
} from "@/components/service/ServicePageTemplate";
import { ServiceLinksGrid } from "@/components/service/ServiceLinksGrid";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Crawl Space Encapsulation Cost Greenville SC | 2025 Price Guide",
  description:
    "How much does crawl space encapsulation cost in Greenville, SC? Full breakdown: vapor barriers, dehumidifiers, mold treatment, and full encapsulation. Free estimates.",
  canonical: "/crawl-space-encapsulation-cost",
});

const costFactors = [
  {
    title: "Crawl space square footage",
    description:
      "Larger homes cost more simply by area — liner material, labor, and dehumidifier sizing all scale with square footage.",
  },
  {
    title: "Crawl space height",
    description:
      "Tight spaces under 24 inches are harder to work in. Contractors spend more time crawling, maneuvering equipment, and sealing seams in low-clearance areas.",
  },
  {
    title: "Existing condition",
    description:
      "Mold, rotted wood, or standing water require remediation before encapsulation can begin. Skipping prep work leads to failure — and adds cost upfront.",
  },
  {
    title: "Vapor barrier thickness",
    description:
      "6-mil plastic sheeting is inadequate for South Carolina and fails quickly. Professional 20-mil reinforced liners cost more but last 20+ years.",
  },
  {
    title: "Dehumidifier",
    description:
      "Commercial-grade crawl space dehumidifiers are not cheap — but they are essential in Upstate SC to maintain 45–55% humidity year-round.",
  },
  {
    title: "Access points",
    description:
      "A single, tight access hatch limits how quickly materials and equipment can enter. Multiple or larger access points reduce labor time.",
  },
  {
    title: "Drainage",
    description:
      "Homes with recurring standing water may need an interior perimeter drain or sump system before encapsulation — adding $2,000–$6,000 to the project.",
  },
];

const quoteChecklist = [
  "Itemized line items — liner square footage, dehumidifier model and capacity, drainage if included",
  "Warranty terms in writing — liner warranty (typically 20–25 years) and workmanship coverage",
  "Before-and-after photos documenting existing conditions and completed work",
  "Clear separation of mold treatment vs. encapsulation — know what is included and what is extra",
  "Written humidity target and dehumidifier programming specifications",
  "No pressure to decide on the spot — reputable contractors provide time to review",
];

const costFaqs = [
  {
    question: "How much does full crawl space encapsulation cost in Greenville?",
    answer:
      "Full encapsulation with vent sealing, wall insulation, and a 20-mil liner typically runs $3,500–$7,000 in the Greenville area. Adding a commercial dehumidifier brings most projects to $5,000–$9,000 depending on crawl space size and condition.",
  },
  {
    question: "Why do crawl space quotes vary so much between contractors?",
    answer:
      "Quotes differ based on liner quality (6-mil vs. 20-mil), whether vent sealing and dehumidifiers are included, prep work required, and warranty terms. The lowest quote often excludes items essential for South Carolina's humid climate.",
  },
  {
    question: "Is a vapor barrier alone enough to save money?",
    answer:
      "A barrier-only install costs less upfront ($1,500–$3,500 for professional grade) but rarely solves humidity problems in Upstate SC. Open vents still pull humid air in. Many homeowners end up paying twice when they eventually need full encapsulation.",
  },
  {
    question: "Does crawl space encapsulation increase home value?",
    answer:
      "Buyers and home inspectors in Greenville routinely flag crawl space moisture and mold. A documented, encapsulated crawl space with a dehumidifier removes a common negotiation point and signals the home has been properly maintained.",
  },
  {
    question: "Are there financing options for crawl space work?",
    answer:
      "Many crawl space contractors offer financing for projects over $3,000. Given that structural joist repair from neglected moisture can exceed $8,000, encapsulation is often the more affordable path when done proactively.",
  },
];

export default function CrawlSpaceEncapsulationCostPage() {
  return (
    <ServicePageTemplate
      h1="Crawl Space Encapsulation Cost in Greenville, SC (2025 Guide)"
      breadcrumbPath="/crawl-space-encapsulation-cost"
      breadcrumbs={[{ label: "Cost Guide" }]}
      intro={[
        "If you've had a crawl space inspection and you're now looking at a proposal for encapsulation, you're probably trying to figure out whether the quote is fair — and whether the investment is worth it. Here's a transparent look at what crawl space work costs in the Greenville, SC area and what drives the price.",
      ]}
      faqs={costFaqs}
      faqTitle="Crawl Space Encapsulation Cost FAQ"
      ctaHeading="Get a Free, Itemized Crawl Space Quote"
      ctaBody="We'll inspect your crawl space and provide a written breakdown — no obligation, no surprises."
    >
      <ServiceSection title="2025 Crawl Space Cost Summary — Greenville, SC">
        <div className="mb-6 rounded-lg border-l-4 border-accent bg-accent/10 p-4">
          <p className="font-semibold text-dark">About These Estimates</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Price ranges reflect typical costs from crawl space contractors serving Greenville and
            Upstate South Carolina based on current market rates. Actual pricing varies by crawl
            space size, condition, and scope of work. Request a free inspection for an itemized
            quote specific to your home.
          </p>
        </div>
        <ServiceComparisonTable
          headers={["Service", "Typical Cost Range"]}
          rows={[
            ["Vapor barrier only (thin, 6-mil)", "$800–$2,000"],
            ["Vapor barrier (20-mil, professional grade)", "$1,500–$3,500"],
            ["Full encapsulation (liner + vent sealing + wall insulation)", "$3,500–$7,000"],
            ["Full encapsulation + dehumidifier", "$5,000–$9,000"],
            ["Mold treatment (before encapsulation)", "$500–$2,500"],
            ["Floor joist sistering (per joist)", "$100–$300"],
            ["Full joist replacement (per joist)", "$200–$500"],
            ["Crawl space drainage system", "$2,000–$6,000"],
            ["Full project (encapsulation + mold + joist repair)", "$6,000–$15,000+"],
          ]}
        />
      </ServiceSection>

      <ServiceSection
        title="What Makes Crawl Space Encapsulation Cost More or Less in Greenville?"
        className="bg-neutral"
      >
        <ProcessSteps steps={costFactors} />
      </ServiceSection>

      <ServiceSection title="Is Crawl Space Encapsulation Worth It in South Carolina?">
        <p>
          In Upstate SC&apos;s humid climate, encapsulation is one of the highest-ROI home
          improvements you can make — especially compared to the cost of repairing damage after it
          happens.
        </p>
        <BulletList
          items={[
            "Energy savings: encapsulated homes typically see a 15–25% reduction in HVAC load",
            "Home value: buyer inspections that reveal an encapsulated, dry crawl space increase buyer confidence",
            "Prevents expensive future repairs: structural joist repair costs far more than prevention",
            "Health and indoor air quality: reduced mold spore circulation from the stack effect",
            "Pest deterrence: dry, sealed crawl spaces are hostile to termites and rodents",
          ]}
        />
      </ServiceSection>

      <ServiceSection
        title="Vapor Barrier vs. Full Encapsulation — What's the Difference?"
        className="bg-neutral"
      >
        <p>
          In high-humidity climates like Upstate South Carolina, a vapor barrier alone is rarely
          sufficient. It stops ground moisture from evaporating upward — but it does not prevent
          warm, humid outdoor air from entering through open foundation vents. That air condenses on
          cool surfaces and keeps relative humidity dangerously high.
        </p>
        <p>
          Full encapsulation seals the entire space — floor, walls, and vents — and conditions the
          air with a commercial dehumidifier. For Greenville&apos;s climate, this is the only approach
          that reliably maintains 45–55% humidity year-round.
        </p>
        <ServiceComparisonTable
          headers={["", "Vapor Barrier Only", "Full Encapsulation"]}
          rows={[
            ["Blocks ground moisture", "Yes", "Yes"],
            ["Seals foundation vents", "No", "Yes"],
            ["Wall insulation included", "Rarely", "Yes"],
            ["Dehumidifier included", "No", "Yes"],
            ["Maintains 45–55% RH in SC", "Unlikely", "Yes"],
            ["Typical Greenville cost", "$1,500–$3,500", "$5,000–$9,000"],
            ["Recommended for Upstate SC", "Partial fix", "Complete solution"],
          ]}
        />
      </ServiceSection>

      <ServiceSection title="Getting an Honest Quote in Greenville">
        <p>
          Not all crawl space quotes are created equal. Use this checklist when comparing proposals
          from Greenville-area contractors:
        </p>
        <BulletList items={quoteChecklist} />
        <p>
          If a quote seems unusually low, ask what liner thickness is specified, whether vent
          sealing and dehumidifier are included, and what warranty covers. The cheapest quote often
          becomes the most expensive when you need to redo the work.
        </p>
      </ServiceSection>

      <ServiceSection title="Related Crawl Space Services" className="bg-neutral">
        <ServiceLinksGrid showTitle={false} />
        <p className="mt-6 text-muted">
          Ready for a quote?{" "}
          <Link href="/contact" className="font-semibold text-primary hover:underline">
            Schedule a free inspection →
          </Link>
        </p>
      </ServiceSection>
    </ServicePageTemplate>
  );
}
