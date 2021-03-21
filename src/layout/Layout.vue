<!-- import ResizeMixin from './mixin/resize'
import { DeviceType, AppModule } from '@/store/modules/app'
import { SettingsModule } from '@/store/modules/settings'
import { AppMain, Sidebar, Navbar } from './components'
import './index.scss'

export default ResizeMixin.extend({
  components: { AppMain, Sidebar, Navbar },
  computed: {
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === DeviceType.Mobile
      }
    },
    showSettings() {
      return SettingsModule.showSettings
    },

    showTagsView() {
      return SettingsModule.showTagsView
    },

    fixedHeader() {
      return SettingsModule.fixedHeader
    }
  },
  methods: {
    handleClickOutside() {
      AppModule.CloseSideBar(false)
    }
  },
  render() {
    return (
      <div class={['app-wrapper', { ...this.classObj }]}>
        {this.classObj.mobile && this.sidebar.opened ? (
          <div class="drawer-bg" onClick={this.handleClickOutside} />
        ) : null}
        <sidebar class="sidebar-container" />
        <div class={{ hasTagsView: this.showTagsView, 'main-container': true }}>
          <div class={{ 'fixed-header': this.fixedHeader }}>
            <navbar />
            {/* <tags-view v-if="showTagsView" /> */}
          </div>
          <app-main />
          {/* <right-panel v-if="showSettings">
            <settings />
          </right-panel> */}
        </div>
      </div>
    )
  }
}) -->

<script lang="ts" setup>
import { computed } from 'vue';
import { AppMain, Navbar, Sidebar } from './components';
import { useResize } from './mixin/resize';
import { app, settings } from '../store';
import { DeviceType } from '../store/app';

useResize();

const handleClickOutside = () => {
  app.closeSideBar(false);
};

const appState = app.getState();
const settingsState = settings.getState();

const classObj = computed(() => ({
  hideSidebar: !appState.sidebar.opened,
  openSidebar: appState.sidebar.opened,
  withoutAnimation: appState.sidebar.withoutAnimation,
  mobile: appState.device === DeviceType.Mobile,
}));
</script>

<template>
  <div class="app-wrapper" :class="classObj">
    <div
      v-if="classObj.mobile && appState.sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    />
    <sidebar class="sidebar-container" />
    <div
      :class="{
        hasTagsView: settingsState.showTagsView,
        'main-container': true,
      }"
    >
      <div :class="{ 'fixed-header': settingsState.fixedHeader }">
        <navbar />
        <!-- {/* <tags-view v-if="showTagsView" /> */} -->
      </div>
      <app-main></app-main>
    </div>
  </div>
</template>

<style lang="scss">
// @import './index.scss';
</style>
