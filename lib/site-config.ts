export const siteConfig = {
  name: "Greenville Crawl Space Pros",
  tagline: "Crawl Space Encapsulation & Repair in Greenville, SC",
  description:
    "Connect with trusted local crawl space encapsulation, moisture control, and repair specialists serving Greenville and the Upstate South Carolina region. Free inspections and fast referrals.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://greenvillecrawlspacepros.com",
  schemaUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://greenvillecrawlspacepros.com",
  phone: "(864) 555-0142",
  phoneHref: "tel:+18645550142",
  email: "info@greenvillecrawlspacepros.com",
  foundedYear: 2015,
  address: {
    street: "Greenville, SC",
    city: "Greenville",
    state: "SC",
    zip: "29601",
    country: "US",
  },
  geo: {
    latitude: 34.8526,
    longitude: -82.394,
  },
  serviceArea: "Greenville, Spartanburg, Anderson, Greer, Simpsonville, and the Upstate SC region",
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
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
