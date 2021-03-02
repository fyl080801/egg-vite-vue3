import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import Element from 'element-plus';
import JRender from '@json2render/vue-full';
import elementRender from './utils/elementRender';

import 'element-plus/lib/theme-chalk/index.css';

JRender.use(elementRender);

createApp(App).use(router).use(Element).use(JRender).mount('#app');
