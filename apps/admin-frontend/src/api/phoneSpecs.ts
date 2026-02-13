import api from "./axios";

/* ============================================
   GET SPECS BY MODEL ID
============================================ */
export const getPhoneSpecs = async (modelId: number) => {
  const { data } = await api.get(
    `/admin/models/${modelId}/specs`
  );
  return data;
};

/* ============================================
   UPSERT SPECS
============================================ */
export const savePhoneSpecs = async (
  modelId: number,
  payload: any
) => {
  const { data } = await api.put(
    `/admin/models/${modelId}/specs`,
    payload
  );
  return data;
};
