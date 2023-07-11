import {createRouter, createWebHistory} from 'vue-router';
export const ROUTES  = {
    GENDER: 'select-gender',
    AGE: 'select-age',
    SYMPTOMS:'select-symptoms'
}
const ResultComponent = () => import("../components/ResultComponent.vue");
const AuthComponent = () => import("../components/AuthComponent.vue");
import {defineAsyncComponent} from "vue";
const ChatComponent = () => import("../components/steps/ChatComponent.vue");
const SelectSymptomsComponent = () => import("../components/steps/SelectSymptomsComponent.vue");
const SelectAgeComponent = () => import("../components/steps/SelectAgeComponent.vue");
const SelectGenderComponent = () => import("../components/steps/SelectGenderComponent.vue");

const HomeComponent = () => import("../components/HomeComponent.vue");

const routes = [
    {path: '/', component: HomeComponent},
    {path: '/login', component: AuthComponent},
    {
        path: '/chat', component: ChatComponent,
        children: [
            {path: '', redirect: '/chat/select-gender'},
            {path: ROUTES.GENDER, component: SelectGenderComponent},
            {path: ROUTES.AGE, component: SelectAgeComponent},
            {path: ROUTES.SYMPTOMS, component: SelectSymptomsComponent},
        ]
    },
    {path: '/results', component: ResultComponent}
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
