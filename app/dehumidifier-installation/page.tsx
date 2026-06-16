import {
  BulletList,
  ServicePageTemplate,
  ServiceSection,
} from "@/components/service/ServicePageTemplate";
import { getServiceSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Crawl Space Dehumidifier Installation Greenville SC",
  description:
    "Crawl space dehumidifier installation in Greenville, SC. Commercial-grade units keep humidity safe year-round and help prevent mold. Get a free estimate today.",
  canonical: "/dehumidifier-installation",
});

const faqs = [
  {
    question: "What size dehumidifier does my crawl space need?",
    answer:
      "Sizing depends on crawl space square footage, ceiling height, and current moisture levels. Most Greenville homes require 70–90 pint capacity units. A specialist sizes correctly during your free estimate — undersized units run constantly and fail to maintain target humidity.",
  },
  {
    question: "Where does the water go?",
    answer:
      "Crawl-space-rated units drain continuously through a condensate line routed to the exterior, a floor drain, or a condensate pump when gravity drainage isn't available. You should never need to empty a bucket manually.",
  },
  {
    question: "Can I add a dehumidifier without full encapsulation?",
    answer:
      "You can, but it's far less effective. Without vent sealing and a complete vapor barrier, the dehumidifier fights a constant influx of humid outdoor air. Most contractors recommend pairing dehumidifier installation with at least vent sealing and a quality liner.",
  },
  {
    question: "How often does a crawl space dehumidifier need maintenance?",
    answer:
      "Filter changes and a general inspection once per year, typically $150–$300. Units are designed for continuous operation and require minimal ongoing attention when installed correctly.",
  },
];

export default function DehumidifierInstallationPage() {
  return (
    <ServicePageTemplate
      h1="Crawl Space Dehumidifier Installation in Greenville, South Carolina"
      intro={[
        "A crawl-space-rated dehumidifier is the engine that keeps your encapsulated space dry year-round — household units aren't built for this job.",
        "Connect with local specialists who install and service commercial-grade dehumidifiers throughout Greenville and Upstate SC.",
      ]}
      breadcrumbs={[
        { label: "Services", href: "/dehumidifier-installation" },
        { label: "Dehumidifier Installation" },
      ]}
      serviceSlug="dehumidifier-installation"
      schema={getServiceSchema({
        name: "Dehumidifier Installation",
        description:
          "Commercial-grade crawl space dehumidifier installation and setup in Greenville, SC.",
        path: "/dehumidifier-installation",
      })}
      faqs={faqs}
    >
      <ServiceSection title="Why Crawl Space Dehumidifiers Are Different">
        <p>
          The dehumidifier in your living room wasn&apos;t designed for a crawl space. Crawl-space-rated
          units are built for <strong className="text-dark">continuous duty</strong> — running 24/7 in
          a humid, dusty environment with limited airflow. Key differences:
        </p>
        <BulletList
          items={[
            "Higher capacity (70–90+ pints per day vs. 30–50 for household units)",
            "Continuous condensate drainage — no bucket to empty",
            "Corrosion-resistant components for harsh crawl space conditions",
            "Designed to operate efficiently at lower temperatures",
            "Higher airflow rates to circulate air across the entire sealed space",
          ]}
        />
      </ServiceSection>

      <ServiceSection title="Target Humidity for Crawl Spaces" className="bg-neutral">
        <p>
          The industry standard target for encapsulated crawl spaces is{" "}
          <strong className="text-dark">45–55% relative humidity (RH)</strong>. Above 60% RH, mold
          growth becomes likely on organic surfaces. Below 40% RH, wood can become overly dry. A
          properly sized and programmed dehumidifier maintains this range automatically.
        </p>
      </ServiceSection>

      <ServiceSection title="Why Standard Dehumidifiers Fail in Greenville">
        <p>
          Greenville&apos;s average relative humidity hovers around 70% outdoors — and often higher in crawl
          spaces. Household dehumidifiers are overwhelmed by the volume of air and moisture load in a
          crawl space, especially in summer. They also lack proper drainage setups, leading to overflow
          and shutdown.
        </p>
        <p>
          South Carolina&apos;s clay soils hold moisture against foundation walls, and open foundation vents
          continuously introduce humid air. Only a purpose-built crawl space system — sealed space plus
          commercial dehumidifier — reliably controls humidity here.
        </p>
      </ServiceSection>

      <ServiceSection title="Brands Local Pros Install" className="bg-neutral">
        <p>
          Licensed local specialists install commercial-grade crawl space dehumidifiers from leading
          manufacturers including{" "}
          <strong className="text-dark">Santa Fe</strong>,{" "}
          <strong className="text-dark">Aprilaire</strong>, and comparable professional brands
          engineered specifically for crawl space and basement applications.
        </p>
        <p>
          Brand selection depends on your crawl space size, layout, and drainage options. A specialist
          recommends the right unit during your free estimate — not the cheapest option that will
          underperform.
        </p>
      </ServiceSection>

      <ServiceSection title="Dehumidifier Installation Cost">
        <BulletList
          items={[
            "Installed crawl space dehumidifier: $1,200–$2,500 depending on capacity and drainage setup",
            "Condensate pump (when gravity drainage unavailable): $200–$400 additional",
            "Annual maintenance (filter, inspection): $150–$300",
          ]}
        />
      </ServiceSection>

      <ServiceSection title="Pairing With Encapsulation" className="bg-neutral">
        <p>
          A dehumidifier works best as part of a complete system. Encapsulation seals the space — vapor
          barrier, vent covers, wall sealing — so the dehumidifier isn&apos;t fighting a constant influx of
          humid outdoor air. Installing a dehumidifier in an unsealed crawl space is like running your
          AC with the windows open.
        </p>
        <p>
          If you&apos;ve already had encapsulation done elsewhere, local contractors can add or replace
          a dehumidifier. If you&apos;re starting fresh, most pros recommend planning both together for
          the best result and warranty coverage.
        </p>
      </ServiceSection>
    </ServicePageTemplate>
  );
}
