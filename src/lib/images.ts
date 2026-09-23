/**
 * Central asset URL helper — single source of truth for all remote assets.
 *
 * Two CDN trees exist today, so there are two image bases:
 * - `IMAGE_BASE_URL` (legacy tree): product cards, sectors, about, contact,
 *   v2, logos — these files were NEVER uploaded to `web_images`, the new
 *   tree returns an HTML error page for them (HTTP 200 + text/html).
 * - `WEB_IMAGE_BASE` (`web_images` tree): home banner, vendor-approval,
 *   certificate, machinery — freshly uploaded, verified image/webp.
 * - PDFs (`pdfUrl`) all live under `web_images/pdf` — verified.
 *
 * When the missing files are uploaded to `web_images`, delete
 * LEGACY handling and point everything at `WEB_IMAGE_BASE`.
 *
 * Usage:
 *   import { IMAGE_BASE_URL, WEB_IMAGE_BASE, pdfUrl } from "@/lib/images";
 *   src={`${IMAGE_BASE_URL}/home/product-studs.webp`}      // legacy tree
 *   src={`${WEB_IMAGE_BASE}/vendor-approval/banner.webp`}  // new tree
 *   href={pdfUrl("vendor-approval/LIST OF MACHINE.pdf")}
 */

/** Legacy CDN tree — product/sector/about/contact/v2/logo images. */
export const IMAGE_BASE_URL = "https://agsdemo.in/kaveri/api/assets/images";

/** New `web_images` tree — home banner, vendor-approval, certificate, machinery. */
export const WEB_IMAGE_BASE =
  "https://agsdemo.in/kaveri/api/assets/images/web_images/images";

/** `web_images` root (images + pdf live beneath it). */
export const ASSET_BASE_URL =
  "https://agsdemo.in/kaveri/api/assets/images/web_images";

/** Base URL for every PDF (`{ASSET_BASE_URL}/pdf`). */
export const PDF_BASE_URL = `${ASSET_BASE_URL}/pdf`;

/** Prefixes known to exist in the `web_images` tree (verified image/webp). */
const WEB_IMAGE_PREFIXES = [
  "home/home_banner_image",
  "vendor-approval/",
  "certificate/",
  "machinery/",
];

/**
 * Build a full image URL, routing to whichever CDN tree hosts the file.
 * - Absolute http(s) URLs pass through untouched.
 * - Leading slashes and legacy `images/` prefixes are stripped.
 */
export function imageUrl(path: string): string {
  if (!path) return IMAGE_BASE_URL;
  if (/^https?:\/\//i.test(path)) return path;
  const clean = path.replace(/^\/+/, "").replace(/^images\//, "");
  const onNewTree = WEB_IMAGE_PREFIXES.some((p) => clean.startsWith(p));
  return `${onNewTree ? WEB_IMAGE_BASE : IMAGE_BASE_URL}/${clean}`;
}

/**
 * Build a full PDF URL from a path relative to the pdf base.
 * - `pdfUrl("vendor-approval/doc.pdf")` → `{PDF_BASE_URL}/vendor-approval/doc.pdf`
 * - Spaces are URL-encoded automatically; leading slashes and `pdf/`
 *   prefixes are stripped. Absolute http(s) URLs pass through untouched.
 */
export function pdfUrl(path: string): string {
  if (!path) return PDF_BASE_URL;
  if (/^https?:\/\//i.test(path)) return path;
  const clean = path.replace(/^\/+/, "").replace(/^pdf\//, "");
  return `${PDF_BASE_URL}/${encodeURI(clean)}`;
}

export default ASSET_BASE_URL;
