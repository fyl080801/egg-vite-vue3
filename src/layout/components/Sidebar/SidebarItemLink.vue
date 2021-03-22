<!-- import Vue from 'vue'
import { isExternal } from '@/utils/validate'

export default Vue.extend({
  name: 'SidebarItemLink',
  props: {
    to: { type: String, required: true }
  },
  methods: {
    isExternal(value: string) {
      return isExternal(value)
    }
  },
  render() {
    return (
     
    )
  }
}) -->
<script lang="ts" setup>
import { defineProps } from 'vue';
import { isExternal } from '../../../utils/validate';

const { to } = defineProps({ to: { type: String, required: true } });
</script>

<template>
  <div>
    <a v-if="isExternal(to)" :href="to" target="_blank" rel="noopener">
      <slot></slot>
    </a>
    <router-link v-else :to="to">
      <slot></slot>
    </router-link>
  </div>
</template>
