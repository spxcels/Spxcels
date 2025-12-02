import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // from .env
  withCredentials: true, // sends JWT cookies
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

// Optional: Auto-logout if token invalid
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Unauthorized: redirecting to login...");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

