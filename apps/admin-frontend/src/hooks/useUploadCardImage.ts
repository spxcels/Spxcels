import { useMutation, useQueryClient } from "@tanstack/react-query";

import { uploadCardImage } from "@/api/cardImage";

export function useUploadCardImage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      modelId,
      file,
    }: {
      modelId: number;
      file: File;
    }) => uploadCardImage(modelId, file),

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