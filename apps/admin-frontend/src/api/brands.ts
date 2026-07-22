import api from "./axios";

/* =====================================================
   TYPES
===================================================== */

export interface Brand {
  id: number;

  name: string;
  slug: string;

  gsmarenaSlug: string | null;
  specsSource: string | null;
  mediaSource: string | null;

  modelCount: number;
  models: string[];

  createdAt: string;
  updatedAt: string;
}

/* =====================================================
   CREATE DTO
===================================================== */

export interface CreateBrandDto {
  name: string;
  slug: string;

  gsmarenaSlug?: string;
  specsSource?: string;
  mediaSource?: string;
}

/* =====================================================
   UPDATE DTO
===================================================== */

export type UpdateBrandDto =
  Partial<CreateBrandDto>;

/* =====================================================
   GET ALL BRANDS
===================================================== */

export async function getBrands(): Promise<Brand[]> {
  const { data } =
    await api.get<Brand[]>(
      "/products/phones/brands",
    );

  return data;
}

/* =====================================================
   GET BRAND BY ID
===================================================== */

export async function getBrand(
  id: number,
): Promise<Brand> {
  const { data } =
    await api.get<Brand>(
      `/products/phones/brands/${id}`,
    );

  return data;
}

/* =====================================================
   CREATE BRAND
===================================================== */

export async function createBrand(
  payload: CreateBrandDto,
): Promise<Brand> {
  const { data } =
    await api.post<Brand>(
      "/products/phones/brands",
      payload,
    );

  return data;
}

/* =====================================================
   UPDATE BRAND
===================================================== */

export async function updateBrand(
  id: number,
  payload: UpdateBrandDto,
): Promise<Brand> {
  const { data } =
    await api.patch<Brand>(
      `/products/phones/brands/${id}`,
      payload,
    );

  return data;
}

/* =====================================================
   DELETE BRAND
===================================================== */

export async function deleteBrand(
  id: number,
): Promise<{
  message: string;
}> {
  const { data } =
    await api.delete<{
      message: string;
    }>(
      `/products/phones/brands/${id}`,
    );

  return data;
}