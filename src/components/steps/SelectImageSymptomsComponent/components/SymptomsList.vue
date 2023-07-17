<script setup>
import BaseCheckbox from "@smartmed/ui/BaseCheckbox";
import BaseButton from "@smartmed/ui/BaseButton";

const props = defineProps(['symptoms', 'isValid']);
const emit = defineEmits(['select:symptom']);
const handleSymptomSelection = symptom => {
  emit('select:symptom', symptom);
}
</script>

<template>
  <div class="wrapper">
    <ul class="list">
      <li v-for="(symptom, index) in symptoms" :key="index">
        <BaseCheckbox type="checkbox" :id="'symptom-' + index" v-model="symptom.isChecked" :label="symptom.name"
                      @change="handleSymptomSelection(symptom)"/>
      </li>
    </ul>
    <BaseButton :disabled="!isValid">Продолжить</BaseButton>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 0;
  margin: 0;
  text-align: left;
}
.list {
  margin-bottom: 20px;
}
</style>
