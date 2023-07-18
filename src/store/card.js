import {defineStore} from "pinia";
import {tokenStorage} from "../services/TokenStorage.js";
import {axiosApiInstance} from "../services/api.js";

const BASE_URL = "http://5.63.159.74:5000/v1/"

export const useCardStore = defineStore({
    id: 'card-store',
    state: () => ({
        isLoading: false,
        cardId: null,
    }),
    actions: {
        createCard(cardData){
            this.isLoading = true;
            try{
                const response = axiosApiInstance.post(BASE_URL+"card/create_card", {
                    age: cardData.age,
                    gender: cardData.gender,
                    operations: cardData.operations,
                    diseases: cardData.diseases,
                    chronic_diseases: cardData.chronic_diseases
                })
            }catch (e) {

            }
        },
        getCard(){

        }
    }
})