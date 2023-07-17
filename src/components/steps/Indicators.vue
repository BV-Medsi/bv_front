<template>
  <Layout>
    <div>
      <h2 class="smed-text_h2 smed-text_medium" :class="$style.title">Дополнительная информация</h2>
      <base-input v-model="additionalData.weight" size="md" description="Указать в килограммах" label="Вес"
                  :class="$style.inputField"/>
      <base-input v-model="additionalData.growth" size="md" description="Указать в сантиметрах" label="Рост"
                  :class="$style.inputField"/>
      <base-input v-model="additionalData.temperature" size="md" label="Температура "
                  :class="$style.inputField"/>
      <base-input v-model="additionalData.oxygen" size="md" label="Кислород в крови"
                  :class="$style.inputField"/>
      <base-input v-model="additionalData.pressure" size="md" label="Давление"
                  :class="$style.inputField"/>
      <base-input v-model="additionalData.sugar" size="md" label="Сахар в крови"
                  :class="$style.inputField"/>
      </div>
    <BaseButton @click="nextStep" :disabled="!steps[3].isValid">Получить результат</BaseButton>
    </Layout>
</template>


<script setup>
import BaseInput from "../../../@smartmed/ui/BaseInput";
import {reactive, watch} from "vue";
import Layout from "../Layout.vue";
import BaseButton from "../../../@smartmed/ui/BaseButton";
import {useRouter} from "vue-router";
import {useStore} from "../../store/index.js";
import {storeToRefs} from "pinia";


const router = useRouter();
const store = useStore();

const {getAdditionalData, steps} = storeToRefs(store);
const {validateAndUpdateStep} = reactive(store);

const additionalData = reactive(getAdditionalData.value);

watch(additionalData, () => {
  validateAndUpdateStep(3, additionalData);
});

const nextStep = () =>{
  router.push("/chat/results")
}
</script>
<style module>
.title{
  margin-bottom: 12px;
  text-align: left;
}
.inputField{
  margin-bottom: 12px;
  text-align: left;
}
</style>
