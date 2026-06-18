"use client";

import { siteConfig } from "@/lib/site-config";
import { trackPhoneClick } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type PhoneLinkProps = {
  className?: string;
  children?: React.ReactNode;
  source?: string;
};

export function PhoneLink({ className, children, source = "phone_link" }: PhoneLinkProps) {
  function handleClick() {
    trackPhoneClick({ source, href: siteConfig.phoneHref });
  }

  return (
    <a
      href={siteConfig.phoneHref}
      onClick={handleClick}
      data-phone-source={source}
      className={cn(className)}
      {...(children ? {} : { "aria-label": `Call ${siteConfig.phone}` })}
    >
      {children ?? siteConfig.phone}
    </a>
  );
}
