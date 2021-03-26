import { RouteRecordRaw } from 'vue-router';

const route: RouteRecordRaw = {
  path: '/login',
  name: 'login',
  component: () => import('@/views/login/Index.vue'),
  meta: {
    hidden: true,
  },
};

export default route;
