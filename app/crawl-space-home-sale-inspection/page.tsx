import Link from "next/link";
import {
  BulletList,
  ProcessSteps,
  ServiceComparisonTable,
  ServicePageTemplate,
  ServiceSection,
} from "@/components/service/ServicePageTemplate";
import { AuthorityLink } from "@/components/AuthorityCitation";
import { SchemaScript } from "@/components/SchemaScript";
import type { AuthoritySource } from "@/lib/authorities";
import { combineSchemas } from "@/lib/schema";
import type { SchemaObject } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const PATH = "/crawl-space-home-sale-inspection";
const TITLE = "Crawl Space Repair Before Selling or Buying a Home | Greenville SC";
const DESCRIPTION =
  "Selling or buying a home in Greenville, SC? What home inspectors and the CL-100 report flag in crawl spaces, what sellers must disclose, and how to fix it before closing.";
const LAST_UPDATED = "2026-10-05";
const LAST_UPDATED_LABEL = "October 5, 2026";

export const metadata = buildPageMetadata({ title: TITLE, description: DESCRIPTION, canonical: PATH });

const sources = {
  dprRegs: {
    org: "S.C. Code of Regulations, Chapter 27 (Clemson Dept. of Pesticide Regulation)",
    title: "Regulation 27-1085 — Moisture Control and the Official Wood Infestation Report",
    url: "https://www.scstatehouse.gov/coderegs/Chapter%2027.pdf",
    context:
      "Defines excessive crawl space moisture (wood at 20% or higher, or standing water), what the CL-100 inspection must cover, and what it must disclose.",
  },
  disclosureLaw: {
    org: "S.C. Code of Laws, Title 27, Chapter 50",
    title: "Residential Property Condition Disclosure Act",
    url: "https://www.scstatehouse.gov/code/t27c050.php",
    context:
      "What South Carolina sellers must disclose, when the form is due, and the duty to correct it if conditions change before closing.",
  },
  disclosureForm: {
    org: "S.C. Real Estate Commission (LLR)",
    title: "Residential Property Condition Disclosure Statement (effective 6/1/2023)",
    url: "https://www.llr.sc.gov/re/recpdf/Updated_Property_Disclosure_Form.pdf",
    context:
      "The state disclosure form, including questions on foundations, floors, and wood damage from dry rot or fungus.",
  },
  epaMold: {
    org: "U.S. EPA",
    title: "A Brief Guide to Mold, Moisture and Your Home",
    url: "https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home",
    context: "EPA guidance to fix the moisture source first and keep indoor humidity below 60%.",
  },
} satisfies Record<string, AuthoritySource>;

const sellerSteps = [
  {
    title: "Get the crawl space inspected before you list",
    description:
      "A specialist goes under the house, takes wood moisture readings, and photographs mold, standing water, wet insulation, and framing damage. You see what a buyer's inspector will see — weeks earlier, while you still control the timeline.",
  },
  {
    title: "Fix the water source first",
    description:
      "Standing water or poor drainage gets handled with grading, a drain, or a sump. South Carolina's own pest-control standards say fungicide treatment can't be done until the excess moisture is physically corrected.",
  },
  {
    title: "Remove damage and treat mold",
    description:
      "Wet or moldy insulation comes out, framing is cleaned and treated, and damaged joists are sistered or replaced.",
  },
  {
    title: "Seal it so the problem stays fixed",
    description:
      "A heavy vapor barrier or full encapsulation with a dehumidifier keeps the crawl space dry after the sale — and gives the buyer's inspector a clean, documented space instead of a question mark.",
  },
  {
    title: "Keep the paperwork for the buyer",
    description:
      "Save the scope of work, before-and-after photos, moisture readings, and any transferable warranty. If a problem you already disclosed has been repaired, the documentation shows it.",
  },
];

const faqs = [
  {
    question: "Do I have to fix my crawl space before selling a house in South Carolina?",
    answer:
      "No — South Carolina law does not require repairs before a sale. It does require you to disclose problems you actually know about, including foundation and floor problems and unrepaired wood damage from dry rot or fungus. Most sellers fix crawl space moisture and mold before listing because buyers' inspectors almost always find it, and it is easier to repair on your schedule than to negotiate it under a closing deadline.",
  },
  {
    question: "What is a CL-100 and does it check the crawl space?",
    answer:
      "The CL-100 is South Carolina's Official Wood Infestation Report, issued by a licensed pest control inspector for a home sale or mortgage. The inspection must include the crawl space and representative wood moisture readings around the perimeter and center. It reports termite and beetle activity, wood decay, and excessive moisture — which South Carolina defines as wood moisture at or above 20% or any standing water in the crawl space or around the foundation.",
  },
  {
    question: "Does the CL-100 report mold?",
    answer:
      "Not as a health issue. State regulations say the Wood Infestation Report is not a report on health-related fungi. It covers wood-decay fungi and the moisture conditions that cause them. Visible mold in a crawl space is usually written up by the buyer's home inspector instead.",
  },
  {
    question: "The buyer's inspection found crawl space problems. What now?",
    answer:
      "Get a written estimate from a crawl space specialist quickly, so you are negotiating from a real number instead of a guess. Buyers commonly ask for the repair to be done before closing, a price reduction, or a credit. If the inspection found something that changes your disclosure, South Carolina requires you to deliver a corrected disclosure statement or make reasonable repairs before closing.",
  },
  {
    question: "How much does it cost to fix a crawl space before closing?",
    answer:
      "In the Greenville area, a professional vapor barrier typically runs $1,500–$3,500 and full encapsulation with a dehumidifier runs $5,000–$9,000. Crawl spaces with mold, wet insulation that has to come out, or damaged framing cost more — large projects that combine mold treatment, insulation removal, and encapsulation commonly reach $10,000–$15,000 or more. Every home is quoted after an inspection.",
  },
  {
    question: "How fast can crawl space repairs be done before a closing date?",
    answer:
      "Most vapor barrier and encapsulation jobs take one to a few days once scheduled. Mold treatment and joist repair add time, and a crawl space with standing water may need drainage work and drying before it can be sealed. If you are under contract, tell the specialist your closing date up front.",
  },
  {
    question: "I'm buying a house with a moldy or wet crawl space. Should I walk away?",
    answer:
      "Not necessarily. Moisture and mold under a house are common in Upstate SC and are usually fixable. The question is cost and extent. Get a specialist's estimate during your inspection period so you can ask for a repair, a credit, or a lower price based on real numbers — and so you know about any framing damage before you own it.",
  },
];

function getHomeSaleSchema(): SchemaObject {
  const url = `${siteConfig.schemaUrl}${PATH}`;

  return combineSchemas(
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: "Crawl Space Inspection and Repair for Home Sales in Greenville, SC",
      serviceType: [
        "Pre-Listing Crawl Space Inspection",
        "Crawl Space Repair Before Closing",
        "Crawl Space Mold Treatment",
        "Crawl Space Encapsulation",
        "Vapor Barrier Installation",
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
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Upstate South Carolina",
        containedInPlace: { "@type": "State", name: "South Carolina", addressRegion: "SC" },
      },
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
      audience: [
        { "@type": "Audience", audienceType: "Home sellers" },
        { "@type": "Audience", audienceType: "Home buyers" },
        { "@type": "Audience", audienceType: "Real estate agents" },
      ],
      inLanguage: "en-US",
    },
  );
}

export default function HomeSaleInspectionPage() {
  return (
    <>
      <SchemaScript schema={getHomeSaleSchema()} />
      <ServicePageTemplate
        h1="Crawl Space Problems When Selling or Buying a Home in Greenville, SC"
        quickAnswer="South Carolina doesn't require crawl space repairs before a sale, but sellers must disclose known problems, and the CL-100 inspection flags wood moisture at 20% or higher or standing water in the crawl space. Fixing moisture and mold before listing — or getting a real repair estimate during the buyer's inspection period — keeps the deal on track."
        breadcrumbPath={PATH}
        breadcrumbs={[{ label: "Selling or Buying a Home" }]}
        intro={[
          "When a house goes under contract in the Upstate, someone is going under it. The buyer's home inspector and the CL-100 pest inspector both open the crawl space door — and a musty smell, standing water, or mold on the joists can turn into a repair demand, a price cut, or a lost buyer.",
          "We connect Greenville-area sellers, buyers, and agents with an independent, licensed crawl space specialist for a free inspection and a written estimate — fast enough to fit a listing or closing timeline.",
        ]}
        faqs={faqs}
        faqTitle="What Do Sellers and Buyers Ask About Crawl Spaces?"
        ctaHeading="Selling, Buying, or Under Contract?"
        ctaBody="Tell us your timeline and what the inspection found (or what you're worried it will find). We'll connect you with a crawl space specialist for a free estimate. No obligation."
        authority={Object.values(sources)}
      >
        <p className="bg-white pt-8 text-center text-sm text-muted">
          Last updated <time dateTime={LAST_UPDATED}>{LAST_UPDATED_LABEL}</time>
        </p>

        <ServiceSection title="What Do Inspectors Look for in a Crawl Space During a Home Sale?">
          <p>
            A South Carolina home sale often involves two separate looks under the house: the
            buyer&apos;s general home inspection, and the{" "}
            <strong>Official South Carolina Wood Infestation Report (CL-100)</strong>, which state
            regulations require to be issued by a licensed pest control inspector when a report is
            used for a sale or mortgage.
          </p>
          <p>
            Under{" "}
            <AuthorityLink href={sources.dprRegs.url}>S.C. Regulation 27-1085</AuthorityLink>, the
            CL-100 inspection must include the crawl space and representative wood moisture readings
            around its perimeter and center. The report has to disclose those readings plus any
            decay damage, active decay fungi, or excessive moisture conditions. The state&apos;s
            thresholds:
          </p>
          <ServiceComparisonTable
            headers={["Condition", "What the CL-100 standard says"]}
            rows={[
              ["Excessive moisture", "Wood moisture at or above 20%, or standing water in the crawl space or around the foundation"],
              ["Active wood decay", "Decay fungi become active, and damage occurs, at 28% wood moisture and above"],
            ]}
          />
          <p>The home inspector typically writes up what they see, including:</p>
          <BulletList
            items={[
              "A musty smell at the crawl space door or inside the house",
              "Mold or fungal growth on joists, sill plates, or the subfloor",
              "Wet, sagging, or fallen insulation between the floor joists",
              "Standing water, mud, or water staining on the foundation walls",
              "Torn, missing, or thin plastic on the crawl space floor",
              "Soft, rotted, or sagging floor framing",
            ]}
          />
        </ServiceSection>

        <ServiceSection
          title="What Do South Carolina Sellers Have to Disclose About a Crawl Space?"
          className="bg-neutral"
        >
          <p>
            South Carolina&apos;s{" "}
            <AuthorityLink href={sources.disclosureLaw.url}>
              Residential Property Condition Disclosure Act
            </AuthorityLink>{" "}
            requires sellers of most one-to-four unit homes to give buyers a completed disclosure
            statement before the contract is signed. The{" "}
            <AuthorityLink href={sources.disclosureForm.url}>state form</AuthorityLink> asks about
            problems with the foundation, floors, and other structural components, and about present
            wood damage from termites, wood-destroying organisms, dry rot, or fungus that hasn&apos;t
            been repaired.
          </p>
          <BulletList
            items={[
              "You're liable for what you knowingly leave out or misstate — the law doesn't require you to inspect, but you can't ignore a problem you know about.",
              "If something changes after you deliver the form — for example, the buyer's inspection turns up crawl space damage you didn't know about — you must deliver a corrected statement or make reasonable repairs before closing.",
              "Buyers keep their own duty to inspect. The disclosure doesn't replace their home inspection or CL-100.",
            ]}
          />
          <p>
            This is general information, not legal advice. Ask your agent or a South Carolina real
            estate attorney how it applies to your sale.
          </p>
        </ServiceSection>

        <ServiceSection title="Should You Fix the Crawl Space Before Listing?">
          <p>
            Usually, yes, if there&apos;s a real moisture or mold problem. Once a buyer&apos;s
            inspector finds it, you&apos;re negotiating under a deadline with someone who has every
            reason to estimate high. Fixing it first means:
          </p>
          <BulletList
            items={[
              "You choose the contractor and the scope instead of reacting to a buyer's repair request",
              "No surprise moisture readings on the CL-100 that put the closing date at risk",
              "A clean, documented crawl space to show buyers instead of a line item on an inspection report",
              "Fewer reasons for a buyer to ask for a price cut or walk away",
            ]}
          />
          <p>The order of work matters:</p>
          <ProcessSteps steps={sellerSteps} />
        </ServiceSection>

        <ServiceSection
          title="Buying a Home With Crawl Space Problems?"
          className="bg-neutral"
        >
          <p>
            A wet or moldy crawl space is common in Upstate SC and usually fixable. What matters is
            knowing the real cost before your inspection period ends. A specialist&apos;s written
            estimate gives you a number to negotiate with: a repair before closing, a seller
            credit, or a lower price.
          </p>
          <p>
            Ask the specialist to separate <em>moisture control</em> (vapor barrier, encapsulation,
            dehumidifier, drainage) from <em>damage repair</em> (mold treatment, insulation removal,
            joist sistering), so you can see which problems are about comfort and which are about
            the structure. As the{" "}
            <AuthorityLink href={sources.epaMold.url}>EPA</AuthorityLink> puts it, the moisture
            source has to be fixed or mold comes back.
          </p>
        </ServiceSection>

        <ServiceSection title="What Does It Cost to Fix a Crawl Space Before Closing?">
          <p>
            Ballpark Greenville-area ranges to help you plan or negotiate. Every home is quoted
            after an inspection.
          </p>
          <ServiceComparisonTable
            headers={["Work", "Typical Cost Range"]}
            rows={[
              ["Vapor barrier (20-mil, professional grade)", "$1,500–$3,500"],
              ["Full encapsulation + dehumidifier", "$5,000–$9,000"],
              ["Mold treatment (before sealing)", "$500–$2,500"],
              ["Drainage system / sump (if water gets in)", "$2,000–$6,000"],
              ["Floor joist sistering (per joist)", "$100–$300"],
              ["Large crawl space: mold + insulation removal + encapsulation", "$10,000–$15,000+"],
            ]}
          />
          <p>
            See the full{" "}
            <Link href="/crawl-space-encapsulation-cost" className="font-semibold text-primary hover:underline">
              crawl space encapsulation cost guide
            </Link>{" "}
            for what moves the price, and{" "}
            <Link href="/services/mold-in-crawl-space" className="font-semibold text-primary hover:underline">
              crawl space mold treatment
            </Link>{" "}
            for how mold is handled.
          </p>
        </ServiceSection>

        <ServiceSection title="Are You a Real Estate Agent?" className="bg-neutral">
          <p>
            If a listing or a deal you&apos;re working has a crawl space problem, send your client
            our way or call{" "}
            <a href={siteConfig.phoneHref} className="font-semibold text-primary hover:underline">
              {siteConfig.phone}
            </a>
            . Let us know the closing date so the specialist can prioritize the inspection and get a
            written estimate in front of both sides quickly.
          </p>
        </ServiceSection>

        <ServiceSection title="How Does Our Referral Service Work?">
          <p>
            {siteConfig.name} is a free referral service, not a contractor. When you request an
            estimate, we pass your details to an independent, licensed crawl space specialist who
            serves the Greenville area. That specialist will contact you under their own company
            name, inspect the crawl space, and give you a written quote. There is no cost and no
            obligation to hire them.
          </p>
          <p>
            Ready to get a number?{" "}
            <Link href="/contact" className="font-semibold text-primary hover:underline">
              {siteConfig.cta.primary} →
            </Link>
          </p>
        </ServiceSection>
      </ServicePageTemplate>
    </>
  );
}
