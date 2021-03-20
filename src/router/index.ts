import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Layout from '../layout';

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () =>
          import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
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
  // {
  //   path: '/redirect',
  //   component: Layout,
  //   meta: { hidden: true },
  //   children: [
  //     {
  //       path: '/redirect/:path(.*)',
  //       component: () =>
  //         import(/* webpackChunkName: "redirect" */ '@/views/redirect/index'),
  //     },
  //   ],
  // },
  // {
  //   path: '/404',
  //   component: () => import(/* webpackChunkName: "404" */ '@/views/errors/404'),
  //   meta: { hidden: true },
  // },
  // {
  //   path: '/401',
  //   component: () => import(/* webpackChunkName: "401" */ '@/views/errors/401'),
  //   meta: { hidden: true },
  // },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children: [
  //     {
  //       path: 'dashboard',
  //       component: () =>
  //         import(/* webpackChunkName: "dashboard" */ '@/views/dashboard'),
  //       name: 'dashboard',
  //       meta: {
  //         title: '首页',
  //         icon: 'dashboard',
  //         affix: true,
  //       },
  //     },
  //   ],
  //   meta: {
  //     hidden: true,
  //   },
  // },
];

export default createRouter({
  history: createWebHistory(),
  routes: [...constantRoutes],
  // routes: [
  //   {
  //     path: '/home',
  //     name: 'home',
  //     component: () => import('../views/Home.vue'),
  //   },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     component: () => import('../views/About.vue'),
  //   },
  //   {
  //     path: '/:pathMatch(.*)',
  //     redirect: '/home',
  //   },
  // ],
});
