import { useQuery } from "@tanstack/react-query";

import { getModel } from "@/api/models";

/* =====================================================
   GET SINGLE MODEL
===================================================== */

export function useModel(
  modelId?: number,
) {
  return useQuery({
    queryKey: [
      "phone-model",
      modelId,
    ],

    queryFn: () =>
      getModel(modelId!),

    enabled:
      !!modelId &&
      !Number.isNaN(modelId),

    staleTime:
      1000 * 60 * 5,

    gcTime:
      1000 * 60 * 30,
  });
}