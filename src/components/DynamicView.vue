<template>
  <v-jrender
    v-model="config.model"
    :fields="config.fields"
    :datasource="config.datasource"
  ></v-jrender>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const config = reactive({
  model: {
    text: 'world',
  },
  datasource: {
    submitdata: {
      type: 'fetch',
      url: '/api',
      defaultData: 0,
      auto: false,
      props: {
        method: 'POST',
        body: '$:JSON.stringify(model)',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    },
  },
  fields: [
    {
      component: 'form',
      children: [
        { component: 'h2', text: '表单提交' },
        { component: 'input', value: 'model.text' },
        { component: 'p', text: '#: Hello ${model.text} !!' },
        { component: 'input', value: 'model.submitText' },
        {
          component: 'button',
          text: '提交',
          props: { type: 'button', onClick: '@:submitdata.request()' },
        },
      ],
    },
    {
      component: 'p',
      condition: '$:submitdata.data',
      text: '#:提交的数据：${JSON.stringify(submitdata.data)}',
    },
  ],
});
</script>
