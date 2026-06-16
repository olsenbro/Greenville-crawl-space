"use client";

import { Phone } from "lucide-react";
import { PhoneLink } from "@/components/PhoneLink";
import { siteConfig } from "@/lib/site-config";

export function StickyCallButton() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 p-4 lg:hidden">
      <PhoneLink
        source="sticky_mobile_call"
        className="pointer-events-auto flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-base font-semibold text-white shadow-lg ring-2 ring-white/20 transition-colors hover:bg-accent-light"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        Call {siteConfig.phone}
      </PhoneLink>
    </div>
  );
}
