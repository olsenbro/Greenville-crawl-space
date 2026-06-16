import { siteConfig } from "@/lib/site-config";

export function ContactMap() {
  const src = `https://maps.google.com/maps?q=${siteConfig.mapEmbedQuery}&z=10&output=embed`;

  return (
    <section className="border-t border-primary/10 bg-neutral section-padding">
      <div className="container-narrow">
        <h2 className="font-display text-2xl font-semibold text-primary">Service Area Map</h2>
        <p className="mt-2 text-muted">
          Connecting Greenville and Upstate South Carolina homeowners with local crawl space
          specialists — call {siteConfig.phone} to confirm coverage in your area.
        </p>
        <div className="mt-6 overflow-hidden rounded-xl border border-primary/10 shadow-sm">
          <iframe
            title="Greenville South Carolina service area map"
            src={src}
            className="aspect-[16/10] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
