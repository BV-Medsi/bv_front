<script setup>
import {useStore} from '../../store/steps.js';
import {computed, onMounted, watch} from 'vue';
import BaseButton from "../../../@smartmed/ui/BaseButton";
import {useRoute} from 'vue-router';

const route = useRoute();
const store = useStore();

const currentStep = computed(() => store.steps[store.currentStepIndex]);

onMounted(() => {
  const stepId = route.fullPath.replace(/\/chat\//, '');
  store.setCurrentStepIndex(stepId);
  console.log(currentStep.value)
});
const handleUpdateResponse = (newResponseValue) => {
  store.validateAndUpdateStep(store.currentStepIndex, newResponseValue);
};

</script>
<template>
  <div>
    <router-view :is-valid="currentStep.isValid" :step-data="currentStep.data"
                 @update:response="handleUpdateResponse($event)"/>
  </div>


</template>

<style scoped lang="scss">
</style>
