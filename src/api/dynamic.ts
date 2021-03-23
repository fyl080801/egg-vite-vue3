import axios from '@/utils/axios';

export const getPage = async (id) => {
  return await axios(`/api/dynamic/page/${id}`, { method: 'GET' });
};
