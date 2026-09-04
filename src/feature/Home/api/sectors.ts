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
      "High-tensile bolting assemblies built to withstand extreme wind loads and vibration in lattice structures.",
    icon: RadioTower,
    imageUrl: "/images/home/sector-telecom.webp",
    imageAlt:
      "High-voltage transmission and telecommunication lattice towers against an open sky",
  },
  {
    id: "buildings-bridges",
    name: "Buildings, Bridges & Other Structures",
    description:
      "Structural bolts and connection hardware essential for the safety and stability of commercial complexes, bridges and large civil structures.",
    icon: Building2,
    imageUrl: "/images/home/sector-structures.webp",
    imageAlt:
      "Steel framework of a building and bridge under construction — structural bolting in use",
  },
  {
    id: "refineries-water",
    name: "Refineries & Water Treatment Plants",
    description:
      "Corrosion-resistant high-pressure fasteners engineered for critical flanged connections in pipeline networks and processing units.",
    icon: Factory,
    imageUrl: "/images/home/sector-refineries.webp",
    imageAlt:
      "Petrochemical refinery columns and a water-treatment plant under daylight",
  },
  {
    id: "wind-power",
    name: "Wind & Power Plants",
    description:
      "Specialized flange connections for tower foundations, nacelles and other critical components in renewable and conventional power generation.",
    icon: Wind,
    imageUrl: "/images/home/sector-wind-power.webp",
    imageAlt:
      "Row of wind turbines across a green field — renewable power generation",
  },
  {
    id: "railways-transport",
    name: "Railways & Transportation",
    description:
      "Wide range of fasteners used in track infrastructure, rolling stock systems fitting & other dynamic railway applications.",
    icon: Train,
    imageUrl: "/images/home/sector-railways.webp",
    imageAlt:
      "High-speed trains at a modern railway platform — transportation infrastructure",
  },
  {
    id: "road-guard-rail",
    name: "Road Guard Rail Systems & Other Development Projects",
    description:
      "Heavy-duty high-galvanized fasteners designed for crash-barrier assemblies, highway safety and longevity.",
    icon: Shield,
    imageUrl: "/images/home/sector-guard-rail.webp",
    imageAlt:
      "Hot-dip galvanised road guard rail / crash barrier along a curved highway",
  },
];