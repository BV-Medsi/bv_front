<template>
  <div>
    <label>
      <input type="radio" value="male" v-model="response">
      Мужчина
    </label>
    <label>
      <input type="radio" value="female" v-model="response">
      Женщина
    </label>
  </div>
</template>

<script setup>
import {ref, watch} from 'vue';
import Message from "../Message.vue";

const props = defineProps(['stepData']);

const response = ref(props.stepData || null);

const emit = defineEmits(['update:response']);

watch(response, (newValue) => {
  if (newValue) {
    emit('update:response', newValue);
  }
})
</script>
