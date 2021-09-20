/**
 * Created by liliangshan on 2021/9/18
 */
import axios from "axios";

const instance = axios.create({
  baseURL: '/',
  method: 'post',
  timeout: 10000,
});

// interceptors
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const request = (option) => {
  return new Promise((resolve, reject) => {
    return instance(option).then(resolve).catch(reject);
  });
}
