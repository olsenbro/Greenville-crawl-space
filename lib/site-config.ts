import { getServicePath } from "./service-pages";

const DEFAULT_SITE_URL = "https://www.crawlspacegreenville.com";

function normalizeSiteHost(url: URL): URL {
  if (url.hostname === "crawlspacegreenville.com") {
    url.hostname = "www.crawlspacegreenville.com";
  }
  return url;
}

/** Base site origin (always www) for schema URLs and metadataBase. */
function resolveSiteOrigin(rawUrl: string): string {
  try {
    return normalizeSiteHost(new URL(rawUrl)).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

/** Ensures apex URLs resolve to www and preserves the path for page-level canonicals. */
export function toCanonicalUrl(url: string): string {
  try {
    const parsed = normalizeSiteHost(new URL(url));
    const pathname = parsed.pathname === "/" ? "" : parsed.pathname.replace(/\/$/, "");
    return `${parsed.origin}${pathname}`;
  } catch {
    return url;
  }
}

const siteUrl = resolveSiteOrigin(process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL);

export const siteConfig = {
  name: "Greenville Crawl Space Pros",
  /** Canonical location string for metadata, schema, and geo tags. */
  locationLabel: "Greenville, South Carolina",
  stateName: "South Carolina",
  tagline: "Connect with Trusted Crawl Space Specialists in Greenville, SC",
  description:
    "Connect with trusted local crawl space encapsulation, moisture control, and repair specialists serving Greenville, SC and the Upstate South Carolina region. Free estimates and fast referrals.",
  url: siteUrl,
  schemaUrl: siteUrl,
  phone: "(864) 387-3270",
  phoneHref: "tel:+18643873270",
  email: "info@crawlspacegreenville.com",
  foundedYear: 2015,
  address: {
    city: "Greenville",
    state: "SC",
    zip: "29601",
    country: "US",
  },
  /** Single-line NAP address for display (service-area business, no street) */
  formattedAddress: "Greenville, SC 29601",
  geo: {
    latitude: 34.8526,
    longitude: -82.394,
  },
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const,
      opens: "07:00",
      closes: "18:00",
    },
  ],
  businessHoursLabel: "Monday–Saturday: 7:00 AM – 6:00 PM",
  serviceArea: "Greenville, Spartanburg, Anderson, Greer, Simpsonville, and the Upstate SC region",
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "G-WLBWCSRS3L",
  lovable: {
    projectId: "989dcdf4-fcda-4ea7-9496-664150ee3ecb",
    pixelUrl:
      "https://brosites.lovable.app/api/public/px/989dcdf4-fcda-4ea7-9496-664150ee3ecb.gif",
    leadsUrl:
      "https://brosites.lovable.app/api/public/leads/989dcdf4-fcda-4ea7-9496-664150ee3ecb",
  },
  mapEmbedQuery: "Greenville,+SC",
  logoPath: "/icon-512.png",
  ogImagePath: "/og-image.png",
  imageAlt: {
    logo: "Greenville Crawl Space Pros logo — crawl space encapsulation specialists in Greenville, SC",
    og: "Greenville Crawl Space Pros — crawl space encapsulation and moisture control in Greenville, SC",
    beforeCrawlSpace:
      "Unencapsulated crawl space with standing water, open vents, and moisture damage in a Greenville, SC home",
    afterEncapsulation:
      "Encapsulated crawl space with sealed vapor barrier and dehumidifier installed in Greenville, SC",
    serviceAreaMap:
      "Map showing Greenville, SC and Upstate South Carolina crawl space service coverage area",
  },
  cta: {
    primary: "Request a Free Estimate",
    online: "Request a Free Estimate",
    defaultHeading: "Need a Licensed Greenville Crawl Space Specialist?",
    defaultBody:
      "Get matched with a trusted local specialist — no obligation, no pressure. Receive an honest assessment of your crawl space and a clear recommendation for what it needs.",
  },
} as const;

export const serviceLinks = [
  { href: getServicePath("crawl-space-encapsulation"), label: "Crawl Space Encapsulation" },
  { href: getServicePath("vapor-barrier"), label: "Vapor Barrier Installation" },
  { href: getServicePath("crawl-space-repair"), label: "Crawl Space Repair" },
  { href: getServicePath("dehumidifier-installation"), label: "Dehumidifier Installation" },
  { href: getServicePath("mold-in-crawl-space"), label: "Mold in Crawl Space" },
  { href: getServicePath("floor-joist-repair"), label: "Floor Joist Repair" },
] as const;

export const mainNavLinks = [
  { href: "/what-is-encapsulation", label: "What Is Encapsulation" },
  { href: "/crawl-space-encapsulation-cost", label: "Cost Guide" },
  { href: "/areas-served", label: "Areas Served" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const serviceAreas = [
  "Greenville",
  "Spartanburg",
  "Anderson",
  "Mauldin",
  "Simpsonville",
  "Greer",
  "Taylors",
  "Easley",
  "Duncan",
  "Fountain Inn",
] as const;

/** Consistent city + state label for NAP, footers, and service-area lists. */
export function formatServiceAreaLabel(area: string): string {
  return `${area}, SC`;
}
