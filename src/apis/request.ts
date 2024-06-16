import { AxiosResponse } from "axios";
import axios from "./axios.config";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

export const controller = new AbortController();

const request = {
  get: <T>(url: string, params?: {}, id?: string | number) => {
    const fullUrl = id ? `${url}/${id}` : url;
    return axios
      .get<T>(fullUrl, { params: params, signal: controller.signal })
      .then(responseBody);
  },
  
  // get: <T>(url: string) =>
  //   axios
  //     .get<T>(url, {signal: controller.signal})
  //     .then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  
};

export default request;
