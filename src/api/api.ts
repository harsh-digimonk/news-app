import axios, { AxiosInstance } from 'axios';
import { API_BASE_URL } from './apiConfig';

const apiService:AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export default apiService;