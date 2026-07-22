import { useQuery } from "@tanstack/react-query";

import { getCardImage } from "@/api/cardImage";

export function useCardImage(
  modelId?: number,
) {
  return useQuery({
    queryKey: [
      "phone-card-image",
      modelId,
    ],

    queryFn: () =>
      getCardImage(modelId!),

    enabled:
      !!modelId &&
      !Number.isNaN(modelId),

    staleTime:
      1000 * 60 * 5,

    gcTime:
      1000 * 60 * 30,
  });
}