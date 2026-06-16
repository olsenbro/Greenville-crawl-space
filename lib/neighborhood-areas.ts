import { cityAreas, type CityArea } from "./areas-served";

export type NeighborhoodArea = {
  slug: string;
  name: string;
  citySlug: string;
  cityName: string;
  state: "SC";
  stateName: string;
  title: string;
  description: string;
  h1: string;
  quickAnswer: string;
  intro: string[];
  body: string[];
  zipCodes: string[];
  landmarks: string[];
  nearbyLandmark: string;
  secondaryLandmark: string;
};

export function slugifyLocation(text: string): string {
  return text
    .toLowerCase()
    .replace(/[–—/]/g, " ")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function getNeighborhoodSlug(citySlug: string, neighborhoodName: string): string {
  return `${citySlug}-${slugifyLocation(neighborhoodName)}`;
}

export function getNeighborhoodPath(slug: string): `/areas/${string}` {
  return `/areas/${slug}`;
}

function buildNeighborhoodCopy(
  city: CityArea,
  neighborhood: string,
  index: number,
): Pick<
  NeighborhoodArea,
  "title" | "description" | "h1" | "quickAnswer" | "intro" | "body" | "nearbyLandmark" | "secondaryLandmark"
> {
  const primaryLandmark = city.landmarks[index % city.landmarks.length];
  const secondaryLandmark = city.landmarks[(index + 2) % city.landmarks.length];
  const zipList = city.zipCodes.join(", ");
  const zipSample = city.zipCodes[index % city.zipCodes.length];

  const housingEra =
    index % 3 === 0
      ? "1990s and early-2000s subdivisions"
      : index % 3 === 1
        ? "1980s–2000s ranch and split-level homes"
        : "mix of established streets and newer infill construction";

  const moisturePattern =
    index % 4 === 0
      ? "standing water after spring storms and slow-draining clay soil"
      : index % 4 === 1
        ? "musty odors upstairs and soft floors near bathrooms"
        : index % 4 === 2
          ? "visible mold on joists discovered during HVAC or pest inspections"
          : "high indoor humidity and failing builder-grade vapor barriers";

  return {
    nearbyLandmark: primaryLandmark,
    secondaryLandmark,
    title: `Crawl Space Encapsulation ${neighborhood} ${city.name} SC`,
    description: `Crawl space encapsulation in ${neighborhood}, ${city.name}, SC (${zipSample}). Local pros fix ${moisturePattern} near ${primaryLandmark}. Free estimate.`,
    h1: `Crawl Space Encapsulation in ${neighborhood}, ${city.name}, South Carolina`,
    quickAnswer: `Crawl space encapsulation in ${neighborhood}, ${city.name}, SC typically costs $5,000–$9,000 and addresses ${moisturePattern} in ZIP ${zipSample} and surrounding ${city.name} areas.`,
    intro: [
      `${neighborhood} homeowners in ${city.name} often discover crawl space moisture problems only after ${moisturePattern} — especially in ${housingEra} where open vents and thin vapor barriers were standard when the homes were built.`,
      `Licensed specialists serve ${neighborhood} and all of ${city.name} (${zipList}) with encapsulation, mold treatment, joist repair, and dehumidifier installation — free estimates with photo documentation near ${primaryLandmark} and ${secondaryLandmark}.`,
    ],
    body: [
      `The ${neighborhood} area sits within ${city.name}'s ${zipList} ZIP codes, where Upstate South Carolina's red clay holds moisture against foundation walls long after rain stops. Homes near ${primaryLandmark} and the ${secondaryLandmark} corridor frequently show the same progression: ground moisture evaporates into the crawl space, humid outdoor air enters through open foundation vents, and relative humidity climbs above the 60% threshold where mold grows on floor joists and subfloor.`,
      `${neighborhood} includes many ${housingEra} with crawl spaces that were never sealed to modern standards. Original 6-mil polyethylene sheeting — where installed at all — tears on gravel and pier footings within a few years. Insulation sags from moisture absorption. Homeowners in ${neighborhood} often notice ${moisturePattern} before anyone inspects below the floor line.`,
      `Because ${neighborhood} is part of the broader ${city.name} market, local contractors reach this area without the delays common with out-of-area companies. Specialists document conditions with photos, provide itemized quotes, and sequence work correctly — mold treatment and structural repair before encapsulation when needed. Full encapsulation with a 20-mil liner, vent sealing, and commercial dehumidifier typically runs $5,000–$9,000 for standard ${city.name} homes.`,
      `If you own property in ${neighborhood} near ${primaryLandmark}, request a free crawl space estimate to confirm whether your space needs vapor barrier replacement, full encapsulation, or structural repair. Addressing moisture early in ${zipSample} and neighboring ${city.name} ZIP codes costs far less than replacing rotted joists or negotiating crawl space findings during a home sale.`,
    ],
  };
}

function buildNeighborhoodArea(city: CityArea, neighborhood: string, index: number): NeighborhoodArea {
  const slug = getNeighborhoodSlug(city.slug, neighborhood);
  const copy = buildNeighborhoodCopy(city, neighborhood, index);

  return {
    slug,
    name: neighborhood,
    citySlug: city.slug,
    cityName: city.name,
    state: city.state,
    stateName: city.stateName,
    zipCodes: city.zipCodes,
    landmarks: city.landmarks,
    ...copy,
  };
}

export const neighborhoodAreas: NeighborhoodArea[] = cityAreas.flatMap((city) =>
  city.neighborhoods.map((neighborhood, index) => buildNeighborhoodArea(city, neighborhood, index)),
);

export function getNeighborhoodBySlug(slug: string): NeighborhoodArea | undefined {
  return neighborhoodAreas.find((area) => area.slug === slug);
}

export function getNeighborhoodsByCity(citySlug: string): NeighborhoodArea[] {
  return neighborhoodAreas.filter((area) => area.citySlug === citySlug);
}

export function getNeighborhoodHref(citySlug: string, neighborhoodName: string): string {
  return getNeighborhoodPath(getNeighborhoodSlug(citySlug, neighborhoodName));
}
