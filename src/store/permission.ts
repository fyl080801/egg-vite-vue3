// import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
// import { RouteConfig } from 'vue-router'
// import { asyncRoutes, constantRoutes } from '@/router'
// import store from '@/store'
// import settings from '@/settings'
// import path from 'path'
// import { isExternal } from '@/utils/validate'

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

// export const PermissionModule = getModule(Permission)

import { reactive, readonly } from 'vue';
import settings from '@/settings';
import { asyncRoutes, constantRoutes } from '@/router';
import { RouteRecordRaw } from 'vue-router';
import { isExternal } from '@/utils/validate';
import * as path from 'path';

export interface IPermissionState {
  menu: any[];
  routes: RouteRecordRaw[];
  dynamicRoutes: RouteRecordRaw[];
}

const initState: IPermissionState = {
  menu: [],
  routes: [],
  dynamicRoutes: [],
};

const hasPermission = (roles: string[], userRoles: string[]) => {
  if (userRoles) {
    return roles.some((role) => userRoles.includes(role));
  }
  return true;
};

// const filterAsyncRoutes = (routes: RouteRecordRaw[], roles: string[]) => {
//   const result: RouteRecordRaw[] = [];
//   routes.forEach((route) => {
//     const r = { ...route };
//     if (
//       typeof r.meta === 'object' &&
//       hasPermission(roles, r.meta?.roles as string[])
//     ) {
//       if (r.children) {
//         r.children = filterAsyncRoutes(r.children || [], roles);
//       }
//       result.push(r);
//     }
//   });
//   return result;
// };

const filterRoleMenu = (menu: any[], roles: string[], basePath: string) => {
  const result: RouteRecordRaw[] = [];

  menu.forEach((m) => {
    const item = {
      ...m,
      path: isExternal(m.path) ? m.path : path.join(basePath, m.path),
    };
    if (hasPermission(roles, item.roles)) {
      if (item.children) {
        item.children = filterRoleMenu(item.children, roles, basePath);
      }
      result.push(item);
    }
  });

  return result;
};

const generateMenu = (state: IPermissionState) => (roles: string[]) => {
  state.menu = filterRoleMenu(settings.menu, roles, '/pages');
};

const generateRoutes = (state: IPermissionState) => (roles: string[]) => {
  // 需要加上权限
  const accessedRoutes = asyncRoutes;
  // console.log(roles, asyncRoutes)
  // if (roles.includes('admin')) {
  //   accessedRoutes = asyncRoutes
  // } else {
  //   accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
  // }
  const routes = accessedRoutes.filter((route) => {
    const routeRoles = (route.meta?.roles as string[]) || [];

    if (routeRoles.length <= 0) {
      return true;
    }

    return !!routeRoles.find((r) => roles.includes(r));
  });

  state.routes = constantRoutes.concat(routes);
  state.dynamicRoutes = routes;
};

const createState = () => {
  return reactive(initState) as IPermissionState;
};

const createActions = (state: IPermissionState) => {
  return {
    generateMenu: generateMenu(state),
    generateRoutes: generateRoutes(state),
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
