import {defineStore} from 'pinia'
import {ROUTES} from "../router/index.js";
import {symptomsData} from "./data/index.js";
import {PARTS} from "../components/steps/SelectImageSymptomsComponent/constants/parts.js";

export const useStore = defineStore({
    id: "therapist-store",
    state: () => ({
        steps: [
            {
                id: ROUTES.DISCLAIMER,
                isValid: false,
                data: {
                    hasAcceptedTerms: false,
                }
            },
            {
                id: ROUTES.GENERAL_CARD,
                question: "Выберите ваш пол",
                status_code: 404,
                data: {
                    card_id: null,
                    gender: null,
                    age: null,
                    chronic_diseases: [],
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
                id: ROUTES.INDICATORS,
                isValid: false,
                data : {
                    temperature: null,
                    pressure: null,
                    growth: null,
                    weight: null,
                    sugar: null,
                    oxygen: null
                }
            }
        ],
        currentStepIndex: 0,
    }),
    getters: {
        getInitialData: state => state.steps[1].data,
        getAdditionalData: state => state.steps[3].data,
        getSelectedPartSymptoms: (state) => {
            const imageSymptomsStep = state.steps.find(step => step.id === ROUTES.IMAGE_SYMPTOMS);
            for (let part in imageSymptomsStep.data) {
                if (imageSymptomsStep.data[part].isSelected) {
                    return imageSymptomsStep.data[part].symptoms;
                }
            }
            return [];
        },
        getCorrectSymptomsData: (state) =>{
            const imageSymptomsStep = state.steps.find(step => step.id === ROUTES.IMAGE_SYMPTOMS);
            let dict = {};
            for(let part in imageSymptomsStep.data){
                let checkedSymptomsArray = [];
                for(let symptom in imageSymptomsStep.data[part].symptoms){
                    let object = imageSymptomsStep.data[part].symptoms[symptom];
                    if(object.isChecked){
                        checkedSymptomsArray.push(object.name)
                    }
                }
                dict[part] = checkedSymptomsArray;
            }
            return dict;
        },
        getStatusCode: (state) => {
            const medicalCardStep = state.steps.find(step => step.id === ROUTES.GENERAL_CARD);
            return medicalCardStep.status_code;
        },
        getGeneralCardStep : (state) => {
            return state.steps.find(s => s.id === ROUTES.GENERAL_CARD);
        },
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
        updateCardData(data){
            const cardData = this.steps[1].data;
            cardData.card_id = data.card_id;
            cardData.age = data.age;
            cardData.gender = data.gender;
            cardData.operations = data.operations;
            cardData.diseases = data.diseases;
            cardData.chronic_diseases = data.chronic_diseases;
        },
        validateAndUpdateStep(stepIndex, data) {
            this.steps[stepIndex].data = data;

            switch (this.steps[stepIndex].id) {
                case ROUTES.GENERAL_CARD:
                    const { gender, age } = this.steps[stepIndex].data;
                    this.steps[stepIndex].isValid = !!gender && !!age && age > 0 && age <= 122;
                    break;
                case ROUTES.IMAGE_SYMPTOMS:
                    this.steps[stepIndex].isValid = Object.values(data).some(
                        el => el.isSelected && el.symptoms.some(symptom => symptom.isChecked)
                    );
                    break;
                case ROUTES.INDICATORS:
                    const { temperature, growth, weight } = this.steps[stepIndex].data;
                    this.steps[stepIndex].isValid = temperature !== null && growth !== null && weight !== null;
                    break;
                default:
                    this.steps[stepIndex].isValid = !!data;
            }
        },
        acceptTerms(){
            this.steps[0].data.hasAcceptedTerms = true;
            this.steps[0].isValid = true;
            this.goToNextStep();
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
