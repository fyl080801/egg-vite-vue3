import axios from '@/utils/axios';

export const validUsername = async (value: string) => {
  axios.get('/api/account/user', { params: { username: value } });
};
