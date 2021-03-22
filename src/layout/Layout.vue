<!-- import ResizeMixin from './mixin/resize'
import { DeviceType, AppModule } from '@/store/modules/app'
import { SettingsModule } from '@/store/modules/settings'
import { AppMain, Sidebar, Navbar } from './components'
import './index.scss'

export default ResizeMixin.extend({
  components: { AppMain, Sidebar, Navbar },
  computed: {
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
import * as app from '../store/app';
import * as settings from '../store/settings';
import { DeviceType } from '../store/app';

useResize();

const {
  state: appState,
  action: { closeSideBar },
} = app.useStore();

const { state: settingsState } = settings.useStore();

const handleClickOutside = () => {
  closeSideBar(false);
};

// const { closeSideBar } = action;

const wrapperClass = computed(() => ({
  hideSidebar: !appState.sidebar.opened,
  openSidebar: appState.sidebar.opened,
  withoutAnimation: appState.sidebar.withoutAnimation,
  mobile: appState.device === DeviceType.Mobile,
}));
</script>

<template>
  <div class="app-wrapper" :class="wrapperClass">
    <div
      v-if="wrapperClass.mobile && appState.sidebar.opened"
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
@import './index.scss';
</style>
