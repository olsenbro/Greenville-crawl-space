import {
  BulletList,
  ProcessSteps,
  ServicePageTemplate,
  ServiceSection,
} from "@/components/service/ServicePageTemplate";
import { AuthorityLink } from "@/components/AuthorityCitation";
import { authorities } from "@/lib/authorities";
import { getServiceSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Floor Joist Repair Greenville SC | Crawl Space Pros",
  description:
    "Sagging floors or wood rot in your Greenville, SC crawl space? Local pros repair and sister damaged floor joists before problems spread. Get a free estimate.",
  canonical: "/services/floor-joist-repair",
});

const repairSteps = [
  {
    title: "Inspect from inside and below",
    description:
      "A specialist assesses joist condition from the crawl space and correlates with floor symptoms visible inside the home.",
  },
  {
    title: "Identify moisture source",
    description:
      "Before any repair, the contractor determines what's causing rot — drainage failure, missing vapor barrier, open vents, or plumbing leaks.",
  },
  {
    title: "Sister or replace joists",
    description:
      "Damaged joists are sistered with new lumber or fully replaced depending on extent of rot and structural requirements.",
  },
  {
    title: "Level and support",
    description:
      "Support piers are adjusted or added as needed to restore proper floor level and load distribution.",
  },
  {
    title: "Encapsulate to protect the repair",
    description:
      "Moisture control through encapsulation ensures the repair lasts — fixing joists without fixing moisture means repeat failure.",
  },
];

const faqs = [
  {
    question: "How do I know if my floor joists are damaged?",
    answer:
      "Common signs include soft or bouncy spots in floors, squeaking that worsens over time, visible sag in floor lines, and doors that stick. A crawl space inspection confirms the extent of joist damage.",
  },
  {
    question: "Is sistering as strong as replacing a joist?",
    answer:
      "When done correctly by a qualified contractor, sistering restores full load-bearing capacity for joists with localized damage. Full replacement is required when more than roughly 30% of the joist cross-section is compromised.",
  },
  {
    question: "How long does floor joist repair take?",
    answer:
      "Single joist sistering can often be completed in a day. Multiple joists or full replacements typically take 2–4 days. Encapsulation scheduled afterward adds 2–3 additional days.",
  },
  {
    question: "Should I repair joists before or after encapsulation?",
    answer:
      "Structural repair comes first, then encapsulation. However, moisture source must be identified before repair — otherwise new wood will rot the same way. Qualified contractors typically assess everything in one visit and sequence work correctly.",
  },
  {
    question: "How much does floor joist repair cost in Greenville?",
    answer:
      "Sistering a single joist runs $100–$300. Most multi-joist repair projects cost $2,000–$5,000. Encapsulation to stop future moisture damage is usually recommended afterward.",
  },
];

export default function FloorJoistRepairPage() {
  return (
    <ServicePageTemplate
      h1="Floor Joist Repair in Greenville, South Carolina"
      quickAnswer="Floor joist repair in Greenville, SC sistering or replaces moisture-damaged joists — most projects cost $2,000–$5,000 and take 2–4 days depending on how many joists are affected."
      intro={[
        "Soft spots, squeaking floors, and visible sag often trace back to moisture-damaged joists in your crawl space.",
        "Connect with local specialists who sister and replace damaged floor joists throughout Greenville and Upstate SC — and address the moisture that caused the damage.",
      ]}
      breadcrumbs={[
        { label: "Services", href: "/services/floor-joist-repair" },
        { label: "Floor Joist Repair" },
      ]}
      serviceSlug="floor-joist-repair"
      schema={getServiceSchema({
        name: "Floor Joist Repair",
        description:
          "Floor joist sistering, replacement, and structural repair for moisture-damaged crawl spaces in Greenville, SC.",
        path: "/services/floor-joist-repair",
      })}
      faqs={faqs}
      ctaBody="Soft floors don't fix themselves. Request a free estimate before the damage spreads."
    >
      <ServiceSection title="What Are Floor Joists and Why Do They Fail?">
        <p>
          Floor joists are the horizontal structural members that support your subfloor and everything
          above it. They&apos;re typically made of dimensional lumber (2×8, 2×10, or 2×12) and span from
          sill plate to support beam or pier.
        </p>
        <p>
          In Greenville&apos;s humid climate, joists in unencapsulated crawl spaces absorb moisture over
          time. Persistent moisture leads to{" "}
          <strong className="text-dark">wood rot, loss of structural integrity, and sagging floors</strong>
          .{" "}
          <AuthorityLink href={authorities.usdaWoodDecay.url}>
            USDA Forest Products Laboratory research
          </AuthorityLink>{" "}
          shows fungal decay accelerates when wood moisture stays above 20%. The failure chain is
          predictable: moisture → rot → flex → structural compromise.
        </p>
      </ServiceSection>

      <ServiceSection title="What Are the Signs of Floor Joist Damage?" className="bg-neutral">
        <BulletList
          items={[
            "Soft or spongy spots when walking on the floor",
            "Increased squeaking, especially near bathrooms or kitchens",
            "Visible sag or unlevel areas in hardwood, tile, or vinyl flooring",
            "Gaps forming between floor and baseboards",
            "Doors that stick or swing on their own as the frame shifts",
            "Ripples or cracks in tile floors over affected areas",
          ]}
        />
      </ServiceSection>

      <ServiceSection title="When Do You Need Sistering vs. Full Joist Replacement?">
        <p>
          <strong className="text-dark">Sistering</strong> attaches a new joist of equal or greater
          dimension alongside the damaged one, bolted through the full length. It&apos;s faster, less
          invasive, and typically costs $1,000–$4,000 depending on joist length and access. Best for
          localized rot or cracking with the majority of the joist still intact.
        </p>
        <p>
          <strong className="text-dark">Full replacement</strong> removes the damaged joist entirely
          and installs new lumber. Required when rot has consumed a significant portion of the joist,
          when sistering can&apos;t restore adequate load capacity, or when joists have split or failed at
          support points. Costs more but fully restores structural integrity.
        </p>
      </ServiceSection>

      <ServiceSection title="What Is the Typical Floor Joist Repair Process?" className="bg-neutral">
        <ProcessSteps steps={repairSteps} />
      </ServiceSection>

      <ServiceSection title="How Much Does Floor Joist Repair Cost in Greenville, SC?">
        <BulletList
          items={[
            "Single joist sistering: $800–$1,500",
            "Multiple joist sistering (2–4 joists): $1,500–$4,000",
            "Full joist replacement: $1,200–$2,500 per joist",
            "Pier adjustment or addition alongside joist work: $300–$800 per pier",
          ]}
        />
        <p>
          Pricing depends on joist span, access difficulty, and extent of damage. Free estimates from
          local specialists include written quotes with no obligation.
        </p>
      </ServiceSection>

      <ServiceSection title="Why Should You Fix the Moisture Source First?" className="bg-neutral">
        <p>
          Repairing joists without addressing moisture is a temporary fix. New wood in a damp crawl
          space will rot on the same timeline as the old. That&apos;s why contractors always recommend
          encapsulation — vapor barrier, vent sealing, and dehumidifier — as the final step in any
          joist repair project.
        </p>
        <p>
          Encapsulation protects your repair investment and prevents the problem from recurring. Many
          homeowners combine joist repair and encapsulation into a single project for efficiency and
          warranty coverage.
        </p>
      </ServiceSection>
    </ServicePageTemplate>
  );
}
