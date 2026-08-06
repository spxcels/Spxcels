import type { PhoneModel } from "@/features/phones/types";

export interface PhoneBrand {
  id: number;
  name: string;
  slug: string;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PhoneListResponse {
  items: PhoneModel[];
  pagination: Pagination;
}

export interface GetPhonesResult {
  brands: PhoneBrand[];
  models: PhoneModel[];
}