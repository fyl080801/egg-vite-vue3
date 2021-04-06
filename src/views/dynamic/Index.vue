<script lang="ts" setup>
import { ref } from 'vue';
import { getPage } from '@/api/dynamic';
import { useRoute } from 'vue-router';

const { meta } = useRoute();

const content = ref({ fields: [] });

getPage(meta.page).then(result => {
  content.value = result.data;
});
</script>

<template>
  <v-jrender :fields="content.fields"></v-jrender>
</template>
