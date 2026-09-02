import {
  Building2,
  Factory,
  RadioTower,
  Train,
  Wind,
  Shield,
  type LucideIcon,
} from "lucide-react";

/**
 * Target sectors for Kaveri Industries fasteners. Copy taken from the
 * "Utilization" pages of the company brochure (pages 6–7).
 */
export interface TargetSector {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  imageUrl?: string;
  imageAlt?: string;
}

export const TARGET_SECTORS: TargetSector[] = [
  {
    id: "transmission-telecom",
    name: "Transmission & Telecommunication",
    description:
      "High-tensile fastening solutions designed to withstand extreme wind loads and environmental stress in tall lattice structures.",
    icon: RadioTower,
    imageUrl: "/images/sector-telecom.svg",
    imageAlt: "Transmission and telecommunication steel lattice tower",
  },
  {
    id: "buildings-structures",
    name: "Buildings & Structures",
    description:
      "Structural bolts and connection hardware essential for the safety and stability of commercial complexes and industrial facilities.",
    icon: Building2,
    imageUrl: "/images/sector-structures.svg",
    imageAlt: "Structural steel framework for modern buildings and bridges",
  },
  {
    id: "refineries-water",
    name: "Refineries & Water Treatment",
    description:
      "Corrosion-resistant and high-pressure fasteners engineered for critical flanged connections in pipeline networks and processing units.",
    icon: Factory,
    imageUrl: "/images/sector-refineries.svg",
    imageAlt: "Industrial petrochemical refinery piping and treatment tanks",
  },
  {
    id: "wind-power",
    name: "Wind & Power Plants",
    description:
      "Specialised, fatigue-resistant bolting for tower foundations, nacelles, and blade connections in renewable energy generation.",
    icon: Wind,
    imageUrl: "/images/sector-wind-power.svg",
    imageAlt: "Wind turbine renewable power generation field",
  },
  {
    id: "railways-transport",
    name: "Railways & Transportation",
    description:
      "Vibration-proof fastening systems for track infrastructure and rolling stock, ensuring long-term reliability under dynamic loads.",
    icon: Train,
    imageUrl: "/images/sector-railways.svg",
    imageAlt: "High-speed railway tracks and transportation infrastructure",
  },
  {
    id: "road-guard-rail",
    name: "Road Guard Rail Systems",
    description:
      "Heavy-duty, hot-dip galvanised fasteners designed for crash-barrier assembly, prioritizing highway safety and longevity.",
    icon: Shield,
    imageUrl: "/images/sector-guard-rail.svg",
    imageAlt: "Hot-dip galvanized road guard rail barrier system on highway",
  },
];
