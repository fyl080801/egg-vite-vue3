import { createApp } from 'vue';
import App from './App.vue';
import 'vite/dynamic-import-polyfill'; // 后端集成需要

import JRender from '@json2render/vue-full';

createApp(App).use(JRender).mount('#app');
