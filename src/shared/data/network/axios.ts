import axios, { InternalAxiosRequestConfig } from 'axios';
import { storageKeys } from '../constants/storage.constant';

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 6000,
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem(storageKeys.ACCESS_TOKEN);
    if (token) {
      Object.assign(config.headers, { Authorization: `Bearer ${token}` });
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
