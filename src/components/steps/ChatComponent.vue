<script setup>
import { useStore } from '../../store';
import {computed} from 'vue';

const store = useStore();

const currentStep = computed(() => store.steps[store.currentStepIndex]);

const handleUpdateResponse = (newResponseValue) => {
  store.validateAndUpdateStep(store.currentStepIndex, newResponseValue);
};
</script>

<template>
  <div>
    <router-view :stepData="currentStep.data" @update:response="handleUpdateResponse($event)"/>
  </div>
</template>

<style scoped lang="scss">
</style>
