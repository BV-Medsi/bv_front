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
import Layout from "../../Layout.vue";

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
    case 'back':
      return getInitialData.value.gender === 'female' ? FemaleBack : MaleBack;
    default:
      return null;
  }
});

const isPartSelected = ref('0');
const handleSelectedPartUpdate = val => {
  isPartSelected.value = 'auto';
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
  <layout>
    <div class="wrapper">
      <div class="image-wrapper">
        <BaseButton @click="toggleSide()" class="btn">⟲</BaseButton>
        <component :is="getComponent" @select:part="handleSelectedPartUpdate"/>
      </div>
      <div class="controls">
        <BaseButton @click="handleStepBack">Назад</BaseButton>
        <BaseButton @click="handleStepNext" :disabled="!steps[2].isValid">Далее</BaseButton>
      </div>
    </div>
    <SymptomsList :symptoms="getSelectedPartSymptoms" @select:symptom="updateSymptomStatus" class="symptoms_list"/>
  </layout>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: space-between;
  inset: 0;
  z-index: 0;
}

.image-wrapper {
  width: 100%;
  top: 100px;
  position: relative;
}

.btn {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}

.controls {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
}

.symptoms_list {
  position: absolute;
  background-color: #fff;
  bottom: 0;
  height: v-bind(isPartSelected);
  top: v-bind(isPartSelected);
  z-index: 1;
}
</style>
