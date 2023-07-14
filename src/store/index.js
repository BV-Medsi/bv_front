import {defineStore} from 'pinia'
import {ROUTES} from "../router/index.js";
import {symptomsData} from "./data/index.js";
import {PARTS} from "../components/steps/SelectImageSymptomsComponent/constants/parts.js";

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
                    [PARTS.head]: {
                        isSelected: false,
                        symptoms: [...symptomsData[PARTS.head]]
                    },
                    [PARTS.neck]: {
                        isSelected: false,
                        symptoms: [...symptomsData[PARTS.neck]]
                    },
                    [PARTS.chest]: {
                        isSelected: false,
                        symptoms: [...symptomsData[PARTS.chest]]
                    },
                    [PARTS.arms]: {
                        isSelected: false,
                        symptoms: [...symptomsData[PARTS.arms]]
                    },
                    [PARTS.abdomen]: {
                        isSelected: false,
                        symptoms: [...symptomsData[PARTS.abdomen]]
                    },
                    [PARTS.back]: {
                        isSelected: false,
                        symptoms: [...symptomsData[PARTS.back]]
                    },
                    [PARTS.pelvis]: {
                        isSelected: false,
                        symptoms: [...symptomsData[PARTS.pelvis]]
                    },
                    [PARTS.buttock]: {
                        isSelected: false,
                        symptoms: [...symptomsData[PARTS.buttock]]
                    },
                    [PARTS.legs]: {
                        isSelected: false,
                        symptoms: [...symptomsData[PARTS.legs]]
                    }
                },
                isValid: false
            },
            {
                id: ROUTES.SYMPTOMS,
                question: "Выберите ваши симптомы",
                data: [...symptomsData.other],
                isValid: false
            }
        ],
        currentStepIndex: 0,
    }),
    getters: {
        getGender: state => state.steps[0].data,
        getSelectedPartSymptoms: (state) => {
            const imageSymptomsStep = state.steps.find(step => step.id === ROUTES.IMAGE_SYMPTOMS);
            for(let part in imageSymptomsStep.data) {
                if(imageSymptomsStep.data[part].isSelected) {
                    return imageSymptomsStep.data[part].symptoms;
                }
            }
            return [];
        }
    },
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
        },
        selectImageSymptom(part) {
            const imageSymptomsStep = this.steps.find(step => step.id === ROUTES.IMAGE_SYMPTOMS);
            if (imageSymptomsStep) {
                if (imageSymptomsStep.data[part].isSelected) return;

                Object.keys(imageSymptomsStep.data).forEach(key => {
                    imageSymptomsStep.data[key].isSelected = false;
                });

                imageSymptomsStep.data[part].isSelected = true;

                this.validateAndUpdateStep(this.steps.indexOf(imageSymptomsStep), imageSymptomsStep.data);
            }
        }
    }
})
