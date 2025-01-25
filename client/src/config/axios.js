import axios from 'axios';

// Set base URL for the API

const axiosInstance = axios.create({
baseURL: import.meta.env.VITE_API_BASE_URL,
});


export default axiosInstance;