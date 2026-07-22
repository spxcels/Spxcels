import { useMutation, useQueryClient } from "@tanstack/react-query";
import { savePhoneSpecs } from "@/api/phoneSpecs";
import type { SavePhoneSpecsDto } from "@/api/phoneSpecs";

export function useSavePhoneSpecs() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: SavePhoneSpecsDto) => savePhoneSpecs(payload),

    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["phone-specifications", data.modelId],
      });

      queryClient.invalidateQueries({
        queryKey: ["phone-model", data.modelId],
      });

      queryClient.invalidateQueries({
        queryKey: ["phone-models"],
      });
    },
  });
}