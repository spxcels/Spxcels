import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// DO NOT redirect inside interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);
