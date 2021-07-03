import axios, { AxiosRequestConfig } from "axios";

export const request = axios.create<AxiosRequestConfig>({
  baseURL: process.env.NODE_ENV === "production" && process.env.VITE_APP_API,
  timeout: 1000000,
});
