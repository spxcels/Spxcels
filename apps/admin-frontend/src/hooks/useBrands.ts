import { useQuery } from "@tanstack/react-query";

import { getBrands } from "@/api/brands";

/* =====================================================
   GET ALL BRANDS
===================================================== */

export function useBrands() {
  return useQuery({
    queryKey: ["brands"],
    queryFn: getBrands,

    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
  });
}