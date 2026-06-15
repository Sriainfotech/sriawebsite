import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.sriainfotech.com/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
