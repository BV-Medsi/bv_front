<script setup>

import Layout from "../Layout.vue";
import {axiosApiInstance} from "../../services/api.js";
import {ref} from "vue";
import Spinner from '@smartmed/ui/Spinner';
import {useStore} from "../../store/index.js";
import {PARTS} from "./SelectImageSymptomsComponent/constants/parts.js";

const store = useStore();
const step3 = store.steps[3].data
const isLoading = ref(false);
isLoading.value = true;
const getResults = await axiosApiInstance.post("/predict", {
    card_id: store.steps[0].data.card_id,
    complaints: {
      [PARTS.head]: store.steps[1].data[PARTS.head].symptoms,
    },

    indicators: {
      temperature: step3.temperature,
      pressure: step3.pressure,
      growth: step3.growth,
      weight: step3.weight,
      sugar: step3.sugar,
      oxygen: step3.oxygen
  }
})
isLoading.value = false;


</script>

<template>
<Layout>
<Spinner v-if="isLoading"></Spinner>
</Layout>
</template>

<style scoped lang="scss">

</style>