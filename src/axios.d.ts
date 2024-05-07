import { AxiosRequestConfig } from "axios";

declare module 'axios' {
  interface AxiosInstance {
    get<T = any>(url: string, config?: AxiosRequestConfig['data']): Promise<T>
    post<T = any>(url: string, config?: AxiosRequestConfig['data']): Promise<T>
  }
}