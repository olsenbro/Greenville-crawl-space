import { getServicePath, legacyServiceRedirects } from "./service-pages";
import { getNeighborhoodBySlug } from "./neighborhood-areas";

export type AuthoritySource = {
  org: string;
  title: string;
  url: string;
  context: string;
};

export const authorities = {
  doeCrawlspace: {
    org: "U.S. Department of Energy",
    title: "Crawlspace Insulation",
    url: "https://www.energy.gov/energysaver/crawlspace-insulation",
    context:
      "In humid climates, the DOE recommends sealing crawl spaces and installing a continuous ground vapor barrier to reduce moisture migration into the home.",
  },
  epaIndoorAir: {
    org: "U.S. EPA",
    title: "Introduction to Indoor Air Quality",
    url: "https://www.epa.gov/indoor-air-quality-iaq/introduction-indoor-air-quality",
    context:
      "EPA research on indoor air quality explains how air from crawl spaces and basements can enter living areas through the stack effect and floor penetrations.",
  },
  epaMold: {
    org: "U.S. EPA",
    title: "Mold Cleanup in Your Home",
    url: "https://www.epa.gov/mold/mold-cleanup-your-home",
    context:
      "EPA guidance stresses fixing the moisture source before treating mold — the same sequence used before crawl space encapsulation.",
  },
  epaHumidity: {
    org: "U.S. EPA",
    title: "Condensation, Humidity, and Your Home",
    url: "https://www.epa.gov/mold/condensation-humidity-and-your-home",
    context:
      "EPA guidance notes that keeping indoor relative humidity below 60% helps prevent mold growth on wood and organic surfaces.",
  },
  cdcMold: {
    org: "CDC",
    title: "Basic Facts About Mold and Dampness",
    url: "https://www.cdc.gov/mold-health/about/index.html",
    context:
      "CDC notes that controlling indoor humidity and moisture is the most effective way to prevent mold growth in homes.",
  },
  buildingScienceCrawlspaces: {
    org: "Building Science Corporation",
    title: "New Light in Crawlspaces",
    url: "https://www.buildingscience.com/documents/insights/bsi-009-new-light-in-crawlspaces",
    context:
      "Building science research shows that sealed, conditioned crawl spaces outperform traditional vented designs in humid regions like the Southeast.",
  },
  advancedEnergyClosedCrawlspaces: {
    org: "Advanced Energy",
    title: "Closed Crawlspaces",
    url: "https://www.advancedenergy.org/buildings/buildingscience/closed-crawlspaces",
    context:
      "Advanced Energy field research in humid climates found that sealed crawl spaces maintain lower humidity and reduce HVAC load compared to vented designs.",
  },
  ashraeHumidity: {
    org: "ASHRAE",
    title: "Indoor Air Quality Guide",
    url: "https://www.ashrae.org/technical-resources/ashrae-journal",
    context:
      "ASHRAE recommends maintaining indoor relative humidity between 30% and 60% — a range crawl-space dehumidifiers are sized to hold year-round.",
  },
  usdaWoodDecay: {
    org: "USDA Forest Products Laboratory",
    title: "Wood Deterioration",
    url: "https://www.fpl.fs.usda.gov/research/units/construction_and_utilization/deterioration_and_preservation/wood_deterioration.shtml",
    context:
      "USDA research confirms that sustained wood moisture above 20% creates conditions for fungal decay in floor joists and subfloor framing.",
  },
  scDhecMold: {
    org: "South Carolina DHEC",
    title: "Mold in the Home",
    url: "https://scdhec.gov/environment/your-home/mold",
    context:
      "South Carolina DHEC advises homeowners to address moisture and ventilation problems promptly to prevent mold in crawl spaces and basements.",
  },
  noaaHumidity: {
    org: "NOAA National Centers for Environmental Information",
    title: "Climate Data for South Carolina",
    url: "https://www.ncei.noaa.gov/access/us-climate-normals/",
    context:
      "NOAA climate data confirms Upstate South Carolina's high annual humidity — a key reason open-vent crawl spaces struggle without encapsulation.",
  },
  hudHealthyHomes: {
    org: "U.S. HUD",
    title: "Healthy Homes Maintenance Guide",
    url: "https://www.huduser.gov/portal/publications/pdf/Healthy_Homes_Maintenance.pdf",
    context:
      "HUD's healthy homes guidance recommends keeping crawl spaces dry and well-maintained to protect structural components and indoor air quality.",
  },
  santaFeDehumidifiers: {
    org: "Santa Fe Dehumidifiers",
    title: "Crawl Space Dehumidifier Specifications",
    url: "https://www.santafedehumidifiers.com/residential/santa-fe-dehumidifiers",
    context:
      "Commercial crawl-space dehumidifiers are engineered for continuous duty, automatic condensate drainage, and sustained humidity control below 60% RH.",
  },
} as const satisfies Record<string, AuthoritySource>;

const { doeCrawlspace, epaIndoorAir, epaMold, epaHumidity, cdcMold, buildingScienceCrawlspaces, advancedEnergyClosedCrawlspaces, ashraeHumidity, usdaWoodDecay, scDhecMold, noaaHumidity, hudHealthyHomes, santaFeDehumidifiers } =
  authorities;

const pageAuthorities: Record<string, AuthoritySource[]> = {
  "/": [epaIndoorAir, buildingScienceCrawlspaces, noaaHumidity],
  "/services/crawl-space-encapsulation": [doeCrawlspace, buildingScienceCrawlspaces, epaIndoorAir],
  "/services/vapor-barrier": [doeCrawlspace, buildingScienceCrawlspaces, noaaHumidity],
  "/services/crawl-space-repair": [hudHealthyHomes, usdaWoodDecay, epaMold],
  "/services/dehumidifier-installation": [ashraeHumidity, epaHumidity, santaFeDehumidifiers],
  "/services/mold-in-crawl-space": [epaMold, cdcMold, scDhecMold],
  "/services/floor-joist-repair": [usdaWoodDecay, hudHealthyHomes, epaMold],
  "/crawl-space-encapsulation-cost": [buildingScienceCrawlspaces, doeCrawlspace, noaaHumidity],
  "/encapsulation-vs-vapor-barrier": [buildingScienceCrawlspaces, advancedEnergyClosedCrawlspaces, doeCrawlspace],
  "/what-is-encapsulation": [doeCrawlspace, buildingScienceCrawlspaces, epaIndoorAir],
  "/areas-served": [noaaHumidity, scDhecMold, doeCrawlspace],
  "/areas-served/simpsonville": [scDhecMold, doeCrawlspace, epaIndoorAir],
  "/areas-served/greer": [doeCrawlspace, buildingScienceCrawlspaces, noaaHumidity],
  "/areas-served/spartanburg": [epaIndoorAir, scDhecMold, buildingScienceCrawlspaces],
  "/areas-served/anderson": [cdcMold, epaMold, noaaHumidity],
  "/areas-served/mauldin": [buildingScienceCrawlspaces, scDhecMold, epaIndoorAir],
  "/areas-served/taylors": [hudHealthyHomes, usdaWoodDecay, doeCrawlspace],
  "/areas-served/easley": [scDhecMold, noaaHumidity, buildingScienceCrawlspaces],
  "/areas-served/duncan": [doeCrawlspace, epaIndoorAir, advancedEnergyClosedCrawlspaces],
  "/areas-served/fountain-inn": [epaIndoorAir, noaaHumidity, scDhecMold],
  "/faq": [doeCrawlspace, epaIndoorAir, buildingScienceCrawlspaces],
  "/contact": [epaMold, doeCrawlspace, scDhecMold],
  "/thank-you": [epaIndoorAir, doeCrawlspace, buildingScienceCrawlspaces],
  "/404": [epaIndoorAir, doeCrawlspace, buildingScienceCrawlspaces],
};

const defaultAuthorities: AuthoritySource[] = [doeCrawlspace, epaIndoorAir, buildingScienceCrawlspaces];

export function getAuthoritiesForPath(path: string): AuthoritySource[] {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const legacySlug = legacyServiceRedirects[normalized];
  if (legacySlug) {
    return pageAuthorities[getServicePath(legacySlug)] ?? defaultAuthorities;
  }
  const neighborhood = getNeighborhoodBySlug(normalized.replace(/^\/areas\//, ""));
  if (neighborhood) {
    return pageAuthorities[`/areas-served/${neighborhood.citySlug}`] ?? defaultAuthorities;
  }
  return pageAuthorities[normalized] ?? defaultAuthorities;
}

export function getAuthorityForPath(path: string): AuthoritySource {
  return getAuthoritiesForPath(path)[0];
}
