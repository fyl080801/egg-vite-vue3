// import router from './router'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
// import { Route } from 'vue-router'
// import { UserModule } from '@/store/modules/user'
// import { PermissionModule } from '@/store/modules/permission'
// import { isEmpty } from 'lodash-es'
// // import i18n from '@/lang' // Internationalization
// import settings from './settings'

NProgress.configure({ showSpinner: false });

// const getPageTitle = (key: string) => {
//   const hasKey = key //i18n.te(`route.${key}`)
//   if (hasKey) {
//     const pageName = key // i18n.t(`route.${key}`)
//     return `${pageName} - ${settings.appName}`
//   }
//   return `${settings.appName}`
// }

// const onBeforeEach = async (to: Route, _: Route, next: any) => {
//   NProgress.start()

//   if (!isEmpty(UserModule.token)) {
//     if (UserModule.roles.length === 0) {
//       await UserModule.GetUserInfo()
//       PermissionModule.GenerateRoutes(UserModule.roles)
//       PermissionModule.GenerateMenu(UserModule.roles)
//       router.addRoutes(PermissionModule.dynamicRoutes)
//       next({ ...to, replace: true })
//     } else {
//       next()
//     }
//   } else {
//     NProgress.done()
//     window.location.href = '/'
//   }
// }

// const onAfterEach = (to: Route) => {
//   NProgress.done()
//   document.title = getPageTitle(to.meta.title)
// }

// router.beforeEach(onBeforeEach)
// router.afterEach(onAfterEach)
