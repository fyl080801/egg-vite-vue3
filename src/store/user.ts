// import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
// import { logout } from '@/api/users'
// import { getSSO, decodeSSO, decoceERP } from '@/utils/cookies'
// // import router, { resetRouter } from '@/router'
// // import { PermissionModule } from './permission'
// // import { TagsViewModule } from './tags-view'
// import store from '@/store'
// import { isEmpty } from 'lodash-es'

// export interface IUserErp {
//   email: string
//   expire: number
//   fullname: string
//   hrmDeptId: string
//   mobile: string
//   orgId: string
//   orgName: string
//   personId: string
//   tenantCode: string
//   userId: number
//   username: string
// }

// export interface IUserState {
//   token: string
//   name: string
//   avatar: string
//   introduction: string
//   exp: number
//   erp?: IUserErp
//   roles: string[]
//   email: string
// }

// @Module({ dynamic: true, store, name: 'user' })
// class User extends VuexModule implements IUserState {
//   public token = getSSO() || ''
//   public name = ''
//   public avatar = ''
//   public introduction = ''
//   public roles: string[] = []
//   public email = ''
//   public exp = Number.MIN_VALUE
//   public erp: IUserErp = {
//     email: '',
//     expire: Number.MIN_VALUE,
//     fullname: '',
//     hrmDeptId: '',
//     mobile: '',
//     orgId: '',
//     orgName: '',
//     personId: '',
//     tenantCode: '',
//     userId: 0,
//     username: ''
//   }

//   // @Mutation
//   // private SET_TOKEN(token: string) {
//   //   this.token = token
//   // }

//   @Mutation
//   private SET_NAME(name: string) {
//     this.name = name
//   }

//   @Mutation
//   private SET_AVATAR(avatar: string) {
//     this.avatar = avatar
//   }

//   @Mutation
//   private SET_INTRODUCTION(introduction: string) {
//     this.introduction = introduction
//   }

//   @Mutation
//   private SET_ROLES(roles: string[]) {
//     this.roles = roles
//   }

//   @Mutation
//   private SET_EXP(exp: number) {
//     this.exp = exp
//   }

//   @Mutation
//   private SET_EMAIL(email: string) {
//     this.email = email
//   }

//   @Mutation
//   private SET_ERP(erp: IUserErp) {
//     this.erp = erp
//   }

//   // @Action
//   // public async Login(userInfo: any) {
//   //   // let { username, password } = userInfo
//   //   // username = username.trim()
//   //   // const { data } = await login({ username, password })
//   //   // setToken(data.accessToken)
//   //   // this.SET_TOKEN(data.accessToken)
//   // }

//   // @Action
//   // public ResetToken() {
//   //   removeToken()
//   //   this.SET_TOKEN('')
//   //   this.SET_ROLES([])
//   // }

//   @Action
//   public async GetUserInfo() {
//     if (isEmpty(this.token)) {
//       throw Error('GetUserInfo: token is undefined!')
//     }

//     const { data } = await new Promise(resolve => {
//       const sso = decodeSSO()
//       resolve({
//         data: {
//           roles: sso.roleCodes
//             .split(',')
//             .filter(item => !isEmpty(item))
//             .map(s => s.trim()),
//           name: sso.displayName,
//           avatar: '',
//           introduction: '',
//           exp: sso.exp,
//           erp: decoceERP(),
//           email: sso.email
//         }
//       })
//     })

//     const { roles = [], name, avatar, introduction, email, exp, erp } = data

//     this.SET_ROLES(roles)
//     this.SET_NAME(name)
//     this.SET_AVATAR(avatar)
//     this.SET_INTRODUCTION(introduction)
//     this.SET_EMAIL(email)
//     this.SET_EXP(exp)
//     this.SET_ERP(erp)
//   }

//   // @Action
//   // public async ChangeRoles(role: string) {
//   //   // // Dynamically modify permissions
//   //   // const token = role + '-token'
//   //   // this.SET_TOKEN(token)
//   //   // setToken(token)
//   //   // await this.GetUserInfo()
//   //   // resetRouter()
//   //   // // Generate dynamic accessible routes based on roles
//   //   // PermissionModule.GenerateRoutes(this.roles)
//   //   // // Add generated routes
//   //   // router.addRoutes(PermissionModule.dynamicRoutes)
//   //   // // Reset visited views and cached views
//   //   // TagsViewModule.delAllViews()
//   // }

//   @Action
//   public async LogOut() {
//     await logout()
//   }
// }

// export const UserModule = getModule(User)
