<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { getPage } from '@/api/dynamic';
import { useRoute } from 'vue-router';
import TemplateComponent from '@/components/TemplateComponent';

const { meta } = useRoute();

const loading = ref(false);
const content = ref({ fields: [] });

const onSetup = ({ component }) => {
  component('template-component', TemplateComponent);
};

onMounted(() => {
  // loading.value = true;
  getPage(meta.page).then(result => {
    content.value = result.data;
    // loading.value = false;
  });
});
</script>

<template>
  <v-jrender
    v-if="!loading"
    :fields="content.fields"
    @setup="onSetup"
  ></v-jrender>
</template>
