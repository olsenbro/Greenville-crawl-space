import {
  BulletList,
  ServiceComparisonTable,
  ServicePageTemplate,
  ServiceSection,
} from "@/components/service/ServicePageTemplate";
import { AuthorityLink } from "@/components/AuthorityCitation";
import { authorities } from "@/lib/authorities";
import { getServiceSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Crawl Space Encapsulation Service Greenville SC Pros",
  description:
    "Need crawl space encapsulation in Greenville, SC? Local pros install 20-mil vapor barriers, seal vents, and add dehumidifiers. Request your free estimate today.",
  canonical: "/services/crawl-space-encapsulation",
});

const faqs = [
  {
    question: "How long does crawl space encapsulation take?",
    answer:
      "Most standard Greenville homes are completed in 2–4 days depending on crawl space size, existing conditions, and whether mold treatment or drainage work is needed before encapsulation begins.",
  },
  {
    question: "Do I need to leave my home during encapsulation?",
    answer:
      "No. Encapsulation work happens entirely below the home. You may notice brief periods of equipment noise, but there is no need to relocate.",
  },
  {
    question: "Will encapsulation lower my energy bills?",
    answer:
      "Many homeowners see measurable savings. Sealing a damp crawl space reduces the load on your HVAC system by stopping humid air from entering the home through the stack effect.",
  },
  {
    question: "Can encapsulation be done in winter?",
    answer:
      "Yes. Encapsulation is performed year-round in Greenville. Winter can actually be a good time to address moisture before spring humidity arrives.",
  },
  {
    question: "Is a dehumidifier always required?",
    answer:
      "In Upstate South Carolina, a crawl-space-rated dehumidifier is strongly recommended and included in most full encapsulation packages to maintain 45–55% relative humidity year-round.",
  },
];

export default function CrawlSpaceEncapsulationPage() {
  return (
    <ServicePageTemplate
      h1="Crawl Space Encapsulation in Greenville, South Carolina"
      quickAnswer="Crawl space encapsulation in Greenville, SC seals your crawl space with a 20-mil vapor barrier, sealed vents, and a dehumidifier — most projects take 2–4 days and cost $5,000–$9,000."
      intro={[
        "Full crawl space encapsulation seals your crawl space from ground moisture and humid outdoor air — then conditions the space to stay dry year-round.",
        "Connect with trusted crawl space specialists serving Greenville, Spartanburg, Anderson, and the broader Upstate SC region — free estimates and itemized quotes from licensed local pros.",
      ]}
      breadcrumbs={[
        { label: "Services", href: "/services/crawl-space-encapsulation" },
        { label: "Crawl Space Encapsulation" },
      ]}
      serviceSlug="crawl-space-encapsulation"
      schema={getServiceSchema({
        name: "Crawl Space Encapsulation",
        description:
          "Complete crawl space encapsulation including 20-mil vapor barrier, vent sealing, wall insulation, and dehumidifier installation.",
        path: "/services/crawl-space-encapsulation",
      })}
      faqs={faqs}
      ctaBody="Get matched with a local specialist for a free crawl space estimate and written report — so you know exactly what your space needs."
    >
      <ServiceSection title="What Does Crawl Space Encapsulation Mean?">
        <p>
          Encapsulation is the complete sealing and conditioning of your crawl space. Unlike a thin
          sheet of plastic laid on the dirt floor, a professional encapsulation system uses a{" "}
          <strong className="text-dark">20-mil reinforced vapor barrier</strong> that covers the
          entire floor and runs up the foundation walls, sealed at every seam and penetration.
        </p>
        <p>
          Foundation vents are sealed or closed, wall insulation is added where appropriate, and the
          space is converted from an open, humid cavity into a{" "}
          <strong className="text-dark">conditioned, controlled environment</strong> maintained by a
          crawl-space-rated dehumidifier.
        </p>
      </ServiceSection>

      <ServiceSection
        title="Why Do Vented Crawl Spaces Fail in South Carolina's Climate?"
        className="bg-neutral"
      >
        <p>
          Traditional building code once required crawl space vents — a design meant for dry climates
          where outdoor air helps dry the space below. In South Carolina, the opposite happens. Humid
          outdoor air enters through vents, meets cooler surfaces in the crawl space, and condenses.
          This is the <strong className="text-dark">stack effect</strong>: warm air rises through your
          home, pulling replacement air up from the crawl space and distributing moisture and mold
          spores into your living areas — a pattern documented by the{" "}
          <AuthorityLink href={authorities.epaIndoorAir.url}>U.S. EPA on indoor air quality</AuthorityLink>
          .{" "}
          <AuthorityLink href={authorities.buildingScienceCrawlspaces.url}>
            Building science research
          </AuthorityLink>{" "}
          consistently shows that in humid climates like the Upstate, vented crawl spaces perform worse
          than sealed ones.
        </p>
      </ServiceSection>

      <ServiceSection title="What Is Included in a Full Encapsulation?">
        <BulletList
          items={[
            "20-mil reinforced vapor barrier liner on floor and walls, sealed at seams and piers",
            "Foundation vent sealing or permanent vent covers",
            "Wall insulation (rigid foam board or equivalent where applicable)",
            "Crawl-space-rated dehumidifier with condensate drainage",
            "Interior drainage or sump system if standing water is present",
            "Final walkthrough, humidity verification, and warranty documentation",
          ]}
        />
      </ServiceSection>

      <ServiceSection title="How Does Encapsulation Compare to a Vapor Barrier Only?" className="bg-neutral">
        <p>
          A vapor barrier alone stops ground moisture from evaporating upward — but it does not seal
          the crawl space from humid outdoor air entering through vents. Full encapsulation addresses
          both problems.
        </p>
        <ServiceComparisonTable
          headers={["Feature", "Vapor Barrier Only", "Full Encapsulation"]}
          rows={[
            ["Ground moisture blocked", "Yes", "Yes"],
            ["Foundation vents sealed", "No", "Yes"],
            ["Wall coverage to sill plate", "Partial", "Complete"],
            ["Dehumidifier included", "Rarely", "Yes"],
            ["Humidity maintained 45–55%", "Unlikely", "Yes"],
            ["Typical cost (Greenville)", "$1,200–$3,000", "$3,500–$8,000"],
          ]}
        />
      </ServiceSection>

      <ServiceSection title="How Much Does Crawl Space Encapsulation Cost in Greenville, SC?">
        <p>
          Full encapsulation in the Greenville area typically runs{" "}
          <strong className="text-dark">$3,500 to $8,000</strong> for a standard home. Price depends
          on:
        </p>
        <BulletList
          items={[
            "Crawl space square footage and clearance height",
            "Current condition — mold, rot, or standing water requiring prep work",
            "Number of piers, HVAC ducts, and plumbing penetrations to seal around",
            "Whether drainage or a sump pump is needed",
            "Dehumidifier size and installation complexity",
          ]}
        />
        <p>
          Local specialists provide free, itemized estimates so you know the full cost before work
          begins — no surprises.
        </p>
      </ServiceSection>

      <ServiceSection title="What Warranty Comes With Crawl Space Encapsulation?" className="bg-neutral">
        <p>
          Reputable encapsulation contractors in Greenville typically warranty the vapor barrier liner
          for <strong className="text-dark">20–25 years</strong> and workmanship for 5–10 years.
          Dehumidifier units carry separate manufacturer warranties, usually 5 years on parts.
        </p>
        <p>
          Annual dehumidifier filter changes and a quick visual inspection keep your warranty valid and
          your crawl space performing as designed. Your contractor will walk you through all warranty
          terms at project completion.
        </p>
      </ServiceSection>
    </ServicePageTemplate>
  );
}
