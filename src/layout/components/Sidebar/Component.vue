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

    menu() {
      return PermissionModule.menu
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

  },
  render() {
    return (
      <div class={[{ 'has-logo': this.showLogo }, 'sidebar-wrapper']}>
        {this.showLogo ?  : null}
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

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import * as app from '../../../store/app';
import * as settings from '../../../store/settings';
import SidebarLogo from './SidebarLogo.vue';

const { state: appState } = app.useStore();
const { state: settingsState } = settings.useStore();

const showLogo = computed(() => settingsState.showSidebarLogo);
const isCollapse = computed(() => appState.sidebar.opened);
const activeMenu = computed(() => {
  const { meta, path } = useRoute();

  // if set path, the sidebar will highlight the path you set
  return meta.activeMenu || path;
});
</script>

<template>
  <div :class="[{ 'has-logo': showLogo }, 'sidebar-wrapper']">
    <sidebar-logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :defaultActive="activeMenu"
        :collapse="isCollapse"
        background-color="{variables.menuBg}"
        textColor="{variables.menuText}"
        active-text-color="{this.menuActiveTextColor}"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <!-- {this.menu.map(m => (
        <sidebar-item
          key="{m.path}"
          item="{m}"
          basePath="{m.path}"
          isCollapse="{this.isCollapse}"
        />
        ))} -->
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style lang="scss">
@import './index.scss';
</style>
