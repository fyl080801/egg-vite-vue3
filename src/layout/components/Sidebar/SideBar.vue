<!-- import Vue from 'vue'
import { AppModule } from '@/store/modules/app'
import { SettingsModule } from '@/store/modules/settings'
import variables from '@/styles/_variables.scss'
import SidebarLogo from './SidebarLogo'
import SidebarItem from './SidebarItem'
import './index.scss'
import { PermissionModule } from '@/store/modules/permission'

export default Vue.extend({
  components: { SidebarLogo, SidebarItem },
  computed: {
    sidebar() {
      return AppModule.sidebar
    },

    menu() {
      return PermissionModule.menu
    },

    showLogo() {
      return SettingsModule.showSidebarLogo
    },

    menuActiveTextColor() {
      if (SettingsModule.sidebarTextTheme) {
        return SettingsModule.theme
      } else {
        return variables.menuActiveText
      }
    },

    variables() {
      return variables
    },

    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },

    isCollapse() {
      return !AppModule.sidebar.opened
    }
  },
  render() {
    return (
      <div class={[{ 'has-logo': this.showLogo }, 'sidebar-wrapper']}>
        {this.showLogo ? <sidebar-logo collapse={this.isCollapse} /> : null}
        <el-scrollbar wrap-class="scrollbar-wrapper">
          <el-menu
            defaultActive={this.activeMenu}
            collapse={this.isCollapse}
            background-color={variables.menuBg}
            textColor={variables.menuText}
            active-text-color={this.menuActiveTextColor}
            unique-opened={false}
            collapse-transition={false}
            mode="vertical"
          >
            {this.menu.map(m => (
              <sidebar-item key={m.path} item={m} basePath={m.path} isCollapse={this.isCollapse} />
            ))}
          </el-menu>
        </el-scrollbar>
      </div>
    )
  }
}) -->

<script lang="ts" setup></script>
