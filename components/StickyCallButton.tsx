"use client";

import { Phone } from "lucide-react";
import { PhoneLink } from "@/components/PhoneLink";
import { siteConfig } from "@/lib/site-config";

export function StickyCallButton() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-primary-dark/95 backdrop-blur-sm pb-[env(safe-area-inset-bottom)] lg:hidden">
      <PhoneLink
        source="sticky_mobile_call"
        className="flex w-full items-center justify-center gap-2 px-4 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/5 active:bg-white/10"
      >
        <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
        Call {siteConfig.phone}
      </PhoneLink>
    </div>
  );
}
