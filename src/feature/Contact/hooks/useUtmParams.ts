/**
 * Reads UTM parameters from the current URL once and returns a stable object
 * suitable for forwarding to the enquiry API.
 *
 * - Cached for the lifetime of the page via `useMemo`
 * - SSR-safe (guards `window`)
 * - Returns only the keys the backend cares about (per its documented schema)
 *
 * Use the returned object as a base, then merge in any form-specific UTM
 * overrides before passing to `submitEnquiry`.
 */
import { useMemo } from "react";
import type { UtmParams } from "@/lib/api";

const TRACKED = [
  "utm_medium",
  "utm_source",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export function useUtmParams(): UtmParams {
  return useMemo<UtmParams>(() => {
    if (typeof window === "undefined") return {};
    const params = new URLSearchParams(window.location.search);
    const result: UtmParams = {};
    for (const key of TRACKED) {
      const value = params.get(key);
      if (value) result[key] = value;
    }
    return result;
  }, []);
}