import {
  Building2,
  Factory,
  RadioTower,
  Train,
  Wind,
  type LucideIcon,
} from "lucide-react";

/**
 * Target sectors for Kaveri Industries fasteners. Copy taken from the
 * "Industries" pages of the company brochure (pages 6–7).
 */
export interface TargetSector {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

export const TARGET_SECTORS: TargetSector[] = [
  {
    id: "transmission-telecom",
    name: "Transmission & Telecommunication Towers",
    description:
      "High-tensile fastening solutions designed to withstand extreme wind loads and environmental stress in tall lattice structures.",
    icon: RadioTower,
  },
  {
    id: "buildings-structures",
    name: "Buildings & Structures",
    description:
      "Structural bolts and connection hardware for the safety and stability of commercial complexes and industrial facilities.",
    icon: Building2,
  },
  {
    id: "refineries-water",
    name: "Refineries & Water Treatment",
    description:
      "Corrosion-resistant and high-pressure fasteners engineered for critical flanged connections in pipeline networks and processing units.",
    icon: Factory,
  },
  {
    id: "wind-power",
    name: "Wind & Power Plants",
    description:
      "Specialised, fatigue-resistant bolting for tower foundations, nacelles, and blade connections in renewable energy generation.",
    icon: Wind,
  },
  {
    id: "railways-transport",
    name: "Railways & Transportation",
    description:
      "Vibration-proof fastening systems for track infrastructure and rolling stock, ensuring long-term reliability under dynamic loads.",
    icon: Train,
  },
  {
    id: "road-guard-rail",
    name: "Road Guard Rail Systems",
    description:
      "Heavy-duty, hot-dip galvanised fasteners designed for crash-barrier assembly, prioritising highway safety and longevity.",
    icon: Building2,
  },
];
