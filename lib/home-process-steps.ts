export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export const homeProcessSteps: readonly ProcessStep[] = [
  {
    step: 1,
    title: "Initial Inspection",
    description:
      "A licensed specialist crawls your space and checks for moisture, mold, structural damage, and current vapor barrier condition. Most contractors provide a written assessment of findings.",
  },
  {
    step: 2,
    title: "Clear & Clean",
    description:
      "Old insulation, debris, and deteriorated vapor barrier material is removed. Any existing mold is treated before encapsulation begins.",
  },
  {
    step: 3,
    title: "Vapor Barrier Installation",
    description:
      "A 20-mil reinforced liner is installed across the entire floor and up the walls, sealed at all seams and foundation walls for a complete moisture barrier.",
  },
  {
    step: 4,
    title: "Dehumidifier & Drainage",
    description:
      "A crawl-space-rated dehumidifier is installed and set to maintain optimal humidity. If standing water is a recurring issue, an interior drainage system may be recommended.",
  },
  {
    step: 5,
    title: "Final Walkthrough & Warranty",
    description:
      "The contractor walks you through the completed work and provides warranty documentation. Warranty terms vary by contractor — confirm details before work begins.",
  },
] as const;
