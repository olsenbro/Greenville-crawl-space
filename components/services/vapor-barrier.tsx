import {
  BulletList,
  ProcessSteps,
  ServiceComparisonTable,
  ServicePageTemplate,
  ServiceSection,
} from "@/components/service/ServicePageTemplate";
import { AuthorityLink } from "@/components/AuthorityCitation";
import { authorities } from "@/lib/authorities";
import { getServiceSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Vapor Barrier Installation Greenville SC | Crawl Space",
  description:
    "Stop crawl space moisture in Greenville, SC with pro vapor barrier installation. 20-mil liners prevent mold, rot, and musty odors upstairs. Get a free estimate.",
  canonical: "/services/vapor-barrier",
});

const installSteps = [
  {
    title: "Inspect and measure",
    description:
      "A specialist assesses your crawl space size, current liner condition, moisture sources, and any mold or drainage issues that need addressing first.",
  },
  {
    title: "Clear the space",
    description:
      "Old liner, debris, and failed insulation are removed. The ground is graded if needed to prevent pooling under the new barrier.",
  },
  {
    title: "Install the liner",
    description:
      "20-mil reinforced material is laid across the floor, run up foundation walls, and sealed at seams, piers, and penetrations with specialized tape and fasteners.",
  },
  {
    title: "Verify and document",
    description:
      "The contractor inspects all seams, confirms coverage is complete, and provides maintenance guidance and warranty information.",
  },
];

const faqs = [
  {
    question: "Is a vapor barrier enough in Greenville's climate?",
    answer:
      "A vapor barrier alone stops ground moisture but does not seal humid outdoor air entering through foundation vents. In Upstate SC, local specialists typically recommend full encapsulation with vent sealing and a dehumidifier for complete moisture control.",
  },
  {
    question: "How thick should a crawl space vapor barrier be?",
    answer:
      "Licensed local pros install 20-mil reinforced liners for residential crawl spaces. Thinner 6-mil poly sheeting tears easily on gravel and pier footings and rarely lasts more than a few years.",
  },
  {
    question: "How long does vapor barrier installation take?",
    answer:
      "Most single-family homes are completed in one day for barrier-only installation, assuming the space is accessible and no significant prep work is required.",
  },
  {
    question: "Can I install a vapor barrier myself?",
    answer:
      "DIY installation is possible but difficult to do correctly in a tight crawl space. Proper seam sealing, wall attachment, and pier wrapping require experience — gaps and tears are the most common failure points in DIY jobs.",
  },
  {
    question: "How much does vapor barrier installation cost in Greenville?",
    answer:
      "Professional 20-mil vapor barrier installation typically runs $1,500–$3,500 in Greenville, depending on crawl space size and any prep work required.",
  },
];

export default function VaporBarrierPage() {
  return (
    <ServicePageTemplate
      h1="Vapor Barrier Installation in Greenville, South Carolina"
      quickAnswer="Vapor barrier installation in Greenville, SC starts at $1,500–$3,500 for a professional 20-mil liner and usually completes in one day for a standard crawl space."
      intro={[
        "A properly installed vapor barrier stops ground moisture from evaporating into your crawl space — the first line of defense against mold, rot, and musty odors.",
        "Connect with local specialists who install commercial-grade 20-mil reinforced liners throughout Greenville and the Upstate SC region.",
      ]}
      breadcrumbs={[
        { label: "Services", href: "/services/vapor-barrier" },
        { label: "Vapor Barrier Installation" },
      ]}
      serviceSlug="vapor-barrier"
      schema={getServiceSchema({
        name: "Vapor Barrier Installation",
        description:
          "Professional 20-mil reinforced vapor barrier installation for crawl spaces in Greenville, SC.",
        path: "/services/vapor-barrier",
      })}
      faqs={faqs}
    >
      <ServiceSection title="What Does a Vapor Barrier Do?">
        <p>
          Ground moisture constantly evaporates upward from soil. Without a barrier, that moisture
          saturates the air in your crawl space, condenses on floor joists and insulation, and creates
          the conditions for mold and wood rot. A vapor barrier acts as a{" "}
          <strong className="text-dark">physical block between the ground and your home&apos;s structure</strong>
          , stopping that evaporation at the source.
        </p>
      </ServiceSection>

      <ServiceSection title="How Does a Vapor Barrier Compare to Full Encapsulation?" className="bg-neutral">
        <p>
          The key difference: a vapor barrier addresses ground moisture only. It does not seal
          foundation vents or condition the air. In humid climates, outdoor air still enters through
          vents and can keep relative humidity above safe levels even with a floor liner in place — why
          the{" "}
          <AuthorityLink href={authorities.doeCrawlspace.url}>DOE recommends sealing crawl spaces</AuthorityLink>{" "}
          in regions like Upstate South Carolina.
        </p>
        <ServiceComparisonTable
          headers={["", "Vapor Barrier", "Full Encapsulation"]}
          rows={[
            ["Blocks ground moisture", "Yes", "Yes"],
            ["Seals foundation vents", "No", "Yes"],
            ["Conditions crawl space air", "No", "Yes"],
            ["Includes dehumidifier", "No", "Yes"],
            ["Best for humid climates", "Partial solution", "Complete solution"],
          ]}
        />
      </ServiceSection>

      <ServiceSection title="What Makes a Quality Vapor Barrier Liner?">
        <ServiceComparisonTable
          headers={["Liner Type", "Thickness", "Durability", "Professional Recommendation"]}
          rows={[
            ["Thin polyethylene sheeting", "3–6 mil", "Tears easily, short lifespan", "Not recommended"],
            ["Standard poly barrier", "6–10 mil", "Better, but still prone to punctures", "Minimum acceptable"],
            ["Reinforced commercial liner", "20 mil", "Puncture-resistant, 20+ year lifespan", "What pros install"],
          ]}
        />
      </ServiceSection>

      <ServiceSection title="How Do You Know Your Vapor Barrier Has Failed?" className="bg-neutral">
        <BulletList
          items={[
            "Visible tears, holes, or sections pulled away from walls",
            "Gaps around piers where moisture is entering",
            "Standing water or damp soil visible despite liner presence",
            "Mold or mildew on floor joists above the liner",
            "Musty odors returning after previous installation",
            "Liner is thin, brittle, or discolored from age",
          ]}
        />
      </ServiceSection>

      <ServiceSection title="What Is the Vapor Barrier Installation Process?">
        <ProcessSteps steps={installSteps} />
      </ServiceSection>

      <ServiceSection title="How Much Does Vapor Barrier Installation Cost in Greenville, SC?" className="bg-neutral">
        <p>
          Vapor barrier installation only — without vent sealing or dehumidifier — typically runs{" "}
          <strong className="text-dark">$1,200 to $3,000</strong> in the Greenville area, depending
          on crawl space square footage, clearance height, number of piers, and prep work required.
        </p>
        <p>
          During a free estimate, a local specialist will recommend whether barrier-only installation
          is sufficient for your situation or whether full encapsulation is the better long-term
          investment.
        </p>
      </ServiceSection>
    </ServicePageTemplate>
  );
}
