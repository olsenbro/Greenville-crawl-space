import { withCityGeography } from "./city-geography-data";

export type CityArea = {
  slug: string;
  name: string;
  state: "SC";
  stateName: string;
  title: string;
  description: string;
  h1: string;
  intro: string[];
  body: string[];
  neighbors: string[];
  /** Primary ZIP codes served in this city */
  zipCodes: string[];
  /** Neighborhoods and subdivisions with crawl space service coverage */
  neighborhoods: string[];
  /** Local landmarks and geographic reference points */
  landmarks: string[];
};

type CityAreaBase = Omit<CityArea, "zipCodes" | "neighborhoods" | "landmarks">;

const cityAreasBase: CityAreaBase[] = [
  {
    slug: "simpsonville",
    name: "Simpsonville",
    state: "SC",
    stateName: "South Carolina",
    title: "Crawl Space Encapsulation Simpsonville SC | Local Pros",
    description:
      "Crawl space encapsulation in Simpsonville, SC. Local specialists for moisture control, vapor barriers, and mold in Golden Strip homes. Get a free estimate.",
    h1: "Crawl Space Encapsulation in Simpsonville, South Carolina",
    intro: [
      "Simpsonville homeowners face crawl space moisture problems rooted in the town's rapid growth along the Fairview Road corridor — a mix of 1990s and 2000s homes with original open-vent crawl spaces, and newer subdivisions built on disturbed red clay that holds water long after rain.",
      "Get matched with licensed crawl space specialists serving Simpsonville and all of Upstate SC — same-day scheduling available for free estimates throughout the Golden Strip.",
    ],
    body: [
      "Simpsonville has transformed from a quiet Greenville suburb into one of the fastest-growing communities in South Carolina. That growth brought thousands of homes built on freshly graded red clay — soil that compacts unevenly and retains moisture far longer than sandy Piedmont soils found elsewhere in the state. When builders poured foundations and installed thin 6-mil vapor barriers as a minimum code requirement, they created crawl spaces that looked compliant on closing day but fail within a decade in Upstate humidity.",
      "The Fairview Road corridor and neighborhoods branching toward Fountain Inn and Mauldin contain a high concentration of homes from the 1990s and early 2000s — the era when open-vent crawl spaces were still standard practice. These homes often have never had a dehumidifier, never had vents sealed, and frequently show the first signs of trouble as musty odors upstairs, soft spots near bathroom plumbing, or visible mold on floor joists during a routine HVAC service call.",
      "Newer Simpsonville subdivisions face a different but equally serious challenge: cut-and-fill lots where builders moved red clay to create level building pads. Water follows the path of least resistance, pooling against foundation walls and saturating crawl space soil even when the surface looks dry. Homeowners in communities near Heritage Park and the Golden Strip often discover standing water after heavy spring rains — a problem that vapor barrier alone cannot solve.",
      "Because Simpsonville sits just minutes from downtown Greenville, local contractors cover the entire city without the delays or subcontractor handoffs common with out-of-area companies. Licensed pros in Simpsonville provide contractor inspections, itemized quotes, and full project work — encapsulation, mold treatment, joist repair, and dehumidifier installation — from established neighborhoods near City Hall to new construction off Neely Ferry Road.",
      "If you smell mustiness in your Simpsonville home, notice higher-than-normal humidity indoors, or had a home inspection flag your crawl space, request a free estimate to connect with local specialists. Most full encapsulation projects in Simpsonville run $5,000–$9,000 depending on square footage and existing conditions — far less than the structural repairs that follow years of unchecked moisture.",
    ],
    neighbors: ["Mauldin", "Greenville", "Greer"],
  },
  {
    slug: "greer",
    name: "Greer",
    state: "SC",
    stateName: "South Carolina",
    title: "Crawl Space Encapsulation Greer SC | Upstate SC Pros",
    description:
      "Crawl space encapsulation and repair in Greer, SC. Local specialists serve railroad district homes and BMW corridor subdivisions. Request a free estimate today.",
    h1: "Crawl Space Encapsulation in Greer, South Carolina",
    intro: [
      "Greer crawl spaces tell two different stories: post-war homes near the historic railroad district that have never had a proper vapor barrier, and newer BMW/Michelin corridor suburbs built on cut-and-fill lots where drainage was an afterthought.",
      "Connect with local specialists who encapsulate, repair, and dehumidify crawl spaces throughout Greer — from downtown's established streets to Tyger River area developments.",
    ],
    body: [
      "Greer's identity is split between its charming downtown core — where homes dating to the 1940s and 1950s still stand on original foundations — and the explosive suburban growth along the I-85 corridor driven by BMW, Michelin, and the inland port. These two housing eras create distinctly different crawl space problems, and both require Upstate-specific solutions rather than generic waterproofing approaches designed for dry climates.",
      "Older Greer neighborhoods near the railroad district and Poinsett Street often have crawl spaces that were never encapsulated at all — bare dirt floors, open foundation vents, and fiberglass insulation sagging from moisture absorption. Many of these homes have floor joists that have been exposed to decades of humidity cycling. Musty odors and soft floor sections near kitchens and bathrooms are common first symptoms homeowners notice before anyone enters the crawl space.",
      "The BMW corridor suburbs — including developments near Pelham Falls, Brookfield, and the areas surrounding Greer Station's newer residential growth — were built on aggressively graded terrain. Cut-and-fill lots create slopes where water runs toward foundation walls rather than away from them. Builder-grade 6-mil poly sheeting, where it was installed at all, tears on gravel and pier footings within a few years. Homeowners in these communities often discover standing water or mold during a pre-sale inspection.",
      "Greer's position between Greenville and Spartanburg means it experiences the full force of Upstate humidity without the moderating effects of higher elevation. Summer dew points regularly push crawl space humidity above 80% in unencapsulated spaces — well into mold growth territory. Open vents intended to dry the space instead deliver a constant supply of saturated outdoor air that condenses on cooler joist surfaces.",
      "Local contractors in Greer offer free crawl space estimates with written, itemized quotes. Available services include full encapsulation with 20-mil liners, commercial dehumidifier installation, mold treatment, floor joist sistering, and drainage systems where needed. Whether you own a historic home downtown or a five-year-old subdivision property, licensed pros address the moisture source — not just the symptoms.",
    ],
    neighbors: ["Taylors", "Simpsonville", "Spartanburg"],
  },
  {
    slug: "spartanburg",
    name: "Spartanburg",
    state: "SC",
    stateName: "South Carolina",
    title: "Crawl Space Encapsulation Spartanburg SC | Local Pros",
    description:
      "Crawl space encapsulation in Spartanburg, SC. Local specialists handle historic homes and rolling-terrain drainage challenges. Request your free estimate today.",
    h1: "Crawl Space Encapsulation in Spartanburg, South Carolina",
    intro: [
      "Spartanburg's historic housing stock — much of it pre-1970 — combined with rolling terrain that channels water toward foundations makes crawl space moisture one of the most common hidden problems in the county.",
      "Get matched with licensed contractors who provide encapsulation, mold treatment, and structural repair throughout Spartanburg, where humidity levels often exceed even Greenville's.",
    ],
    body: [
      "Spartanburg County's housing landscape is older and more varied than much of Greenville County. Neighborhoods like Converse Heights, Hampton Heights, and the areas surrounding Wofford College contain homes built before modern crawl space science existed — when the prevailing wisdom was to ventilate below-grade spaces with outdoor air. In Spartanburg's humid climate, that approach has failed consistently for decades, leaving generations of homeowners with mold, rot, and musty indoor air.",
      "The rolling terrain throughout Spartanburg creates drainage patterns that work against crawl space health. Homes built on slopes — common in the Pauline, Roebuck, and Boiling Springs areas — often have crawl spaces where the uphill side stays relatively dry while the downhill side accumulates water after every rain event. Without proper grading, gutter extensions, and interior drainage, this water sits against foundation walls and saturates the soil beneath the vapor barrier.",
      "Spartanburg's humidity statistics are among the highest in the Upstate. Average relative humidity runs several points above Greenville throughout the year, and summer months push outdoor dew points high enough that unencapsulated crawl spaces routinely exceed 85% RH — the threshold where mold growth accelerates on organic materials. Penicillium and Aspergillus species are commonly found on joists in Spartanburg crawl spaces during contractor inspections.",
      "Many Spartanburg homeowners first discover crawl space problems during real estate transactions. Pre-1970 homes in the city's historic districts frequently fail inspection due to moisture damage, sagging insulation, and visible mold on subfloor and joist surfaces. Addressing these issues before listing — or immediately after purchase — protects property value and prevents the structural deterioration that turns a $6,000 encapsulation into a $15,000 repair project.",
      "Local contractors serve all of Spartanburg County with the same services available in Greenville: free estimates, 20-mil vapor barrier encapsulation, vent sealing, commercial dehumidifier installation, mold remediation, floor joist repair, and interior drainage systems. Written quotes from licensed pros itemize every component so Spartanburg homeowners know exactly what they're paying for before work begins.",
    ],
    neighbors: ["Greer", "Anderson", "Taylors"],
  },
  {
    slug: "anderson",
    name: "Anderson",
    state: "SC",
    stateName: "South Carolina",
    title: "Crawl Space Encapsulation Anderson SC | Local Pros",
    description:
      "Crawl space encapsulation in Anderson, SC. Local specialists for vapor barriers, mold treatment, and repair near Lake Hartwell. Get a free estimate today.",
    h1: "Crawl Space Encapsulation in Anderson, South Carolina",
    intro: [
      "Anderson County's mix of rural farmhouses, semi-rural properties, and homes on low-lying lots near Lake Hartwell tributaries creates crawl space moisture challenges that standard builder solutions rarely address.",
      "Get matched with licensed contractors in Anderson and surrounding communities for full encapsulation, mold treatment, and structural repair.",
    ],
    body: [
      "Anderson County stretches from the urban core near Clemson Boulevard to genuinely rural properties where homes sit on acreage with well water, septic systems, and crawl spaces that may not have been entered in years. This diversity means Anderson homeowners seek help for everything from suburban encapsulation projects to complex repairs on older farmhouses where moisture has compromised structural members over decades.",
      "Properties near Lake Hartwell and its tributary systems — including areas toward Powdersville, Williamston, and the waterfront communities along the lake — frequently sit on low-lying lots where the water table rises seasonally. Crawl spaces in these locations show standing water, eroded soil around piers, and mold growth that extends up joist surfaces well above the floor line. Vapor barrier alone is insufficient here; these homes often require interior drainage before encapsulation can succeed.",
      "Anderson's older rural housing stock presents unique access and condition challenges. Farmhouses and country homes built mid-century may have crawl spaces with limited clearance, deteriorated stem walls, and years of accumulated debris. Insulation installed in the 1970s or 1980s hangs in wet batts, trapping moisture against wood. A thorough contractor assessment — documenting conditions with photos — comes before recommending treatment, repair, or full encapsulation.",
      "Even Anderson's newer subdivisions along the I-85 corridor experience the same red clay moisture retention common throughout the Upstate. Builders installed minimum-code vapor barriers that degrade quickly, and open vents continue delivering humid air into the space. Homeowners in developments near Concord Road and the growing areas south of Anderson often reach out after noticing energy bills climbing or musty smells that air fresheners cannot mask.",
      "Local contractors provide free crawl space estimates throughout Anderson County with no-obligation written quotes. Full encapsulation typically runs $5,000–$9,000 depending on size and condition. Homes requiring drainage work or joist repair before encapsulation may fall in the $6,000–$15,000 range. Licensed pros handle the complete project — assessment, remediation, encapsulation, and warranty documentation — so Anderson homeowners work with one contractor from start to finish.",
    ],
    neighbors: ["Greenville", "Spartanburg", "Easley"],
  },
  {
    slug: "mauldin",
    name: "Mauldin",
    state: "SC",
    stateName: "South Carolina",
    title: "Crawl Space Encapsulation Mauldin SC | Greenville Area",
    description:
      "Crawl space encapsulation in Mauldin, SC. Replace failed builder-grade vapor barriers in 1980s–2000s neighborhoods with 20-mil systems. Free estimate today.",
    h1: "Crawl Space Encapsulation in Mauldin, South Carolina",
    intro: [
      "Mauldin's established suburban neighborhoods — largely built between the 1980s and 2000s — contain thousands of crawl spaces with original builder-grade vapor barriers that have torn, gapped, or degraded to the point of uselessness.",
      "Get matched with local contractors who replace failed barriers with professional 20-mil encapsulation systems throughout Mauldin and greater Greenville County.",
    ],
    body: [
      "Mauldin developed as a residential suburb during decades when crawl space construction standards prioritized cost over performance. The neighborhoods surrounding Mauldin Road, Butler Road, and the areas near Mauldin High School contain a dense concentration of homes whose crawl spaces were equipped with the minimum required at the time: thin polyethylene sheeting, open foundation vents, and fiberglass batts between joists. Thirty years later, those components have largely failed.",
      "The typical Mauldin crawl space shows a recognizable pattern: vapor barrier pulled away from walls, torn sections around piers, insulation sagging and darkened with moisture, and joist surfaces showing early-stage mold staining. Homeowners often report the problem started subtly — a musty smell when the HVAC runs, slightly higher indoor humidity, or a floor that feels less solid near the center of the home. By the time symptoms appear upstairs, conditions below have usually been deteriorating for years.",
      "Mauldin's red clay soil compounds the problem. Clay holds moisture against foundation walls and releases it slowly, keeping crawl space humidity elevated long after rain stops. Open vents — still present on most Mauldin homes — pull humid outdoor air into this already moist environment. The stack effect then distributes mold spores and musty air throughout the living space, affecting indoor air quality in every room above.",
      "Because Mauldin sits entirely within Greenville County, many homeowners assume county building standards protect them. In reality, code-minimum vapor barriers were never designed for South Carolina's humidity. Upgrading to full encapsulation — 20-mil reinforced liner, sealed vents, wall coverage, and a commercial dehumidifier — is the standard correction for Mauldin homes with failed original barriers.",
      "Licensed contractors serve every neighborhood in Mauldin and adjacent unincorporated Greenville County communities. Request a free estimate with photo documentation, itemized quotes, and warranty terms in writing. Most Mauldin encapsulation projects run $5,000–$9,000 for a complete system. Homes requiring mold treatment or joist repair before encapsulation may cost more — but addressing everything in one project prevents the repeat failures that come from partial fixes.",
    ],
    neighbors: ["Simpsonville", "Greenville", "Fountain Inn"],
  },
  {
    slug: "taylors",
    name: "Taylors",
    state: "SC",
    stateName: "South Carolina",
    title: "Crawl Space Encapsulation Taylors SC | North Greenville",
    description:
      "Crawl space encapsulation in Taylors, SC for Blue Ridge foothill homes where humidity and Piedmont clay cause moisture problems. Get a free estimate today.",
    h1: "Crawl Space Encapsulation in Taylors, South Carolina",
    intro: [
      "Taylors sits where the Piedmont lowlands meet the Blue Ridge foothills — a geography that creates crawl space moisture patterns distinct from Greenville proper, with seasonal runoff from higher elevations and cooler nighttime temperatures that drive condensation.",
      "Get matched with licensed contractors in Taylors and north Greenville County for full encapsulation, dehumidifier installation, and crawl space repair.",
    ],
    body: [
      "Taylors occupies a transitional zone in the Upstate landscape. To the north, the Blue Ridge foothills begin their rise toward Travelers Rest and the mountains beyond. To the south, the Piedmont flatlands extend toward downtown Greenville. This geography means Taylors crawl spaces experience moisture from two directions: red clay soil moisture rising from below and seasonal water movement from higher elevations draining through the area's creek systems — including the Enoree River watershed.",
      "Homes in Taylors neighborhoods like Brookwood, Taylors Grove, and the areas along Wade Hampton Boulevard span from 1960s ranches to 2010s subdivisions. Older homes often have never been updated below the floor line — original open vents, minimal or absent vapor barriers, and decades of humidity exposure on floor joists. Newer construction faces cut-and-fill challenges on the rolling terrain that characterizes north Greenville County, with water pooling against foundations on the downhill side of sloped lots.",
      "The foothill climate adds a condensation factor that flatland Greenville homes experience less intensely. Cooler nighttime air temperatures in Taylors mean warm, humid crawl space air contacts cooler joist and duct surfaces more frequently — producing the same condensation effect that occurs on a cold drink in summer. Open foundation vents make this worse by introducing fresh humid air that condenses on contact with cooler surfaces below the home.",
      "Taylors homeowners often notice problems seasonally — musty smells strongest in spring and fall when humidity swings are greatest, or after heavy rains when foothill runoff elevates the local water table. HVAC systems work harder year-round in homes with unencapsulated crawl spaces, and energy bills in Taylors reflect the added load of dehumidifying air that enters through the floor system.",
      "Request a free estimate to connect with local crawl space contractors throughout Taylors, with same-week availability from specialists based in the Greenville area. Services include full 20-mil encapsulation, vent sealing, Santa Fe and Aprilaire dehumidifier installation, mold treatment, floor joist sistering, and drainage systems for homes with recurring water intrusion. Written quotes break down every line item so Taylors homeowners can compare fairly and understand exactly what their project includes.",
    ],
    neighbors: ["Greer", "Greenville", "Travelers Rest"],
  },
  {
    slug: "easley",
    name: "Easley",
    state: "SC",
    stateName: "South Carolina",
    title: "Crawl Space Encapsulation Easley SC | Pickens County",
    description:
      "Crawl space encapsulation in Easley, SC. Local specialists for moisture control, mold, and repair in Pickens County homes. Request your free estimate today.",
    h1: "Crawl Space Encapsulation in Easley, South Carolina",
    intro: [
      "Easley sits at the crossroads of Pickens County growth — older ranch homes near downtown, newer subdivisions along Highway 123, and rural properties on rolling land where crawl spaces often go years without inspection.",
      "Get matched with licensed crawl space specialists serving Easley, Powdersville, and all of Pickens County for encapsulation, mold treatment, and structural repair.",
    ],
    body: [
      "Easley and the surrounding Pickens County communities combine Piedmont red clay, high summer humidity, and a housing mix that spans mid-century ranches to 2010s subdivisions along the Greenville–Clemson corridor. Many Easley crawl spaces were built with open vents and thin 6-mil vapor barriers that fail within a decade — leaving homeowners with musty indoor air, soft floors, and mold on joists discovered only during HVAC service or a home inspection.",
      "Properties toward Powdersville and the Anderson County line often share drainage challenges with neighboring Upstate markets: water pooling against downhill foundation walls after heavy rain, saturated soil beneath torn vapor barriers, and humidity that stays elevated long after storms pass. Easley homes on sloped lots near Doodle Trail and Saluda River tributaries frequently show standing water in the crawl space during spring — a sign that encapsulation alone may require interior drainage first.",
      "Pickens County's older housing stock includes farmhouses and country homes with limited crawl space access, sagging fiberglass insulation, and wood that has absorbed moisture for years. Newer Easley developments along the Highway 123 corridor face the same builder-grade shortcuts seen across the Upstate: minimum-code liners, unsealed vents, and no dehumidification. Both housing eras benefit from full encapsulation with 20-mil reinforced liner, vent sealing, and commercial dehumidifier installation.",
      "Because Easley sits between Greenville and Anderson, local contractors cover Pickens County without the delays common with out-of-area companies. Licensed pros in Easley provide photo-documented inspections, itemized quotes, and complete project work — encapsulation, mold remediation, joist sistering, and drainage correction — from downtown Easley to rural properties toward Liberty and Six Mile.",
      "If you smell mustiness in your Easley home, notice bouncing floors, or had an inspector flag crawl space moisture, request a free estimate to connect with local specialists. Most full encapsulation projects in Easley run $5,000–$9,000 depending on square footage and existing conditions — far less than the structural repairs that follow years of unchecked moisture.",
    ],
    neighbors: ["Anderson", "Greenville", "Simpsonville"],
  },
  {
    slug: "duncan",
    name: "Duncan",
    state: "SC",
    stateName: "South Carolina",
    title: "Crawl Space Encapsulation Duncan SC | I-85 Corridor",
    description:
      "Crawl space encapsulation in Duncan, SC along the I-85 growth corridor. Local pros for vapor barriers, mold, and repair near Greer and Spartanburg. Free estimate.",
    h1: "Crawl Space Encapsulation in Duncan, South Carolina",
    intro: [
      "Duncan's rapid growth along the I-85 corridor brought thousands of homes built on cut-and-fill lots — crawl spaces where builder-grade vapor barriers tore within years and open vents pull humid Upstate air inside year-round.",
      "Connect with local specialists who encapsulate, repair, and dehumidify crawl spaces throughout Duncan, Reidville, and the Spartanburg–Greenville county line.",
    ],
    body: [
      "Duncan has transformed from a quiet Spartanburg County crossroads into one of the fastest-growing communities along the I-85 corridor between Greenville and Spartanburg. That growth put new subdivisions on aggressively graded terrain — cut-and-fill lots where water runs toward foundation walls, builder-grade 6-mil poly tears on gravel within a few years, and crawl spaces that looked compliant at closing fail within a decade in Upstate humidity.",
      "Neighborhoods near Tyger River, Reidville Road, and the areas surrounding the inland port experience the same moisture patterns as Greer and Spartanburg: red clay that holds water against foundations, summer dew points that push unencapsulated crawl spaces above 80% relative humidity, and open vents that deliver saturated outdoor air instead of drying the space below.",
      "Duncan's mix of 1990s–2000s suburban homes and newer construction along the corridor often shows recognizable warning signs: vapor barrier pulled away from walls, dark mold staining on joists, insulation hanging in wet batts, and musty odors upstairs when the HVAC runs. Homeowners frequently discover problems during pre-sale inspections — moisture damage that becomes a negotiation point or deal-breaker if left unaddressed.",
      "Because Duncan sits minutes from both Greer and Spartanburg, local contractors serve the entire I-85 corridor without subcontractor handoffs. Licensed pros in Duncan provide free crawl space estimates with written, itemized quotes covering encapsulation with 20-mil liners, vent sealing, commercial dehumidifier installation, mold treatment, floor joist repair, and interior drainage where needed.",
      "Request a free estimate to connect with crawl space specialists throughout Duncan and Spartanburg County. Most full encapsulation projects run $5,000–$9,000 depending on size and condition. Homes requiring mold treatment or joist repair before encapsulation may fall in the $6,000–$15,000 range — but addressing moisture at the source prevents the repeat failures that come from partial fixes.",
    ],
    neighbors: ["Greer", "Spartanburg", "Simpsonville"],
  },
  {
    slug: "fountain-inn",
    name: "Fountain Inn",
    state: "SC",
    stateName: "South Carolina",
    title: "Crawl Space Encapsulation Fountain Inn SC | Pros",
    description:
      "Crawl space encapsulation in Fountain Inn, SC on the Golden Strip. Local specialists for moisture, mold, and vapor barriers in southern Greenville County. Free estimate.",
    h1: "Crawl Space Encapsulation in Fountain Inn, South Carolina",
    intro: [
      "Fountain Inn anchors the southern end of the Golden Strip — a blend of historic downtown homes, 1980s–2000s subdivisions, and newer growth toward Laurens County where crawl spaces with failed builder-grade barriers are the norm, not the exception.",
      "Get matched with licensed specialists who encapsulate, repair, and dehumidify crawl spaces throughout Fountain Inn and southern Greenville County.",
    ],
    body: [
      "Fountain Inn occupies a distinct position on the Golden Strip between Simpsonville and Laurens — a community where downtown historic properties sit minutes from suburban neighborhoods built during decades when open-vent crawl spaces and thin polyethylene sheeting were standard. Thirty years later, those original barriers have torn, gapped, or degraded to the point where ground moisture and humid outdoor air combine to create mold, rot, and musty indoor air throughout the home.",
      "Southern Greenville County's red clay soil holds moisture against foundation walls long after rain stops. Fountain Inn neighborhoods along Fairview Road extensions, Quillen Avenue corridors, and subdivisions branching toward Ware Place and Gray Court show the same failure pattern seen in Simpsonville and Mauldin: insulation sagging from moisture absorption, joist surfaces with early-stage mold staining, and homeowners who notice problems first as soft floors or persistent musty smells when the HVAC runs.",
      "Fountain Inn's growth toward the Laurens County line added newer homes on disturbed clay pads where drainage was often an afterthought. Cut-and-fill lots create slopes where water pools on the downhill side of foundations — saturating crawl space soil even when the yard looks dry. Builder-grade vapor barriers, where installed at all, rarely survive contact with gravel and pier footings for more than a few years.",
      "The Golden Strip's humidity profile matches the rest of the Upstate: summer dew points that push unencapsulated crawl spaces well into mold-growth territory, open vents that pull humid air inside, and the stack effect distributing musty air and spores through every room above. Full encapsulation — 20-mil reinforced liner, sealed vents, wall coverage, and a commercial dehumidifier — is the standard correction for Fountain Inn homes with failed original barriers.",
      "Licensed contractors serve every Fountain Inn neighborhood and adjacent southern Greenville County communities. Request a free estimate with photo documentation and itemized pricing. Most Fountain Inn encapsulation projects run $5,000–$9,000 for a complete system. Homes requiring mold treatment or joist repair before encapsulation may cost more — but one thorough project prevents the structural damage that turns a manageable moisture problem into a major repair.",
    ],
    neighbors: ["Simpsonville", "Mauldin", "Greenville"],
  },
];

export const cityAreas: CityArea[] = cityAreasBase.map(withCityGeography);

export const hubAreaCards = [
  ...cityAreas.map((city) => ({
    slug: city.slug,
    name: city.name,
    state: city.state,
    description: city.description.split(".")[0] + ".",
    hasPage: true as const,
  })),
  {
    slug: null,
    name: "Greenville",
    state: "SC" as const,
    description: "Greenville County — all neighborhoods and districts.",
    hasPage: false as const,
  },
];

export function getCityBySlug(slug: string): CityArea | undefined {
  return cityAreas.find((city) => city.slug === slug);
}

export function getNeighborSlug(name: string): string | null {
  const city = cityAreas.find((c) => c.name === name);
  return city?.slug ?? null;
}

export function getNeighborHref(name: string): string | null {
  if (name === "Greenville") return "/";
  const slug = getNeighborSlug(name);
  return slug ? `/areas-served/${slug}` : null;
}
