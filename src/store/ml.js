import {defineStore} from "pinia";
import {axiosApiInstance} from "../services/api.js";

const BASE_URL = "http://5.63.159.74:5002/ml/";
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
                stepsStore.setPrediction(result.data);
            } catch(e) {
            } finally {
                this.isLoading = false;
            }
        }
    }
})
