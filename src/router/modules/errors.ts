import { RouteRecordRaw } from 'vue-router';

const route: RouteRecordRaw = {
  path: '/error',
  redirect: '/error/404',
  children: [
    {
      path: '404',
      component: () => import('@/views/errors/404.vue'),
      name: 'error404',
    },
    {
      path: '401',
      component: () => import('@/views/errors/401.vue'),
      name: 'error401',
    },
  ],
  meta: {
    hidden: true,
  },
};

export default route;
