import api from "./axios";

export interface PhoneSpecs {
  id: number;

  modelId: number;

  specs: {
    raw: string;
  };

  createdAt: string;
  updatedAt: string;
}

export interface SavePhoneSpecsDto {
  phoneModelId: number;

  raw: string;
}

export async function getPhoneSpecs(
  modelId: number,
): Promise<PhoneSpecs> {
  const { data } = await api.get<PhoneSpecs>(
    `/products/phones/specifications/${modelId}`,
  );

  return data;
}

export async function savePhoneSpecs(
  payload: SavePhoneSpecsDto,
): Promise<PhoneSpecs> {
  const { data } = await api.post<PhoneSpecs>(
    "/products/phones/specifications/upsert",
    payload,
  );

  return data;
}