import { createApp } from 'vue';
import App from './App.vue';
import 'vite/dynamic-import-polyfill';

import JRender from '@json2render/vue-full';

createApp(App).use(JRender).mount('#app');
