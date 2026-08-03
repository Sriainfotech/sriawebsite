import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.sriainfotech.com/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Response interceptor — normalizes every error into a single `userMessage`
// so call sites don't each need their own `error.response?.data?.message ||
// "..."` fallback. Distinguishes a real server-side error (has a response,
// e.g. validation failure) from the backend being unreachable entirely
// (no response — network error, timeout, CORS, server down), which
// previously showed the same generic fallback text either way.
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            error.userMessage = error.response.data?.message || 'Something went wrong. Please try again.';
        } else if (error.request) {
            error.userMessage = 'Unable to reach the server. Please check your connection and try again.';
        } else {
            error.userMessage = error.message || 'Something went wrong. Please try again.';
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
