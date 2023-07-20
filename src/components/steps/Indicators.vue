<template>
  <Layout>
    <div>
      <h2 class="smed-text_h2 smed-text_medium" :class="$style.title">Дополнительная информация</h2>
      <base-input v-model="stepData.weight" size="md" description="Указать в килограммах" label="Вес"
                  :class="$style.inputField"/>
      <base-input v-model="stepData.growth" size="md" description="Указать в сантиметрах" label="Рост"
                  :class="$style.inputField"/>
      <base-input v-model="stepData.temperature" size="md" label="Температура "
                  :class="$style.inputField"/>
      <base-input v-model="stepData.oxygen" size="md" label="Кислород в крови"
                  :class="$style.inputField"/>
      <base-input v-model="stepData.pressure" size="md" label="Давление"
                  :class="$style.inputField"/>
      <base-input v-model="stepData.sugar" size="md" label="Сахар в крови"
                  :class="$style.inputField"/>
    </div>
    <BaseButton @click="nextStep" :disabled="!isValid" :class="$style.base_button">Получить результат</BaseButton>
  </Layout>
</template>


<script setup>
import BaseInput from "../../../@smartmed/ui/BaseInput";
import {reactive, watch, ref, onMounted} from "vue";
import Layout from "../Layout.vue";
import BaseButton from "../../../@smartmed/ui/BaseButton";
import {useRouter} from "vue-router";
import {storeToRefs} from "pinia";
import {useStore} from "../../store/steps.js";

const router = useRouter();
const store = useStore();
const {getAdditionalData} = storeToRefs(store);
const {validateAndUpdateStep, setCurrentStepIndex} = reactive(store);

const additionalData = reactive(getAdditionalData.value);

watch(additionalData, () => {
  validateAndUpdateStep(3, additionalData);
});

onMounted(() => {
  setCurrentStepIndex(3);
})

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
  margin: 20px 0px;
}
</style>
