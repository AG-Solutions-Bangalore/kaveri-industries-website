import { WEB_IMAGE_BASE, pdfUrl } from "@/lib/images";
import { company } from "@/lib/company";
export interface HeroBadge {
  icon: "shield" | "briefcase" | "settings";
  line1: string;
  line2: string;
}

export interface ApprovalDetailRow {
  label: string;
  value: string;
  status?: boolean;
}

export interface ApprovedProductItem {
  id: string;
  title: string;
  approvalNo: string;
  image: string;
  imageAlt: string;
  link: string;
}

export const VENDOR_HERO_PILLS: HeroBadge[] = [
  { icon: "shield", line1: "Verified", line2: "Documents" },
  { icon: "briefcase", line1: "RDSO", line2: "Approved" },
  { icon: "settings", line1: "Compliant with", line2: "Railway Standards" },
];

export const VENDOR_APPROVAL_TABLE: ApprovalDetailRow[] = [
  { label: "Approval Authority", value: "RDSO (Research Designs and Standards Organisation)" },
  { label: "Vendor Name", value: "Kaveri Industries" },
  { label: "Vendor Code / Registration No.", value: "RDSO/XXXX/202X" },
  { label: "Approval No.", value: "RDSO/PE/S/XXX/202X" },
  { label: "Category", value: "High Tensile MS Fasteners" },
  { label: "Approved Products", value: "Studs & Threaded Bars, U-Bolts, Center Bolts, Washers, Other Fasteners" },
  { label: "Issue Date", value: "15 March 2023" },
  { label: "Validity", value: "14 March 2028" },
  { label: "Status", value: "Active", status: true },
];

/* ── Detailed vendor-profile table (reference layout, Kaveri data only) ── */

export interface VendorProfileAction {
  label: string;
  href: string;
  fileName?: string;
}

export interface VendorProfileRow {
  info: string;
  details: string[];
  actions?: VendorProfileAction[];
  statusActive?: string;
}

export interface VendorProfileSection {
  group: string;
  rows: VendorProfileRow[];
}

const KAVERI_ADDRESS_LINES = [
  company.address.full,
  `${company.address.city}, ${company.address.region}, India`,
];

const KAVERI_CONTACT_LINES = [
  `Email: ${company.contact.primaryEmail}`,
  `Phone: ${company.contact.phones.map((p) => p.display).join(" / ")}`,
  `Website: ${company.url.replace(/^https?:\/\//, "")}`,
];

/**
 * Consolidated vendor-approval information for the RDSO page.
 * Mirrors the reference (Item | Information / Sub-Tab | Details) layout
 * but every field is Kaveri Industries data — no third-party values.
 * Proprietorship is used instead of Board of Directors.
 */
export const KAVERI_VENDOR_PROFILE_SECTIONS: VendorProfileSection[] = [
  {
    group: "Ownership Details",
    rows: [
      { info: "Ownership", details: ["Sole Proprietorship Concern"] },
      { info: "Proprietor", details: ["Mr. Rajesh Bhalla"] },
      {
        info: "Business Constitution",
        details: [
          "Proprietorship firm — Udyam registered.",
          "Registration documents available for inspection and verification by RDSO / authorised agencies.",
        ],
      },
      { info: "Registered Address", details: KAVERI_ADDRESS_LINES },
      { info: "Contact Information", details: KAVERI_CONTACT_LINES },
    ],
  },
  {
    group: "Manufacturing Unit",
    rows: [
      {
        info: "Address",
        details: [
          ...KAVERI_ADDRESS_LINES,
          "Manufacturing, quality control and dispatch are carried out at the same works.",
        ],
      },
      {
        info: "Facilities incl. Machinery & Plant Details",
        details: [
          "Cold Heading Machines up to M30 × 200 mm",
          "Wire Draw Machines up to 36 mm",
          "Roll Threading, Trimming & Nut Forming lines",
          "Continuous Heat Treatment Furnace (200 Kg / Hour) with Tempering Unit",
          "Hot Dip Galvanizing Furnace & Electro Plating Plant",
          "Tool Room, Material Handling & Packing Section",
          "Detailed machinery list available for inspection and verification by RDSO / authorised agencies.",
        ],
      },
    ],
  },
  {
    group: "Details of RDSO Approval",
    rows: [
      {
        info: "Item Name & Category",
        details: [
          "High Tensile MS Fasteners",
          "Studs & Threaded Bars, U-Bolts, Center Bolts, Washers, Other Fasteners",
        ],
      },
      {
        info: "Approval & Registration No.",
        details: ["Approval No.: RDSO/PE/S/XXX/202X", "Vendor Code / Registration No.: RDSO/XXXX/202X"],
      },
      {
        info: "Approval Validity",
        details: ["Issue Date: 15 March 2023", "Validity: 14 March 2028"],
        statusActive: "Active",
      },
    ],
  },
  {
    group: "Firm's Registration Details",
    rows: [
      {
        info: "UDYAM Registration",
        details: [
          "Number: UDYAM-KR-02-0015318",
          "Enterprise: KAVERI INDUSTRIES — Proprietary, Manufacturing",
          "Category of Enterprise: General | Type of Enterprise: Small",
          "Date of Registration: 27/08/2021 | Incorporation: 01/06/2006",
        ],
      },
      {
        info: "Factory Licence",
        details: [
          "Licence Number: MYB-22488",
          "Unit: SY NO.485 & 487, Jigani Industrial Area 2nd Phase, Jigani, Bengaluru",
          "Validity: 01/01/2024 – 31/12/2026",
        ],
      },
      {
        info: "ISO 9001 Certification",
        details: [
          "Certifying body: TÜV (TUV)",
          "Standard: ISO 9001 — Quality Management System",
          "Certificate: ISO Certificate 2025–2028",
        ],
      },
    ],
  },
  {
    group: "Quality, Testing & Compliance",
    rows: [
      {
        info: "Testing Facilities",
        details: [
          "In-house testing laboratory as per RDSO standards — physical, chemical & mechanical properties, hardness and tensile testing.",
          "Testing equipment records available for inspection and verification by RDSO / authorised agencies.",
        ],
      },
      {
        info: "Mandatory Approvals",
        details: ["RDSO  •  ISO 9001  •  BIS (as applicable)"],
      },
      {
        info: "Credentials & Works in Hand",
        details: [
          "Supply credentials and current orders available for verification by RDSO / authorised agencies on request.",
        ],
      },
    ],
  },
];

export const APPROVED_PRODUCTS_DATA: ApprovedProductItem[] = [
  {
    id: "studs-threaded-bars",
    title: "Studs & Threaded Bars",
    approvalNo: "Approval No: RDSO/PE/S/XXX",
    image: `${WEB_IMAGE_BASE}/vendor-approval/prod_studs_bars.webp`,
    imageAlt: "High tensile studs and threaded bars approved by RDSO",
    link: "/products",
  },
  {
    id: "u-bolts",
    title: "U-Bolts",
    approvalNo: "Approval No: RDSO/PE/S/XXX",
    image: `${WEB_IMAGE_BASE}/vendor-approval/prod_u_bolts.webp`,
    imageAlt: "Heavy duty U-bolts approved by RDSO",
    link: "/products",
  },
  {
    id: "center-bolts",
    title: "Center Bolts & Other Fasteners",
    approvalNo: "Approval No: RDSO/PE/S/XXX",
    image: `${WEB_IMAGE_BASE}/vendor-approval/prod_center_bolts.webp`,
    imageAlt: "Precision center bolts and hex fasteners approved by RDSO",
    link: "/products",
  },
  {
    id: "washers",
    title: "Washers",
    approvalNo: "Approval No: RDSO/PE/S/XXX",
    image: `${WEB_IMAGE_BASE}/vendor-approval/prod_washers.webp`,
    imageAlt: "Industrial plain and spring washers approved by RDSO",
    link: "/products",
  },
];

export const RDSO_CERTIFICATE_DATA = {
  title: "RDSO Approval Certificate",
  subtitle: "Official approval certificate issued by RDSO.",
  image: `${WEB_IMAGE_BASE}/vendor-approval/rdso_cert_preview.webp`,
  imageAlt: "Official RDSO Approval Certificate preview",
  downloadUrl: `${WEB_IMAGE_BASE}/vendor-approval/rdso_cert_preview.webp`,
  certNo: "RDSO/PE/S/XXX/202X",
  authority: "RDSO (Ministry of Railways)",
  validity: "14 March 2028",
};

export const VERIFICATION_BANNER_DATA = {
  eyebrow: "RDO / RDSO VERIFICATION",
  heading: "Complete Documentation for Verification",
  description:
    "All relevant documents certificates and supporting information are available for inspection and verification by RDO/RDSO and other authorized agencies.",
  ctaText: "Download All Approval Documents",
};

export interface ApprovalDocumentItem {
  id: string;
  title: string;
  description: string;
  /** Real PDF under public/pdf/vendor-approval (URL-encoded). */
  pdfUrl: string;
  /** Original file name, used for the download attribute. */
  fileName: string;
  pdfLabel: string;
  pdfSize: string;
  badgeIcon: "flask" | "award" | "file";
  badgeDark?: boolean;
}

/**
 * Documents shown in "Official Documents for Verification".
 * Served from public/pdf/vendor-approval.
 */
export const RDSO_APPROVAL_DOCUMENTS: ApprovalDocumentItem[] = [
  {
    id: "lab-list",
    title: "Lab Report",
    description:
      "Test reports from authorized laboratories as per RDSO standards, confirming the quality, performance and compliance of our products.",
    pdfUrl: pdfUrl("vendor-approval/LIST OF LAB.pdf"),
    fileName: "LIST OF LAB.pdf",
    pdfLabel: "Lab Report",
    pdfSize: "PDF (0.4 MB)",
    badgeIcon: "flask",
  },
  {
    id: "iso-9001",
    title: "ISO 9001:2015",
    description:
      "Our Quality Management System is certified under ISO 9001:2015, ensuring consistent quality, process excellence and customer satisfaction.",
    pdfUrl: pdfUrl("vendor-approval/1.ISO Certificate 2025-2028.pdf"),
    fileName: "1.ISO Certificate 2025-2028.pdf",
    pdfLabel: "ISO 9001:2015 Certificate",
    pdfSize: "PDF (0.5 MB)",
    badgeIcon: "award",
  },
  {
    id: "rdso-certificate",
    title: "RDSO Approval Certificate",
    description:
      "Official approval certificate issued by RDSO for our products, validating our manufacturing capabilities and compliance with railway standards.",
    pdfUrl: pdfUrl("vendor-approval/RDSO Approval.pdf"),
    fileName: "RDSO Approval.pdf",
    pdfLabel: "RDSO Approval Certificate",
    pdfSize: "PDF (89 KB)",
    badgeIcon: "file",
    badgeDark: true,
  },
];
