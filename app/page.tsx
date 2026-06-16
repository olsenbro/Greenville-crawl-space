import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  CheckCircle2,
  Phone,
  Star,
  XCircle,
} from "lucide-react";
import { CrossHatchOverlay } from "@/components/home/CrossHatchOverlay";
import { HomeFaqAccordion } from "@/components/home/HomeFaqAccordion";
import { PhoneLink } from "@/components/PhoneLink";
import { SchemaScript } from "@/components/SchemaScript";
import { homeFaqPreview } from "@/lib/home-faq";
import { getHomeFaqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    absolute:
      "Crawl Space Encapsulation Greenville SC | Moisture & Mold Experts",
  },
  description: `Wet, moldy, or musty crawl space in Greenville? We encapsulate, repair, and dehumidify crawl spaces across Upstate SC. Free inspections. Call ${siteConfig.phone}.`,
  alternates: {
    canonical: siteConfig.schemaUrl,
  },
  openGraph: {
    title: "Crawl Space Encapsulation Greenville SC | Moisture & Mold Experts",
    description: `Wet, moldy, or musty crawl space in Greenville? We encapsulate, repair, and dehumidify crawl spaces across Upstate SC. Free inspections. Call ${siteConfig.phone}.`,
    url: siteConfig.schemaUrl,
  },
};

const symptoms = [
  {
    emoji: "🤧",
    title: "Musty Odors Inside",
    description:
      "That 'old house' smell isn't just character — it's often mold spores circulating from your crawl space through your HVAC system.",
  },
  {
    emoji: "🦶",
    title: "Soft or Bouncy Floors",
    description:
      "Wood floor joists saturated with moisture begin to rot. What starts as a little flex becomes a structural problem.",
  },
  {
    emoji: "💧",
    title: "Visible Moisture or Standing Water",
    description:
      "Water that enters after rain and never fully dries creates a perfect breeding ground for mold and pests.",
  },
  {
    emoji: "🌡️",
    title: "High Indoor Humidity",
    description:
      "If your home is inexplicably humid even when AC is running, your crawl space is likely the culprit.",
  },
  {
    emoji: "🐛",
    title: "Pest Infestations",
    description:
      "Termites, cockroaches, and rodents thrive in damp, unencapsulated crawl spaces. Moisture control is often the real pest solution.",
  },
  {
    emoji: "💰",
    title: "Skyrocketing Energy Bills",
    description:
      "A damp, uninsulated crawl space forces your HVAC to work harder. Encapsulation dramatically improves efficiency.",
  },
] as const;

const processSteps = [
  {
    step: 1,
    title: "Free Inspection",
    description:
      "We crawl your space, check for moisture, mold, structural damage, and current vapor barrier condition. You get a written report.",
  },
  {
    step: 2,
    title: "Clear & Clean",
    description:
      "We remove old insulation, debris, and any existing deteriorated vapor barrier. Mold is treated if present.",
  },
  {
    step: 3,
    title: "Vapor Barrier Installation",
    description:
      "We install a 20-mil reinforced liner across the entire floor and up the walls, sealed at seams and foundation walls.",
  },
  {
    step: 4,
    title: "Dehumidifier & Drainage",
    description:
      "A crawl-space-rated dehumidifier is installed and programmed. If standing water is a recurring issue, a drainage system is recommended.",
  },
  {
    step: 5,
    title: "Final Inspection & Warranty",
    description:
      "We walk you through the completed work and provide your warranty documentation.",
  },
] as const;

const beforeItems = [
  "Dirt or thin plastic liner on floor",
  "Open vents pulling in humid outdoor air",
  "70–90% relative humidity",
  "Visible mold or mildew growth",
  "Sagging, wet insulation",
  "Wood rot and pest activity",
] as const;

const afterItems = [
  "20-mil reinforced vapor barrier sealed to walls",
  "Conditioned, sealed space",
  "45–55% relative humidity maintained",
  "No mold growth environment",
  "Rigid insulation properly installed",
  "Clean, inspectable, warrantied space",
] as const;

const testimonials = [
  {
    quote:
      "We ignored our crawl space for years. Finally had it inspected and found significant mold on the joists. These guys handled everything — mold treatment, full encapsulation, dehumidifier. Our energy bills are down and the musty smell is completely gone.",
    author: "Patricia W., Simpsonville",
  },
  {
    quote:
      "Selling our home and the inspector flagged the crawl space. Called Greenville Crawl Space Pros on Friday, they were there Monday. Encapsulation done by Wednesday. Passed our re-inspection.",
    author: "James & Carol H., Greer",
  },
  {
    quote:
      "I noticed my hardwood floors getting springy near the kitchen. Turned out the joists underneath had moisture damage. They repaired the joists and encapsulated the whole space. Floors are solid again.",
    author: "Marcus T., Taylors",
  },
] as const;

const trustBadges = [
  "Free Inspections",
  "Licensed & Insured",
  `Serving Upstate SC Since ${siteConfig.foundedYear}`,
] as const;

export default function Home() {
  return (
    <>
      <SchemaScript schema={getHomeFaqSchema()} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-white">
        <CrossHatchOverlay />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,136,42,0.12),transparent_50%)]" />

        <div className="container-narrow relative section-padding">
          <p className="label-caps text-accent-light">
            Upstate South Carolina&apos;s Crawl Space Specialists
          </p>
          <h1 className="mt-5 max-w-5xl text-balance font-display text-display-sm sm:text-display">
            Your Crawl Space Is the Foundation of Your Home&apos;s Health. Is Yours Protecting
            You — or Hurting You?
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Moisture, mold, and rot in your crawl space affect your air quality, your floors, and
            your home&apos;s structure. We inspect, encapsulate, and repair crawl spaces throughout
            Greenville and Upstate SC.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary justify-center text-base">
              Schedule a Free Inspection
            </Link>
            <Link
              href="/crawl-space-encapsulation"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              What Is Encapsulation?
            </Link>
          </div>

          <div className="mt-8 max-w-3xl rounded-lg border-2 border-accent/60 bg-accent/10 px-5 py-4">
            <p className="flex gap-3 text-sm leading-relaxed text-white sm:text-base">
              <AlertTriangle
                className="mt-0.5 h-5 w-5 shrink-0 text-accent-light"
                aria-hidden="true"
              />
              <span>
                If you smell musty odors in your home, feel soft spots in your floors, or notice
                higher humidity inside — your crawl space may already be compromised.
              </span>
            </p>
          </div>

          <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
            {trustBadges.map((badge) => (
              <li key={badge} className="flex items-center gap-2 text-sm font-medium text-white/90">
                <Check className="h-4 w-4 shrink-0 text-accent-light" aria-hidden="true" />
                {badge}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Symptoms */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <p className="label-caps">Don&apos;t Wait Until It&apos;s Too Late</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              Warning Signs You Have a Crawl Space Problem
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Most Greenville homeowners don&apos;t think about their crawl space until something goes
              wrong. But by then, moisture, mold, or rot may have been silently building for years.
              Here&apos;s what to watch for.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {symptoms.map(({ emoji, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-danger/15 bg-white p-6 shadow-sm"
              >
                <span className="text-3xl" aria-hidden="true">
                  {emoji}
                </span>
                <h3 className="mt-4 font-display text-xl text-dark">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What Is Encapsulation */}
      <section className="bg-white section-padding">
        <div className="container-narrow">
          <div className="mx-auto max-w-4xl">
            <p className="label-caps">The South Carolina Difference</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              What Is Crawl Space Encapsulation — and Why Does It Matter in South Carolina?
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                South Carolina&apos;s humidity is among the highest in the nation. Traditional
                open-vent crawl spaces were designed for drier climates and actually draw humid
                outdoor air in — the opposite of what&apos;s needed here.
              </p>
              <p>
                Modern encapsulation seals the crawl space completely with a heavy-duty vapor barrier
                on the floor and walls, conditions the air, and typically adds a dehumidifier to
                maintain optimal humidity year-round.
              </p>
            </div>

            <blockquote className="mt-8 rounded-xl border-l-4 border-accent bg-neutral px-6 py-5">
              <p className="font-display text-lg leading-relaxed text-primary">
                South Carolina ranks among the top states for crawl space mold damage — the
                combination of clay soil, high humidity, and older open-vent construction creates
                perfect conditions.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="max-w-2xl">
            <p className="label-caps">Our Process</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              Our Crawl Space Encapsulation Process
            </h2>
          </div>

          <ol className="relative mt-12 lg:grid lg:grid-cols-5 lg:gap-6">
            <div
              className="pointer-events-none absolute left-[10%] right-[10%] top-5 hidden h-px bg-primary/20 lg:block"
              aria-hidden="true"
            />

            {processSteps.map(({ step, title, description }, index) => (
              <li key={step} className="relative flex gap-4 pb-10 last:pb-0 lg:flex-col lg:gap-0 lg:pb-0">
                {index < processSteps.length - 1 ? (
                  <span
                    className="absolute left-5 top-12 h-[calc(100%-3rem)] w-px bg-primary/20 lg:hidden"
                    aria-hidden="true"
                  />
                ) : null}

                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-sans text-sm font-semibold text-white lg:mb-4">
                  {step}
                </div>
                <div>
                  <h3 className="font-display text-lg text-primary">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Before / After */}
      <section className="bg-white section-padding">
        <div className="container-narrow">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-2xl border border-danger/20 bg-danger/5 p-8">
              <div className="flex items-center gap-3">
                <XCircle className="h-7 w-7 text-danger" aria-hidden="true" />
                <h2 className="font-display text-2xl text-danger">Before</h2>
              </div>
              <ul className="mt-6 space-y-3">
                {beforeItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-dark">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-danger" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-7 w-7 text-primary" aria-hidden="true" />
                <h2 className="font-display text-2xl text-primary">After</h2>
              </div>
              <ul className="mt-6 space-y-3">
                {afterItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-dark">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="font-display text-3xl sm:text-4xl">What Greenville Homeowners Say</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map(({ quote, author }) => (
              <blockquote
                key={author}
                className="flex h-full flex-col rounded-2xl border border-primary/10 bg-white p-6 shadow-sm"
              >
                <div className="flex gap-0.5 text-accent" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">&ldquo;{quote}&rdquo;</p>
                <footer className="mt-4 text-sm font-semibold text-primary">— {author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="bg-neutral section-padding">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <p className="label-caps">Got Questions?</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              Common Questions About Crawl Space Encapsulation in Greenville
            </h2>
          </div>
          <div className="mt-10 max-w-4xl">
            <HomeFaqAccordion items={homeFaqPreview} />
          </div>
          <Link
            href="/faq"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-accent"
          >
            See All FAQs
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-accent text-white section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl sm:text-4xl">Ready to Protect Your Greenville Home?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Schedule a free crawl space inspection — no obligation, no pressure. We&apos;ll tell you
            exactly what&apos;s there and what it needs.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PhoneLink className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {siteConfig.phone}
            </PhoneLink>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white hover:text-accent"
            >
              Request Inspection Online
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
