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
                id: ROUTES.IMAGE_SYMPTOMS,
                question: "Выберите область тела, где вы ощущаете симптомы",
                data: {
                    head: {
                        isSelected: false,
                        symptoms: [
                            {
                                name: 'Головная боль',
                                isChecked: false
                            },
                            {
                                name: 'Мигрень',
                                isChecked: false
                            },
                            {
                                name: 'Выпадение волос',
                                isChecked: false
                            },
                            {
                                name: 'Першение в горле',
                                isChecked: false
                            },
                            {
                                name: 'Шум в ушах',
                                isChecked: false
                            },
                            {
                                name: 'Снижение зрения',
                                isChecked: false
                            }
                        ]
                    },
                    chest: {
                        isSelected: false,
                        symptoms: [
                            {
                                name: 'Кашель',
                                isChecked: false
                            },
                            {
                                name: 'Перебой в работе сердца',
                                isChecked: false
                            },
                            {
                                name: 'Нехватка воздуха',
                                isChecked: false
                            }
                        ]
                    },
                    arms: {
                        isSelected: false,
                        symptoms: [
                            {
                                name: 'Подергивание руки',
                                isChecked: false
                            },
                            {
                                name: 'Отек руки',
                                isChecked: false
                            },
                            {
                                name: 'Рука онемела',
                                isChecked: false
                            },
                            {
                                name: 'Боль в руках при движении',
                                isChecked: false
                            },
                            {
                                name: 'Дрожь руки',
                                isChecked: false
                            },
                            {
                                name: 'Рука посинела',
                                isChecked: false
                            },
                            {
                                name: 'Холодная рука',
                                isChecked: false
                            },
                            {
                                name: 'Слабость в руке',
                                isChecked: false
                            },
                            {
                                name: 'Не могу двигать рукой',
                                isChecked: false
                            }
                        ]
                    },
                    stomach: {
                        isSelected: false,
                        symptoms: [
                            {
                                name: 'Боль в животе',
                                isChecked: false
                            },
                            {
                                name: 'Вздутие живота',
                                isChecked: false
                            },
                            {
                                name: 'Урчание',
                                isChecked: false
                            },
                            {
                                name: 'Диарея',
                                isChecked: false
                            },
                            {
                                name: 'Изжога',
                                isChecked: false
                            }
                        ]
                    },
                    back: {
                        isSelected: false,
                        symptoms: [
                            {
                                name: 'Боль в пояснице',
                                isChecked: false
                            }
                        ]
                    },
                    buttocks: {
                        isSelected: false,
                        symptoms: [
                            {
                                name: 'кровь в кале',
                                isChecked: false
                            }
                        ]
                    },
                    legs: {
                        isSelected: false,
                        symptoms: [
                            {
                                name: 'Боль в ноге',
                                isChecked: false
                            },
                            {
                                name: 'Нога онемела',
                                isChecked: false
                            },
                            {
                                name: 'Синяк на ноге',
                                isChecked: false
                            },
                            {
                                name: 'Боль в колене',
                                isChecked: false
                            },
                            {
                                name: 'Боль в пятке',
                                isChecked: false
                            },
                            {
                                name: 'Боль в пальцах ноги',
                                isChecked: false
                            },
                            {
                                name: 'Боль в икрах ног',
                                isChecked: false
                            },
                            {
                                name: 'Не могу двигать ногой',
                                isChecked: false
                            },
                            {
                                name: 'Нога посинела',
                                isChecked: false
                            },
                            {
                                name: 'Слабость в мышцах',
                                isChecked: false
                            },
                            {
                                name: 'Больно двигать ногой',
                                isChecked: false
                            },
                            {
                                name: 'Нога покраснела',
                                isChecked: false
                            }
                        ]
                    }
                },
                isValid: false
            },
            {
                id: ROUTES.SYMPTOMS,
                question: "Выберите ваши симптомы",
                data: [
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
                    }
                ],
                isValid: false
            }
        ],
        currentStepIndex: 0,
    }),
    actions: {
        goToNextStep() {
            if (this.currentStepIndex < this.steps.length) {
                this.currentStepIndex++;
            }
        },
        goToPrevStep() {
            if (this.currentStepIndex > 0) {
                this.currentStepIndex--;
            }
        },
        validateAndUpdateStep(stepIndex, data) {
            this.steps[stepIndex].data = data;
            switch (this.steps[stepIndex].id) {
                case ROUTES.IMAGE_SYMPTOMS:
                    this.steps[stepIndex].isValid = Object.values(data).some(
                        el => el.isSelected && el.symptoms.some(symptom => symptom.isChecked)
                    );
                    break;
                case ROUTES.SYMPTOMS:
                    this.steps[stepIndex].isValid = data.some(el => el.isChecked);
                    break;
                default:
                    this.steps[stepIndex].isValid = !!data;
            }
        }
    }
})
