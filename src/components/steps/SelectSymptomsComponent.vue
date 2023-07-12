<script setup>
import {ref, watch} from 'vue';

const props = defineProps(['stepData']);

const response = ref([...props.stepData]);

const emit = defineEmits(['update:response']);

watch(response, (newValue) => {
  if (newValue) {
    emit('update:response', newValue);
  }
})

const handleItemSelected = (symptom) => {
  symptom.isChecked = !symptom.isChecked;
  emit('update:response', response.value);
}

</script>

<template>
  <ul class="list">
    <li :class="['item', symptom.isChecked && 'selected']" v-for="symptom in response" @click="handleItemSelected(symptom)">{{symptom.name}}</li>
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
