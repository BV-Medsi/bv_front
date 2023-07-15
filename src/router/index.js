import {createRouter, createWebHistory} from 'vue-router';
import {useStore} from "../store/index.js";

export const ROUTES = {
    GENDER: 'select-gender',
    AGE: 'select-age',
    IMAGE_SYMPTOMS: 'select-image-symptoms',
    SYMPTOMS: 'select-symptoms'
}
const ResultComponent = () => import("../components/ResultComponent.vue");
const AuthComponent = () => import("../components/AuthComponent.vue");
import {defineAsyncComponent} from "vue";
import {storeToRefs} from "pinia";

const SelectImageSymptomsComponent = () => import("../components/steps/SelectImageSymptomsComponent/index.vue");
const ChatComponent = () => import("../components/steps/MedicalCard.vue");
const SelectSymptomsComponent = () => import("../components/steps/SelectSymptomsComponent.vue");
const SelectGenderComponent = () => import("../components/steps/MedicalCard.vue");
const HomeComponent = () => import("../components/HomeComponent.vue");

const routes = [
    {path: '/', component: HomeComponent},
    {path: '/login', component: AuthComponent},
    {
        path: '/chat', component: ChatComponent,
        children: [
            {path: '', redirect: `/chat/${ROUTES.GENDER}`},
            {path: ROUTES.GENDER, component: SelectGenderComponent},
            {path: ROUTES.IMAGE_SYMPTOMS, component: SelectImageSymptomsComponent},
            {path: ROUTES.SYMPTOMS, component: SelectSymptomsComponent},
        ]
    },
    {path: '/results', component: ResultComponent}
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const store = useStore();
    if (to.path.startsWith('/chat')) {
        const stepId = to.path.split('/')[2];
        const stepIndex = store.steps.findIndex(step => step.id === stepId);
        //if (stepIndex > 0 && !store.steps[stepIndex - 1].isValid) next(`/chat/${ROUTES.GENDER}`)
        //else next();
        next();
    } else next();
})
