<script setup>
import { useStore } from '../store';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import BaseButton from "@smartmed/ui/BaseButton";

const store = useStore();
const router = useRouter();

const steps = computed(() => store.steps);

const goBackToLastStep = () => {
  store.goToPrevStep();
  const prevStep = store.steps[store.currentStepIndex];
  router.push(`/chat/${prevStep.id}`);
};
</script>

<template>
  <div>
    <h1>Собранные данные:</h1>
    <div v-for="(step, index) in steps" :key="index">
      <h2>{{ step.question }}</h2>
      <pre>{{ step.data }}</pre>
    </div>
    <BaseButton @click="goBackToLastStep">Go Back</BaseButton>
  </div>
</template>

<style scoped lang="scss">
</style>
