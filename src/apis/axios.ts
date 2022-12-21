import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

export const instance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
});
