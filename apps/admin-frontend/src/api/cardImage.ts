import api from "./axios";

export interface PhoneCardImage {
  id: number;
  name: string;
  slug: string;
  cardImage: string | null;
}

export interface UploadCardImageResponse {
  success: boolean;
  message: string;
  model: PhoneCardImage;
}

export interface DeleteCardImageResponse {
  success: boolean;
  message: string;
  model: PhoneCardImage;
}

export async function getCardImage(
  modelId: number,
): Promise<PhoneCardImage> {
  const { data } = await api.get<PhoneCardImage>(
    `/admin/products/phones/models/${modelId}/card-image`,
  );

  return data;
}

export async function uploadCardImage(
  modelId: number,
  file: File,
): Promise<UploadCardImageResponse> {
  const formData = new FormData();

  formData.append("image", file);

  const { data } = await api.post<UploadCardImageResponse>(
    `/admin/products/phones/models/${modelId}/card-image`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );

  return data;
}

export async function deleteCardImage(
  modelId: number,
): Promise<DeleteCardImageResponse> {
  const { data } = await api.delete<DeleteCardImageResponse>(
    `/admin/products/phones/models/${modelId}/card-image`,
  );

  return data;
}