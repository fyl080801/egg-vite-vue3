<script lang="ts" setup>
// doc: https://panjiachen.github.io/vue-element-admin-site/feature/component/svg-icon.html#usage
import { defineProps, computed } from 'vue';
import * as validate from '../../utils/validate';

const { iconClass, className } = defineProps({
  iconClass: { type: String, required: true },
  className: { type: String, default: '' },
});

const isExternal = computed(() => validate.isExternal(iconClass));

const iconName = computed(() => `#icon-${iconClass}`);

const svgClass = computed(() => {
  if (className) {
    return `seed-icon svg-icon ${className}`;
  } else {
    return 'seed-icon svg-icon';
  }
});

const styleExternalIcon = computed(() => ({
  mask: `url(${iconClass}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${iconClass}) no-repeat 50% 50%`,
}));
</script>

<template>
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="seed-icon svg-external-icon svg-icon"
  />
  <svg v-else :class="svgClass" aria-hidden="true">
    <use :href="iconName" />
  </svg>
</template>

<style lang="scss">
.seed-icon {
  &.svg-icon {
    width: 20px;
    height: 20px;
    fill: currentColor;
    overflow: hidden;
  }

  &.svg-external-icon {
    background-color: currentColor;
    mask-size: cover !important;
    display: inline-block;
  }
}
</style>
