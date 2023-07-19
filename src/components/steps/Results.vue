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


</script>

<template>
<Layout>
  <h2 class="smed-text_h2 smed-text_medium" :class="$style.title">Результаты</h2>
</Layout>
</template>

<style module>
.title{
  text-align: left;
}
</style>