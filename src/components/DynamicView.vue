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
      component: 'h1',
      text: '表单提交',
      props: {
        style: { fontSize: '24px', textAlign: 'center', margin: '20px 0' },
      },
    },
    {
      component: 'el-form',
      rowProps: {
        gutter: 20,
      },
      props: {
        labelWidth: '120px',
      },
      children: [
        {
          component: 'el-input',
          model: 'model.text',
          colProps: { span: 12 },
          formProps: { label: '输入1' },
        },
        {
          component: 'p',
          colProps: { span: 24 },
          formProps: {},
          text: '#: Hello ${model.text} !!',
        },
        { component: 'input', value: 'model.submitText' },
        {
          component: 'el-button',
          text: '提交',
          colProps: { span: 24 },
          formProps: {},
          props: { onClick: '@:submitdata.request()' },
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
