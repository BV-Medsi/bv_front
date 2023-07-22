import {defineStore} from "pinia";
import {axiosApiInstance} from "../services/api.js";
import {useStepsStore} from "./steps.js";

const BASE_URL = "https://app.mltherapist.ru/api/v1/"
const store = useStepsStore();
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
                await axiosApiInstance.post(BASE_URL+"card/create_card", {
                    age: cardData.age,
                    gender: cardData.gender,
                    operations: cardData.operations.filter(element => {
                        return element !== null;
                    }),
                    diseases: cardData.diseases.filter(element => {
                        return element !== null;
                    }),
                    chronic_diseases: cardData.chronic_diseases.filter(element => {
                        return element !== null;
                    }),
                })
            }catch (e) {

            }
        },
        async getCard(){
            this.isLoading = true;
            try{
                const response = await axiosApiInstance.get(BASE_URL + "card");
                this.cardId = response.data.id;
                if([500, 404, 401, 403].includes(response.status)){
                    return false;
                }else{
                    await updateCardData(response.data);
                    return true;
                }
            }catch (e){

            }finally {
                this.isLoading = false;
            }
        },
        async updateCard(cardData){
            try{
                console.log(cardData)
                await axiosApiInstance.patch(BASE_URL + "card/update_card", {
                    age: cardData.age,
                    gender: cardData.gender,
                    operations: cardData.operations.filter(element => {
                        return element !== null;
                    }),
                    diseases: cardData.diseases.filter(element => {
                        return element !== null;
                    }),
                    chronic_diseases: cardData.chronic_diseases.filter(element => {
                        return element !== null;
                    }),
                })
            }catch (e) {

            }
        }
    }
})
