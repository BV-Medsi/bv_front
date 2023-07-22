import {defineStore} from "pinia";
import {axiosApiInstance} from "../services/api.js";

const BASE_URL = "https://app.mltherapist.ru/ml/";
import {useStepsStore} from "./steps.js";

export const useMlStore = defineStore({
    id: "ml-store",
    state: () => ({
        isLoading: false
    }),
    actions: {
        async   predictValues(data) {
            const stepsStore = useStepsStore();

            this.isLoading = true;
            try {
                const result = await axiosApiInstance.post(BASE_URL, data)
                stepsStore.setPrediction(result.data.answer);
            } catch(e) {
            } finally {
                this.isLoading = false;
            }
        }
    }
})
