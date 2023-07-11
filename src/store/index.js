import {defineStore} from 'pinia'
import {ROUTES} from "../router/index.js";

export const useStore = defineStore({
    id: "therapist-store",
    state: () => ({
        steps: [
            {
                id: ROUTES.GENDER,
                question: "Выберите ваш пол",
                data: {
                    gender: null
                },
                isValid: false
            },
            {
                id: ROUTES.AGE,
                question: "Укажите ваш возраст",
                data: {
                    age: null
                },
                isValid: false
            },
            {
                id: ROUTES.SYMPTOMS,
                question: "Выберите ваши симптомы",
                data: {
                    chronicSymptoms: [
                        {
                            isChecked: false,
                            name: 'Глубокая боль'
                        },
                        {
                            isChecked: false,
                            name: 'Кожная боль'
                        },
                        {
                            isChecked: false,
                            name: 'Нейропатическая боль'
                        },
                        {
                            isChecked: false,
                            name: 'Острая боль'
                        },
                        {
                            isChecked: false,
                            name: 'Рефлекторная боль'
                        },
                    ]
                },
                isValid: false
            }
        ],
        currentStepIndex: 0,
        symptoms: [],
        chronicSymptoms: [],
        extraInfo: {
            weight: null,
            height: null,
            sugarLevel: null
        }
    }),
    actions: {
        goToNextStep() {
            if (this.currentStepIndex < this.steps.length - 1) {
                this.currentStepIndex++;
            }
        },
        goToPrevStep() {
            if (this.currentStepIndex > 0) {
                this.currentStepIndex--;
            }
        },
        validateAndUpdateStep(stepIndex, data) {
            if (data !== null) {
                this.steps[stepIndex].data = data
                this.steps[stepIndex].isValid = true
            }
        }
    },
})
