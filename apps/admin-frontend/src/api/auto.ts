// src/api/auto.ts
import api from "./axios";

// ===============================
// AUTO ADMIN API (AXIOS-BASED)
// ===============================
export const auto = {
  tables() {
    return api.get("/auto/metadata/tables").then(res => res.data);
  },

  columns() {
    return api.get("/auto/metadata/columns").then(res => res.data);
  },

  stats() {
    return api.get("/auto/stats").then(res => res.data);
  },

  list(table: string) {
    return api
      .get(`/auto/data/${encodeURIComponent(table)}`)
      .then(res => res.data);
  },

  get(table: string, id: string | number) {
    return api
      .get(
        `/auto/data/${encodeURIComponent(table)}/${encodeURIComponent(String(id))}`
      )
      .then(res => res.data);
  },

  create(table: string, data: any) {
    return api
      .post(`/auto/data/${encodeURIComponent(table)}`, data)
      .then(res => res.data);
  },

  update(table: string, id: string | number, data: any) {
    return api
      .put(
        `/auto/data/${encodeURIComponent(table)}/${encodeURIComponent(String(id))}`,
        data
      )
      .then(res => res.data);
  },

  remove(table: string, id: string | number) {
    return api
      .delete(
        `/auto/data/${encodeURIComponent(table)}/${encodeURIComponent(String(id))}`
      )
      .then(res => res.data);
  },
};
