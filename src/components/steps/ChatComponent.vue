<script setup>
import {useStore} from '../../store';
import {computed} from 'vue';
import Layout from "../Layout.vue";

const store = useStore();

const currentStep = computed(() => store.steps[store.currentStepIndex]);

const handleUpdateResponse = (newResponseValue) => {
  store.validateAndUpdateStep(store.currentStepIndex, newResponseValue);
};
</script>
<template>
  <router-view :stepData="currentStep.data" @update:response="handleUpdateResponse($event)"/>
</template>

<style scoped lang="scss">
</style>
