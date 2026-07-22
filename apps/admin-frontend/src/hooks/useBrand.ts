import { useQuery } from "@tanstack/react-query";

import { getBrand } from "@/api/brands";

/* =====================================================
   GET BRAND BY ID
===================================================== */

export function useBrand(
  brandId: number,
) {
  return useQuery({
    queryKey: ["brand", brandId],

    queryFn: () =>
      getBrand(brandId),

    enabled: !!brandId,

    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
  });
}