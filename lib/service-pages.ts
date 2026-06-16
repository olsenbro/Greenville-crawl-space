export const CORE_SERVICE_SLUGS = [
  "crawl-space-encapsulation",
  "vapor-barrier",
  "crawl-space-repair",
  "dehumidifier-installation",
  "mold-in-crawl-space",
  "floor-joist-repair",
] as const;

export type CoreServiceSlug = (typeof CORE_SERVICE_SLUGS)[number];

export function getServicePath(slug: CoreServiceSlug): `/services/${CoreServiceSlug}` {
  return `/services/${slug}`;
}

export const CORE_SERVICES = [
  { slug: "crawl-space-encapsulation", label: "Crawl Space Encapsulation" },
  { slug: "vapor-barrier", label: "Vapor Barrier Installation" },
  { slug: "crawl-space-repair", label: "Crawl Space Repair" },
  { slug: "dehumidifier-installation", label: "Dehumidifier Installation" },
  { slug: "mold-in-crawl-space", label: "Mold in Crawl Space" },
  { slug: "floor-joist-repair", label: "Floor Joist Repair" },
] as const satisfies ReadonlyArray<{ slug: CoreServiceSlug; label: string }>;

export const SERVICE_PAGES = CORE_SERVICES.map(({ slug, label }) => ({
  slug,
  label,
  href: getServicePath(slug),
}));

export function isCoreServiceSlug(slug: string): slug is CoreServiceSlug {
  return (CORE_SERVICE_SLUGS as readonly string[]).includes(slug);
}

type ServiceModule = {
  metadata: import("next").Metadata;
  default: React.ComponentType;
};

export const servicePageModules: Record<
  CoreServiceSlug,
  () => Promise<ServiceModule>
> = {
  "crawl-space-encapsulation": () =>
    import("@/components/services/crawl-space-encapsulation"),
  "vapor-barrier": () => import("@/components/services/vapor-barrier"),
  "crawl-space-repair": () => import("@/components/services/crawl-space-repair"),
  "dehumidifier-installation": () =>
    import("@/components/services/dehumidifier-installation"),
  "mold-in-crawl-space": () => import("@/components/services/mold-in-crawl-space"),
  "floor-joist-repair": () => import("@/components/services/floor-joist-repair"),
};

/** Legacy flat URLs → canonical /services/[slug] paths (301 in next.config) */
export const legacyServiceRedirects: Record<string, CoreServiceSlug> = {
  "/crawl-space-encapsulation": "crawl-space-encapsulation",
  "/vapor-barrier": "vapor-barrier",
  "/crawl-space-repair": "crawl-space-repair",
  "/dehumidifier-installation": "dehumidifier-installation",
  "/mold-in-crawl-space": "mold-in-crawl-space",
  "/floor-joist-repair": "floor-joist-repair",
};
