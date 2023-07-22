<script setup>
import {useRouter} from 'vue-router';
import BaseButton from "@smartmed/ui/BaseButton";

const router = useRouter();
defineProps(['stepData', 'isValid'])

const goBackToLastStep = () => {
  const prevStep = store.steps[store.currentStepIndex];
  router.push(`/chat/${prevStep.id}`);
};
</script>

<template>
  <div class="results-wrapper">
    <h1>Собранные данные:</h1>
    <div v-for="(step, index) in stepData" :key="index">
      <h2>{{ step.question }}</h2>
    </div>
    <BaseButton @click="goBackToLastStep">Go Back</BaseButton>
  </div>
</template>

<style scoped>
.results-wrapper {
  overflow-y: auto;
  height: 100%;
}
</style>
