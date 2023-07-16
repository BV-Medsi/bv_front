<template>
  <Layout>
    <div>
      <h2 class="smed-text_h2 smed-text_medium" :class="$style.title">Дополнительная информация</h2>
      <base-input v-model="weight" size="md" description="Указать в килограммах" label="Вес"
                  :class="$style.inputField"/>
      <base-input v-model="height" size="md" description="Указать в сантиметрах" label="Рост"
                  :class="$style.inputField"/>
      </div>
    <BaseButton @click="nextStep">Получить результат</BaseButton>
    </Layout>
</template>


<script setup>
import BaseInput from "../../../@smartmed/ui/BaseInput";
import {ref} from "vue";
import Layout from "../Layout.vue";
import BaseButton from "../../../@smartmed/ui/BaseButton";
import {useRouter} from "vue-router";


const weight = ref('');
const height = ref('');
const router = useRouter();
const nextStep = () =>{
  router.push("/chat/results")
}
</script>
<style module>
h2{
  text-align: left;
}
.title{
  margin-bottom: 12px;
}
.inputField{
  margin-bottom: 12px;
  text-align: left;
}
</style>
