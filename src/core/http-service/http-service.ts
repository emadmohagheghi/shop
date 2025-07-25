import { ApiError } from '@/types/http-errors.interface';
import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
} from 'axios';
import { ApiResponseType } from '@/types/response';

import { errorHandler, networkErrorStrategy } from './http-error-strategies';

const API_URL = process.env.NEXT_PUBLIC_BASE_URL;

const httpService = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

httpService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response) {
      const statusCode = error?.response?.status;
      if (statusCode >= 400) {
        const errorData: ApiError = error.response?.data;
        errorHandler[statusCode](errorData);
      }
    } else {
      networkErrorStrategy();
    }
  }
);

async function apiBase<T>(
  url: string,
  options?: AxiosRequestConfig
): Promise<ApiResponseType<T>> {
  const response = await httpService(url, options);
  return response.data as ApiResponseType<T>;
}

async function readData<T>(
  url: string,
  headers?: AxiosRequestHeaders
): Promise<ApiResponseType<T>> {
  const options: AxiosRequestConfig = {
    headers: headers,
    method: 'GET',
  };
  return await apiBase<T>(url, options);
}

async function createData<TModel, TResult>(
  url: string,
  data: TModel,
  headers?: AxiosRequestHeaders
): Promise<ApiResponseType<TResult>> {
  const options: AxiosRequestConfig = {
    method: 'POST',
    headers: headers,
    data: JSON.stringify(data),
  };

  return await apiBase<TResult>(url, options);
}

async function updateData<TModel, TResult>(
  url: string,
  data: TModel,
  headers?: AxiosRequestHeaders
): Promise<ApiResponseType<TResult>> {
  const options: AxiosRequestConfig = {
    method: 'PUT',
    headers: headers,
    data: JSON.stringify(data),
  };

  return await apiBase<TResult>(url, options);
}

async function deleteData(
  url: string,
  headers?: AxiosRequestHeaders
): Promise<ApiResponseType<void>> {
  const options: AxiosRequestConfig = {
    method: 'DELETE',
    headers: headers,
  };

  return await apiBase(url, options);
}

export { createData, readData, updateData, deleteData };
