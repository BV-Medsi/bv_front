<script setup>
import {useStore} from '../store/steps.js';
import {computed} from 'vue';
import {useRouter} from 'vue-router';
import BaseButton from "@smartmed/ui/BaseButton";
import Layout from "./Layout.vue";

const store = useStore();
const router = useRouter();

const steps = computed(() => store.steps);

const goBackToLastStep = () => {
  const prevStep = store.steps[store.currentStepIndex];
  router.push(`/chat/${prevStep.id}`);
};
</script>

<template>
  <layout>
    <div class="results-wrapper">
      <h1>Собранные данные:</h1>
      <div v-for="(step, index) in steps" :key="index">
        <h2>{{ step.question }}</h2>
        <pre>{{ step.data }}</pre>
      </div>
      <BaseButton @click="goBackToLastStep">Go Back</BaseButton>
    </div>
  </layout>
</template>

<style scoped>
.results-wrapper{
  overflow-y: auto;
  height: 100%;
}
</style>
