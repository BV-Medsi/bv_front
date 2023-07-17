import axios from 'axios'
import {tokenStorage} from "./TokenStorage.js";
export const axiosApiInstance = axios.create();
// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
    async config => {
        const key = tokenStorage.get()
        config.headers = {
            'Authorization': `Bearer ${key}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        return config;
    },
    error => {
        Promise.reject(error)
    });
