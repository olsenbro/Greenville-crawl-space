export type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
  source: string;
};

export async function submitLead(payload: LeadPayload): Promise<void> {
  const response = await fetch(
    "https://brosites.lovable.app/api/public/leads/989dcdf4-fcda-4ea7-9496-664150ee3ecb",
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
