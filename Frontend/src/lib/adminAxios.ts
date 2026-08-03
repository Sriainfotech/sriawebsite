import axios from "axios";
import { getAdminToken, clearAdminSession } from "@/lib/adminAuth";

// Dedicated instance for /api/admin/* calls — keeps admin-token handling
// isolated from the public axiosInstance used by Contact/Plans/Subscription.
const adminAxios = axios.create({
  baseURL: (import.meta.env.VITE_API_BASE_URL || "https://api.sriainfotech.com/api") + "/admin",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor — attaches the admin JWT to every outgoing request so
// call sites never need to build the Authorization header themselves.
adminAxios.interceptors.request.use((config) => {
  const token = getAdminToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor — a 401 here always means the token is missing,
// invalid, or expired (the login request itself never 401s on bad
// credentials — it returns a normal error payload with 401 handled by the
// caller's own catch, so this only fires for already-authenticated calls).
// Clear the stale session and bounce to login instead of leaving every
// page to handle this individually.
adminAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && window.location.pathname !== "/admin/login") {
      clearAdminSession();
      window.location.href = "/admin/login";
    }
    return Promise.reject(error);
  }
);

export default adminAxios;
