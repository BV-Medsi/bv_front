<script setup>

import Layout from "../Layout.vue";
import {onMounted, reactive} from "vue";
import {useStore} from "../../store/steps.js";
import {storeToRefs} from "pinia";
import Combobox from "../../../@smartmed/ui/Combobox";
import {useMlStore} from "../../store/ml.js";

const store = useStore();
const mlStore = useMlStore();

const {getCorrectSymptomsData} = storeToRefs(store)
const {predictValues} = mlStore;

const correctSymptomsData = reactive(getCorrectSymptomsData.value)
const props = defineProps(['stepData'])

onMounted(async () => {
  predictValues()
})

const test = "jfsd";

const check = () =>{
  console.log(correctSymptomsData)
}

</script>

<template>
<Layout>
  <h2 class="smed-text_h2 smed-text_medium" :class="$style.title">Результаты</h2>
  <p :class="$style.subtitle" class="smed-text_h3">Здесь представлен список врачей которых вы можете посетить.</p>
  <div>
    <h2 class="smed-text_h3 smed-text_medium" :class="$style.header">{{test}}</h2>
    <combobox model-value="">

    </combobox>
    <hr/>
    <h2 class="smed-text_h3 smed-text_medium" :class="$style.header">Хронические заболевания</h2>
    <hr/>
  </div>
</Layout>
</template>

<style module>
.title{
  text-align: left;
  margin-bottom: 40px;
}
.subtitle{
  text-align: left;
  margin-bottom: 20px;
}
</style>
