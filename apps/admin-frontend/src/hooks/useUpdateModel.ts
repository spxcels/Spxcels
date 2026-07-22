import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  updateModel,
  type UpdatePhoneModelDto,
} from "@/api/models";

/* =====================================================
   UPDATE PHONE MODEL
===================================================== */

export function useUpdateModel() {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: number;
      data: UpdatePhoneModelDto;
    }) =>
      updateModel(id, data),

    onSuccess: (model) => {
      queryClient.invalidateQueries({
        queryKey: ["phone-models"],
      });

      queryClient.invalidateQueries({
        queryKey: [
          "phone-model",
          model.id,
        ],
      });
    },
  });
}