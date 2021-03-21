<template>
  <div class="app fixed h-full w-full">
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { createStore } from './store';

createStore();
</script>

<style lang="css">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
