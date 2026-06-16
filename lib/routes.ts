import { siteConfig } from "./site-config";
import { cityAreas } from "./areas-served";
import { neighborhoodAreas } from "./neighborhood-areas";
import { blogPosts, getBlogPostPath } from "./blog-posts";

export type SiteRoute = {
  path: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
};

/** Sitemap registry — exact priorities for SEO */
export const siteRoutes: SiteRoute[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/services/crawl-space-encapsulation", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/vapor-barrier", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/crawl-space-repair", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/dehumidifier-installation", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/mold-in-crawl-space", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/floor-joist-repair", changeFrequency: "monthly", priority: 0.8 },
  { path: "/crawl-space-encapsulation-cost", changeFrequency: "monthly", priority: 0.9 },
  { path: "/encapsulation-vs-vapor-barrier", changeFrequency: "monthly", priority: 0.8 },
  { path: "/what-is-encapsulation", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  ...blogPosts.map((post) => ({
    path: getBlogPostPath(post.slug),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  })),
  { path: "/areas-served", changeFrequency: "monthly", priority: 0.7 },
  ...cityAreas.map((city) => ({
    path: `/areas-served/${city.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  })),
  ...neighborhoodAreas.map((area) => ({
    path: `/areas/${area.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  })),
  { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.6 },
];

export function getAbsoluteUrl(path: string): string {
  return `${siteConfig.schemaUrl}${path === "/" ? "" : path}`;
}
