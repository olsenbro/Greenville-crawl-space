import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PhoneLink } from "@/components/PhoneLink";
import { AuthoritySection } from "@/components/AuthorityCitation";
import { SchemaScript } from "@/components/SchemaScript";
import {
  BulletList,
  ServiceComparisonTable,
  ServiceSection,
} from "@/components/service/ServicePageTemplate";
import { getArticleSchema, getFaqPageSchema } from "@/lib/schema";
import { getAuthorityForPath } from "@/lib/authorities";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildPageMetadata({
  title: "Crawl Space Encapsulation vs. Vapor Barrier | What's the Difference?",
  description:
    "Not sure if you need full encapsulation or just a vapor barrier? This guide explains the difference for South Carolina homeowners — with costs, pros, and cons.",
  canonical: "/encapsulation-vs-vapor-barrier",
});

const comparisonFaqs = [
  {
    question: "What is the difference between crawl space encapsulation and a vapor barrier?",
    answer:
      "A vapor barrier is a plastic liner installed over crawl space soil to block ground moisture from evaporating upward. Crawl space encapsulation is a complete system that includes a heavy-duty liner on the floor and walls, sealed foundation vents, wall insulation, and typically a commercial dehumidifier to maintain controlled humidity. Encapsulation addresses both ground moisture and humid outdoor air; a vapor barrier addresses ground moisture only.",
  },
  {
    question: "Is a vapor barrier enough in South Carolina?",
    answer:
      "For most homes in Upstate South Carolina, a vapor barrier alone is not sufficient. The region's high humidity, red clay soils, and traditional open-vent crawl space construction mean outdoor air entering through vents keeps relative humidity elevated even when ground moisture is blocked. Full encapsulation with vent sealing and dehumidification is the approach recommended by building science professionals for humid climates.",
  },
  {
    question: "How much does encapsulation cost compared to a vapor barrier?",
    answer:
      "In the Greenville area, vapor barrier installation typically runs $1,500–$3,500 for professional-grade 20-mil material. Full crawl space encapsulation with vent sealing, wall coverage, and a dehumidifier typically costs $5,000–$9,000. The price difference reflects additional materials, labor, and equipment required to control both ground moisture and airborne humidity.",
  },
];

export default function EncapsulationVsVaporBarrierPage() {
  return (
    <>
      <SchemaScript
        schema={[
          getArticleSchema({
            path: "/encapsulation-vs-vapor-barrier",
            headline: "Crawl Space Encapsulation vs. Vapor Barrier: What's the Difference?",
            description:
              "An educational guide for South Carolina homeowners comparing crawl space vapor barriers and full encapsulation systems.",
          }),
          getFaqPageSchema(comparisonFaqs),
        ]}
      />

      <Breadcrumbs items={[{ label: "Encapsulation vs. Vapor Barrier" }]} path="/encapsulation-vs-vapor-barrier" />

      <section className="border-b border-primary/10 bg-neutral section-padding">
        <div className="container-narrow mx-auto max-w-3xl">
          <p className="label-caps">Guide</p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-balance text-primary sm:text-5xl">
            Crawl Space Encapsulation vs. Vapor Barrier: What&apos;s the Difference? (SC Guide)
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            If you are researching crawl space moisture solutions, you have probably encountered two
            terms that sound similar but describe very different approaches. This guide explains
            what each one actually means, how they perform in South Carolina&apos;s climate, and how
            to decide which is appropriate for your home.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto max-w-3xl">
          <div className="rounded-xl border-l-4 border-primary bg-neutral p-6">
            <p className="label-caps text-primary">Quick Answer</p>
            <p className="mt-3 text-lg leading-relaxed text-dark">
              A <strong>vapor barrier</strong> is a plastic liner on your crawl space floor that
              blocks ground moisture from rising into the space.{" "}
              <strong>Crawl space encapsulation</strong> is a complete system: heavy-duty liner on
              floor and walls, sealed foundation vents, wall insulation, and a commercial dehumidifier
              that maintains 45–55% humidity year-round. In Upstate South Carolina&apos;s humid
              climate, a vapor barrier alone rarely solves moisture problems because open vents still
              pull humid outdoor air inside. Full encapsulation is what most local contractors
              recommend for lasting results.
            </p>
          </div>
        </div>
      </section>

      <ServiceSection title="What a Vapor Barrier Is — and What It Actually Does">
        <p>
          A crawl space vapor barrier is a sheet of plastic — typically polyethylene — installed over
          the soil floor of your crawl space. Its purpose is straightforward: stop ground moisture
          from evaporating upward into the crawl space air and onto your floor joists.
        </p>
        <p>
          In building science terms, the barrier reduces moisture transmission from the soil by
          creating a physical separation between the ground and the space below your home. When
          installed correctly with sealed seams and coverage around piers, it can significantly
          reduce one major moisture source.
        </p>
        <p>
          What it does <em>not</em> do: seal foundation vents, cover foundation walls, condition the
          air, or actively remove humidity already present in the crawl space. It is a passive
          barrier — effective against ground evaporation, but silent on every other moisture pathway.{" "}
          <Link href="/vapor-barrier" className="font-semibold text-primary hover:underline">
            Learn more about vapor barrier installation →
          </Link>
        </p>
      </ServiceSection>

      <ServiceSection title="What Full Encapsulation Includes That a Vapor Barrier Doesn't" className="bg-neutral">
        <p>
          Crawl space encapsulation treats the entire space as a conditioned zone — similar in concept
          to how your home&apos;s interior is sealed and climate-controlled. A complete encapsulation
          system typically includes:
        </p>
        <BulletList
          items={[
            "20-mil reinforced vapor barrier on the floor AND up foundation walls to the sill plate",
            "All foundation vents sealed or permanently closed with rated vent covers",
            "Rigid foam board or equivalent insulation on foundation walls where applicable",
            "A crawl-space-rated commercial dehumidifier with automatic condensate drainage",
            "Sealed seams, taped penetrations, and wrapped piers — no gaps for air or moisture",
            "Optional interior drainage or sump system if standing water is a recurring issue",
          ]}
        />
        <p>
          The result is a sealed, controlled environment maintained at 45–55% relative humidity
          regardless of outdoor conditions. This is fundamentally different from laying plastic on
          the floor and hoping for the best.{" "}
          <Link
            href="/crawl-space-encapsulation"
            className="font-semibold text-primary hover:underline"
          >
            See what full encapsulation involves →
          </Link>
        </p>
      </ServiceSection>

      <ServiceSection title="Why South Carolina's Climate Requires More Than a Vapor Barrier">
        <p>
          Building codes in much of the United States historically required crawl space foundation
          vents — the theory being that outdoor air would dry the space below. That theory was
          developed for dry climates. It fails in humid regions, and South Carolina is one of the
          most humid states in the country.
        </p>
        <p>
          Greenville averages roughly 70% outdoor relative humidity annually, with summer dew points
          regularly exceeding 70°F. When humid outdoor air enters a crawl space through open vents,
          it contacts cooler surfaces — floor joists, ductwork, the vapor barrier itself — and
          condenses. The space becomes wetter, not drier. This is the{" "}
          <strong className="text-dark">stack effect</strong> in action: warm air rises through your
          home, pulling replacement air up from the crawl space and distributing moisture and mold
          spores into your living areas.
        </p>
        <p>
          Red clay soil common throughout Upstate SC adds another layer. Clay retains moisture
          against foundation walls and releases it slowly over days or weeks after rain — keeping
          crawl space humidity elevated even during dry weather. A floor-level vapor barrier blocks
          evaporation from soil but cannot stop humid air from entering through vents or condensation
          from forming on joists.
        </p>
        <p>
          Research from building science organizations — including work popularized by Advanced
          Energy and the U.S. Department of Energy — consistently shows that sealed, conditioned
          crawl spaces outperform vented ones in humid climates across every measured metric:
          humidity control, energy efficiency, mold prevention, and indoor air quality.
        </p>
      </ServiceSection>

      <ServiceSection
        title="When a Vapor Barrier Alone Might Be Sufficient"
        className="bg-neutral"
      >
        <p>
          Honesty matters in a guide like this: there are situations where a vapor barrier without
          full encapsulation may be adequate. They are just uncommon in South Carolina.
        </p>
        <BulletList
          items={[
            "Homes in arid climates where outdoor humidity is consistently low — not applicable in SC",
            "Crawl spaces with extremely minor ground moisture and no vent-related humidity issues",
            "Temporary or budget-limited interventions on properties being sold as-is",
            "Spaces already sealed from outdoor air by other means, where only ground moisture remains",
          ]}
        />
        <p>
          Even in these cases, the vapor barrier must be professional-grade (20-mil reinforced, not
          6-mil builder poly), properly sealed at seams and piers, and run up foundation walls — not
          simply laid on the dirt floor. A thin sheet with gaps and tears provides a false sense of
          security while conditions below continue deteriorating.
        </p>
      </ServiceSection>

      <ServiceSection title="Feature-by-Feature Comparison">
        <ServiceComparisonTable
          headers={["Feature", "Vapor Barrier Only", "Full Encapsulation"]}
          rows={[
            ["Blocks ground moisture evaporation", "Yes", "Yes"],
            ["Covers foundation walls", "Rarely / partial", "Yes — full wall coverage"],
            ["Foundation vents sealed", "No", "Yes"],
            ["Wall insulation added", "No", "Yes"],
            ["Commercial dehumidifier", "No", "Yes"],
            ["Maintains 45–55% RH year-round", "Unlikely in SC", "Yes"],
            ["Addresses stack effect air infiltration", "No", "Yes"],
            ["Mold prevention (humid climate)", "Partial", "Comprehensive"],
            ["Typical lifespan", "5–10 years (6-mil) / 20+ years (20-mil)", "20–25+ years"],
            ["Recommended for Upstate SC", "Rarely sufficient", "Industry standard"],
          ]}
        />
      </ServiceSection>

      <ServiceSection title="Cost Comparison" className="bg-neutral">
        <p>
          Cost is one of the most common reasons homeowners choose vapor barrier-only installation.
          Understanding what you are paying for — and what you are not — helps set realistic
          expectations.
        </p>
        <ServiceComparisonTable
          headers={["Scope", "Typical Greenville Cost", "What You Get"]}
          rows={[
            [
              "Thin vapor barrier (6-mil DIY or builder grade)",
              "$800–$2,000",
              "Floor coverage only; tears easily; short lifespan",
            ],
            [
              "Professional vapor barrier (20-mil)",
              "$1,500–$3,500",
              "Reinforced floor + wall liner; no vent sealing or dehumidifier",
            ],
            [
              "Full encapsulation (no dehumidifier)",
              "$3,500–$7,000",
              "Liner, vent sealing, wall insulation; missing active humidity control",
            ],
            [
              "Full encapsulation + dehumidifier",
              "$5,000–$9,000",
              "Complete system; recommended for SC climate",
            ],
          ]}
        />
        <p>
          The gap between a professional vapor barrier and full encapsulation is typically
          $2,000–$5,000 — meaningful, but often less than the cost of mold remediation, joist repair,
          or the energy waste from an uncontrolled crawl space over five to ten years.{" "}
          <Link
            href="/crawl-space-encapsulation-cost"
            className="font-semibold text-primary hover:underline"
          >
            See our full 2025 cost breakdown →
          </Link>
        </p>
      </ServiceSection>

      <ServiceSection title="What Most Greenville Contractors Actually Recommend — and Why">
        <p>
          Ask ten crawl space contractors in the Upstate what they recommend for a typical home with
          moisture concerns, and the majority will point toward full encapsulation with
          dehumidification. This is not upselling — it reflects decades of field experience in a
          climate where barrier-only installations frequently fail.
        </p>
        <p>
          The pattern is predictable: a homeowner installs a vapor barrier, notices improvement for
          a season or two, then calls back when musty odors return, mold reappears on joists, or
          humidity readings climb back above 60%. The barrier did its job blocking ground moisture.
          The vents continued delivering humid air. The missing piece was always active humidity
          control and vent sealing.
        </p>
        <p>
          Reputable contractors in Greenville will tell you honestly when a barrier-only approach
          might work — and when it will not. They will also explain that installing a 6-mil sheet
          from the hardware store is not equivalent to a professional 20-mil installation, even if
          both are technically &ldquo;vapor barriers.&rdquo; Material quality and installation
          precision determine outcomes more than the label on the product.
        </p>
      </ServiceSection>

      <ServiceSection title="How to Choose the Right Solution for Your Home" className="bg-neutral">
        <p>Start with a free estimate — not a product decision. A qualified crawl space assessment
          measures current humidity, documents moisture sources, checks joist condition, and
          identifies whether vents, drainage, or ground moisture is the primary driver. That
          assessment determines the right scope of work, not a generic recommendation.</p>
        <p>
          <strong className="text-dark">Consider vapor barrier only if:</strong> the assessment confirms
          ground moisture is the sole issue, vents are already sealed or absent, humidity stays
          below 60% without active dehumidification, and no mold or structural damage is present.
        </p>
        <p>
          <strong className="text-dark">Choose full encapsulation if:</strong> you are in Upstate SC
          (which applies to most readers of this guide), humidity readings exceed 60%, musty odors
          are present indoors, mold or rot exists on joists, open foundation vents are present, or
          you want a long-term solution with warranty coverage rather than a partial fix.
        </p>
        <p>
          When in doubt, the cost difference between a professional vapor barrier and full
          encapsulation is smaller than the cost of doing the job twice. Many homeowners who start
          with barrier-only end up encapsulating within a few years anyway — paying for both projects
          separately.{" "}
          <Link href="/faq" className="font-semibold text-primary hover:underline">
            Read more in our FAQ →
          </Link>
        </p>
      </ServiceSection>

      <AuthoritySection source={getAuthorityForPath("/encapsulation-vs-vapor-barrier")} />

      <section className="border-t border-primary/10 bg-primary section-padding text-white">
        <div className="container-narrow mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Not Sure Which Option Is Right for Your Home?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            A free crawl space estimate takes the guesswork out of the decision. A local specialist
            will measure humidity, document conditions, and recommend the smallest scope of work that
            will actually solve the problem — whether that is a vapor barrier, full encapsulation, or
            something in between.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-base"
            >
              {siteConfig.cta.primary}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <PhoneLink className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white hover:text-primary">
              <Phone className="h-5 w-5" aria-hidden="true" />
              {siteConfig.phone}
            </PhoneLink>
          </div>
        </div>
      </section>
    </>
  );
}
