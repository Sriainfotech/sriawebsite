import axios from 'axios';

const axiosInstance = axios.create({
    // baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.sriainfotech.com/api',
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
