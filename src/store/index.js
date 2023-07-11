import { defineStore } from 'pinia'

export const useStore = defineStore({
    id: "therapist-store",
    state: () => ({steps: [{question: "Выберите ваш пол и возраст", data: {age: null, gender: null}}], current_step_index: 0, symptoms: [], chronical_disease: [],
        extra_info: {weight: null, height: null, sugar_level: null}}),
    actions: {
        go_to_next_step () {
            if(this.current_step_index < this.steps.length - 1){
                this.current_step_index++;
            }
        }
    },
})