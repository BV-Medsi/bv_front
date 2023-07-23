import {defineStore} from "pinia";
import {axiosApiInstance} from "../services/api.js";

const BASE_URL = 'https://app.mltherapist.ru/api/v1/';
export const useHistoryStore = defineStore({
    id: 'history-store',
    state: () => ({
        isLoading: false,
        history: {},
        answer_id: null,
        indicators: {
            temperature: 0,
            weight: 0,
            growth: 0,
        }
    }),
    getters: {},
    actions: {
        async fetchHistory() {
            this.isLoading = true;
            try {
                const response = await axiosApiInstance.post(BASE_URL + 'history/get_answer', {});

                this.history = response.data;
                console.log(this.history)
                this.answer_id = response.data.answer_id;

                this.indicators.temperature = response.data.indicators.temperature;
                this.indicators.weight = response.data.indicators.weight;
                this.indicators.growth = response.data.indicators.growth;
            } catch(e) {
                console.error(e)
            } finally  {
                this.isLoading = false;
            }
        },
        loadPreviousHistoryItem() {
            this.isLoading = true;
            try {

                const lastItemId = this.history?.at(-1)?.id;
                if (!lastItemId) return;
                const response = axiosApiInstance.post(BASE_URL + 'history/get_answer', {
                    answer_id: this.answer_id,
                });
                this.answer_id = response.data.id;
                this.history.push(response.data);

                this.indicators.temperature = response.data.indicators.temperature;
                this.indicators.weight = response.data.indicators.weight;
                this.indicators.growth = response.data.indicators.growth;
            } catch (e) {
                console.error(e);
            } finally {
                this.isLoading = false;
            }
        }
    }
})
