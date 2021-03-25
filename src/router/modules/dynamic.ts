// import { RouteConfig } from 'vue-router'
// import { isArray } from 'lodash-es'
// import settings from '@/settings'
// import Layout from '@/layout/index'

// const eachTree = (tree, callback) => {
//   for (const i in tree) {
//     const result = eachTreeNode(tree[i], callback)
//     if (result === false) {
//       break
//     }
//   }
// }

// const eachTreeNode = (node, callback) => {
//   const result = callback(node)
//   if (result === false) {
//     return false
//   }

//   if (node.children && isArray(node.children) && node.children.length > 0) {
//     eachTree(node.children, callback)
//   }
// }

// const initRoutes = (): RouteConfig[] => {
//   // return settings.pages.map((menu: any, index: number) => {
//   //   const { path, icon, title, roles = [] } = menu
//   //   return {
//   //     name: `/pages${path}`,
//   //     path: `/resource/pages${path}`,
//   //     redirect: `/pages${path}`,
//   //     meta: {
//   //       title: title,
//   //       icon: !isEmpty(icon) ? icon : 'component',
//   //       activeMenu: `/pages${path}`,
//   //       breadcrumb: true,
//   //       roles: roles
//   //     }
//   //   }
//   // })

//   eachTree(settings.storyboard, story => {
//     story.component = () => import(/* webpackChunkName: "dynamicPage" */ '@/views/dynamicPage')
//   })

//   return [
//     {
//       path: '/pages',
//       component: Layout,
//       children: settings.storyboard
//     }
//   ]
//   // return settings.storyboard
// }

// const routes: RouteConfig[] = initRoutes()

// export default routes


// import { RouteRecordRaw } from 'vue-router';

// const route: RouteRecordRaw = {
//   path: '/dynamic',
//   redirect: '/dynamic/page',
//   children: [
//     {
//       path: 'page/:id',
//       component: () => import('@/views/dynamic/Index.vue'),
//       name: 'dynamicPage',
//     },
//   ],
//   meta: {
//     hidden: true,
//   },
// };

// export default route;
