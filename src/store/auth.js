import {defineStore} from "pinia";
import {tokenStorage} from "../services/TokenStorage.js";
import {axiosApiInstance} from "../services/api.js";

const BASE_URL = "http://5.63.159.74:5001/";
export const useAuthStore = defineStore({
    id: "auth-store",
    state: () => ({
        user: null,
        token: tokenStorage.get(),
        isLoading: false,
        isAuthenticated: false,
    }),
    actions: {
        async login(data){
            this.isLoading = true;
            try{
                const response = await axiosApiInstance.post(BASE_URL, {
                    username: data.username,
                    password: data.password,
                })
                this.token = response.data.access_token;
                this.setAuthenticated(true); 
                tokenStorage.set(this.token);
            }catch(e){
                console.log(e)
            }
            finally {
                this.isLoading = false;
            }
        },
        async checkToken(){
            if(!this.token){
                return false;
            }
            try{
                const response = await axiosApiInstance.get(BASE_URL + "me");
                this.user = response.data;
                return true;
            }catch (e){
                if(e.response && [401, 402, 403].includes(e.response.status)){
                    this.logout();
                }
                return false;
            }
        },
        logout() {
            this.token = null;
            this.user = null;
            tokenStorage.remove();
        },
        async registration(userData) {
            this.isLoading = true;
            try{
                await axiosApiInstance.post(BASE_URL + "reg", {
                    username: userData.username,
                    name: userData.name,
                    last_name: userData.last_name,
                    password: userData.password
                });
            }catch(e){

            }finally {
                this.isLoading = false;
            }
        },
        async checkUsername(usernameValue){
            this.isLoading = true;
            try{
                const response = await axiosApiInstance.post(BASE_URL + "check_username", {
                    username: usernameValue
                });
                if(!response.data.answer){
                    alert("Имя пользователя занято");
                    return false;
                }
                return true;
            }catch (e) {

            }finally {
                this.isLoading = false
            }
        },
        setAuthenticated(value) {
            this.isAuthenticated = value;
        },
    }
});