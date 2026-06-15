export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  id: string;
  title: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    id: "problems",
    title: "Understanding Crawl Space Problems",
    items: [
      {
        question: "Why is my crawl space wet even when it hasn't rained?",
        answer:
          "Ground moisture evaporates constantly from soil — rain isn't required for a crawl space to be wet. In Upstate South Carolina, red clay holds moisture against foundation walls and releases it slowly over days or weeks. Open foundation vents also pull humid outdoor air inside, where it condenses on cooler joist and duct surfaces. Plumbing leaks, HVAC condensate lines, and poor grading that directs water toward the foundation add moisture even during dry weather. If your crawl space feels damp without recent rain, the source is almost always a combination of soil moisture, humidity, and ventilation — not a one-time leak.",
      },
      {
        question: "What causes mold in a crawl space?",
        answer:
          "Mold needs three things to grow: moisture, organic material, and time. Crawl spaces provide all three — wood joists and subfloor for food, persistent humidity above 60% for moisture, and decades of undisturbed conditions for time. In South Carolina's humid climate, open-vent crawl spaces routinely exceed 70–80% relative humidity in summer. Condensation on joists, failed vapor barriers, and standing water accelerate growth. Penicillium, Aspergillus, and Stachybotrys are commonly found in Upstate crawl spaces during professional inspections.",
      },
      {
        question: "What is the stack effect and why does it matter?",
        answer:
          "The stack effect describes how air moves through your home — warm air rises, exits through the attic and upper levels, and pulls replacement air upward from the lowest point: your crawl space. Up to 50% of the air on your first floor can originate below your home. If that crawl space air is musty, humid, or carrying mold spores, it enters your living space through gaps around plumbing, HVAC ducts, and floor penetrations. This is why crawl space problems often appear as indoor air quality issues before anyone inspects below the floor.",
      },
      {
        question: "How do I know if my crawl space is causing problems inside my home?",
        answer:
          "Common signs include musty odors that persist despite cleaning, higher indoor humidity than expected, allergy-like symptoms that worsen at home, soft or bouncy floor sections, and doors that stick or swing open on their own. You may also notice cold floors in winter, increased HVAC runtime, or higher energy bills without an obvious cause. A professional crawl space inspection with humidity readings and photo documentation confirms whether conditions below are affecting your living space.",
      },
      {
        question: "What's the difference between a sealed and vented crawl space?",
        answer:
          "A vented crawl space has open foundation vents designed to allow outdoor air circulation — a building practice developed for dry climates. A sealed (encapsulated) crawl space closes those vents, installs a continuous vapor barrier on the floor and walls, and conditions the air with a dehumidifier. Vented crawl spaces in humid climates like South Carolina consistently perform worse than sealed ones because outdoor air introduced through vents raises humidity rather than lowering it. Modern building science recommends sealed crawl spaces for all humid regions.",
      },
      {
        question: "Are vented crawl spaces bad in South Carolina?",
        answer:
          "Yes — research consistently shows vented crawl spaces underperform in humid climates. South Carolina's average outdoor humidity is too high for ventilation to dry a crawl space; instead, vents deliver saturated air that condenses on cool surfaces below the home. Building codes in many humid-climate states have moved toward requiring sealed crawl spaces for new construction. Existing homes with open vents benefit significantly from encapsulation — sealing vents, installing a proper liner, and adding dehumidification.",
      },
    ],
  },
  {
    id: "encapsulation",
    title: "Encapsulation & Vapor Barriers",
    items: [
      {
        question: "What is crawl space encapsulation?",
        answer:
          "Crawl space encapsulation is the complete sealing and conditioning of the space beneath your home. It includes installing a 20-mil reinforced vapor barrier across the entire floor and up foundation walls, sealing or closing all foundation vents, adding wall insulation where appropriate, and installing a crawl-space-rated dehumidifier to maintain 45–55% relative humidity year-round. The goal is converting an open, humid cavity into a controlled environment that protects floor joists, subfloor, and indoor air quality. Full encapsulation addresses both ground moisture and humid outdoor air — the two primary moisture sources in Upstate SC.",
      },
      {
        question: "What is a vapor barrier and how thick should it be?",
        answer:
          "A vapor barrier is a plastic liner installed over crawl space soil to block ground moisture from evaporating upward into the space. Minimum builder-grade barriers are often 6-mil polyethylene — thin enough to tear on gravel and pier footings within a few years. Professional crawl space contractors install 20-mil reinforced liners rated for puncture resistance and long-term performance. In South Carolina's humid climate, 20-mil is the industry standard for any installation intended to last more than a few years.",
      },
      {
        question: "What's the difference between encapsulation and just a vapor barrier?",
        answer:
          "A vapor barrier only blocks ground moisture — it does not seal foundation vents or condition the air. Encapsulation is a complete system: 20-mil liner on floor and walls, sealed vents, wall insulation, and a commercial dehumidifier. In Upstate SC, a vapor barrier alone rarely solves humidity problems because open vents continue introducing humid outdoor air. Homeowners who install barrier-only systems often call back within a few years when musty odors and mold return.",
      },
      {
        question: "Can I install a vapor barrier myself?",
        answer:
          "DIY vapor barrier installation is physically possible but difficult to execute correctly. Crawl spaces are tight, dirty, and often contain hazards including mold, pests, and sharp debris. Proper installation requires sealing every seam, wrapping every pier, running the liner up foundation walls to the sill plate, and taping all penetrations — work that's slow and uncomfortable in limited clearance. Gaps and tears in DIY installations are the most common failure points. Professional installation includes warranty coverage and correct material specification.",
      },
      {
        question: "How long does encapsulation take?",
        answer:
          "Most standard residential encapsulation projects in the Greenville area take 2–4 days depending on crawl space size, clearance height, and prep work required. Homes needing mold treatment, joist repair, or drainage installation before encapsulation may take 4–7 days total. The encapsulation phase itself — liner installation, vent sealing, and dehumidifier setup — is typically 1–2 days for an average home. Your contractor provides a timeline during the free inspection based on your specific conditions.",
      },
      {
        question: "What warranty comes with encapsulation?",
        answer:
          "Reputable encapsulation contractors typically warranty the vapor barrier liner for 20–25 years and workmanship for 5–10 years. Dehumidifier units carry separate manufacturer warranties, usually 5 years on parts with optional extended coverage. Warranty terms should be provided in writing before work begins, including what maintenance is required to keep coverage valid — typically annual dehumidifier filter changes and a visual inspection. Ask specifically what is excluded, such as damage from future plumbing leaks or homeowner modifications.",
      },
    ],
  },
  {
    id: "mold-repair",
    title: "Mold, Repair & Dehumidifiers",
    items: [
      {
        question: "Can I encapsulate over existing mold?",
        answer:
          "No — encapsulating over active mold traps moisture and spores against wood surfaces and allows mold to continue growing in the sealed, dark environment. Mold must be properly treated with professional-grade antimicrobial products before encapsulation begins. In cases of extensive mold on joists or subfloor, affected wood may need to be removed and replaced. The correct sequence is always: treat mold first, fix any structural damage, then encapsulate to prevent recurrence. Skipping treatment to save money results in failure within months.",
      },
      {
        question: "What type of mold is in my crawl space?",
        answer:
          "Common species in Upstate SC crawl spaces include Penicillium (blue/green growth on wood and insulation), Aspergillus (found on damp organic materials), and Stachybotrys (associated with chronically wet cellulose, often called black mold). Identification requires professional assessment — color and appearance alone don't confirm species. If you have health concerns related to mold exposure, consult a medical professional. Our role is eliminating the source through proper treatment and moisture control, not medical diagnosis.",
      },
      {
        question: "Do I need a dehumidifier after encapsulation?",
        answer:
          "In Upstate South Carolina, yes — a crawl-space-rated dehumidifier is strongly recommended and included in most professional encapsulation packages. Even a perfectly sealed crawl space retains some moisture from the soil and air trapped during encapsulation. Without active dehumidification, humidity can climb back above mold-growth thresholds within weeks. Commercial units are sized for continuous duty, drain automatically, and maintain 45–55% RH year-round. Household dehumidifiers are not designed for crawl space conditions and will fail quickly.",
      },
      {
        question: "What humidity level should I maintain in my crawl space?",
        answer:
          "The industry standard target is 45–55% relative humidity (RH). Above 60% RH, mold growth becomes likely on organic surfaces including wood joists and paper-faced insulation. Below 40% RH, wood can become overly dry and crack. A properly sized crawl-space dehumidifier with a humidistat maintains this range automatically. After encapsulation, your contractor verifies humidity levels before project completion and programs the unit accordingly.",
      },
      {
        question: "How do I know if my floor joists are damaged?",
        answer:
          "Signs visible from inside the home include soft or spongy floor sections, increased squeaking, visible sag in floor lines, and doors that stick or won't latch. From the crawl space, look for dark staining on joists, visible fungal growth, crumbling wood when probed, and insulation saturated with moisture. A professional inspection uses moisture meters and documents conditions with photos. Joists with more than approximately 30% cross-section compromised typically require full replacement rather than sistering.",
      },
      {
        question: "Can you fix floor sag without replacing all the joists?",
        answer:
          "Yes — in many cases, sistering (bolting a new joist alongside a damaged one) restores structural capacity without full replacement. Sistering is appropriate when damage is localized and the existing joist retains enough integrity to support the repair. Full replacement is required when rot has consumed a significant portion of the joist, when split or failed at support points, or when sistering cannot restore adequate load-bearing capacity. Fixing joists without addressing the moisture source guarantees repeat failure — encapsulation should follow structural repair.",
      },
    ],
  },
  {
    id: "cost-process",
    title: "Cost, Process & SC-Specific",
    items: [
      {
        question: "How much does crawl space encapsulation cost in Greenville?",
        answer:
          "Full encapsulation in the Greenville area typically runs $3,500–$7,000 for a standard home, depending on square footage and existing conditions. Adding a commercial dehumidifier brings most projects to $5,000–$9,000. Homes requiring mold treatment or joist repair before encapsulation may fall in the $6,000–$15,000 range. Vapor barrier-only installation costs less ($1,500–$3,500) but rarely provides complete moisture control in SC's humid climate. We provide free, itemized inspections so you know the full cost before work begins.",
      },
      {
        question: "Does homeowners insurance cover crawl space encapsulation?",
        answer:
          "Standard homeowners insurance policies typically do not cover crawl space encapsulation because it's considered a preventive improvement, not damage from a covered sudden event. Exceptions may apply if encapsulation is part of repairs following a covered water loss — such as a burst pipe that caused crawl space damage. Gradual moisture damage and mold from humidity are generally excluded as maintenance issues. Check your specific policy and speak with your agent. We provide documentation of conditions and work performed if a claim is involved.",
      },
      {
        question: "Will encapsulation help my energy bills?",
        answer:
          "Most homeowners see measurable improvement after encapsulation. A damp, unsealed crawl space forces your HVAC system to dehumidify air entering through the floor system — adding load year-round. Encapsulated homes typically see 15–25% reduction in HVAC-related energy use, though results vary by home size, existing insulation, and pre-encapsulation conditions. Sealed crawl spaces also reduce cold floor complaints in winter by eliminating the air infiltration path from below.",
      },
      {
        question: "Do I need a permit for crawl space encapsulation in Greenville County?",
        answer:
          "Most crawl space encapsulation projects in Greenville County do not require a building permit. Encapsulation is generally classified as an improvement to an existing space rather than structural modification. However, if your project includes major structural repair — replacing floor joists, adding support piers, or installing interior drainage systems — a permit may be required. We research permit requirements as part of our assessment and handle the process when permits are needed.",
      },
      {
        question: "How often should I have my crawl space inspected?",
        answer:
          "We recommend a professional inspection every 1–2 years after encapsulation, and immediately if you notice musty odors, soft floors, or higher indoor humidity. Annual dehumidifier filter changes and a quick visual check of the liner and drain line are the main ongoing maintenance tasks. Pre-purchase inspections are essential when buying a home in Upstate SC — crawl space conditions are among the most commonly flagged items on home inspection reports in this region.",
      },
      {
        question: "Is crawl space encapsulation required when selling a home in SC?",
        answer:
          "South Carolina law does not require encapsulation before sale, but crawl space conditions frequently affect transactions. Home inspectors routinely enter crawl spaces and document moisture, mold, wood rot, and structural deficiencies. Buyers commonly request repairs, price reductions, or seller credits when problems are found. Encapsulated crawl spaces with documentation, warranty transfer, and verified humidity readings remove a common negotiation obstacle and signal proper maintenance to buyers.",
      },
    ],
  },
];

export const allFaqItems = faqCategories.flatMap((category) => category.items);
