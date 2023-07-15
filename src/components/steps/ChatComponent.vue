<script setup>
import { useStore } from "../../store";
import { computed } from "vue";
import { useRouter } from "vue-router";
import BaseButton from "@smartmed/ui/BaseButton";

const store = useStore();
const router = useRouter();

const currentStep = computed(() => store.steps[store.currentStepIndex]);

const handleUpdateResponse = (newResponseValue) => {
  store.validateAndUpdateStep(store.currentStepIndex, newResponseValue);
};

const goToPrevStep = () => {
  if (store.currentStepIndex > 0) {
    store.currentStepIndex--;
    store.lastValidStepIndex--;
    store.goToPrevStep();
    const prevStep = store.steps[store.currentStepIndex];
    router.push(`/chat/${prevStep.id}`);
  }
};

const goToNextStep = () => {
  if (currentStep.value.isValid) {
    if (store.currentStepIndex < store.steps.length - 1) {
      store.goToNextStep();

      const nextStep = store.steps[store.currentStepIndex];
      router.push(`/chat/${nextStep.id}`);
    } else {
      router.push("/results");
    }
  }
};
</script>

<template>
  <div :class="$style.screen">
    <h1>Пожалуйста, ответьте на вопрос.</h1>
    <BaseButton @click="goToPrevStep">&blacktriangleleft;</BaseButton>
    <p>{{ currentStep.question }}</p>
    <router-view
      :stepData="currentStep.data"
      @update:response="handleUpdateResponse($event)"
    />
    <BaseButton :disabled="!currentStep.isValid" @click="goToNextStep"
      >&blacktriangleright;</BaseButton
    >
  </div>
</template>

<style module>
.screen {
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
  padding: 12px;
  width: 375px;
  height: 812px;
}
</style>
