<script setup>
import {useStore} from '../../store';
import {computed} from 'vue';
import BaseButton from "../../../@smartmed/ui/BaseButton";

const store = useStore();

const currentStep = computed(() => store.steps[store.currentStepIndex]);

const handleUpdateResponse = (newResponseValue) => {
  store.validateAndUpdateStep(store.currentStepIndex, newResponseValue);
};
</script>
<template>
  <div>
    <router-view :is-valid="currentStep.isValid" :step-data="currentStep.data" @update:response="handleUpdateResponse($event)"/>
  </div>


</template>

<style scoped lang="scss">
</style>
