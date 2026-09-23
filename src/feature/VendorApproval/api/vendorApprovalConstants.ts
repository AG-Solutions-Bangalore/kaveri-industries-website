import { WEB_IMAGE_BASE, pdfUrl } from "@/lib/images";
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
