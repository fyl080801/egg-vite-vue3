// import 'vite-plugin-svg-icons/register';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Element from 'element-plus';
import JRender from '@json2render/vue-full';
import SvgIcon from './icons';
// import elementRender from './utils/elementRender';

// import './styles/element-variables.scss';
// import './styles/index.scss';
import 'element-plus/lib/theme-chalk/index.css';

// JRender.use(elementRender);

const app = createApp(App)
  .use(router)
  .component('svg-icon', SvgIcon)
  .use(Element)
  .use(JRender);

app.mount('#app');
