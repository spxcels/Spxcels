import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,  // ⭐ No /api prefix
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Auto redirect when unauthorized
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Unauthorized → redirecting to login.");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
