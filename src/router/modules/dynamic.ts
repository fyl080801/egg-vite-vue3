import { RouteRecordRaw } from 'vue-router';

const route: RouteRecordRaw = {
  path: '/dynamic',
  redirect: '/dynamic/page',
  children: [
    {
      path: 'page/:id',
      component: () => import('@/views/dynamic/Index.vue'),
      name: 'dynamicPage',
    },
  ],
  meta: {
    hidden: true,
  },
};

export default route;
