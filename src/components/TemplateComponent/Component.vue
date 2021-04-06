<script lang="ts" setup>
import { defineProps } from 'vue';

const {} = defineProps({
  name: String,
  props: Object
});

// 需要远程或预加载
const fields = [];
</script>

<template>
  <v-jrender :fields="fields"></v-jrender>
</template>
