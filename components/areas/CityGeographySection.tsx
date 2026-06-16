import Link from "next/link";
import type { CityArea } from "@/lib/areas-served";
import { getNeighborhoodHref } from "@/lib/neighborhood-areas";

type CityGeographySectionProps = {
  city: CityArea;
};

function GeographyList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function NeighborhoodLinks({ city }: { city: CityArea }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {city.neighborhoods.map((neighborhood) => (
        <li key={neighborhood}>
          <Link
            href={getNeighborhoodHref(city.slug, neighborhood)}
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary hover:text-white"
          >
            {neighborhood}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function CityGeographySection({ city }: CityGeographySectionProps) {
  return (
    <section
      className="border-t border-primary/10 bg-neutral section-padding"
      aria-labelledby={`${city.slug}-geography-heading`}
    >
      <div className="container-narrow mx-auto max-w-3xl">
        <h2
          id={`${city.slug}-geography-heading`}
          className="font-display text-3xl font-semibold sm:text-4xl"
        >
          Which Areas in {city.name}, {city.state} Do We Serve?
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Crawl space encapsulation, repair, and moisture control specialists serve homeowners
          throughout {city.name}, {city.stateName} — including these ZIP codes, neighborhoods, and
          well-known local reference points:
        </p>

        <div className="mt-8 space-y-8">
          <div>
            <h3 className="font-display text-xl font-semibold text-primary">ZIP Codes Served</h3>
            <GeographyList items={city.zipCodes} />
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-primary">Neighborhoods &amp; Areas</h3>
            <NeighborhoodLinks city={city} />
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-primary">Landmarks &amp; Reference Points</h3>
            <GeographyList items={city.landmarks} />
          </div>
        </div>
      </div>
    </section>
  );
}
