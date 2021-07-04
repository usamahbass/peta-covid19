import axios, { AxiosRequestConfig } from "axios";

export const request = axios.create<AxiosRequestConfig>({
  baseURL: process.env.NODE_ENV === "production" && process.env.VITE_APP_CORONA,
  timeout: 1000000,
});

export const requestDekontaminasi = axios.create<AxiosRequestConfig>({
  baseURL: process.env.NODE_ENV === "production" && process.env.VITE_APP_DEKONTAMINASI,
  timeout: 1000000,
});
