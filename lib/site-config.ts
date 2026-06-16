export const siteConfig = {
  name: "Greenville Crawl Space Pros",
  tagline: "Connect with Trusted Crawl Space Specialists in Greenville, SC",
  description:
    "Connect with trusted local crawl space encapsulation, moisture control, and repair specialists serving Greenville and the Upstate South Carolina region. Free estimates and fast referrals.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.crawlspacegreenville.com",
  schemaUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.crawlspacegreenville.com",
  phone: "(864) 387-3270",
  phoneHref: "tel:+18643873270",
  email: "info@crawlspacegreenville.com",
  leadApiUrl:
    process.env.NEXT_PUBLIC_LEAD_API_URL ??
    "/api/public/leads/989dcdf4-fcda-4ea7-9496-664150ee3ecb",
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
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  mapEmbedQuery: "Greenville,+SC",
  logoPath: "/icon-512.png",
  ogImagePath: "/og-image.png",
  cta: {
    primary: "Request a Free Estimate",
    online: "Request a Free Estimate",
    defaultHeading: "Connect with a Licensed Greenville Crawl Space Specialist",
    defaultBody:
      "Get matched with a trusted local specialist — no obligation, no pressure. Receive an honest assessment of your crawl space and a clear recommendation for what it needs.",
  },
} as const;

export const serviceLinks = [
  { href: "/crawl-space-encapsulation", label: "Crawl Space Encapsulation" },
  { href: "/vapor-barrier", label: "Vapor Barrier Installation" },
  { href: "/crawl-space-repair", label: "Crawl Space Repair" },
  { href: "/dehumidifier-installation", label: "Dehumidifier Installation" },
  { href: "/mold-in-crawl-space", label: "Mold in Crawl Space" },
  { href: "/floor-joist-repair", label: "Floor Joist Repair" },
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
