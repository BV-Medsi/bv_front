import {createRouter, createWebHistory} from 'vue-router';
import {useStepsStore} from "../store/steps.js";
import {useAuthStore} from "../store/auth.js";
import {storeToRefs} from "pinia";

export const ROUTES = {
    DISCLAIMER: 'disclaimer',
    GENERAL_CARD: 'general-card',
    IMAGE_SYMPTOMS: 'select-image-symptoms',
    INDICATORS: 'select-indicators',
    RESULTS: 'results',
    HISTORY: 'history',
}
const ResultComponent = () => import("../components/ResultComponent.vue");
const AuthComponent = () => import("../components/AuthComponent.vue");
const SelectImageSymptomsComponent = () => import("../components/steps/SelectImageSymptomsComponent/index.vue");
const ChatComponent = () => import("../components/steps/ChatComponent.vue");
const SelectGenderComponent = () => import("../components/steps/MedicalCard.vue");
const HomeComponent = () => import("../components/HomeComponent.vue");
const Indicators = () => import("../components/steps/Indicators.vue");
const Results = () => import("../components/steps/Results.vue");
const Disclaimer = () => import("../components/steps/Disclaimer.vue");
const HistoryComponent = () => import("../components/HistoryComponent.vue");

const routes = [
    {path: '/', component: HomeComponent, redirect: '/chat'},
    {path: '/login', component: AuthComponent},
    {path: '/history', component: HistoryComponent},
    {
        path: '/chat', component: ChatComponent,
        children: [
            {path: '', redirect: `/chat/${ROUTES.DISCLAIMER}`},
            {path: ROUTES.DISCLAIMER, component: Disclaimer},
            {path: ROUTES.GENERAL_CARD, component: SelectGenderComponent},
            {path: ROUTES.IMAGE_SYMPTOMS, component: SelectImageSymptomsComponent},
            {path: ROUTES.INDICATORS, component: Indicators},
            {path: ROUTES.RESULTS, component: Results}
        ]
    },
    {path: '/results', component: ResultComponent}
];

export const router = createRouter({
    history: createWebHistory('/'),
    routes
});

router.beforeEach((to, from, next) => {
    const store = useStepsStore();
    const authStore = useAuthStore();
    const {isAuthenticated} = storeToRefs(authStore);
    if (!isAuthenticated.value && to.path !== '/login') {
        next('/login');
    } else if (isAuthenticated.value && to.path === '/login') {
        next('/')
    } else {
        if (to.path.startsWith('/chat')) {
            const stepId = to.path.split('/')[2];
            const stepIndex = store.steps.findIndex(step => step.id === stepId);
            if (stepIndex > 0 && !store.steps[stepIndex - 1].isValid) next(`/chat/${ROUTES.DISCLAIMER}`)
            else next();
        } else next();
    }
})
