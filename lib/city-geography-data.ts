type CityGeographyFields = {
  zipCodes: string[];
  neighborhoods: string[];
  landmarks: string[];
};

export const cityGeographyBySlug: Record<string, CityGeographyFields> = {
  simpsonville: {
    zipCodes: ["29681", "29680"],
    neighborhoods: [
      "Fairview Road corridor",
      "Five Forks",
      "Neely Ferry Road area",
      "Golden Strip",
      "Hillcrest",
      "East Simpsonville",
    ],
    landmarks: [
      "Heritage Park",
      "Simpsonville City Hall",
      "Discovery Island Waterpark",
      "Golden Strip",
      "Simpsonville Public Library",
    ],
  },
  greer: {
    zipCodes: ["29650", "29651"],
    neighborhoods: [
      "Downtown Greer",
      "Pelham Falls",
      "Brookfield",
      "Greer Station",
      "Tyger River area",
      "Suber Road corridor",
    ],
    landmarks: [
      "Greer City Park",
      "Greer Heritage Museum",
      "Greer Station",
      "Tyger River",
      "BMW Manufacturing Plant",
    ],
  },
  spartanburg: {
    zipCodes: ["29301", "29302", "29303", "29306", "29307"],
    neighborhoods: [
      "Converse Heights",
      "Hampton Heights",
      "Pauline",
      "Roebuck",
      "Boiling Springs",
      "Dellwood",
    ],
    landmarks: [
      "Morgan Square",
      "Wofford College",
      "Hatcher Garden and Woodland Preserve",
      "Spartanburg Regional Healthcare System",
      "BMW Performance Center",
    ],
  },
  anderson: {
    zipCodes: ["29621", "29624", "29625", "29626"],
    neighborhoods: [
      "Downtown Anderson",
      "Northlake",
      "Concord Road corridor",
      "Clemson Boulevard area",
      "Williamston fringe",
      "Powdersville fringe",
    ],
    landmarks: [
      "Lake Hartwell",
      "Anderson University",
      "Downtown Anderson",
      "Clemson Boulevard corridor",
      "Sadlers Creek State Park",
    ],
  },
  mauldin: {
    zipCodes: ["29662"],
    neighborhoods: [
      "Mauldin Road corridor",
      "Butler Road area",
      "Bethel Road",
      "Holland Road",
      "BridgeWay Station",
      "City Center area",
    ],
    landmarks: [
      "Mauldin Cultural Center",
      "City Center Park",
      "Mauldin Sports Center",
      "Mauldin City Hall",
      "Golden Strip (nearby)",
    ],
  },
  taylors: {
    zipCodes: ["29687"],
    neighborhoods: [
      "Brookwood",
      "Taylors Grove",
      "Wade Hampton Boulevard corridor",
      "Southern Side",
      "North Taylors",
      "Mill Village area",
    ],
    landmarks: [
      "Enoree River",
      "Taylors Mill",
      "Paris Mountain foothills",
      "Southern Wesleyan University area",
      "Wade Hampton Boulevard",
    ],
  },
  easley: {
    zipCodes: ["29640", "29642"],
    neighborhoods: [
      "Downtown Easley",
      "Highway 123 corridor",
      "Powdersville (Pickens County)",
      "Doodle Trail area",
      "Southern Side",
      "Liberty fringe",
    ],
    landmarks: [
      "Easley Downtown",
      "Pickens County Recreation Center",
      "Doodle Trail",
      "Little Johns Creek",
      "Easley Public Library",
    ],
  },
  duncan: {
    zipCodes: ["29334", "29335"],
    neighborhoods: [
      "Reidville Road corridor",
      "Tyger River area",
      "Startex–Duncan corridor",
      "Wellford fringe",
      "I-85 corridor",
      "Village of Duncan",
    ],
    landmarks: [
      "Tyger River",
      "Inland Port Greer (nearby)",
      "Village of Duncan",
      "Spartanburg County Library (Duncan branch)",
      "Reidville Road",
    ],
  },
  "fountain-inn": {
    zipCodes: ["29644"],
    neighborhoods: [
      "Downtown Fountain Inn",
      "Quillen Avenue corridor",
      "Fairview Road extensions",
      "Cedar Falls area",
      "Southern Golden Strip",
      "Ware Place fringe",
    ],
    landmarks: [
      "Fountain Inn Museum of History",
      "Fountain Inn City Hall",
      "Cedar Falls Park",
      "Downtown Fountain Inn",
      "Golden Strip",
    ],
  },
};

export function withCityGeography<T extends { slug: string }>(city: T): T & CityGeographyFields {
  const geography = cityGeographyBySlug[city.slug];
  if (!geography) {
    throw new Error(`Missing geography data for city slug: ${city.slug}`);
  }
  return { ...city, ...geography };
}
