import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import JRender, { useGlobalRender } from '@jrender-plus/core';
import JRenderExtends from '@jrender-plus/extends';
import Element from 'element-plus';
import { ElementExtends } from './components';

import 'element-plus/theme-chalk/index.css';

useGlobalRender(JRenderExtends);
useGlobalRender(ElementExtends);

createApp(App).use(router).use(Element).use(JRender).mount('#app');
