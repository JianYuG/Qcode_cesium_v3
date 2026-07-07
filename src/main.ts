import { createApp } from 'vue'
import App from './App.vue'
// 引入pinia
import { createPinia } from 'pinia'
import router from './router'
// 引入mitt
import emitter from './utils/emitter';
// 将emitter挂载到全局
// app.config.globalProperties.emitter = emitter;



const app = createApp(App);
// 将emitter挂载到全局
app.config.globalProperties.emitter = emitter;

// 创建pinia实例
const pinia = createPinia()

app.use(pinia);
app.use(router);
app.mount('#app');
