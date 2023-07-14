<script setup>
import {computed, ref} from 'vue';
import {useStore} from '../../../store';

import BaseButton from '@smartmed/ui/BaseButton';
import FemaleBack from "./components/FemaleBack.vue";
import FemaleFront from "./components/FemaleFront.vue";
import MaleFront from "./components/MaleFront.vue";
import MaleBack from "./components/MaleBack.vue";
import {storeToRefs} from "pinia";

const store = useStore();
const {getGender, getSelectedPartSymptoms} = storeToRefs(store);
const {selectImageSymptom} = store;
const side = ref('front');
const toggleSide = () => {
  side.value === 'back' ? side.value = 'front' : side.value = 'back';
}

const getComponent = computed(() => {
  switch (side.value) {
    case 'front':
      return getGender.value === 'female' ? FemaleFront : MaleFront;
      break;
    case 'back':
      return getGender.value === 'female' ? FemaleBack : MaleBack;
      break;
    default:
      return null;
  }
});

const handleSelectedPartUpdate = val => {
  console.log(val);
  selectImageSymptom(val);
}
</script>

<template>
  <div :stepData="$props.stepData" class="wrapper">
    <pre>{{ getSelectedPartSymptoms }}</pre>
    <BaseButton @click="toggleSide()" class="btn">⟲</BaseButton>
    <component :is="getComponent" @select:part="handleSelectedPartUpdate"/>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  position: relative;
}

.btn {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}
</style>
