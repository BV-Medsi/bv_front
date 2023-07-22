<template>
    <div>
      <h2 class="smed-text_h2 smed-text_medium" :class="$style.title">Дополнительная информация</h2>
      <base-input v-model="stepData.weight" size="md" description="Указать в килограммах" label="Вес"
                  :class="$style.inputField"
                  :is-error="!isValueValid(stepData.weight) && stepData.weight != null"/>
      <base-input v-model="stepData.growth" size="md" description="Указать в сантиметрах" label="Рост"
                  :class="$style.inputField"
                  :is-error="!isValueValid(stepData.growth) && stepData.growth != null"/>
      <base-input v-model="stepData.temperature" size="md" label="Температура "
                  :class="$style.inputField"
                  :is-error="!isValueValid(stepData.temperature) && stepData.temperature != null"/>
      <base-input v-model="stepData.oxygen" size="md" label="Кислород в крови"
                  :class="$style.inputField"
                  :is-error="!isValueValid(stepData.oxygen) && stepData.oxygen != null"/>
      <base-input v-model="stepData.pressure" size="md" label="Давление"
                  :class="$style.inputField"
                  :is-error="!isValueValid(stepData.pressure) && stepData.pressure != null"/>
      <base-input v-model="stepData.sugar" size="md" label="Сахар в крови"
                  :class="$style.inputField"
                  :is-error="!isValueValid(stepData.sugar) && stepData.sugar != null"/>
    </div>
    <BaseButton @click="nextStep" :disabled="!isValid" :class="$style.base_button">Получить результат</BaseButton>
</template>


<script setup>
import BaseInput from "@smartmed/ui/BaseInput";
import {reactive, watch, onMounted, computed} from "vue";
import BaseButton from "@smartmed/ui/BaseButton";
import {useRouter} from "vue-router";
import {storeToRefs} from "pinia";
import {useStepsStore} from "../../store/steps.js";

const router = useRouter();
const store = useStepsStore();
const {getAdditionalData} = storeToRefs(store);
const {validateAndUpdateStep, setCurrentStepIndex} = reactive(store);

const additionalData = reactive(getAdditionalData.value);

watch(additionalData, () => {
  validateAndUpdateStep(3, additionalData);
});

onMounted(() => {
  setCurrentStepIndex(3);
})
const isValueValid = computed(() => (inputValue) => {
  return processData(inputValue)
});

function processData(value){
  return value > 0
}
const nextStep = () =>{
  router.push("/chat/results")
}
const props = defineProps(['stepData', 'isValid']);
</script>
<style module>
.title {
  margin-bottom: 12px;
  text-align: left;
}

.inputField {
  margin-bottom: 12px;
  text-align: left;
}
.base_button{
  width: 100%;
  margin: 20px 0;
}
</style>
