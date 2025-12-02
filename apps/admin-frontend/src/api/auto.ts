// src/api/auto.ts

// ===============================
// 🌐 API BASE URL
// ===============================
const BASE =
  (import.meta.env?.VITE_API_BASE as string) || "http://localhost:3000";

// ===============================
// 📦 SAFE REQUEST WRAPPER (COOKIE AUTH)
// ===============================
async function request(path: string, options: RequestInit = {}) {
  const url = `${BASE}${path}`;

  // -------------------------------
  // 🔧 SAFE HEADER NORMALIZATION
  // -------------------------------
  const headers: Record<string, string> = {};

  if (options.headers instanceof Headers) {
    // Headers object → convert to Record
    options.headers.forEach((v, k) => {
      headers[k] = v;
    });
  } else if (Array.isArray(options.headers)) {
    // Array of tuples
    options.headers.forEach(([k, v]) => {
      headers[k] = v;
    });
  } else if (typeof options.headers === "object" && options.headers !== null) {
    // Plain Record<string, string>
    Object.entries(options.headers).forEach(([k, v]) => {
      headers[k] = String(v);
    });
  }

  const response = await fetch(url, {
    ...options,
    headers,
    credentials: "include", // <-- REQUIRED: same as api/auth.ts
  });

  // Parse JSON safely
  let data = null;
  try {
    const raw = await response.text();
    data = raw ? JSON.parse(raw) : null;
  } catch {
    data = null;
  }

  if (!response.ok) {
    const error: any = new Error(
      `API Error → ${response.status} ${response.statusText}`
    );
    error.status = response.status;
    error.body = data;
    throw error;
  }

  return data;
}

// ===============================
// 📡 AUTO ADMIN CLIENT API
// ===============================
export const auto = {
  // -------- Metadata --------
  tables() {
    return request("/auto/metadata/tables");
  },

  columns() {
    return request("/auto/metadata/columns");
  },

  // -------- Dashboard Stats --------
  stats() {
    return request("/auto/stats");
  },

  // -------- CRUD --------
  list(table: string) {
    return request(`/auto/data/${encodeURIComponent(table)}`);
  },

  get(table: string, id: string | number) {
    return request(
      `/auto/data/${encodeURIComponent(table)}/${encodeURIComponent(String(id))}`
    );
  },

  create(table: string, data: any) {
    return request(`/auto/data/${encodeURIComponent(table)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  },

  update(table: string, id: string | number, data: any) {
    return request(
      `/auto/data/${encodeURIComponent(table)}/${encodeURIComponent(String(id))}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
  },

  remove(table: string, id: string | number) {
    return request(
      `/auto/data/${encodeURIComponent(table)}/${encodeURIComponent(String(id))}`,
      { method: "DELETE" }
    );
  },

  // ===============================
  // ⭐ ADMIN CONFIG SETTINGS
  // ===============================
  getDbUrl() {
    return request("/admin/config/db-url");
  },

  updateDbUrl(value: string) {
    return request("/admin/config/db-url", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value }),
    });
  },

  // ===============================
  // 🔐 AUTH (COOKIE BASED)
  // ===============================
  me() {
    return request("/auth/me");
  },

  changePassword(oldPassword: string, newPassword: string) {
    return request("/auth/change-password", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ oldPassword, newPassword }),
    });
  },
};
