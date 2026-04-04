import axios, {AxiosInstance, AxiosError} from 'axios';
import {getToken} from './token';

const BACKEND_URL = 'https://14.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config) => {
      const isLoginRequest = config.url === '/login' && config.method === 'post';

      if (!isLoginRequest) {
        const token = getToken();
        if (token && config.headers) {
          config.headers['x-token'] = token;
        }
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        //обработка
      }
      throw error;
    }
  );

  return api;
};
