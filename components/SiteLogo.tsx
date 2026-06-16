import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

type SiteLogoProps = {
  className?: string;
  size?: number;
  priority?: boolean;
};

export function SiteLogo({ className, size = 40, priority = false }: SiteLogoProps) {
  return (
    <Image
      src={siteConfig.logoPath}
      alt={siteConfig.imageAlt.logo}
      width={size}
      height={size}
      priority={priority}
      className={className}
    />
  );
}
