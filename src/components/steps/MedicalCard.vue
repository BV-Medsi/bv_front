<template>
  <div :class="$style.screen">
    <div>
      <h2 class="smed-text_h2 smed-text_medium" :class="$style.title">Медицинская карта</h2>
      <base-input v-model="weight" size="md" description="Указать в килограммах" label="Вес" :class="$style.inputField"/>
      <base-input v-model="height" size="md" description="Указать в сантиметрах" label="Рост" :class="$style.inputField"/>
      <base-input v-model="age" size="md" description="Указать в годах" label="Возраст" :class="$style.inputField"/>
      <hr/>
    </div>
    <div>
      <!--    <label>-->
      <!--      <input :class="$style.radio_button" type="radio" value="male" v-model="response">-->
      <!--      Мужчина-->
      <!--    </label>-->
      <!--    <label>-->
      <!--      <input :class="$style.radio_button" type="radio" value="female" v-model="response">-->
      <!--      Женщина-->
      <!--    </label>-->
      <h2 class="smed-text_h3 smed-text_medium" :class="$style.header">Хронические заболевания</h2>
      <BaseButton icon="plus" @click="addDisease" :disabled="isDiseasesButton" :class="$style.addButton">Добавить хроническое заболевание</BaseButton>
      <combobox v-for="(disease, index) in diseases"
                :key="index"
                v-model="disease.value"
                size="md"
                :items="['0', '1', '2']"
                placeholder="Выберите болезнь:"
      />
      <hr/>
      <div>
        <h2 class="smed-text_h3 smed-text_medium" :class="$style.header">Перенесенные операции</h2>
        <BaseButton icon="plus" @click="addOperation" :disabled="isOperationsButton" :class="$style.addButton">Добавить перенесенные операции</BaseButton>
        <combobox v-for="(operation, index) in operations"
                  :key="index"
                  v-model="operation.value"
                  size="md"
                  :items="['3', '4', '5']"
                  placeholder="Выберите операцию:"
        />
      </div>
      <BaseButton @click="nextStep" :class="$style.nextButton">Далее</BaseButton>
  </div>
  </div>
</template>

<script setup>
import {computed, ref, watch} from 'vue';
import Combobox from "../../../@smartmed/ui/Combobox";
import BaseButton from "../../../@smartmed/ui/BaseButton";
import {useRouter} from "vue-router";
import BaseInput from "../../../@smartmed/ui/BaseInput";

const props = defineProps(['stepData']);

const response = ref(props.stepData || null);

const emit = defineEmits(['update:response']);

const value = ref('');

const age = ref('');
const weight = ref('');
const height = ref('');


const diseases = ref([])
const operations = ref([])

const isDiseasesButton = computed(() => diseases.value.length >= 1)
const isOperationsButton = computed(() => operations.value.length >= 1);

const route = useRouter();

const nextStep = () => {
  const data = {
    gender: response.value,
    height: height.value,
    diseases: diseases.value,
    weight: weight.value,
    operations: [],
    age: age.value,
  }
  //emit('update:response', data);
  route.push('select-image-symptoms')
}

const addDisease = () =>{
  diseases.value.push({
    value: "",

  })
}

const addOperation = () =>{
  operations.value.push({
    value: "",
  })
}
// watch(response, (newValue) => {
//   emit('update:response', newValue);`
// })
</script>
<style module>
h2{
  text-align: left;
}
.radio_button{
  accent-color: #00B2AC;
}
hr {
  width: 100%;
  height: 1px;
  border: none;
  background-color: rgb(206, 206, 206);
}
.screen {
  background-color: #f6f6f6;
  border-radius: 16px;
  padding: 20px;
  width: 375px;
  height: 812px;
}
.title{
  margin-bottom: 12px;
}
.header{
  margin-bottom: 16px;
}
.inputField{
  margin-bottom: 12px;
  text-align: left;
}
.addButton{
  margin-bottom: 8px;
  width: 100%;
}
.nextButton{
  margin-top: 10px;
}
</style>