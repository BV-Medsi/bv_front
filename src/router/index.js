import {createRouter, createWebHistory} from 'vue-router';
import {useStore} from "../store/index.js";

export const ROUTES = {
    GENERAL_CARD: 'general-card',
    AGE: 'select-age',
    IMAGE_SYMPTOMS: 'select-image-symptoms',
    SYMPTOMS: 'select-symptoms',
    INDICATORS: 'select-indicators',
    RESULTS: 'results'
}
const ResultComponent = () => import("../components/ResultComponent.vue");
const AuthComponent = () => import("../components/AuthComponent.vue");
import {defineAsyncComponent} from "vue";
import {storeToRefs} from "pinia";

const SelectImageSymptomsComponent = () => import("../components/steps/SelectImageSymptomsComponent/index.vue");
const ChatComponent = () => import("../components/steps/ChatComponent.vue");
const SelectSymptomsComponent = () => import("../components/steps/SelectSymptomsComponent.vue");
const SelectGenderComponent = () => import("../components/steps/MedicalCard.vue");
const HomeComponent = () => import("../components/HomeComponent.vue");
const Indicators = () => import("../components/steps/Indicators.vue");
const Results = () => import("../components/steps/Results.vue")

const routes = [
    {path: '/', component: HomeComponent},
    {path: '/login', component: AuthComponent},
    {
        path: '/chat', component: ChatComponent,
        children: [
            {path: '', redirect: `/chat/${ROUTES.GENERAL_CARD}`},
            {path: ROUTES.GENERAL_CARD, component: SelectGenderComponent},
            {path: ROUTES.IMAGE_SYMPTOMS, component: SelectImageSymptomsComponent},
            {path: ROUTES.SYMPTOMS, component: SelectSymptomsComponent},
            {path: ROUTES.INDICATORS, component: Indicators},
            {path: ROUTES.RESULTS, component: Results}
        ]
    },
    {path: '/results', component: ResultComponent}
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});

// router.beforeEach((to, from, next) => {
//     const store = useStore();
//     if (to.path.startsWith('/chat')) {
//         const stepId = to.path.split('/')[2];
//         const stepIndex = store.steps.findIndex(step => step.id === stepId);
//         if (stepIndex > 0 && !store.steps[stepIndex - 1].isValid) next(`/chat/${ROUTES.GENERAL_CARD}`)
//         else next();
//         next();
//     } else next();
// })
