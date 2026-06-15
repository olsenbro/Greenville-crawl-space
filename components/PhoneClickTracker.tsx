"use client";

import { useEffect } from "react";
import { trackPhoneClick } from "@/lib/analytics";

/** Delegates click tracking to all tel: links on the page */
export function PhoneClickTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest('a[href^="tel:"]');
      if (!anchor || !(anchor instanceof HTMLAnchorElement)) return;

      trackPhoneClick({
        source: anchor.dataset.phoneSource ?? "tel_link",
        href: anchor.getAttribute("href") ?? undefined,
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
