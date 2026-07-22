import { useQuery } from "@tanstack/react-query";

import { getModels } from "@/api/models";

export function useModels(
  brandId?: number,
) {
  return useQuery({
    queryKey: [
      "phone-models",
      brandId,
    ],

    queryFn: () =>
      getModels(brandId),
  });
}