<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <section class="app-main">
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <component :key="route.path" :is="Component" />
      </transition>
    </router-view>
  </section>
</template>

<style lang="scss">
@import './index.scss';
</style>
