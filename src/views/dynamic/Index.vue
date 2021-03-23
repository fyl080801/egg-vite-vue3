<script lang="ts" setup>
import { ref } from 'vue';
import { getPage } from '@/api/dynamic';
import { useRoute } from 'vue-router';

const { params } = useRoute();

const content = ref();

getPage(params.id).then((result) => {
  content.value = result;
});
</script>

<template>
  <v-jrender></v-jrender>
</template>
