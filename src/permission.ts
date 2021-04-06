import router from './router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { isEmpty } from 'lodash-es';
import * as user from '@/store/user';
import * as permission from '@/store/permission';
// // import i18n from '@/lang' // Internationalization
import settings from './settings';
import {
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteRecordRaw
} from 'vue-router';
import { toRaw } from 'vue';

NProgress.configure({ showSpinner: false });

const getPageTitle = (key: string) => {
  const hasKey = key; // i18n.te(`route.${key}`)
  if (hasKey) {
    const pageName = key; // i18n.t(`route.${key}`)
    return `${pageName} - ${settings.appName}`;
  }
  return `${settings.appName}`;
};

const onBeforeEach = async (
  to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  NProgress.start();

  // next();
  // // 此处增加一个忽略权限判断的url，比如login
  // const { whiteList } = settings;

  // if (whiteList?.includes(to.path)) {
  //   next();
  //   return;
  // }

  const {
    state: userState,
    actions: { getUserInfo }
  } = user.useStore();
  const {
    state: permissionState,
    actions: { generateMenu, generateRoutes }
  } = permission.useStore();

  // if (!isEmpty(state.token)) {
  if (isEmpty(userState.token)) {
    await getUserInfo();

    if (isEmpty(userState.token)) {
      next();
      return;
    }

    generateRoutes(userState.roles as string[]);
    generateMenu(userState.roles as string[]);

    toRaw(permissionState.dynamicRoutes).forEach(route => {
      router.addRoute(route as RouteRecordRaw);
    });

    next({ ...to, replace: true });
  } else {
    next();
  }
  // } else {
  //   NProgress.done();
  //   window.location.href = settings.loginPath;
};
// } else {

// }
// };

const onAfterEach = (to: RouteLocationNormalized) => {
  NProgress.done();
  document.title = getPageTitle(to.meta?.title as string);
};

router.beforeEach(onBeforeEach);
router.afterEach(onAfterEach);
