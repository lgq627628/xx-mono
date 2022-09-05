import { createApp } from 'vue';
import App from './App.vue';
import XUI, { Button, Container } from '../../src/index.js';
import '../../src/styles/index.scss';

console.log(XUI, Button, Container)
createApp(App).use(XUI).mount('#app');