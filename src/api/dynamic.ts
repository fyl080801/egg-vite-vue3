import axios from '@/utils/axios';

export const getPage = async path => {
  return await axios('/api/apps/page', { method: 'GET', params: { path } });
};
