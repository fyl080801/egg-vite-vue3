import Vue from 'vue'
import { RouteConfig } from 'vue-router'
import { isExternal } from '@/utils/validate'
import path from 'path'
import './SidebarItem.scss'
import SidebarItemLink from './SidebarItemLink'

export default Vue.extend({
  name: 'SidebarItem',
  components: { SidebarItemLink },
  props: {
    item: { type: Object, required: true },
    isCollapse: { type: Boolean, default: false },
    isFirstLevel: { type: Boolean, default: true },
    basePath: { type: String, default: '' }
  },
  computed: {
    alwaysShowRootMenu() {
      if (this.item.alwaysShow) {
        return true
      }
      return false
    },
    showingChildNumber() {
      if (this.item.children) {
        const showingChildren = this.item.children.filter((item: any) =>
          item.hidden ? false : true
        )
        return showingChildren.length
      }
      return 0
    },
    theOnlyOneChild() {
      if (this.showingChildNumber > 1) {
        return null
      }
      if (this.item.children) {
        for (const child of this.item.children) {
          if (!child.hidden) {
            return child
          }
        }
      }
      // If there is no children, return itself with path removed,
      // because this.basePath already conatins item's path information
      return { ...this.item, path: '' }
    }
  },
  methods: {
    resolvePath(routePath: string) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  },
  render() {
    return (
      <fragment>
        {!this.item.hidden ? (
          <div
            class={[
              this.isCollapse ? 'simple-mode' : 'full-mode',
              { 'first-level': this.isFirstLevel }
            ]}
          >
            {!this.alwaysShowRootMenu && this.theOnlyOneChild && !this.theOnlyOneChild.children ? (
              this.theOnlyOneChild ? (
                <sidebar-item-link to={this.resolvePath(this.theOnlyOneChild.path)}>
                  <el-menu-item
                    index={this.resolvePath(this.theOnlyOneChild.path)} //名称来区分
                    class={{
                      'submenu-title-noDropdown': this.isFirstLevel
                    }}
                  >
                    {this.theOnlyOneChild.icon ? (
                      <svg-icon name={this.theOnlyOneChild.icon} />
                    ) : null}
                    {this.theOnlyOneChild.title ? (
                      <span slot="title">{this.theOnlyOneChild.title}</span>
                    ) : null}
                  </el-menu-item>
                </sidebar-item-link>
              ) : null
            ) : (
              <el-submenu
                index={this.resolvePath(this.item.path)} //名称来区分
                popper-append-to-body
              >
                <div slot="title">
                  {this.item.icon ? <svg-icon name={this.item.icon} /> : null}
                  {this.item.title ? (
                    <span slot="title">{!this.isCollapse ? this.item.title : null}</span>
                  ) : null}
                </div>
                {(this.item.children || []).map((child: RouteConfig) => (
                  <sidebar-item
                    key={child.path}
                    item={child}
                    is-collapse={this.isCollapse}
                    is-first-level={false}
                    base-path={this.resolvePath(child.path)}
                    class="nest-menu"
                  />
                ))}
              </el-submenu>
            )}
          </div>
        ) : null}
      </fragment>
    )
  }
})
