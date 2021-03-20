import * as Cookies from 'js-cookie';
// import jwt from 'jsonwebtoken';

// App
const sidebarStatusKey = 'sidebar_status';
export const getSidebarStatus = () => Cookies.get(sidebarStatusKey);
export const setSidebarStatus = (sidebarStatus: string) =>
  Cookies.set(sidebarStatusKey, sidebarStatus);

const languageKey = 'language';
export const getLanguage = () => Cookies.get(languageKey);
export const setLanguage = (language: string) =>
  Cookies.set(languageKey, language);

const sizeKey = 'size';
export const getSize = () => Cookies.get(sizeKey);
export const setSize = (size: string) => Cookies.set(sizeKey, size);

// User
const tokenKey = 'psp_token';
export const getCsrfToken = () => Cookies.get('csrfToken');
export const setToken = (token: string) => Cookies.set(tokenKey, token);
export const removeToken = () => Cookies.remove(tokenKey);

export const getSSO = () => {
  return Cookies.get('psp_token');
};

export const getERP = () => {
  return Cookies.get('erp_token');
};

// export const decodeSSO = (token?: string) => {
//   return jwt.decode(token || getSSO() || '');
// };

// export const decoceERP = (token?: string) => {
//   return jwt.decode(token || getERP() || '');
// };
