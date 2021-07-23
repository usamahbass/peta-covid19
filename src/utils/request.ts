import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const configOne: AxiosRequestConfig | any = {};

const configTwo: AxiosRequestConfig | any = {
  baseURL: process.env.VITE_APP_DEKONTAMINASI,
  timeout: 1000,
};

export const request: AxiosInstance = axios.create(configOne);

export const requestDekontaminasi: AxiosInstance = axios.create(configTwo);
