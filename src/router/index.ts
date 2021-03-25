import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import dynamicRouter from './modules/dynamic';

import Layout from '@/layout';

// const modules = import.meta.globEager('./modules/**/*.ts');

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes: RouteRecordRaw[] = [
  /** when your routing map is too long, you can split it into small modules **/
  // componentsRouter,
  // chartsRouter,
  // nestedRouter,
  // tableRouter,

  ...dynamicRouter,

  // sample,
  // {
  //   path: '/pages',
  //   component: Layout,
  //   meta: { hidden: true },
  //   children: [
  //     {
  //       path: ':path/:page',
  //       component: () =>
  //         import(/* webpackChunkName: "dynamicPage" */ '@/views/dynamicPage')
  //     }
  //   ]
  // },
  {
    path: '*',
    redirect: '/404',
    meta: { hidden: true },
  },
];

// export const constantRoutes: RouteConfig[] = [
//   {
//     path: '/redirect',
//     component: Layout,
//     meta: { hidden: true },
//     children: [
//       {
//         path: '/redirect/:path(.*)',
//         component: () => import(/* webpackChunkName: "redirect" */ '@/views/redirect/index')
//       }
//     ]
//   },
//   {
//     path: '/404',
//     component: () => import(/* webpackChunkName: "404" */ '@/views/errors/404'),
//     meta: { hidden: true }
//   },
//   {
//     path: '/401',
//     component: () => import(/* webpackChunkName: "401" */ '@/views/errors/401'),
//     meta: { hidden: true }
//   },
//   {
//     path: '/',
//     component: Layout,
//     redirect: '/dashboard',
//     children: [
//       {
//         path: 'dashboard',
//         component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard'),
//         name: 'dashboard',
//         meta: {
//           title: '首页',
//           icon: 'dashboard',
//           affix: true
//         }
//       }
//     ],
//     meta: {
//       hidden: true
//     }
//   }
// ]

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
  // {
  //   path: '/(*)',
  //   redirect: '/404',
  //   meta: { hidden: true },
  // },
];

export default createRouter({
  history: createWebHistory(),
  routes: [
    ...constantRoutes,
    // ...Object.keys(modules).map((key) => ({
    //   component: Layout,
    //   ...modules[key].default,
    // })),
  ],
});
