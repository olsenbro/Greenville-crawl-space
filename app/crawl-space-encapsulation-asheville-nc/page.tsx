import Link from "next/link";
import {
  BulletList,
  ProcessSteps,
  ServiceComparisonTable,
  ServicePageTemplate,
  ServiceSection,
} from "@/components/service/ServicePageTemplate";
import { ServiceLinksGrid } from "@/components/service/ServiceLinksGrid";
import { AuthorityLink } from "@/components/AuthorityCitation";
import { SchemaScript } from "@/components/SchemaScript";
import type { AuthoritySource } from "@/lib/authorities";
import { combineSchemas } from "@/lib/schema";
import type { SchemaObject } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const PATH = "/crawl-space-encapsulation-asheville-nc";
const TITLE = "Crawl Space Encapsulation & Repair Asheville NC | After Helene";
const DESCRIPTION =
  "Crawl space encapsulation, drying, and repair in Asheville, NC and Buncombe County — including homes still recovering from Hurricane Helene flooding. Free estimate.";
const LAST_UPDATED = "2026-09-25";
const LAST_UPDATED_LABEL = "September 25, 2026";

// Asheville sits in NC — override the site-wide SC geo tags for this page only.
const baseMetadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, canonical: PATH });
export const metadata = {
  ...baseMetadata,
  other: {
    "geo.region": "US-NC",
    "geo.placename": "Asheville, North Carolina",
    "geo.position": "35.5951;-82.5515",
    ICBM: "35.5951, -82.5515",
    "DC.coverage": "Asheville, North Carolina",
  },
};

const sources = {
  nwsFlood: {
    org: "National Weather Service (Greenville-Spartanburg)",
    title: "Historic Flooding From Helene, Sept. 26–27, 2024",
    url: "https://www.weather.gov/gsp/20240926-20240927_flood_eventSum",
    context:
      "NWS event summary with record river crests for the French Broad at Asheville and the Swannanoa at Biltmore Village.",
  },
  climateGov: {
    org: "NOAA Climate.gov",
    title: "Hurricane Helene's Extreme Rainfall and Catastrophic Inland Flooding",
    url: "https://www.climate.gov/news-features/event-tracker/hurricane-helenes-extreme-rainfall-and-catastrophic-inland-flooding",
    context: "NOAA analysis of Helene rainfall totals across western North Carolina.",
  },
  buncombeAfterAction: {
    org: "Buncombe County",
    title: "Helene After-Action Findings",
    url: "https://www.buncombenc.gov/m/newsflash/home/detail/389",
    context:
      "County figures on homes destroyed, homes needing significant repair, and properties damaged.",
  },
  buncombeHousing: {
    org: "Buncombe County",
    title: "Helene Recovery — Housing",
    url: "https://www.buncombenc.gov/805/Helene-Recovery---Housing",
    context:
      "Current county housing recovery resources, including the Reduce to Rebuild permit-fee program.",
  },
  renewNc: {
    org: "NC Office of Recovery and Resiliency",
    title: "Renew NC Single-Family Housing Program",
    url: "https://www.wncrecovery.nc.gov/recovery-resources/renew-nc-single-family-housing-program",
    context: "State Helene home repair program — new applications closed January 31, 2026.",
  },
  ncStateFlood: {
    org: "NC State Extension",
    title: "Dealing With Potential Moisture Problems After a Flood",
    url: "https://content.ces.ncsu.edu/dealing-with-potential-moisture-problems-after-a-flood",
    context:
      "Post-flood crawl space guidance: remove wet insulation, dry framing, and verify wood moisture before closing up.",
  },
  epaMold: {
    org: "U.S. EPA",
    title: "A Brief Guide to Mold, Moisture and Your Home",
    url: "https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home",
    context: "EPA guidance to dry water-damaged areas within 24–48 hours and keep humidity below 60%.",
  },
  fema: {
    org: "FEMA / NFIP",
    title: "Basement and Crawlspace Flood Coverage",
    url: "https://agents.floodsmart.gov/sites/default/files/media/document/2025-07/fema-nfip-basement-flooding-fact-sheet-01-2022.pdf",
    context: "What NFIP flood insurance does and does not cover below the lowest elevated floor.",
  },
  advancedEnergy: {
    org: "Advanced Energy",
    title: "Closed Crawl Spaces: A Quick Reference Guide",
    url: "https://www.advancedenergy.org/wp-content/uploads/2023/11/2.pdf",
    context:
      "North Carolina field research that found closed crawl spaces stayed drier than vented ones and supported NC's 2004 code change.",
  },
  ncosfm: {
    org: "NC Office of State Fire Marshal",
    title: "R409 Closed Crawl Space — Moisture Control, Permitting",
    url: "https://www.ncosfm.gov/residential/04095-closed-crawl-space-moisture-control-permitting-and-h3-licensure/open",
    context: "State interpretation of NC residential code requirements for closed crawl spaces.",
  },
  noaaNormals: {
    org: "NOAA NCEI",
    title: "1991–2020 Climate Normals, Asheville Regional Airport",
    url: "https://www.ncei.noaa.gov/access/services/data/v1?dataset=normals-annualseasonal-1991-2020&stations=USW00003812&format=json&dataTypes=ANN-PRCP-NORMAL,ANN-TAVG-NORMAL",
    context: "Official annual precipitation normal for Asheville.",
  },
} satisfies Record<string, AuthoritySource>;

const areas = [
  { name: "Asheville", zips: "28801, 28803, 28804, 28805, 28806" },
  { name: "Black Mountain", zips: "28711" },
  { name: "Swannanoa", zips: "28778" },
  { name: "Woodfin", zips: "(Asheville 28804)" },
  { name: "Weaverville", zips: "28787" },
  { name: "Fairview", zips: "28730" },
  { name: "Arden", zips: "28704" },
  { name: "Candler", zips: "28715" },
  { name: "Leicester", zips: "28748" },
  { name: "Fletcher", zips: "28732" },
  { name: "Mills River", zips: "28759" },
  { name: "Hendersonville", zips: "28739, 28791, 28792" },
];

const floodSteps = [
  {
    title: "Get the water out and pull air through",
    description:
      "Pump or wet-vac standing water, then run fans that pull air out of the crawl space rather than blowing humid outdoor air in — the approach NC State Extension recommends after a flood.",
  },
  {
    title: "Remove wet insulation and debris",
    description:
      "Fiberglass batts between the floor joists hold water against the wood and rarely dry out. Soaked insulation, old plastic, and flood debris should come out.",
  },
  {
    title: "Clean the framing and treat mold",
    description:
      "Joists, sill plates, and subfloor get cleaned and treated. EPA guidance is to dry water-damaged materials within 24–48 hours; anything wet longer than that should be checked for mold.",
  },
  {
    title: "Measure before you close it up",
    description:
      "NC State Extension advises using a wood moisture meter and waiting until framing reads 19% moisture or lower before installing new insulation or sealing the space.",
  },
  {
    title: "Fix the water path, then seal",
    description:
      "If water keeps getting in, drainage or a sump comes first. Only then does a vapor barrier or full encapsulation with a dehumidifier make sense — otherwise water ends up trapped under the liner.",
  },
];

const faqs = [
  {
    question: "How much does crawl space encapsulation cost in Asheville, NC?",
    answer:
      "Most full crawl space encapsulation projects with a dehumidifier run about $5,000–$9,000 in the Asheville area, and a professional-grade vapor barrier alone runs about $1,500–$3,500. Homes that still take on water after Helene often need drainage or a sump first, which typically adds $2,000–$6,000. Every home is quoted individually after an inspection.",
  },
  {
    question: "My crawl space flooded during Helene. Is it too late to fix?",
    answer:
      "No. Many Buncombe County homes are still being repaired two years later. The work starts with an inspection for lingering moisture, mold, and damaged framing, followed by drying, cleanup, and then a moisture-control system. Wood that has dried to 19% moisture or lower can usually stay; rotted or structurally compromised joists get sistered or replaced.",
  },
  {
    question: "Should I encapsulate a crawl space that floods?",
    answer:
      "Not until the water problem is handled. Encapsulation controls humidity and ground moisture — it does not stop floodwater. If water regularly enters the crawl space, a drainage system or sump pump should be installed first so water is not trapped under the liner.",
  },
  {
    question: "Does flood insurance cover crawl space damage?",
    answer:
      "Under FEMA's National Flood Insurance Program, crawl spaces below ground on all sides are treated like basements. Coverage there is limited to items such as sump pumps, furnaces, water heaters, electrical panels, foundation elements, and cleanup like pumping out water and structural drying. Dehumidifiers that are not part of the HVAC system and most finishes are not covered. Check your own policy.",
  },
  {
    question: "Can I still get Helene rebuilding help for crawl space repairs?",
    answer:
      "North Carolina's Renew NC Single-Family Housing Program stopped taking new applications on January 31, 2026. Buncombe County's Reduce to Rebuild program cuts permit, planning, and inspection fees by 50% for Helene-damaged primary residences through June 30, 2027 — check the county's housing recovery page for current eligibility.",
  },
  {
    question: "Do I need a permit to encapsulate a crawl space in North Carolina?",
    answer:
      "Yes — converting to a closed crawl space under North Carolina's residential code (section R409) requires a permit. The code also requires sealed vents, a ground vapor retarder, a termite inspection gap, and at least one mechanical drying method such as a dehumidifier. A reputable contractor pulls the permit.",
  },
];

function getAshevilleSchema(): SchemaObject {
  const url = `${siteConfig.schemaUrl}${PATH}`;
  const northCarolina = { "@type": "State", name: "North Carolina", addressRegion: "NC" };

  return combineSchemas(
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: "Crawl Space Encapsulation and Flood Repair in Asheville, NC",
      serviceType: [
        "Crawl Space Encapsulation",
        "Crawl Space Flood Damage Repair",
        "Vapor Barrier Installation",
        "Crawl Space Drainage",
        "Dehumidifier Installation",
        "Mold Treatment",
        "Floor Joist Repair",
      ],
      description: DESCRIPTION,
      url,
      provider: {
        "@type": "LocalBusiness",
        "@id": `${siteConfig.schemaUrl}/#organization`,
        name: siteConfig.name,
        telephone: siteConfig.phone,
        url: siteConfig.schemaUrl,
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Buncombe County, NC", containedInPlace: northCarolina },
        { "@type": "AdministrativeArea", name: "Henderson County, NC", containedInPlace: northCarolina },
        ...areas.map((area) => ({
          "@type": "City",
          name: `${area.name}, NC`,
          containedInPlace: northCarolina,
        })),
      ],
      offers: [
        {
          "@type": "Offer",
          name: "Crawl space encapsulation with dehumidifier",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: 5000,
            maxPrice: 9000,
            priceCurrency: "USD",
          },
        },
        {
          "@type": "Offer",
          name: "Professional-grade crawl space vapor barrier",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: 1500,
            maxPrice: 3500,
            priceCurrency: "USD",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: TITLE,
      description: DESCRIPTION,
      dateModified: LAST_UPDATED,
      isPartOf: { "@id": `${siteConfig.schemaUrl}/#website` },
      spatialCoverage: {
        "@type": "Place",
        name: "Asheville, North Carolina",
        geo: { "@type": "GeoCoordinates", latitude: 35.5951, longitude: -82.5515 },
        containedInPlace: northCarolina,
      },
      about: [
        { "@type": "Event", name: "Hurricane Helene flooding in western North Carolina", startDate: "2024-09-26", endDate: "2024-09-27" },
      ],
      inLanguage: "en-US",
    },
  );
}

export default function AshevilleCrawlSpacePage() {
  return (
    <>
      <SchemaScript schema={getAshevilleSchema()} />
      <ServicePageTemplate
        h1="Crawl Space Encapsulation & Flood Repair in Asheville, NC"
        quickAnswer="Crawl space encapsulation in Asheville, NC typically costs $5,000–$9,000 with a dehumidifier. Homes flooded by Hurricane Helene should be dried, cleaned, and checked for drainage problems first — sealing a crawl space that still takes on water traps it under the liner."
        breadcrumbPath={PATH}
        breadcrumbs={[{ label: "Areas Served", href: "/areas-served" }, { label: "Asheville, NC" }]}
        intro={[
          "Two years after Helene, many Asheville and Buncombe County homes look repaired upstairs but still have a problem underneath: wet insulation that never came down, framing that was never dried or tested, or a crawl space that now takes on water every heavy rain.",
          "We connect Asheville-area homeowners with an independent, licensed crawl space specialist who works throughout Buncombe and Henderson counties, for a free inspection and a written estimate.",
        ]}
        faqs={faqs}
        faqTitle="What Do Asheville Homeowners Ask About Crawl Spaces?"
        ctaHeading="Need an Asheville Crawl Space Inspection?"
        ctaBody="Tell us what you're seeing — standing water, musty smells, sagging floors, or leftover flood damage — and we'll connect you with a specialist for a free estimate. No obligation."
        authority={Object.values(sources)}
        showUpstateSections={false}
      >
        <p className="bg-white pt-8 text-center text-sm text-muted">
          Last updated <time dateTime={LAST_UPDATED}>{LAST_UPDATED_LABEL}</time>
        </p>

        <ServiceSection title="What Did Hurricane Helene Do to Asheville-Area Crawl Spaces?">
          <p>
            Helene&apos;s flooding on September 26–27, 2024 was the worst on record in the Asheville
            area. The French Broad River crested at 24.82 feet in Asheville and the Swannanoa reached
            27.33 feet at Biltmore Village — both above the previous records set in 1916, according
            to the{" "}
            <AuthorityLink href={sources.nwsFlood.url}>National Weather Service</AuthorityLink>.
            Asheville Regional Airport recorded nearly 14 inches of rain over three days, and parts
            of the mountains received more than 20 inches (
            <AuthorityLink href={sources.climateGov.url}>NOAA</AuthorityLink>).
          </p>
          <p>
            <AuthorityLink href={sources.buncombeAfterAction.url}>Buncombe County</AuthorityLink>{" "}
            reports 372 homes destroyed, more than 11,000 needing significant repair, and damage to
            more than 60% of properties in the county. The hardest-hit areas included the Swannanoa
            valley from Black Mountain down to Asheville, Biltmore Village, the River Arts District,
            and Fairview.
          </p>
          <p>
            Crawl spaces took on water even in homes that never flooded inside. Water that sat for
            days soaked insulation, saturated framing, and left sediment and mold behind — damage
            that is easy to miss if nobody went underneath the house afterward.
          </p>
        </ServiceSection>

        <ServiceSection
          title="What Signs of Leftover Flood Damage Should You Look For?"
          className="bg-neutral"
        >
          <BulletList
            items={[
              "A musty or earthy smell inside the house, especially after rain or on humid days",
              "Insulation hanging down, missing, or stained between the floor joists",
              "Standing water, mud lines, or silt on the crawl space floor or foundation walls",
              "White, green, or black growth on joists, sill plates, or the underside of the subfloor",
              "Soft, bouncy, or sloping floors — particularly near kitchens and bathrooms",
              "Rusted ductwork, a failed sump pump, or a dehumidifier that stopped running",
              "Higher humidity upstairs, cupping hardwood floors, or doors that started sticking",
            ]}
          />
        </ServiceSection>

        <ServiceSection title="How Do You Fix a Crawl Space That Flooded?">
          <p>
            The order matters. Sealing a crawl space before it is dry — or before the water path is
            fixed — traps moisture against the framing. This is the sequence based on{" "}
            <AuthorityLink href={sources.ncStateFlood.url}>NC State Extension</AuthorityLink> and{" "}
            <AuthorityLink href={sources.epaMold.url}>EPA</AuthorityLink> guidance:
          </p>
          <ProcessSteps steps={floodSteps} />
        </ServiceSection>

        <ServiceSection
          title="How Much Does Crawl Space Work Cost in Asheville, NC?"
          className="bg-neutral"
        >
          <p>
            These are ballpark ranges to help you plan. Every Asheville home is quoted individually
            after an inspection — mountain lots, tight access, and flood damage can all move the
            number.
          </p>
          <ServiceComparisonTable
            headers={["Service", "Typical Cost Range"]}
            rows={[
              ["Vapor barrier (16–20 mil, professional grade)", "$1,500–$3,500"],
              ["Full encapsulation + dehumidifier", "$5,000–$9,000"],
              ["Drainage system / sump pump (if water gets in)", "$2,000–$6,000"],
              ["Mold treatment (before sealing)", "$500–$2,500"],
              ["Floor joist sistering (per joist)", "$100–$300"],
            ]}
          />
          <p>
            Large national crawl space companies often quote well above these ranges. Getting at
            least one estimate from an independent local specialist is the easiest way to see what
            your job should actually cost. See the full{" "}
            <Link href="/crawl-space-encapsulation-cost" className="font-semibold text-primary hover:underline">
              crawl space encapsulation cost guide
            </Link>{" "}
            for what drives price up or down.
          </p>
        </ServiceSection>

        <ServiceSection title="Why Do Asheville Crawl Spaces Need Moisture Control?">
          <p>
            Asheville averages about 49.6 inches of rain a year (
            <AuthorityLink href={sources.noaaNormals.url}>NOAA 1991–2020 normals</AuthorityLink>),
            and many homes sit on sloped lots where runoff heads straight for the foundation. The
            median home in Asheville was built in 1984, so a large share of houses still have the
            original open foundation vents and thin plastic ground cover.
          </p>
          <p>
            North Carolina is where the closed crawl space was proven. Field research by{" "}
            <AuthorityLink href={sources.advancedEnergy.url}>Advanced Energy</AuthorityLink> found
            that vented crawl spaces stayed above 80% relative humidity most of the spring and
            summer, while closed crawl spaces stayed below 65% — work that led to North Carolina
            adding closed crawl spaces to its residential code in 2004.
          </p>
        </ServiceSection>

        <ServiceSection
          title="What Does North Carolina Code Require for a Closed Crawl Space?"
          className="bg-neutral"
        >
          <p>
            Under section R409 of the North Carolina Residential Code, as interpreted by the{" "}
            <AuthorityLink href={sources.ncosfm.url}>NC Office of State Fire Marshal</AuthorityLink>,
            a closed crawl space needs:
          </p>
          <BulletList
            items={[
              "No foundation wall vents to the outside",
              "A ground vapor retarder (minimum 6-mil, with 12-inch overlaps — most contractors use far thicker 16–20 mil liners)",
              "A 3–4 inch termite inspection gap at the top of the foundation wall",
              "At least one mechanical drying method — for example, a dehumidifier drained to daylight or a condensate pump",
              "A building permit",
            ]}
          />
        </ServiceSection>

        <ServiceSection title="Is There Still Helene Recovery Help for Home Repairs?">
          <p>
            Some programs have closed and some are still open. As of September 2026:
          </p>
          <BulletList
            items={[
              "Renew NC Single-Family Housing Program — closed to new applications January 31, 2026; applications already submitted are still being processed.",
              "Buncombe County Reduce to Rebuild — 50% off permit, planning, and inspection fees for Helene-damaged primary residences through June 30, 2027.",
              "NFIP flood insurance — crawl spaces below ground on all sides are covered like basements, which limits coverage to specific equipment, foundation elements, and cleanup.",
            ]}
          />
          <p>
            Program rules change. Confirm current eligibility on{" "}
            <AuthorityLink href={sources.buncombeHousing.url}>Buncombe County&apos;s housing recovery page</AuthorityLink>,{" "}
            <AuthorityLink href={sources.renewNc.url}>Renew NC</AuthorityLink>, and{" "}
            <AuthorityLink href={sources.fema.url}>FEMA&apos;s NFIP crawl space fact sheet</AuthorityLink>.
          </p>
        </ServiceSection>

        <ServiceSection title="Which Asheville-Area Communities Do We Cover?" className="bg-neutral">
          <ServiceComparisonTable
            headers={["Community", "ZIP Codes"]}
            rows={areas.map((area) => [`${area.name}, NC`, area.zips])}
          />
          <p>
            Outside this list? Call{" "}
            <a href={siteConfig.phoneHref} className="font-semibold text-primary hover:underline">
              {siteConfig.phone}
            </a>{" "}
            and we&apos;ll check whether a specialist covers your address.
          </p>
        </ServiceSection>

        <ServiceSection title="How Does Our Referral Service Work?">
          <p>
            {siteConfig.name} is a free referral service, not a contractor. When you request an
            estimate, we pass your details to an independent, licensed crawl space specialist who
            serves the Asheville area. That specialist will contact you under their own company
            name, inspect the crawl space, and give you a written quote. There is no cost and no
            obligation to hire them.
          </p>
        </ServiceSection>

        <ServiceSection title="Which Crawl Space Services Are Available?" className="bg-neutral">
          <ServiceLinksGrid showTitle={false} />
          <p className="mt-6 text-muted">
            Ready for an inspection?{" "}
            <Link href="/contact" className="font-semibold text-primary hover:underline">
              {siteConfig.cta.primary} →
            </Link>
          </p>
        </ServiceSection>
      </ServicePageTemplate>
    </>
  );
}
