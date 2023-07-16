import {defineStore} from 'pinia'
import {ROUTES} from "../router/index.js";
import {symptomsData} from "./data/index.js";
import {PARTS} from "../components/steps/SelectImageSymptomsComponent/constants/parts.js";

export const useStore = defineStore({
    id: "therapist-store",
    state: () => ({
        steps: [
            {
                id: ROUTES.GENERAL_CARD,
                question: "Выберите ваш пол",
                data: {
                    gender: null,
                    age: null,
                    weight: null,
                    height: null,
                    diseases: [],
                    operations: [],
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
        getInitialData: state => state.steps[0].data,
        getSelectedPartSymptoms: (state) => {
            const imageSymptomsStep = state.steps.find(step => step.id === ROUTES.IMAGE_SYMPTOMS);
            for (let part in imageSymptomsStep.data) {
                if (imageSymptomsStep.data[part].isSelected) {
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
        updateInitialData(data) {
            if (!data) return;
            const firstStep = this.steps[0];
            firstStep.data.gender = data.gender;
            firstStep.data.age = data.age;
            firstStep.data.weight = data.weight;
            firstStep.data.height = data.height;
            firstStep.data.diseases = data.diseases;
            firstStep.data.operations = data.operations;
        },
        updateDisease(index, value) {
            const firstStep = this.steps[0];
            firstStep.data.diseases[index].value = value;
        },
        updateOperation(index, value) {
            const firstStep = this.steps[0];
            firstStep.data.operations[index].value = value;
        },
        addDisease() {
            const firstStep = this.steps[0];
            firstStep.data.diseases.push({ value: '' });
        },
        addOperation() {
            const firstStep = this.steps[0];
            firstStep.data.operations.push({ value: '' });
        },
        validateAndUpdateStep(stepIndex, data) {
            this.steps[stepIndex].data = data;

            switch (this.steps[stepIndex].id) {
                case ROUTES.GENERAL_CARD:
                    const { gender, age, weight, height } = this.steps[stepIndex].data;
                    this.steps[stepIndex].isValid = !!gender && !!age && !!weight && !!height;
                    break;
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
        },
        updateSymptomStatus(symptom) {
            const imageSymptomsStep = this.steps.find(step => step.id === ROUTES.IMAGE_SYMPTOMS);
            if (imageSymptomsStep) {
                for (let part in imageSymptomsStep.data) {
                    if (imageSymptomsStep.data[part].isSelected) {
                        const symptomToUpdate = imageSymptomsStep.data[part].symptoms.find(s => s.name === symptom.name);
                        if (symptomToUpdate) {
                            symptomToUpdate.isChecked = symptom.isChecked;
                        }
                    }
                }
                this.validateAndUpdateStep(this.steps.indexOf(imageSymptomsStep), imageSymptomsStep.data);
            }
        }
    }
})
