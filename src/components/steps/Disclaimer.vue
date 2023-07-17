<script setup>
import BaseButton from "../../../@smartmed/ui/BaseButton";
import Layout from "../Layout.vue";
import {useRouter} from "vue-router";
import {useStore} from "../../store/index.js";
import {ROUTES} from "../../router/index.js";
import {onMounted} from "vue";
import {axiosApiInstance} from "../../services/api.js";

const store = useStore()
const router = useRouter()
const {acceptTerms} = store;
const nextStep = async () =>{
  acceptTerms();
  // const get_card = await axiosApiInstance.get("http://5.63.159.74:5001/card")
  // if(get_card.status === 200){
  //   store.updateInitialData(get_card.data, get_card.status)
  // }
  router.push('/chat/' + ROUTES.GENERAL_CARD)
}
onMounted(() => {
  store.$reset()
})
</script>

<template>
  <Layout>
    <p class="info_image"><img src="../../assets/info.svg"></p>
    <p class="smed-text_h3 smed-text_medium text_terapevt_1">Виртуальный терапевт</p>
    <p class="smed-text_h4 text_terapevt_2">Виртуальный терапевт - это интеллектуальный медицинчский помощник просто расскажи ему о своих недомоганиях и он скажет тебе к какому врачу тебе нужно обратиться</p>
    <BaseButton class="base_button_disclaimer" :class="$style.nextButton" @click="nextStep">Продолжить</BaseButton>
  </Layout>

</template>

<style module>
.nextButton{
  margin-top: 50px;
}
</style>