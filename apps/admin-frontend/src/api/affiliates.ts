import api from "./axios";

export const getAffiliates = (modelId: number) =>
  api.get(`/admin/models/${modelId}/affiliates`)
     .then(res => res.data);

export const createAffiliate = (
  modelId: number,
  data: {
    storeName: string;
    url: string;
    price?: string;
    currency?: string;
  }
) =>
  api.post(`/admin/models/${modelId}/affiliates`, data)
     .then(res => res.data);

export const updateAffiliate = (
  modelId: number,
  id: number,
  data: any
) =>
  api.put(`/admin/models/${modelId}/affiliates/${id}`, data)
     .then(res => res.data);

export const deleteAffiliate = (
  modelId: number,
  id: number
) =>
  api.delete(`/admin/models/${modelId}/affiliates/${id}`);
