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
} as const satisfies Record<string, AuthoritySource>;

const pageAuthorities: Record<string, AuthoritySource> = {
  "/": authorities.epaIndoorAir,
  "/crawl-space-encapsulation": authorities.doeCrawlspace,
  "/vapor-barrier": authorities.doeCrawlspace,
  "/crawl-space-repair": authorities.hudHealthyHomes,
  "/dehumidifier-installation": authorities.ashraeHumidity,
  "/mold-in-crawl-space": authorities.epaMold,
  "/floor-joist-repair": authorities.usdaWoodDecay,
  "/crawl-space-encapsulation-cost": authorities.buildingScienceCrawlspaces,
  "/encapsulation-vs-vapor-barrier": authorities.buildingScienceCrawlspaces,
  "/areas-served": authorities.noaaHumidity,
  "/areas-served/simpsonville": authorities.scDhecMold,
  "/areas-served/greer": authorities.doeCrawlspace,
  "/areas-served/spartanburg": authorities.epaIndoorAir,
  "/areas-served/anderson": authorities.cdcMold,
  "/areas-served/mauldin": authorities.buildingScienceCrawlspaces,
  "/areas-served/taylors": authorities.hudHealthyHomes,
  "/faq": authorities.doeCrawlspace,
  "/contact": authorities.epaMold,
  "/thank-you": authorities.epaIndoorAir,
  "/404": authorities.epaIndoorAir,
};

export function getAuthorityForPath(path: string): AuthoritySource {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return pageAuthorities[normalized] ?? authorities.doeCrawlspace;
}
