import { api } from "./axios";

export async function login(email: string, password: string) {
  try {
    const res = await api.post("/auth/login", { email, password });
    return res.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
}

export async function getMe() {
  try {
    const res = await api.get("/auth/me");
    return res.data;
  } catch {
    return null; // not logged in
  }
}

export async function logout() {
  const res = await api.post("/auth/logout");
  return res.data;
}

