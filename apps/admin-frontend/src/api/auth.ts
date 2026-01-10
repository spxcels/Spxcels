import { api } from "./axios";

export async function login(email: string, password: string) {
  const res = await api.post("/auth/login", { email, password });
  return res.data;
}

export async function getMe() {
  try {
    const res = await api.get("/auth/me");
    return res.data;
  } catch {
    return null;
  }
}

export async function logout() {
  const res = await api.post("/auth/logout");
  return res.data;
}
