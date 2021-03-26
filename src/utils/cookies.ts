import cookies from 'js-cookie';
// import jwt from 'jsonwebtoken';

// App
const sidebarStatusKey = 'sidebar_status';
export const getSidebarStatus = () => cookies.get(sidebarStatusKey);
export const setSidebarStatus = (sidebarStatus: string) =>
  cookies.set(sidebarStatusKey, sidebarStatus);

const languageKey = 'language';
export const getLanguage = () => cookies.get(languageKey);
export const setLanguage = (language: string) =>
  cookies.set(languageKey, language);

const sizeKey = 'size';
export const getSize = () => cookies.get(sizeKey);
export const setSize = (size: string) => cookies.set(sizeKey, size);

// User
const tokenKey = 'psp_token';
export const getCsrfToken = () => cookies.get('csrfToken');
export const setToken = (token: string) => cookies.set(tokenKey, token);
export const removeToken = () => cookies.remove(tokenKey);

export const getSSO = () => {
  return cookies.get('psp_token');
};

// export const getERP = () => {
//   return Cookies.get('erp_token');
// };

export const decodeSSO = (token?: string) => {
  const value = token || getSSO() || '';
  const base64Url = value.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(window.atob(base64));
};

// export const decoceERP = (token?: string) => {
//   return jwt.decode(token || getERP() || '');
// };
