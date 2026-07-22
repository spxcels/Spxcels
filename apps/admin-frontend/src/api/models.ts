import api from "./axios";

/* =====================================================
   Types
===================================================== */

/**
 * Phone model returned by the API.
 * Represents one phone model under a brand.
 */
export interface PhoneModel {
  id: number;
  name: string;
  slug: string;

  brandId: number;
  brand: string;

  image: string | null;

  colors: string[];
  variants: string[];

  automationStatus: string;

  hasSpecifications: boolean;
  hasCardImage: boolean;

  createdAt: string;
  updatedAt: string;
}

/**
 * Payload used when creating a phone model.
 * Keep this aligned with the backend create-model DTO.
 */
export interface CreatePhoneModelDto {
  name: string;
  slug: string;
  brandId: number;
  colors: string[];
  variants: string[];
}

/**
 * Payload used when updating a phone model.
 * All fields are optional because updates can be partial.
 */
export type UpdatePhoneModelDto = Partial<CreatePhoneModelDto>;

/**
 * Response returned after deleting a phone model.
 */
export interface DeleteModelResponse {
  message: string;
}

/* =====================================================
   API
===================================================== */

/**
 * Base endpoint for all phone model requests.
 * Keeping this in one place makes future route changes easier.
 */
const MODEL_ENDPOINT = "/products/phones/models";

/**
 * Get all phone models.
 *
 * If `brandId` is provided, the API returns models only for that brand.
 */
export async function getModels(brandId?: number): Promise<PhoneModel[]> {
  const { data } = await api.get<PhoneModel[]>(MODEL_ENDPOINT, {
    params: brandId ? { brand: brandId } : undefined,
  });

  return data;
}

/**
 * Get one phone model by its ID.
 */
export async function getModel(id: number): Promise<PhoneModel> {
  const { data } = await api.get<PhoneModel>(`${MODEL_ENDPOINT}/${id}`);

  return data;
}

/**
 * Create a new phone model.
 */
export async function createModel(
  payload: CreatePhoneModelDto,
): Promise<PhoneModel> {
  const { data } = await api.post<PhoneModel>(MODEL_ENDPOINT, payload);

  return data;
}

/**
 * Update an existing phone model.
 *
 * Accepts a partial payload, so callers only need to send changed fields.
 */
export async function updateModel(
  id: number,
  payload: UpdatePhoneModelDto,
): Promise<PhoneModel> {
  const { data } = await api.patch<PhoneModel>(
    `${MODEL_ENDPOINT}/${id}`,
    payload,
  );

  return data;
}

/**
 * Delete a phone model by its ID.
 */
export async function deleteModel(id: number): Promise<DeleteModelResponse> {
  const { data } = await api.delete<DeleteModelResponse>(
    `${MODEL_ENDPOINT}/${id}`,
  );

  return data;
}