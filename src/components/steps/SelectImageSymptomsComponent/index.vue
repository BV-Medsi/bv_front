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

const isPartSelected = ref(false);
const handleSelectedPartUpdate = val => {
  isPartSelected.value = true;
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

const symptomsListRef = ref(null);

import { onClickOutside } from '@vueuse/core';

onClickOutside(symptomsListRef, () => {
  isPartSelected.value = false;
});

defineProps(['isValid']);
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
        <BaseButton @click="handleStepNext" :disabled="!isValid">Далее</BaseButton>
      </div>
    </div>
    <SymptomsList @go-next="handleStepNext" :is-valid="isValid" ref="symptomsListRef" :symptoms="getSelectedPartSymptoms" @select:symptom="updateSymptomStatus" :class="['symptoms_list', isPartSelected && 'open']"/>
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
  padding: 20px;
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
}

.symptoms_list {
  position: absolute;
  background-color: #fff;
  bottom: 0;
  top: 100%;
  height: 0;
  z-index: 1;
  padding: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  &.open {
    top: auto;
    height: auto;
  }
}
</style>
