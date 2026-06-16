import { siteConfig } from "@/lib/site-config";

type ServiceAreaMapProps = {
  heading?: string;
  headingId?: string;
  description?: string;
  className?: string;
  showMap?: boolean;
};

export function ServiceAreaMap({
  heading = "Greenville, SC Service Area",
  headingId,
  description = `Connecting Greenville and Upstate South Carolina homeowners with local crawl space specialists — call ${siteConfig.phone} to confirm coverage in your area.`,
  className = "",
  showMap = true,
}: ServiceAreaMapProps) {
  const src = `https://maps.google.com/maps?q=${siteConfig.mapEmbedQuery}&z=10&output=embed`;

  return (
    <div className={className}>
      <h2
        id={headingId}
        className="font-display text-2xl font-semibold text-primary sm:text-3xl"
      >
        {heading}
      </h2>
      <p className="mt-2 text-muted">{description}</p>
      {showMap ? (
        <div className="mt-6 overflow-hidden rounded-xl border border-primary/10 shadow-sm">
          <iframe
            title={siteConfig.imageAlt.serviceAreaMap}
            src={src}
            className="aspect-[16/10] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      ) : null}
    </div>
  );
}
