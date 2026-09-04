/**
 * Cross-cutting API types shared by every feature module.
 *
 * Feature-specific request/response shapes live next to the feature
 * (e.g. `src/feature/Contact/api/enquiryTypes.ts`).
 */

/** Generic success envelope returned by the PHP enquiry API. */
export interface ApiSuccess<T = unknown> {
  status?: "success" | "ok" | true | 1 | "1";
  code?: number | string;
  message?: string;
  data?: T;
}

/** Generic error envelope returned by the PHP enquiry API. */
export interface ApiFailure {
  status?: "error" | "fail" | false | 0 | "0";
  code?: number | string;
  message?: string;
  errors?: Record<string, string | string[]>;
}

/** Union of every shape the backend may return. */
export type ApiResponse<T = unknown> = ApiSuccess<T> | ApiFailure;

/** Narrow an unknown response to a success payload, or return null. */
export function isApiSuccess<T>(value: unknown): value is ApiSuccess<T> {
  if (!value || typeof value !== "object") return false;
  const obj = value as { status?: unknown; code?: unknown };
  const s = obj.status;
  if (s === "success" || s === "ok" || s === true || s === 1 || s === "1") {
    return true;
  }
  const c = Number(obj.code);
  if (!Number.isNaN(c) && c >= 200 && c < 300) {
    return true;
  }
  return false;
}

/** Narrow an unknown response to a failure payload, or return null. */
export function isApiFailure(value: unknown): value is ApiFailure {
  if (!value || typeof value !== "object") return false;
  const obj = value as { status?: unknown; code?: unknown };
  const s = obj.status;
  if (s === "error" || s === "fail" || s === false || s === 0 || s === "0") {
    return true;
  }
  const c = Number(obj.code);
  if (!Number.isNaN(c) && (c < 200 || c >= 400)) {
    return true;
  }
  return !isApiSuccess(value);
}

/** UTM parameters — picked up from the URL on first paint and reused on submit. */
export interface UtmParams {
  utm_medium?: string;
  utm_source?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}