<script setup>
import {computed, ref} from 'vue';
import {useStore} from '../../../store';

import BaseButton from '@smartmed/ui/BaseButton';
import SymptomsList from "./components/SymptomsList.vue";
import FemaleBack from "./components/FemaleBack.vue";
import FemaleFront from "./components/FemaleFront.vue";
import MaleFront from "./components/MaleFront.vue";
import MaleBack from "./components/MaleBack.vue";
import {storeToRefs} from "pinia";
import {ROUTES} from "../../../router/index.js";
import {useRouter} from "vue-router";

const store = useStore();
const {getInitialData, getSelectedPartSymptoms, steps} = storeToRefs(store);
const {selectImageSymptom, updateSymptomStatus, goToNextStep, goToPrevStep} = store;
const side = ref('front');

const toggleSide = () => {
  side.value === 'back' ? side.value = 'front' : side.value = 'back';
}

const getComponent = computed(() => {
  switch (side.value) {
    case 'front':
      return getInitialData.value.gender === 'female' ? FemaleFront : MaleFront;
      break;
    case 'back':
      return getInitialData.value.gender === 'female' ? FemaleBack : MaleBack;
      break;
    default:
      return null;
  }
});

const handleSelectedPartUpdate = val => {
  selectImageSymptom(val);
}
const router = useRouter();
const handleStepBack = () => {
  goToPrevStep()
  router.push('/chat/' + ROUTES.GENERAL_CARD)
}

const handleStepNext = () => {
  goToNextStep()
  router.push('/chat/' + ROUTES.INDICATORS)
}
</script>

<template>
  <div class="wrapper">
    <BaseButton @click="toggleSide()" class="btn">⟲</BaseButton>
    <div class="image_wrapper">
      <component :is="getComponent" @select:part="handleSelectedPartUpdate"/>
    </div>
    <SymptomsList :symptoms="getSelectedPartSymptoms" @select:symptom="updateSymptomStatus" class="symptoms_list"/>
    <BaseButton @click="handleStepBack">Назад</BaseButton>
    <BaseButton @click="handleStepNext" :disabled="!steps[2].isValid">Далее</BaseButton>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  position: relative;
  background-color: #f6f6f6;
  border-radius: 16px;
  width: 100%;
  max-width: 375px;
  justify-content: center;
}
.symptoms_list{
  position: fixed;
  bottom: 0;
}
.image_wrapper{
  width: 100%;
}
.btn {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}
</style>
