<template>
  <Layout>
    <div>
      <h2 class="smed-text_h2 smed-text_medium" :class="$style.title">Медицинская карта</h2>
      <base-input v-model="initialData.age" size="md" description="Указать в годах" label="Возраст"
                  :class="$style.inputField"/>
      <div :class="$style.chooseGender">
        <label>
          <input :class="$style.radio_button" type="radio" value="male"
                 :checked="initialData.gender === 'male'" v-model="initialData.gender">
          <span class="smed-text_body-md">Мужчина</span>
        </label>
        <label>
          <input :class="$style.radio_button" type="radio" value="female"
                 :checked="initialData.gender === 'female'" v-model="initialData.gender">
          <span class="smed-text_body-md">Женщина</span>
        </label>
      </div>
      <hr/>
    </div>
    <div>
      <h2 class="smed-text_h3 smed-text_medium" :class="$style.header">Хронические заболевания</h2>
      <BaseButton icon="plus" @click="addDisease" :disabled="isDiseasesButton" :class="$style.addButton">Добавить
        хроническое заболевание
      </BaseButton>
      <combobox v-for="(disease, index) in initialData.diseases"
                :key="index"
                :value="disease.value"
                @input="value => store.updateDisease(index, value)"
                size="md"
                :items="[]"
                placeholder="Выберите болезнь:"
      />
      <hr/>
      <div>
        <h2 class="smed-text_h3 smed-text_medium" :class="$style.header">Перенесенные операции</h2>
        <BaseButton icon="plus" @click="addOperation" :disabled="isOperationsButton" :class="$style.addButton">Добавить
          перенесенные операции
        </BaseButton>
        <combobox v-for="(operation, index) in initialData.operations"
                  :key="index"
                  :value="operation.value"
                  @input="value => store.updateOperation(index, value)"
                  size="md"
                  :items="['3', '4', '5']"
                  placeholder="Выберите операцию:"
        />
      </div>
      <BaseButton :disabled="!store.steps[1].isValid" @click="nextStep" :class="$style.nextButton">Далее</BaseButton>
    </div>
  </Layout>
</template>


<script setup>
import {computed, reactive, watch} from 'vue';
import Combobox from "../../../@smartmed/ui/Combobox";
import BaseButton from "../../../@smartmed/ui/BaseButton";
import {useRouter} from "vue-router";
import BaseInput from "../../../@smartmed/ui/BaseInput";
import {useStore} from "../../store/index.js";
import {storeToRefs} from "pinia";
import Layout from "../Layout.vue";
import {axiosApiInstance} from "../../services/api.js";

const route = useRouter();
const store = useStore();

const {validateAndUpdateStep} = store;

const {getInitialData} = storeToRefs(store);
const {getStatusCode} = storeToRefs(store);

const {goToNextStep} = store;

const statusCode = reactive(getStatusCode);
const initialData = reactive(getInitialData.value);

watch(initialData, () => {
  validateAndUpdateStep(1, initialData);
});

const isDiseasesButton = computed(() => initialData.diseases.length >= 1);
const isOperationsButton = computed(() => initialData.operations.length >= 1);
defineProps(['stepData'])

const nextStep = async () => {
  // if(statusCode === 200){
  //   const postMedicalCard = await axiosApiInstance.post("/card/create_card", {
  //     age: initialData.age,
  //     gender: initialData.gender,
  //     operations: initialData.operations,
  //     diseases: initialData.diseases,
  //     chronic_diseases: initialData.chronic_diseases
  //   })
  // }else{
  //   const updateMedicalCard = await axiosApiInstance.patch("/card/update_card", {
  //     age: initialData.age,
  //     gender: initialData.gender,
  //     operations: initialData.operations,
  //     diseases: initialData.diseases,
  //     chronic_diseases: initialData.chronic_diseases
  //   })
  // }
  store.updateInitialData(initialData);
  goToNextStep();
  route.push('select-image-symptoms')
};

const addDisease = () => {
  initialData.diseases.push("");
};

const addOperation = () => {
  initialData.operations.push("");
};
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
.chooseGender{
  display: grid;
  text-align: left;
}
</style>
