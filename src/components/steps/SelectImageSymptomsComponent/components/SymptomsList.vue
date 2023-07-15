<script setup>
import {ref} from 'vue';

const props = defineProps(['symptoms', 'onSymptomsChange']);
const emit = defineEmits(['select:symptom']);
const handleSymptomSelection = symptom => {
  emit('select:symptom', symptom);
}
</script>

<template>
  <div class="wrapper">
    <ul>
      <li v-for="(symptom, index) in symptoms" :key="index">
        <input type="checkbox" :id="'symptom-' + index" v-model="symptom.isChecked"
               @change="handleSymptomSelection(symptom)">
        <label :for="'symptom-' + index">{{ symptom.name }}</label>
      </li>
    </ul>
  </div>
</template>
