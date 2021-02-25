<template>
  <v-jrender v-model="config.model" :fields="config.fields"></v-jrender>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const config = reactive({
  model: {
    text: 'world',
  },
  fields: [
    { component: 'input', value: 'model.text' },
    { component: 'p', text: '#: Hello ${model.text} !!' },
  ],
});
</script>
