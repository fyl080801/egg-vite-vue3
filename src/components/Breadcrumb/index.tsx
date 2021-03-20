import Vue from 'vue'
import { compile } from 'path-to-regexp'
import { RouteConfig, Route, RouteRecord } from 'vue-router'
import './index.scss'

export default Vue.extend({
  name: 'Breadcrumb',
  data() {
    return {
      breadcrumbs: []
    }
  },
  watch: {
    $route(route: Route) {
      if (route.path.startsWith('/redirect/')) {
        return
      }
      this.getBreadcrumb()
    }
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter((item: RouteConfig) => item.meta && item.meta.title)
      // const xxx = this.$router.match(window.location)

      const first = matched[0]
      if (!this.isDashboard(first)) {
        matched = [{ path: '/dashboard', meta: { title: '首页' } } as RouteRecord].concat(matched)
      }
      this.breadcrumbs = matched.filter((item: RouteConfig) => {
        return item.meta && item.meta.title && item.meta.breadcrumb !== false
      })
    },
    isDashboard(route: RouteRecord) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
    },

    pathCompile(path: string) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route
      const toPath = compile(path)
      return toPath(params)
    },

    handleLink(item: any) {
      const { redirect, path } = item
      if (redirect) {
        this.$router.push(redirect).catch((err: any) => {
          // Throw Error "NavigationDuplicated"
          // https://github.com/vuejs/vue-router/issues/2872#issuecomment-522341874
          console.log(err)
        })
        return
      }
      this.$router.push(this.pathCompile(path)).catch((err: any) => {
        // Throw Error "NavigationDuplicated"
        // https://github.com/vuejs/vue-router/issues/2872#issuecomment-522341874
        console.log(err)
      })
    }
  },
  created() {
    this.getBreadcrumb()
  },
  render() {
    return (
      <el-breadcrumb class="app-breadcrumb" separator="/">
        <transition-group name="breadcrumb">
          {this.breadcrumbs.map((item: RouteConfig, index: number) => (
            <el-breadcrumb-item key={item.path}>
              {item.redirect === 'noredirect' || index === this.breadcrumbs.length - 1 ? (
                <span class="no-redirect">{item.meta.title}</span>
              ) : (
                <a
                  onClick={() => {
                    this.handleLink(item)
                  }}
                >
                  {item.meta.title}
                </a>
              )}
            </el-breadcrumb-item>
          ))}
        </transition-group>
      </el-breadcrumb>
    )
  }
})
