<!-- import Vue from 'vue'
import variables from '@/styles/_variables.scss'
import SidebarItem from './SidebarItem'
import './index.scss'
import { PermissionModule } from '@/store/modules/permission'

export default Vue.extend({
  components: { SidebarLogo, SidebarItem },
  computed: {

    menu() {
      return PermissionModule.menu
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
import * as permission from '../../../store/permission';
import SidebarLogo from './SidebarLogo.vue';
import SidebarItem from './SidebarItem.vue';
import variables from './_variables.module.scss';

const { state: appState } = app.useStore();
const { state: settingsState } = settings.useStore();
const { state: permissionState } = permission.useStore();

const showLogo = computed(() => settingsState.showSidebarLogo);
const isCollapse = computed(() => !appState.sidebar.opened);
const activeMenu = computed(() => {
  const { meta, path } = useRoute();

  // if set path, the sidebar will highlight the path you set
  return meta.activeMenu || path;
});
const menu = computed(() => permissionState.menu);
const menuActiveTextColor = computed(() => {
  if (settingsState.sidebarTextTheme) {
    return settingsState.theme;
  } else {
    return variables.menuActiveText;
  }
});
</script>

<template>
  <div :class="[{ 'has-logo': showLogo }, 'sidebar-wrapper']">
    <sidebar-logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :defaultActive="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :textColor="variables.menuText"
        :active-text-color="menuActiveTextColor"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="m in menu"
          :key="m.path"
          :item="m"
          :base-path="m.path"
          :is-collapse="isCollapse"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style lang="scss">
@import './index.scss';
</style>
