import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' // 引入 Element Plus 全局样式

import App from './App.vue'
import router from './router/index.ts'

const app = createApp(App)

app.use(createPinia());
app.use(router);
app.use(ElementPlus);

app.mount('#app')
