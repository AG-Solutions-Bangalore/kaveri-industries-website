import { QueryClient } from "@tanstack/react-query";
import { ApiError } from "@/utils/apiError";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      gcTime: 5 * 60 * 1000,
      retry: (failureCount, error) => {
        if (error instanceof ApiError) {
          // Don't retry client errors (4xx); retry network / 5xx twice
          if (error.status && error.status >= 400 && error.status < 500) {
            return false;
          }
        }
        return failureCount < 2;
      },
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
    },
    mutations: {
      retry: 0,
    },
  },
});