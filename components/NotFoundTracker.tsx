"use client";

import { useEffect } from "react";
import { trackNotFound } from "@/lib/analytics";

/** Reports the missing URL to GA4 when the 404 page renders */
export function NotFoundTracker() {
  useEffect(() => {
    trackNotFound();
  }, []);

  return null;
}
