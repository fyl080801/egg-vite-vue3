<!-- import Vue from 'vue'
import './index.scss'

export default Vue.extend({
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  },
  render() {
    return (
      <section class="app-main">
        <transition name="fade-transform" mode="out-in">
          <router-view key={this.key} />
        </transition>
      </section>
    )
  }
}) -->

<template>
  <section class="app-main">
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </section>
</template>

<style lang="scss">
// @import './index.scss';
</style>
