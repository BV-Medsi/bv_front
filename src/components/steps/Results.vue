<script setup>

import Layout from "../Layout.vue";
import {axiosApiInstance} from "../../services/api.js";
import {computed, onMounted, reactive, ref} from "vue";
import Spinner from '@smartmed/ui/Spinner';
import {useStore} from "../../store/steps.js";
import {PARTS} from "./SelectImageSymptomsComponent/constants/parts.js";
import BaseButton from "../../../@smartmed/ui/BaseButton";
import {storeToRefs} from "pinia";
import Combobox from "../../../@smartmed/ui/Combobox";
import {useMlStore} from "../../store/ml.js";
import {doctorsData} from "../../store/data/doctorsData.js";

const store = useStore();
const mlStore = useMlStore();

const {getCorrectSymptomsData} = storeToRefs(store)
const {predictValues} = mlStore;

const correctSymptomsData = reactive(getCorrectSymptomsData.value)

const props = defineProps(['stepData'])

const data = props.stepData;

const {setCurrentStepIndex} = store;
onMounted(async () => {
  setCurrentStepIndex(4);
  predictValues()
})


const test = "Врач акушер гинеколог";
const test2 = 'Врач кардиолог'

const check = () =>{
  console.log(correctSymptomsData)
}

const isPlaceChoosed = computed(() => data.place1 === '' && data.place2 === '' && data.place3 === '');

const handleUpdate = (value, plc) => {
  console.log(value)
  if (value === '' || value === null) {
    data[plc] = '';
  } else {
    data[plc] = value;
  }
}
</script>

<template>
<Layout>
  <h2 class="smed-text_h2 smed-text_medium" :class="$style.title">Результаты</h2>
  <p :class="$style.subtitle" class="smed-text_h3">Здесь представлен список врачей которых вы можете посетить.</p>
  <div>
    <h2 class="smed-text_h3 smed-text_medium" :class="$style.header">{{test}}</h2>
    <combobox
              @update:modelValue="value => handleUpdate(value, 'place')"
              :key="`doctor1`"
              size="md"
              :disabled="!isPlaceChoosed"
              :modelValue="data.place1"
              :items="doctorsData[test]"
              placeholder="Выберите подразделение:"
    />
    <hr/>
  </div>
  <div>
    <h2 class="smed-text_h3 smed-text_medium" :class="$style.header">{{test2}}</h2>
    <combobox
        @update:modelValue="value => handleUpdate(value, 'place2')"
        :key="`doctor1`"
        size="md"
        :disabled="!isPlaceChoosed"
        :modelValue="data.place2"
        :items="doctorsData[test2]"
        placeholder="Выберите подразделение:"
    />
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