import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { AuthoritySection } from "@/components/AuthorityCitation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PhoneLink } from "@/components/PhoneLink";
import { SchemaScript } from "@/components/SchemaScript";
import {
  BulletList,
  ProcessSteps,
  ServiceSection,
} from "@/components/service/ServicePageTemplate";
import { getAuthorityForPath } from "@/lib/authorities";
import { getArticleSchema, getFaqPageSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildPageMetadata({
  title: "What Is Crawl Space Encapsulation? | Greenville SC Guide",
  description:
    "What is crawl space encapsulation and how does it work in Greenville, SC? Learn what the process includes, how long it takes, costs, and when your home needs it.",
  canonical: "/what-is-encapsulation",
});

const pageFaqs = [
  {
    question: "What is crawl space encapsulation?",
    answer:
      "Crawl space encapsulation is the process of sealing and conditioning the area beneath your home. A heavy-duty vapor barrier covers the floor and foundation walls, foundation vents are sealed, insulation is added where needed, and a crawl-space-rated dehumidifier maintains controlled humidity — typically 45–55% relative humidity year-round.",
  },
  {
    question: "How long does crawl space encapsulation take?",
    answer:
      "Most Greenville-area homes take 2–4 days for standard encapsulation once prep work is complete. Projects requiring mold treatment, drainage installation, or joist repair before encapsulation may take 4–7 days total.",
  },
  {
    question: "How much does crawl space encapsulation cost in Greenville?",
    answer:
      "Full encapsulation with a dehumidifier typically runs $5,000–$9,000 in the Greenville area. Vapor barrier-only work costs less ($1,500–$3,500) but rarely provides complete moisture control in Upstate SC's humid climate.",
  },
  {
    question: "What's the best vapor barrier thickness for encapsulation?",
    answer:
      "Professional encapsulation uses 20-mil reinforced polyethylene — not the thin 6-mil plastic many builders install at construction. The thicker material resists punctures from gravel and pier footings and holds up for 20+ years when installed correctly.",
  },
  {
    question: "Is crawl space encapsulation the same as a vapor barrier?",
    answer:
      "No. A vapor barrier is one component — a liner on the crawl space floor. Encapsulation is a complete system that also seals vents, covers foundation walls, adds insulation, and actively controls humidity with a dehumidifier.",
  },
  {
    question: "Why do Greenville homes need encapsulation?",
    answer:
      "Upstate South Carolina combines high humidity, red clay soils that hold moisture, and decades of open-vent crawl space construction. Those vents pull humid outdoor air inside, where it condenses on joists and ductwork — creating mold, musty odors, and wood rot.",
  },
];

export default function WhatIsEncapsulationPage() {
  return (
    <>
      <SchemaScript
        schema={[
          getArticleSchema({
            path: "/what-is-encapsulation",
            headline: "What Is Crawl Space Encapsulation? A Greenville, SC Homeowner's Guide",
            description:
              "An educational guide explaining crawl space encapsulation — what it is, how it works, and why Greenville homeowners use it to control moisture and mold.",
          }),
          getFaqPageSchema(pageFaqs),
        ]}
      />

      <Breadcrumbs items={[{ label: "What Is Encapsulation" }]} path="/what-is-encapsulation" />

      <section className="border-b border-primary/10 bg-neutral section-padding">
        <div className="container-narrow mx-auto max-w-3xl">
          <p className="label-caps">Educational Guide</p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-balance text-primary sm:text-5xl">
            What Is Crawl Space Encapsulation? (Greenville, SC Guide)
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            If you own a home with a crawl space in Greenville or anywhere in Upstate South
            Carolina, you have probably heard the term &ldquo;encapsulation&rdquo; — but what it
            actually means, what it includes, and whether your home needs it are less clear. This
            guide explains encapsulation in plain language, without sales pressure.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto max-w-3xl">
          <div className="rounded-xl border-l-4 border-primary bg-neutral p-6">
            <p className="label-caps text-primary">Quick Definition</p>
            <p className="mt-3 text-lg leading-relaxed text-dark">
              <strong>Crawl space encapsulation</strong> is the complete sealing and conditioning of
              the space beneath your home. Instead of an open, damp cavity with foundation vents and
              bare soil, encapsulation converts your crawl space into a dry, controlled environment
              — protected by a heavy-duty liner, sealed vents, wall insulation, and a commercial
              dehumidifier that maintains safe humidity levels year-round.
            </p>
          </div>
        </div>
      </section>

      <ServiceSection title="The Problem Encapsulation Solves">
        <p>
          Traditional crawl spaces in Greenville were built with a simple assumption: open foundation
          vents would allow air to circulate and keep the space dry. In theory, that works in dry
          climates. In Upstate South Carolina — where summer humidity routinely exceeds 70% — those
          same vents pull moist outdoor air into the crawl space, where it condenses on cooler
          surfaces like floor joists, ductwork, and plumbing.
        </p>
        <p>
          At the same time, moisture evaporates constantly from the soil floor and red clay
          surrounding your foundation. The result is a persistently damp environment where mold grows
          on wood framing, musty air rises into your living space through the stack effect, and
          floor joists slowly rot from sustained moisture exposure.
        </p>
        <p>
          Encapsulation addresses all of these pathways — ground moisture, vent infiltration, and
          uncontrolled humidity — in a single coordinated system rather than piecemeal fixes.
        </p>
      </ServiceSection>

      <ServiceSection title="What a Full Encapsulation System Includes" className="bg-neutral">
        <p>
          Professional crawl space encapsulation is not a single product. It is a combination of
          materials and steps designed to work together:
        </p>
        <BulletList
          items={[
            "20-mil reinforced vapor barrier on the floor, sealed at every seam and pier",
            "Liner extended up foundation walls to the sill plate",
            "Foundation vent sealing or mechanical vent covers",
            "Wall insulation (rigid foam board or similar) where appropriate",
            "Crawl-space-rated dehumidifier with automatic drain line",
            "Humidistat monitoring to maintain 45–55% relative humidity",
            "Optional sump pump or drainage if standing water is present",
          ]}
        />
        <p>
          Each component serves a specific purpose. The liner blocks ground moisture. Sealed vents
          stop humid outdoor air. The dehumidifier actively removes moisture already in the air and
          prevents it from climbing back above mold-growth thresholds.{" "}
          <Link href="/crawl-space-encapsulation" className="font-semibold text-primary hover:underline">
            See our encapsulation service details →
          </Link>
        </p>
      </ServiceSection>

      <ServiceSection title="How the Encapsulation Process Works">
        <ProcessSteps
          steps={[
            {
              title: "Free estimate and moisture assessment",
              description:
                "A specialist documents current humidity, checks for mold and structural damage, identifies moisture sources, and provides a written report with recommended scope of work.",
            },
            {
              title: "Prep work (if needed)",
              description:
                "Mold treatment, joist repair, debris removal, or drainage installation happen before encapsulation begins. Skipping prep work leads to failure — moisture and mold trapped under a new liner will continue causing damage.",
            },
            {
              title: "Vapor barrier and wall liner installation",
              description:
                "20-mil reinforced polyethylene is laid across the floor, wrapped around piers, and run up foundation walls. Every seam, penetration, and termination point is sealed with specialized tape.",
            },
            {
              title: "Vent sealing and insulation",
              description:
                "Foundation vents are sealed from inside or covered with rigid panels. Wall insulation is added where it improves thermal performance and moisture control.",
            },
            {
              title: "Dehumidifier setup and final verification",
              description:
                "A crawl-space-rated dehumidifier is installed with a dedicated drain line. Humidity is verified before project completion — typically holding at 45–55% RH.",
            },
          ]}
        />
      </ServiceSection>

      <ServiceSection title="Encapsulation vs. Other Crawl Space Solutions" className="bg-neutral">
        <p>
          Encapsulation is often confused with simpler approaches that address only part of the
          problem:
        </p>
        <BulletList
          items={[
            "Vapor barrier only — blocks ground moisture but leaves vents open and humidity uncontrolled",
            "Vent fans — can pull more humid air in during summer in SC's climate",
            "Spray foam on joists — addresses symptoms without fixing moisture sources below",
            "Dehumidifier alone — struggles without a sealed space to dehumidify efficiently",
          ]}
        />
        <p>
          For a detailed comparison of encapsulation and vapor barriers — including costs and when
          each approach makes sense — read our{" "}
          <Link
            href="/encapsulation-vs-vapor-barrier"
            className="font-semibold text-primary hover:underline"
          >
            encapsulation vs. vapor barrier guide
          </Link>
          .
        </p>
      </ServiceSection>

      <ServiceSection title="Signs Your Greenville Home May Need Encapsulation">
        <BulletList
          items={[
            "Musty or earthy odors on the first floor, especially near bathrooms and closets",
            "Visible mold or dark staining on floor joists during an inspection",
            "Soft, bouncy, or squeaky floor sections above the crawl space",
            "High indoor humidity that your HVAC struggles to control",
            "Cold floors in winter or condensation on ductwork in summer",
            "Previous home inspection flagged crawl space moisture or ventilation issues",
            "Standing water or saturated soil visible in the crawl space after rain",
          ]}
        />
        <p>
          Any one of these signs warrants a professional assessment. Multiple signs together strongly
          suggest that your crawl space needs more than a partial fix.{" "}
          <Link href="/contact" className="font-semibold text-primary hover:underline">
            {siteConfig.cta.primary} →
          </Link>
        </p>
      </ServiceSection>

      <ServiceSection title="Common Questions About Encapsulation" className="bg-neutral">
        <div className="space-y-3">
          {pageFaqs.map(({ question, answer }) => (
            <details
              key={question}
              className="group rounded-xl border border-primary/10 bg-white open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display text-base font-semibold text-primary marker:content-none [&::-webkit-details-marker]:hidden">
                {question}
                <span
                  className="shrink-0 text-accent transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="border-t border-primary/10 px-6 pb-5 pt-2">
                <p className="leading-relaxed text-muted">{answer}</p>
              </div>
            </details>
          ))}
        </div>
        <p className="mt-6">
          <Link href="/faq" className="font-semibold text-primary hover:underline">
            Browse all crawl space FAQ →
          </Link>
          {" · "}
          <Link
            href="/crawl-space-encapsulation-cost"
            className="font-semibold text-primary hover:underline"
          >
            2025 cost guide →
          </Link>
        </p>
      </ServiceSection>

      <AuthoritySection source={getAuthorityForPath("/what-is-encapsulation")} />

      <section className="border-t border-primary/10 bg-primary section-padding text-white">
        <div className="container-narrow mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Find Out If Your Crawl Space Needs Encapsulation
          </h2>
          <p className="mt-4 text-lg text-white/90">
            A free estimate takes the guesswork out of the decision. A local specialist will measure
            humidity, document conditions, and explain exactly what your crawl space needs — with a
            written report and no obligation.
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
