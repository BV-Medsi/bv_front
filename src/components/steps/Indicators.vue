<template>
  <Layout>
    <div>
      <h2 class="smed-text_h2 smed-text_medium" :class="$style.title">Дополнительная информация</h2>
      <base-input v-model="data.weight" size="md" description="Указать в килограммах" label="Вес"
                  :class="$style.inputField"/>
      <base-input v-model="data.growth" size="md" description="Указать в сантиметрах" label="Рост"
                  :class="$style.inputField"/>
      <base-input v-model="data.oxygen" size="md" label="Кислород в крови"
                  :class="$style.inputField"/>
      <base-input v-model="data.pressure" size="md" label="Давление"
                  :class="$style.inputField"/>
      <base-input v-model="data.sugar" size="md" label="Сахар в крови"
                  :class="$style.inputField"/>
      <base-input v-model="data.temperature" size="md" label="Температура "
                  :class="$style.inputField"/>
    </div>
    <BaseButton @click="nextStep" :disabled="!isValid">Получить результат</BaseButton>
  </Layout>
</template>


<script setup>
import BaseInput from "../../../@smartmed/ui/BaseInput";
import {ref, watch} from "vue";
import Layout from "../Layout.vue";
import BaseButton from "../../../@smartmed/ui/BaseButton";
import {useRouter} from "vue-router";

const router = useRouter();

const nextStep = () => {
  router.push("/chat/results")
}
const props = defineProps(['stepData', 'isValid']);
const data = ref(props.stepData);
const emit = defineEmits(['update:response']);

watch(data, (newValue) => {
  emit('update:response', newValue);
}, {
  deep: true
});

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
</style>
