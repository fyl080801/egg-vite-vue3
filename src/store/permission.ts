// import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
// import { RouteConfig } from 'vue-router'
// import { asyncRoutes, constantRoutes } from '@/router'
// import store from '@/store'
// import settings from '@/settings'
// import path from 'path'
// import { isExternal } from '@/utils/validate'

// const hasPermission = (roles: string[], userRoles: string[]) => {
//   if (userRoles) {
//     return roles.some(role => userRoles.includes(role))
//   } else {
//     return true
//   }
// }

// export const filterAsyncRoutes = (routes: RouteConfig[], roles: string[]) => {
//   const result: RouteConfig[] = []
//   routes.forEach(route => {
//     const r = { ...route }
//     if (hasPermission(roles, r.meta?.roles)) {
//       if (r.children) {
//         r.children = filterAsyncRoutes(r.children, roles)
//       }
//       result.push(r)
//     }
//   })
//   return result
// }

// export const filterRoleMenu = (menu: any[], roles: string[], basePath: string) => {
//   const result: RouteConfig[] = []
//   menu.forEach(m => {
//     const item = { ...m, path: isExternal(m.path) ? m.path : path.join(basePath, m.path) }
//     if (hasPermission(roles, item.roles)) {
//       if (item.children) {
//         item.children = filterRoleMenu(item.children, roles, basePath)
//       }
//       result.push(item)
//     }
//   })
//   return result
// }

// export interface IPermissionState {
//   routes: RouteConfig[]
//   dynamicRoutes: RouteConfig[]
//   menu: any[]
// }

// @Module({ dynamic: true, store, name: 'permission' })
// class Permission extends VuexModule implements IPermissionState {
//   public routes: RouteConfig[] = []
//   public dynamicRoutes: RouteConfig[] = []
//   public menu: any[] = []

//   @Mutation
//   private SET_ROUTES(routes: RouteConfig[]) {
//     this.routes = constantRoutes.concat(routes)
//     this.dynamicRoutes = routes
//   }

//   @Mutation
//   private SET_MENU(menu: any[]) {
//     this.menu = menu
//   }

//   @Action
//   public GenerateRoutes(roles: string[]) {
//     // 需要加上权限
//     const accessedRoutes = asyncRoutes
//     // console.log(roles, asyncRoutes)
//     // if (roles.includes('admin')) {
//     //   accessedRoutes = asyncRoutes
//     // } else {
//     //   accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
//     // }
//     this.SET_ROUTES(
//       accessedRoutes.filter(route => {
//         const routeRoles = route.meta?.roles || []
//         if (routeRoles.length <= 0) {
//           return true
//         }
//         return !!routeRoles.find(r => roles.includes(r))
//       })
//     )
//   }

//   @Action
//   public GenerateMenu(roles: string[]) {
//     this.SET_MENU(filterRoleMenu(settings.menu, roles, '/pages'))
//   }
// }

// export const PermissionModule = getModule(Permission)

import { reactive, readonly } from 'vue';
// import { RouteRecordRaw } from 'vue-router';

export interface IPermissionState {
  menu: any[];
}

const initState: IPermissionState = {
  menu: [
    {
      path: '/dashboard',
      name: 'dashboard',
      redirect: '',
      title: 'Dashoard',
      icon: 'dashboard',
      meta: { title: 'Dashboard', icon: 'dashboard' },
    },
  ],
};

const createState = () => {
  return reactive(initState);
};

const createActions = (state: IPermissionState) => {
  console.log(state);
  return {
    // setSize: setSize(state),
    // toggleDevice: toggleDevice(state),
    // closeSideBar: closeSideBar(state),
    // toggleSideBar: toggleSideBar(state),
  };
};

const state = createState();
const actions = createActions(state);

export const useStore = () => {
  return {
    state: readonly(state),
    actions: readonly(actions),
  };
};
