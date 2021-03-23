import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Layout from '@/layout';

const modules = import.meta.globEager('./modules/**/*.ts');

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/Index.vue'),
        name: 'dashboard',
        meta: {
          title: '首页',
          icon: 'dashboard',
          affix: true,
        },
      },
    ],
    meta: {
      hidden: true,
    },
  },
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/Index.vue'),
      },
    ],
  },
  {
    path: '/(*)',
    redirect: '/error/404',
  },
];

export default createRouter({
  history: createWebHistory(),
  routes: [
    ...constantRoutes,
    ...Object.keys(modules).map((key) => ({
      component: Layout,
      ...modules[key].default,
    })),
  ],
});
