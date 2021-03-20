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
import AppMain from './components/AppMain';
import { useResize } from './mixin/resize';

useResize();
</script>

<template>
  <div class="app-wrapper">
    <app-main></app-main>
  </div>
</template>
