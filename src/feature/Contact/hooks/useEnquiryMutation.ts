/**
 * React Query mutation hook for submitting the contact-form enquiry.
 *
 * Wires the pure service (`submitEnquiry`) into React Query so consumers get:
 *   - `isPending` / `isError` / `isSuccess` flags for free
 *   - centralised error normalisation (already done by the axios interceptor)
 *   - retry semantics inherited from `queryClient` defaults
 *
 * Usage:
 *   const enquiry = useEnquiryMutation();
 *   enquiry.mutate(payload, { onSuccess, onError });
 */
import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import { submitEnquiry } from "@/feature/Contact/api/enquiry";
import type {
  EnquiryPayload,
  EnquiryResponse,
} from "@/feature/Contact/api/enquiryTypes";
import { ApiError } from "@/utils/apiError";

export function useEnquiryMutation(): UseMutationResult<
  EnquiryResponse,
  ApiError | Error,
  EnquiryPayload
> {
  return useMutation<EnquiryResponse, ApiError | Error, EnquiryPayload>({
    mutationFn: (payload) => submitEnquiry(payload),
  });
}