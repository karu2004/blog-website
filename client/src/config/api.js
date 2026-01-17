import axios from 'axios';

// Use environment variable for API URL, fallback to localhost for development
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

// Create axios instance with base configuration
const API = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add request interceptor for future token handling
API.interceptors.request.use(
    (config) => {
        // You can add auth token here in the future
        // const token = localStorage.getItem('token');
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add response interceptor for error handling
API.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle common errors here
        if (error.response?.status === 401) {
            // Handle unauthorized access
            localStorage.removeItem('userId');
        }
        return Promise.reject(error);
    }
);

export default API;
