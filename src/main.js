import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import '@smartmed/ui/styles/global.scss';
import {ActiveElementPlugin} from '@smartmed/ui/plugins';
import {createPinia} from "pinia";
import {router} from './router'
import {useAuthStore} from "./store/auth.js";

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(ActiveElementPlugin)

const authStore = useAuthStore();

authStore.checkToken().then(result => {
    authStore.setAuthenticated(result);
    app.mount('#app');
});
