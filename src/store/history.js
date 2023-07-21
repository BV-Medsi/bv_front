import {defineStore} from "pinia";
import {axiosApiInstance} from "../services/api.js";

const BASE_URL = 'http://5.63.159.74:5002/';
export const useHistoryStore = defineStore({
    id: 'history-store',
    state: () => ({
        isLoading: false,
        history: [],
    }),
    getters: {},
    actions: {
        fetchHistory() {
            this.isLoading = true;
            try {
                const response = axiosApiInstance.post(BASE_URL + 'history/get_answer', {});
                this.history = response.data;
            } catch(e) {
                console.error(e)
            } finally {
                this.isLoading = false;
            }
        },
        loadPreviousHistoryItem() {
            this.isLoading = true;
            try {
                const lastItemId = this.history?.at(-1)?.id;
                if (!lastItemId) return;
                const response = axiosApiInstance.post(BASE_URL + 'history/get_previouse_history_item/' + id);
                this.history.push(response.data);
            } catch (e) {
                console.error(e);
            } finally {
                this.isLoading = false;
            }
        }
    }
})
