<!-- import Vue from 'vue'
import { SettingsModule } from '@/store/modules/settings'
import './SidebarLogo.scss'

export default Vue.extend({
  name: 'SidebarLogo',
  props: {
    collapse: { type: Boolean, required: true }
  },
  data() {
    return { title: SettingsModule.appName }
  },
  render() {
    return (
      <div class={['sidebar-logo-container', { collapse: this.collapse }]}>
        <transition name="sidebarLogoFade">
          {this.collapse ? (
            <router-link key="collapse" class="sidebar-logo-link" to="/">
              <img src="//www.jdcloud.com/static/img/favicon.ico" class="sidebar-logo" />
            </router-link>
          ) : (
            <router-link key="expand" class="sidebar-logo-link" to="/">
              <img src="//www.jdcloud.com/static/img/favicon.ico" class="sidebar-logo" />
              <h1 class="sidebar-title">{this.title}</h1>
            </router-link>
          )}
        </transition>
      </div>
    )
  }
}) -->
<script lang="ts" setup>
import { defineProps } from 'vue';
import { settings } from '../../../store';

const { collapse } = defineProps({ collapse: Boolean });
const { appName } = settings.getState();
</script>

<template>
  <div :class="['sidebar-logo-container', { collapse }]">
    <transition name="sidebarLogoFade">
      <router-link
        v-if="collapse"
        key="collapse"
        class="sidebar-logo-link"
        to="/"
      >
        <img src="/favicon.ico" class="sidebar-logo" />
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img src="/favicon.ico" class="sidebar-logo" />
        <h1 class="sidebar-title">{{ appName }}</h1>
      </router-link>
    </transition>
  </div>
</template>
