import { useQuery } from "@tanstack/react-query";

import { getPhoneSpecs } from "@/api/phoneSpecs";

/* =====================================================
   GET PHONE SPECIFICATIONS
===================================================== */

export function usePhoneSpecs(
  modelId?: number,
) {
  return useQuery({
    queryKey: [
      "phone-specifications",
      modelId,
    ],

    queryFn: () =>
      getPhoneSpecs(modelId!),

    enabled:
      !!modelId &&
      !Number.isNaN(modelId),

    staleTime:
      1000 * 60 * 5,

    gcTime:
      1000 * 60 * 30,
  });
}