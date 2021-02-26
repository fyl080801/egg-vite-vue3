import 'vite/dynamic-import-polyfill'; // 后端集成需要
import { createApp } from 'vue';
import App from './App.vue';
import Element from 'element-plus';
import JRender from '@json2render/vue-full';
import elementRender from './utils/elementRender';

import 'element-plus/lib/theme-chalk/index.css';

JRender.use(elementRender);

createApp(App).use(Element).use(JRender).mount('#app');
