import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@smartmed/ui/styles/global.scss';
import  { ActiveElementPlugin } from '@smartmed/ui/plugins';

createApp(App).mount('#app')
    .use(ActiveElementPlugin)
    .mount('#app')