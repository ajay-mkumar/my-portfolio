import axios, { type AxiosRequestConfig, type Method } from "axios";

const api = (url: string, method: Method, requestParams?: any) => {
  const config: AxiosRequestConfig = {
    baseURL: 'http://localhost:8080',
    url,
    method,
  };

  if (method === "GET") {
    config.params = requestParams;
  } else {
    config.data = requestParams;
  }

  return axios(config).then((response) => response.data);
};

export const getRequest = (url: string, requestParams?: any) => {
  return api(url, "GET", requestParams);
};

export const postRequest = (url: string, requestParams?: any) => {
  return api(url, "POST", requestParams);
};
