import {
  Building2,
  Factory,
  RadioTower,
  Train,
  Wind,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { IMAGE_BASE_URL } from "@/lib/images";

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
  imageTitle?: string;
}

export const TARGET_SECTORS: TargetSector[] = [
  {
    id: "transmission-telecom",
    name: "Transmission & Telecommunication Towers",
    description:
      "High-tensile bolting assemblies built to withstand extreme wind loads and vibration in lattice structures.",
    icon: RadioTower,
    imageUrl: `${IMAGE_BASE_URL}/home/sector-telecom.webp`,
    imageAlt:
      "High-voltage transmission and telecommunication lattice towers against an open sky",
    imageTitle: "Transmission and Telecommunication Tower Fasteners",
  },
  {
    id: "buildings-bridges",
    name: "Buildings, Bridges & Other Structures",
    description:
      "Structural bolts and connection hardware essential for the safety and stability of commercial complexes, bridges and large civil structures.",
    icon: Building2,
    imageUrl: `${IMAGE_BASE_URL}/home/sector-structures.webp`,
    imageAlt:
      "Steel framework of a building and bridge under construction — structural bolting in use",
    imageTitle: "Structural Fasteners for Buildings and Bridges",
  },
  {
    id: "refineries-water",
    name: "Refineries & Water Treatment Plants",
    description:
      "Corrosion-resistant high-pressure fasteners engineered for critical flanged connections in pipeline networks and processing units.",
    icon: Factory,
    imageUrl: `${IMAGE_BASE_URL}/home/sector-refineries.webp`,
    imageAlt:
      "Petrochemical refinery columns and a water-treatment plant under daylight",
    imageTitle: "Fasteners for Refineries and Water Treatment Plants",
  },
  {
    id: "wind-power",
    name: "Wind & Power Plants",
    description:
      "Specialized flange connections for tower foundations, nacelles and other critical components in renewable and conventional power generation.",
    icon: Wind,
    imageUrl: `${IMAGE_BASE_URL}/home/sector-wind-power.webp`,
    imageAlt:
      "Row of wind turbines across a green field — renewable power generation",
    imageTitle: "Fasteners for Wind and Power Plants",
  },
  {
    id: "railways-transport",
    name: "Railways & Transportation",
    description:
      "Wide range of fasteners used in track infrastructure, rolling stock systems fitting & other dynamic railway applications.",
    icon: Train,
    imageUrl: `${IMAGE_BASE_URL}/home/sector-railways.webp`,
    imageAlt:
      "High-speed trains at a modern railway platform — transportation infrastructure",
    imageTitle: "Railway and Transportation Fasteners",
  },
  {
    id: "road-guard-rail",
    name: "Road Guard Rail Systems & Other Development Projects",
    description:
      "Heavy-duty high-galvanized fasteners designed for crash-barrier assemblies, highway safety and longevity.",
    icon: Shield,
    imageUrl: `${IMAGE_BASE_URL}/home/sector-guard-rail.webp`,
    imageAlt:
      "Hot-dip galvanised road guard rail / crash barrier along a curved highway",
    imageTitle: "Hot Dip Galvanized Road Guard Rail Fasteners",
  },
];