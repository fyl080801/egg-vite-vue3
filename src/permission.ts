import router from './router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
// import { isEmpty } from 'lodash-es';
// import * as user from '@/store/user';
// import * as permission from '@/store/permission';
// // import i18n from '@/lang' // Internationalization
import settings from './settings';
import {
  NavigationGuardNext,
  RouteLocationNormalized
  // RouteRecordRaw
} from 'vue-router';

NProgress.configure({ showSpinner: false });

const getPageTitle = (key: string) => {
  const hasKey = key; // i18n.te(`route.${key}`)
  if (hasKey) {
    const pageName = key; // i18n.t(`route.${key}`)
    return `${pageName} - ${settings.appName}`;
  }
  return `${settings.appName}`;
};

const onBeforeEach = (
  _to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  NProgress.start();

  next();

  // // 此处增加一个忽略权限判断的url，比如login
  // const { whiteList } = settings;

  // if (whiteList?.includes(to.path)) {
  //   next();
  //   return;
  // }

  // const {
  //   state,
  //   actions: { getUserInfo }
  // } = user.useStore();
  // const {
  //   state: { dynamicRoutes },
  //   actions: { generateMenu, generateRoutes }
  // } = permission.useStore();

  // if (!isEmpty(state.token)) {
  //   if (state.roles.length === 0) {
  //     await getUserInfo();
  //     generateRoutes(state.roles as string[]);
  //     generateMenu(state.roles as string[]);

  //     dynamicRoutes.forEach(route => {
  //       router.addRoute(route as RouteRecordRaw);
  //     });
  //     next({ ...to, replace: true });
  //   } else {
  //     next();
  //   }
  // } else {
  //   NProgress.done();
  //   window.location.href = settings.loginPath;
  // }
};

const onAfterEach = (to: RouteLocationNormalized) => {
  NProgress.done();
  document.title = getPageTitle(to.meta?.title as string);
};

router.beforeEach(onBeforeEach);
router.afterEach(onAfterEach);
