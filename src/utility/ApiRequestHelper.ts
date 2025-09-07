import axios, { type AxiosRequestConfig, type Method } from "axios";
import { getToken } from "./TokenHelper";

const api = (url: string, method: Method, requestParams?: unknown) => {
  const token = getToken();
  const config: AxiosRequestConfig = {
    baseURL: "http://localhost:8080",
    url,
    method,
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  };

  if (method === "GET") {
    config.params = requestParams;
  } else {
    config.data = requestParams;
  }

  return axios(config).then((response) => response.data);
};

export const getRequest = (url: string, requestParams?: unknown) => {
  return api(url, "GET", requestParams);
};

export const postRequest = (url: string, requestParams?: unknown) => {
  return api(url, "POST", requestParams);
};

export const putRequest = (url: string, requestParams?: unknown) => {
  return api(url, "PUT", requestParams);
};

export const deleteRequest = (url: string) => {
  return api(url, "DELETE");
};
