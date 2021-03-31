import axios from '@/utils/axios';

export const validUsername = async (value: string) => {
  axios.get('/api/account/user', { params: { username: value } });
};

export const validUser = async (username: string, password: string) => {
  return await axios.post('/api/account/valid', { username, password });
};
