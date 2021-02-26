<template>
  <h1>Hello {{ props.name }} !</h1>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({ name: String });
</script>
