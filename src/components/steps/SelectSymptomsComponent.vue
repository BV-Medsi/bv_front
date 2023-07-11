<script setup>
import {ref, watch} from 'vue';

const props = defineProps(['stepData']);

const response = ref([]);

const emit = defineEmits(['update:response']);

watch(response, (newValue) => {
  if (newValue) {
    emit('update:response', newValue);
  }
})
import {useStore} from '../../store';
import {ROUTES} from "../../router/index.js";
import {storeToRefs} from "pinia";
const {steps} = storeToRefs(useStore());
const symptoms = steps.value.find((step) => step.id === ROUTES.SYMPTOMS).data.chronicSymptoms || props.stepData.chronicSymptoms;
const handleItemSelected = (symptom) => {
  symptom.isChecked = !symptom.isChecked;
  if(symptom.isChecked) {
    response.value.push(symptom);
  } else {
    response.value = response.value.filter(item => item.name !== symptom.name);
  }
  emit('update:response', response.value);
}

</script>

<template>
  <ul class="list">
    <li :class="['item', symptom.isChecked && 'selected']" v-for="symptom in symptoms" @click="handleItemSelected(symptom)">{{symptom.name}}</li>
  </ul>
</template>

<style scoped lang="scss">
.list {
  max-width: 100%;
  display: flex;
  gap: 10px;

  & .item {
    background-color: #eee;
    padding: 10px 15px;

    &.selected {
      background-color: #00b2ac;
    }
  }
}
</style>
