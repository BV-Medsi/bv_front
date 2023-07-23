import {defineStore} from 'pinia'
import {ROUTES} from "../router/index.js";
import {symptomsData} from "./data/symptomsData.js";
import {PARTS} from "../components/steps/SelectImageSymptomsComponent/constants/parts.js";

function mapResponseToObject(response, doctors) {
    for (let i = 0; i < doctors.length; i++) {
        const doctorName = doctors[i].name;
        if (response.answer.hasOwnProperty(doctorName)) {
            doctors[i].prediction = response.answer[doctorName];
        }
    }
}

export const useStepsStore = defineStore({
    id: "steps-store",
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
                    //id: null,
                    //user_id: null,
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
                data: {
                    temperature: null,
                    pressure: 0,
                    growth: null,
                    weight: null,
                    sugar: 0,
                    oxygen: 0,
                    inlines_history: '',
                },

            },
            {
                id: ROUTES.RESULTS,
                data: {
                    doctors: [
                        {
                            isSelected: false,
                            name: '',
                            prediction: 0.8,
                            clinics: [{
                                name: 'Клиника на Благовещенском переулке',
                                isChecked: false
                            },
                                {
                                    name: 'Клиника на Пречистенке',
                                    isChecked: false
                                },
                                {
                                    name: 'Клиника на Покрышкина',
                                    isChecked: false
                                },
                                {
                                    name: 'Клиника на Мичуринском проспекте',
                                    isChecked: false
                                }]
                        },
                        {
                            isSelected: false,
                            name: 'Хирург',
                            prediction: 0.9,
                            clinics: [{
                                name: 'Клиника на Красной Пресне',
                                isChecked: false
                            },
                                {
                                    name: 'Клиника на Хорошевском проезде',
                                    isChecked: false
                                },
                                {
                                    name: 'Клиника на Белорусской',
                                    isChecked: false
                                },
                                {
                                    name: 'Клиника на Ленинградском проспекте',
                                    isChecked: false
                                }],
                        },
                        {
                            isSelected: false,
                            name: 'Кардиолог',
                            prediction: 1,
                            clinics: [{
                                name: 'Клиника на Дубининской',
                                isChecked: false
                            },
                                {
                                    name: 'Клиника на Авиационной',
                                    isChecked: false
                                },
                                {
                                    name: 'Клиника на Пречистенке',
                                    isChecked: false
                                },
                                {
                                    name: 'Клиника на Астрадамском проезде',
                                    isChecked: false
                                }],
                        }
                    ],
                    isValid: false
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
        getIndicatorsData(state) {
            const indicatorsStep = state.steps.find(step => step.id === ROUTES.INDICATORS);
            const dict = {};
            for (const field in indicatorsStep.data) {
                if (indicatorsStep.data[field]!== null && field !== 'inlines_history') {
                    dict[field] = Number(indicatorsStep.data[field]);
                }
            }
            return dict;
        },
        getInlinesHistory(state){
            const indicatorsStep = state.steps.find(step => step.id === ROUTES.INDICATORS);
            return indicatorsStep.data['inlines_history'];
        },
        getCorrectSymptomsData(state) {
            const imageSymptomsStep = state.steps.find(step => step.id === ROUTES.IMAGE_SYMPTOMS);
            const dict = {};

            for (const part in imageSymptomsStep.data) {
                const partData = imageSymptomsStep.data[part];
                const checkedSymptomsArray = partData.symptoms.reduce((acc, symptom) => {
                    if (symptom.isChecked) {
                        acc.push(symptom.name);
                    }
                    return acc;
                }, []);

                if (checkedSymptomsArray.length !== 0) {
                    dict[part] = checkedSymptomsArray;
                }
            }

            return dict;
        },
        getStatusCode: (state) => {
            const medicalCardStep = state.steps.find(step => step.id === ROUTES.GENERAL_CARD);
            return medicalCardStep.status_code;
        },
        getGeneralCardStep: (state) => {
            return state.steps.find(s => s.id === ROUTES.GENERAL_CARD);
        },
    },
    actions: {
        updateCardData(data) {
            const cardData = this.steps[1].data;
            //cardData.id = data.id;
            //cardData.user_id = data.user_id;
            cardData.age = data.age;
            cardData.gender = data.gender;
            cardData.operations = data.operations;
            cardData.diseases = data.diseases;
            cardData.chronic_diseases = data.chronic_diseases;
        },
        selectDoctor(doctorName) {
            const resultsStep = this.steps.find(step => step.id === ROUTES.RESULTS);
            if (resultsStep) {
                resultsStep.data.doctors.forEach(doctor => {
                    if (doctor.name === doctorName) {
                        doctor.isSelected = true;
                        doctor.clinics.forEach(clinic => {
                            clinic.isChecked = false;
                        });
                    } else {
                        doctor.isSelected = false;
                        doctor.clinics.forEach(clinic => {
                            clinic.isChecked = false;
                        });
                    }
                });
                this.validateAndUpdateStep(this.steps.indexOf(resultsStep), resultsStep.data);
            }
        },

        selectClinic(doctorName, clinicName) {
            const resultsStep = this.steps.find(step => step.id === ROUTES.RESULTS);
            if (resultsStep) {
                const selectedDoctor = resultsStep.data.doctors.find(doctor => doctor.name === doctorName);
                if (selectedDoctor) {
                    if (!selectedDoctor.isSelected) {
                        console.error("Please select a doctor before selecting a clinic.");
                        return;
                    }
                    selectedDoctor.clinics.forEach(clinic => {
                        clinic.isChecked = clinic.name === clinicName;
                    });
                }
                this.validateAndUpdateStep(this.steps.indexOf(resultsStep), resultsStep.data);
            }
        },
        setPrediction(data) {
            console.log(data)
            this.steps[4].doctors[0].name = data.doctor1.doctor;
            this.steps[4].doctors[0].prediction = data.doctor1.prob;
            this.steps[4].doctors[1].name = data.doctor2.doctor;
            this.steps[4].doctors[1].prediction = data.doctor2.prob;
            this.steps[4].doctors[3].name = data.doctor3.doctor;
            this.steps[4].doctors[3].prediction = data.doctor3.prob;
        },
        validateAndUpdateStep(stepIndex, data) {
            this.steps[stepIndex].data = data;

            switch (this.steps[stepIndex].id) {
                case ROUTES.GENERAL_CARD:
                    const {gender, age} = this.steps[stepIndex].data;
                    this.steps[stepIndex].isValid = [0, 1].includes(gender) && !!age && age > 0 && age <= 122;
                    break;
                case ROUTES.IMAGE_SYMPTOMS:
                    this.steps[stepIndex].isValid = Object.values(data).some(
                        el => el.symptoms.some(symptom => symptom.isChecked)
                    );
                    break;
                case ROUTES.INDICATORS:
                    const {temperature, growth, weight, inlines_history} = this.steps[stepIndex].data;
                    this.steps[stepIndex].isValid = temperature > 0 && growth > 0 && weight > 0 && inlines_history.length > 50;
                    break;
                case ROUTES.RESULTS:
                    this.steps[stepIndex].isValid = this.steps[stepIndex].data.doctors.some(
                        doctor => doctor.isSelected && doctor.clinics.some(clinic => clinic.isChecked)
                    );
                    break;
                default:
                    this.steps[stepIndex].isValid = !!data;
            }
        },
        setCurrentStepIndex(id) {
            const foundIndex = this.steps.findIndex(step => step.id === id);
            if (foundIndex !== -1) {
                this.currentStepIndex = foundIndex;
            }
        },
        acceptTerms() {
            this.steps[0].data.hasAcceptedTerms = true;
            this.steps[0].isValid = true;
            this.currentStepIndex = 1;
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
