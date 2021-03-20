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

<script lang="ts" setup>
import { useRoute } from 'vue-router';

const key = useRoute().path;
</script>

<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<style lang="scss">
@import './index.scss';
</style>
