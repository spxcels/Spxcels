import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  createModel,
} from "@/api/models";

export function useCreateModel() {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: createModel,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [
          "phone-models",
        ],
      });

      queryClient.invalidateQueries({
        queryKey: [
          "brands",
        ],
      });
    },
  });
}