import {
  BulletList,
  ProcessSteps,
  ServicePageTemplate,
  ServiceSection,
} from "@/components/service/ServicePageTemplate";
import { getServiceSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Crawl Space Repair Greenville SC | Mold & Structure",
  description:
    "Crawl space repair in Greenville, SC for sagging joists, wood rot, mold damage, and failing piers. Connect with local specialists and get a free estimate today.",
  canonical: "/crawl-space-repair",
});

const repairSteps = [
  {
    title: "Assess the damage",
    description:
      "A specialist inspects joists, piers, vapor barriers, and drainage. You receive a written report with photos documenting every issue found.",
  },
  {
    title: "Remove damaged material",
    description:
      "Rotted wood, failed insulation, and collapsed liner sections are removed safely before any structural work begins.",
  },
  {
    title: "Treat mold",
    description:
      "Active mold on joists and subfloor is treated with professional antimicrobial products — never skipped or covered over.",
  },
  {
    title: "Repair structure",
    description:
      "Sagging joists are sistered or replaced. Failed piers are shored or rebuilt. Support posts are corrected and leveled.",
  },
  {
    title: "Encapsulate to prevent recurrence",
    description:
      "Once repairs are complete, contractors recommend encapsulation to stop the moisture that caused the damage in the first place.",
  },
];

const faqs = [
  {
    question: "How do I know if my crawl space damage is structural?",
    answer:
      "Signs include bouncing or soft floors, doors that stick or won't latch, visible sag in floor lines, and rot you can see on joists during inspection. If you're unsure, request a free estimate — structural issues worsen with time.",
  },
  {
    question: "Can crawl space damage affect my home sale?",
    answer:
      "Yes. Home inspectors routinely flag crawl space moisture, mold, and structural damage. Buyers often request repairs or price reductions. Addressing issues before listing protects your sale price and timeline.",
  },
  {
    question: "How long do crawl space repairs take?",
    answer:
      "Minor repairs may be completed in a day. Structural joist work and mold treatment typically take 2–5 days depending on extent. Encapsulation added afterward may extend the timeline by 1–2 days.",
  },
  {
    question: "Will insurance cover crawl space repair?",
    answer:
      "Standard homeowners policies typically do not cover gradual moisture damage or rot. Sudden events like plumbing leaks may be covered. Contractors document everything during assessment to support any claim you choose to file.",
  },
];

export default function CrawlSpaceRepairPage() {
  return (
    <ServicePageTemplate
      h1="Crawl Space Repair in Greenville, South Carolina"
      intro={[
        "If your floors are bouncing, doors are sticking, or an inspector flagged your crawl space — you need repair now, not later.",
        "Connect with local specialists who repair sagging joists, wood rot, mold damage, and failing support systems throughout Greenville and Upstate SC.",
      ]}
      breadcrumbs={[
        { label: "Services", href: "/crawl-space-repair" },
        { label: "Crawl Space Repair" },
      ]}
      serviceSlug="crawl-space-repair"
      schema={getServiceSchema({
        name: "Crawl Space Repair",
        description:
          "Crawl space structural repair including joist sistering, pier repair, mold treatment, and drainage correction in Greenville, SC.",
        path: "/crawl-space-repair",
      })}
      faqs={faqs}
      ctaHeading="Don't Wait — Structural Damage Gets Worse"
      ctaBody="Request a free crawl space estimate. A local specialist will document the damage and outline a clear repair plan."
    >
      <ServiceSection title="Types of Crawl Space Damage Local Pros Repair">
        <BulletList
          items={[
            "Sagging or rotted floor joists from long-term moisture exposure",
            "Failed or sinking support piers and posts",
            "Mold-damaged wood on joists, subfloor, and sill plates",
            "Collapsed or torn vapor barriers allowing moisture back in",
            "Drainage failures causing standing water after rain",
            "Pest-damaged structural members (often linked to moisture problems)",
          ]}
        />
      </ServiceSection>

      <ServiceSection title="Warning Signs of Serious Structural Damage" className="bg-neutral">
        <p>
          Do not ignore these signals — they often mean moisture damage has progressed beyond the crawl
          space:
        </p>
        <BulletList
          items={[
            "Floors that bounce or feel soft when you walk on them",
            "Interior doors that stick, swing open, or won't latch",
            "Visible sag or unlevel lines in floor or ceiling",
            "Dark staining or visible rot on joists (visible from access points)",
            "Increased pest activity — termites and carpenter ants target moist wood",
            "Musty odors that persist despite cleaning and ventilation",
          ]}
        />
      </ServiceSection>

      <ServiceSection title="Typical Crawl Space Repair Process">
        <ProcessSteps steps={repairSteps} />
      </ServiceSection>

      <ServiceSection title="Repair vs. Full Joist Replacement" className="bg-neutral">
        <p>
          <strong className="text-dark">Sistering</strong> — bolting a new joist alongside a damaged
          one — is faster, less invasive, and costs significantly less when the existing joist retains
          enough integrity to support the repair. It&apos;s appropriate when damage is localized and less
          than 30% of the joist cross-section is compromised.
        </p>
        <p>
          <strong className="text-dark">Full replacement</strong> is required when joists are severely
          rotted, split, or structurally failed. Replacement takes longer and costs more but restores
          full load-bearing capacity. Contractors recommend the least invasive option that meets
          structural requirements.
        </p>
      </ServiceSection>

      <ServiceSection title="Crawl Space Repair Cost in Greenville">
        <BulletList
          items={[
            "Minor repairs (small mold treatment, liner patches, pier adjustment): $500–$2,000",
            "Moderate structural repairs (joist sistering, multiple piers): $2,000–$5,000",
            "Major structural repairs (multiple joist replacements, drainage systems): $5,000–$8,000+",
          ]}
        />
        <p>
          Every home is different. A free estimate includes itemized pricing so you know exactly
          what you&apos;re paying for before any work begins.
        </p>
      </ServiceSection>

      <ServiceSection title="Real Estate Disclosure: What Inspectors Look For" className="bg-neutral">
        <p>
          South Carolina home inspectors routinely enter crawl spaces and document moisture, mold, wood
          rot, and structural deficiencies. Findings appear on inspection reports and often become
          negotiation points — or deal-breakers.
        </p>
        <p>
          If you&apos;re selling, addressing crawl space issues before listing prevents last-minute price
          reductions and closing delays. If you&apos;re buying, a pre-purchase crawl space inspection protects
          you from inheriting expensive hidden damage.
        </p>
      </ServiceSection>
    </ServicePageTemplate>
  );
}
