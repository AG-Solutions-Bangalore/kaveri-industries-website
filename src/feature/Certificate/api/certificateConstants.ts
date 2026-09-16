export interface CertificateItem {
  id: string;
  title: string;
  subtitle: string;
  certNo: string;
  issuedBy: string;
  validUntil: string;
  image: string;
  imageAlt: string;
  downloadUrl: string;
}

export interface HighlightItem {
  title: string;
  description: string;
  icon: "award" | "file-text" | "shield-check" | "users";
}

export interface OtherCertItem {
  title: string;
  subtitle: string;
  type: "hard-hat" | "ce" | "leaf" | "file-text" | "award";
}

export const HERO_PILLS = [
  { icon: "shield", line1: "Quality", line2: "Assured" },
  { icon: "settings", line1: "Globally", line2: "Recognized Standards" },
  { icon: "users", line1: "Trusted by", line2: "Customers & Authorities" },
] as const;

export const HIGHLIGHT_ITEMS: HighlightItem[] = [
  {
    title: "International Standards",
    description: "Certified quality management systems",
    icon: "award",
  },
  {
    title: "Government Approvals",
    description: "Approved by RDSO and relevant authorities",
    icon: "file-text",
  },
  {
    title: "Product Compliance",
    description: "Manufactured to meet industry standards",
    icon: "shield-check",
  },
  {
    title: "Continuous Improvement",
    description: "Committed to higher standards of quality and performance",
    icon: "users",
  },
];

export const MAIN_CERTIFICATES: CertificateItem[] = [
  {
    id: "iso-9001",
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    certNo: "QMS/2023/001",
    issuedBy: "TÜV NORD",
    validUntil: "14 Mar 2026",
    image: "/images/certificate/cert_iso_9001.webp",
    imageAlt: "ISO 9001:2015 Quality Management System Certificate",
    downloadUrl: "/images/certificate/cert_iso_9001.webp",
  },
  {
    id: "rdso",
    title: "RDSO Approval",
    subtitle: "Vendor/Product Approval",
    certNo: "RDSO/PE/S/XXX/2022",
    issuedBy: "RDSO (Ministry of Railways)",
    validUntil: "14 Mar 2028",
    image: "/images/certificate/cert_rdso.webp",
    imageAlt: "RDSO Vendor Approval Certificate by Ministry of Railways",
    downloadUrl: "/images/certificate/cert_rdso.webp",
  },
  {
    id: "bis",
    title: "BIS Certification",
    subtitle: "Product Conformity",
    certNo: "CM/L-1234567",
    issuedBy: "Bureau of Indian Standards",
    validUntil: "22 Jan 2027",
    image: "/images/certificate/cert_bis.webp",
    imageAlt: "BIS Certificate of Conformity by Bureau of Indian Standards",
    downloadUrl: "/images/certificate/cert_bis.webp",
  },
  {
    id: "iso-14001",
    title: "ISO 14001:2015",
    subtitle: "Environmental Management",
    certNo: "EMS/2023/010",
    issuedBy: "TÜV NORD",
    validUntil: "14 Mar 2026",
    image: "/images/certificate/cert_iso_14001.webp",
    imageAlt: "ISO 14001:2015 Environmental Management Certificate",
    downloadUrl: "/images/certificate/cert_iso_14001.webp",
  },
];

export const OTHER_CERTIFICATIONS: OtherCertItem[] = [
  {
    title: "OHSAS 45001",
    subtitle: "Occupational Health & Safety",
    type: "hard-hat",
  },
  {
    title: "CE Marking",
    subtitle: "European Conformity",
    type: "ce",
  },
  {
    title: "RoHS Compliance",
    subtitle: "Restriction of Hazardous Substances",
    type: "leaf",
  },
  {
    title: "Material Test Reports",
    subtitle: "Independent Laboratory Testing",
    type: "file-text",
  },
  {
    title: "Other Approvals",
    subtitle: "Additional Statutory Certifications",
    type: "award",
  },
];

export const QUALITY_COMMITMENT_DATA = {
  eyebrow: "QUALITY & COMPLIANCE",
  heading: "Our Commitment to Quality",
  description:
    "We follow stringent quality control processes and adhere to international and national standards to ensure that our products meet the highest levels of safety, reliability and performance.",
  ctaText: "Our Quality Process",
  ctaLink: "/about",
  checkpoints: [
    "Standardized manufacturing processes",
    "Regular third-party inspections",
    "Compliance with industry standards",
    "Continuous monitoring and improvement",
    "Full documentation for verification",
  ],
  image: "/images/certificate/quality_fasteners.webp",
  imageAlt: "High tensile hex bolts, studs and precision fasteners detail",
  badgeText: "QUALITY IN EVERY DETAIL",
};
