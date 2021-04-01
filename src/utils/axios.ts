import axios from 'axios';
import * as qs from 'qs';
// import { logout } from '@/api/users';

axios.defaults.xsrfCookieName = 'csrfToken';
axios.defaults.xsrfHeaderName = 'x-csrf-token';

// 创建axios实例
const service = axios.create({
  // timeout: 30000, // 请求超时时间
  paramsSerializer(params) {
    return qs.stringify(params, { indices: false }); // param=value1&param=value2
  }
});

// request拦截器
service.interceptors.request.use(
  config => {
    Object.keys(config.headers).forEach(key => {
      if (config.headers[key] === undefined) {
        delete config.headers[key];
      }
    });
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      // logout();
      return;
    }

    return Promise.reject(error);
  }
);

export default service;
