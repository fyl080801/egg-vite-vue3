<script lang="ts" setup>
import { defineProps, defineEmit } from 'vue';

const { isActive } = defineProps({ isActive: Boolean });

const emit = defineEmit(['toggleClick']);

const toggleClick = () => {
  emit('toggleClick');
};
</script>

<template>
  <div
    :class="[{ 'is-active': isActive }, 'nav-hamburger']"
    @click="toggleClick"
  >
    <!-- <svg-icon name="hamburger" width="20" height="20"></svg-icon> -->
  </div>
</template>
