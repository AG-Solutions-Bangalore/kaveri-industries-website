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
 * Target sectors for Kaveri Industries fasteners.
 * Copy is sourced verbatim from the "Utilization" pages of the company
 * brochure (pages 6–7) — see `public/images/assets.md` for the
 * photography plan that supports each sector card.
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
    name: "Transmission & Telecommunication Towers",
    description:
      "High-tensile bolting assemblies built to withstand extreme wind loads and long-term environmental stress in tall lattice structures.",
    icon: RadioTower,
    imageUrl: "/images/sector-telecom.webp",
    imageAlt:
      "High-voltage transmission and telecommunication lattice towers against an open sky",
  },
  {
    id: "buildings-bridges",
    name: "Buildings, Bridges & Other Structures",
    description:
      "Structural bolts and connection hardware essential for the safety and stability of commercial complexes, bridges and large civil structures.",
    icon: Building2,
    imageUrl: "/images/sector-structures.webp",
    imageAlt:
      "Steel framework of a building and bridge under construction — structural bolting in use",
  },
  {
    id: "refineries-water",
    name: "Refineries & Water Treatment Plants",
    description:
      "Corrosion-resistant, high-pressure fasteners engineered for critical flanged connections in pipeline networks and processing units.",
    icon: Factory,
    imageUrl: "/images/sector-refineries.webp",
    imageAlt:
      "Petrochemical refinery columns and a water-treatment plant under daylight",
  },
  {
    id: "wind-power",
    name: "Wind & Power Plants",
    description:
      "Specialised fatigue-resistant bolting for tower foundations, nacelles and blade connections in renewable and conventional power generation.",
    icon: Wind,
    imageUrl: "/images/sector-wind-power.webp",
    imageAlt:
      "Row of wind turbines across a green field — renewable power generation",
  },
  {
    id: "railways-transport",
    name: "Railways & Transportation",
    description:
      "Vibration-proof fastening systems for track infrastructure and rolling stock, ensuring long-term reliability under dynamic loads.",
    icon: Train,
    imageUrl: "/images/sector-railways.webp",
    imageAlt:
      "High-speed trains at a modern railway platform — transportation infrastructure",
  },
  {
    id: "road-guard-rail",
    name: "Road Guard Rail Systems & Other Development Projects",
    description:
      "Heavy-duty hot-dip galvanised fasteners designed for crash-barrier assembly — prioritising highway safety and longevity.",
    icon: Shield,
    imageUrl: "/images/sector-guard-rail.webp",
    imageAlt:
      "Hot-dip galvanised road guard rail / crash barrier along a curved highway",
  },
];