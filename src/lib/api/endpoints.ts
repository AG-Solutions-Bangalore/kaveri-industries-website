/**
 * Central registry of backend endpoints.
 *
 * Adding a new API? Add the path here so feature modules reference a single
 * string constant instead of duplicating URLs everywhere. Path-only — the
 * `baseURL` lives on the axios instance (`src/lib/axios.ts`).
 */
export const ENDPOINTS = {
  enquiry: "enquiry.php",
  // add more endpoints below as the backend grows
  // products: "products.php",
  // industries: "industries.php",
} as const;

export type EndpointKey = keyof typeof ENDPOINTS;