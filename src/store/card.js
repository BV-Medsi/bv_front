import {defineStore} from "pinia";
import {tokenStorage} from "../services/TokenStorage.js";
import {axiosApiInstance} from "../services/api.js";
import {useStore} from "./steps.js";

const BASE_URL = "http://5.63.159.74:5000/v1/"
const store = useStore();
const {updateCardData} = store;
export const useCardStore = defineStore({
    id: 'card-store',
    state: () => ({
        isLoading: false,
        cardId: null,
    }),
    actions: {
        async createCard(cardData){
            this.isLoading = true;
            try{
                const response = await axiosApiInstance.post(BASE_URL+"card/create_card", {
                    age: cardData.age,
                    gender: cardData.gender,
                    operations: cardData.operations,
                    diseases: cardData.diseases,
                    chronic_diseases: cardData.chronic_diseases
                })
            }catch (e) {

            }
        },
        async getCard(){
            this.isLoading = true;
            try{
                const response = await axiosApiInstance.get(BASE_URL + "card");
                if([401, 403].includes(response.status)){
                    return false;
                }else{
                    updateCardData(response.data);
                    return true;
                }
            }catch (e){

            }finally {
                this.isLoading = false;
            }
        },
        async updateCard(cardData){
            try{
                await axiosApiInstance.patch(BASE_URL + "card/update_card", {
                    age: cardData.age,
                    gender: cardData.gender,
                    operations: cardData.operations,
                    diseases: cardData.diseases,
                    chronic_diseases: cardData.chronic_diseases
                })
            }catch (e) {

            }
        }
    }
})