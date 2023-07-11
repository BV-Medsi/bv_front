import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@smartmed/ui/styles/global.scss';
import  { ActiveElementPlugin } from '@smartmed/ui/plugins';
import {createPinia} from "pinia";

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(ActiveElementPlugin)
app.mount('#app')