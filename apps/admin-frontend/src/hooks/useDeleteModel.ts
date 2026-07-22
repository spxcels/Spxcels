import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteModel } from "@/api/models";

export function useDeleteModel() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteModel,
    onSuccess: () => {
      ["phone-models", "phone-model"].forEach((queryKey) =>
        queryClient.invalidateQueries({ queryKey: [queryKey] })
      );
    },
  });
}