/**
 * Service layer for the enquiry endpoint.
 *
 * Pure HTTP — no React, no React Query. Imported by the mutation hook in
 * `src/feature/Contact/hooks/useEnquiryMutation.ts` and is fully unit-testable
 * in isolation.
 *
 * Centralised through `@/lib/api` so the transport (axios + base URL +
 * interceptors) lives in one place.
 */
import { ENDPOINTS, api, isApiSuccess } from "@/lib/api";
import type {
  EnquiryPayload,
  EnquiryResponse,
} from "@/feature/Contact/api/enquiryTypes";

/**
 * Submit a new enquiry to the backend.
 *
 * @throws {ApiError} for transport / 4xx / 5xx errors (normalised).
 * @throws {Error}     when the backend returns a `success` payload but no
 *                     usable ID is attached — considered a hard failure.
 */
export async function submitEnquiry(
  payload: EnquiryPayload,
): Promise<EnquiryResponse> {
  const response = await api.post<EnquiryResponse>(
    ENDPOINTS.enquiry,
    payload,
  );

  if (!isApiSuccess(response)) {
    throw new Error(response.message ?? "Enquiry submission failed.");
  }

  return response;
}