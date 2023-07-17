<script setup>

import Layout from "../Layout.vue";
import {axiosApiInstance} from "../../services/api.js";
import {reactive, ref} from "vue";
import Spinner from '@smartmed/ui/Spinner';
import {useStore} from "../../store/index.js";
import {PARTS} from "./SelectImageSymptomsComponent/constants/parts.js";
import BaseButton from "../../../@smartmed/ui/BaseButton";
import {storeToRefs} from "pinia";

const store = useStore();

const {getAdditionalData} = storeToRefs(store)
const additionalData = reactive(getAdditionalData)

const {getCorrectSymptomsData} = storeToRefs(store)
const correctSymptomsData = reactive(getCorrectSymptomsData.value)

const logging = () => {
  console.log(correctSymptomsData)
}

const isLoading = ref(false);


isLoading.value = true;
// const getResults = await axiosApiInstance.post("/predict", {
//     card_id: store.steps[0].data.card_id,
//     complaints: {
//       [PARTS.head]: store.steps[1].data[PARTS.head].symptoms,
//     },
//
//     indicators: {
//       temperature: additionalData.temperature,
//       pressure: additionalData.pressure,
//       growth: additionalData.growth,
//       weight: additionalData.weight,
//       sugar: additionalData.sugar,
//       oxygen: additionalData.oxygen
//   }
// })
isLoading.value = false;


</script>

<template>
<Layout>
  <BaseButton @click="logging">Check data</BaseButton>
</Layout>
</template>

<style scoped lang="scss">

</style>