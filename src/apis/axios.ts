import axios, { AxiosError } from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

export const instance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access_token");
    const returnConfig = {
      ...config,
    };
    if (accessToken) {
      returnConfig.headers = {
        Authorization: `Bearer ${accessToken}`,
      };
    }
    return returnConfig;
  },
  (error: AxiosError) => Promise.reject(error)
);
