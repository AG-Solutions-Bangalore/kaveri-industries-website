/**
 * Central image URL helper — single source of truth for all remote images.
 *
 * Change the domain in ONE place (IMAGE_BASE_URL below) and every <img>,
 * background, OG image, and product photo updates automatically.
 *
 * Usage:
 *   import { IMAGE_BASE_URL, imageUrl } from "@/lib/images";
 *   imageUrl: `${IMAGE_BASE_URL}/home/hero-fasteners.webp`
 *   src={imageUrl("home/hero-fasteners.webp")}
 */

/** Base URL for every image. Change domain here only. */
export const IMAGE_BASE_URL =
  "https://agsdemo.in/kaveri/api/assets/images";

/**
 * Build a full image URL from a path relative to the images base.
 * - `imageUrl("home/hero.webp")` → `{IMAGE_BASE_URL}/home/hero.webp`
 * - Leading slashes and legacy `images/` prefixes are stripped.
 * - Absolute http(s) URLs pass through untouched.
 */
export function imageUrl(path: string): string {
  if (!path) return IMAGE_BASE_URL;
  if (/^https?:\/\//i.test(path)) return path;
  const clean = path.replace(/^\/+/, "").replace(/^images\//, "");
  return `${IMAGE_BASE_URL}/${clean}`;
}

export default IMAGE_BASE_URL;
