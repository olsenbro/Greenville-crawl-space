import { siteConfig } from "./site-config";

export type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
  source: string;
  session_id?: string;
};

export async function submitLead(payload: LeadPayload): Promise<void> {
  const response = await fetch(
    siteConfig.lovable.leadsUrl,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    },
  );

  if (!response.ok) {
    throw new Error(`Lead submission failed (${response.status})`);
  }
}
