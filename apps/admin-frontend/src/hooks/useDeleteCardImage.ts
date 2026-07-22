import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteCardImage } from "@/api/cardImage";

export function useDeleteCardImage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (modelId: number) =>
      deleteCardImage(modelId),

    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [
          "phone-card-image",
          data.model.id,
        ],
      });

      queryClient.invalidateQueries({
        queryKey: [
          "phone-model",
          data.model.id,
        ],
      });

      queryClient.invalidateQueries({
        queryKey: [
          "phone-models",
        ],
      });
    },
  });
}