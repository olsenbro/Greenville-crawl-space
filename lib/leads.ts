import { siteConfig } from "@/lib/site-config";

export type LeadPayload = {
  name: string;
  phone: string;
  message: string;
  source: string;
};

export async function submitLead(payload: LeadPayload): Promise<void> {
  const response = await fetch(siteConfig.leadApiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Lead submission failed (${response.status})`);
  }
}
