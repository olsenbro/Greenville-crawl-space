import type { MetadataRoute } from "next";
import { siteRoutes, getAbsoluteUrl } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteRoutes.map(({ path, changeFrequency, priority }) => ({
    url: getAbsoluteUrl(path),
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
