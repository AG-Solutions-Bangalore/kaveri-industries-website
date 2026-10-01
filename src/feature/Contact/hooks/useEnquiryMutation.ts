import { useState } from "react";
import { submitEnquiry } from "@/feature/Contact/api/enquiry";
import type {
  EnquiryPayload,
  EnquiryResponse,
} from "@/feature/Contact/api/enquiryTypes";
import type { ApiError } from "@/utils/apiError";

export interface EnquiryMutationResult {
  mutate: (
    payload: EnquiryPayload,
    options?: {
      onSuccess?: (data: EnquiryResponse) => void;
      onError?: (err: ApiError | Error) => void;
    },
  ) => Promise<void>;
  isPending: boolean;
  isError: boolean;
  isSuccess: boolean;
  error: ApiError | Error | null;
  reset: () => void;
}

export function useEnquiryMutation(): EnquiryMutationResult {
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<ApiError | Error | null>(null);

  const mutate = async (
    payload: EnquiryPayload,
    options?: {
      onSuccess?: (data: EnquiryResponse) => void;
      onError?: (err: ApiError | Error) => void;
    },
  ) => {
    setIsPending(true);
    setIsError(false);
    setIsSuccess(false);
    setError(null);
    try {
      const data = await submitEnquiry(payload);
      setIsSuccess(true);
      options?.onSuccess?.(data);
    } catch (err: unknown) {
      setIsError(true);
      const apiErr = err as ApiError | Error;
      setError(apiErr);
      options?.onError?.(apiErr);
    } finally {
      setIsPending(false);
    }
  };

  const reset = () => {
    setIsPending(false);
    setIsError(false);
    setIsSuccess(false);
    setError(null);
  };

  return { mutate, isPending, isError, isSuccess, error, reset };
}