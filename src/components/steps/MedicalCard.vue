<template>
  <Layout>
    <div>
      <h2 class="smed-text_h2 smed-text_medium" :class="$style.title">Медицинская карта</h2>
      <base-input v-model="stepData.age" size="md" description="Укажите возраст от 0 до 120 лет" label="Возраст"
                  :class="$style.inputField"
                  :is-error="stepData.age !== null && !isAgeValid"
      >
      </base-input>
      <div :class="$style.chooseGender">
        <label>
          <input :class="$style.radio_button" type="radio" value="male"
                 :checked="stepData.gender === 'male'" v-model="stepData.gender">
          <span class="smed-text_body-md">Мужчина</span>
        </label>
        <label>
          <input :class="$style.radio_button" type="radio" value="female"
                 :checked="stepData.gender === 'female'" v-model="stepData.gender">
          <span class="smed-text_body-md">Женщина</span>
        </label>
      </div>
      <hr/>
    </div>
    <div>
      <h2 class="smed-text_h3 smed-text_medium" :class="$style.header">Заболевания</h2>
      <BaseButton icon="plus" @click="addEntry('diseases')" :disabled="isDiseasesButton" :class="$style.addButton">
        Добавить
        заболевание
      </BaseButton>
      <combobox v-for="(disease, index) in stepData.diseases?.filter(customFilter)"
                @update:modelValue="value => handleUpdate('diseases', index, value)"
                :key="`disease-${index}`"
                :modelValue="stepData.diseases[index]"
                size="md"
                :items="availableDiseasesItems"
                placeholder="Выберите болезнь:"
      />
      <hr/>
      <h2 class="smed-text_h3 smed-text_medium" :class="$style.header">Хронические заболевания</h2>
      <BaseButton icon="plus" @click="addEntry('chronic_diseases')" :disabled="isChronicDiseasesButton"
                  :class="$style.addButton">
        Добавить
        хроническое заболевание
      </BaseButton>
      <combobox v-for="(disease, index) in stepData.chronic_diseases?.filter(customFilter)"
                :key="`chronic_disease-${index}`"
                @update:modelValue="value => handleUpdate('chronic_diseases', index, value)"
                :modelValue="stepData.chronic_diseases[index]"
                size="md"
                :items="availableChronicDiseasesItems"
                placeholder="Выберите болезнь:"
      />
      <hr/>
      <div>
        <h2 class="smed-text_h3 smed-text_medium" :class="$style.header">Перенесенные операции</h2>
        <BaseButton icon="plus" @click="addEntry('operations')" :disabled="isOperationsButton"
                    :class="$style.addButton">Добавить
          перенесенные операции
        </BaseButton>
        <combobox v-for="(operation, index) in stepData.operations?.filter(customFilter)"
                  :key="`operations-${index}`"
                  @update:modelValue="value => handleUpdate('operations', index, value)"
                  :modelValue="stepData.operations[index]"
                  size="md"
                  :items="availableOperationsItems"
                  placeholder="Выберите операцию:"
        />
      </div>
      <BaseButton :disabled="!isValid" @click="nextStep" :class="$style.nextButton">Далее</BaseButton>
    </div>

  </Layout>
</template>


<script setup>
import {computed, onMounted, ref, watch} from 'vue';
import Combobox from "../../../@smartmed/ui/Combobox";
import BaseButton from "../../../@smartmed/ui/BaseButton";
import {useRouter} from "vue-router";
import BaseInput from "../../../@smartmed/ui/BaseInput";
import {useStore} from "../../store/steps.js";
import Layout from "../Layout.vue";
import {useCardStore} from "../../store/card.js";

const route = useRouter();
const store = useStore();

const props = defineProps(['stepData', 'isValid']);

const cardStore = useCardStore()
const {getCard} = cardStore;

const hasCard = ref(false);

watch(() => props.stepData, () => {
  validateAndUpdateStep(1, props.stepData);
}, {
  deep: true
});

const {validateAndUpdateStep} = store;

const diseasesItems = [
  'Ишемическая болезнь сердца',
  'Гипертоническая болезнь',
  'Диабет',
  'Онкологические заболевания'
];

const chronicDiseasesItems = [
  'Ишемическая болезнь сердца',
  'Гипертоническая болезнь',
  'Сахарный диабет',
  'Хроническая обструктивная болезнь легких',
  'Ревматоидный артрит'
];

const operationsItems = [
  'Аппендэктомия',
  'Кесарево сечение',
  'Замена коленного сустава',
  'Холецистэктомия',
  'Катарактальная операция'
];

const addEntry = category => {
  if (!props.stepData.value[category].includes(null)) {
    props.stepData.value[category].push(null);
  }
}

const handleUpdate = (category, index, value) => {
  if (value === '' || value === null) {
    props.stepData.value[category].splice(index, 1);
  } else {
    props.stepData.value[category][index] = value;
  }
}

const customFilter = (item) => {
  return item !== '' && item !== undefined;
}

const availableDiseasesItems = computed(() => {
  return diseasesItems.filter(disease => !props.stepData.diseases.includes(disease));
});

const availableChronicDiseasesItems = computed(() => {
  return chronicDiseasesItems.filter(disease => !props.stepData.chronic_diseases.includes(disease));
});

const availableOperationsItems = computed(() => {
  return operationsItems.filter(operation => !props.stepData.operations.includes(operation));
});

const isChronicDiseasesButton = computed(() => props.stepData.chronic_diseases?.length >= chronicDiseasesItems.length);
const isDiseasesButton = computed(() => props.stepData.diseases?.length >= diseasesItems.length);
const isOperationsButton = computed(() => props.stepData.operations?.length >= operationsItems.length);
onMounted(async () => {
  hasCard.value = await getCard();
})

const nextStep = async () => {
  route.push('select-image-symptoms')
};

const isAgeValid = computed(() => {
  return props.stepData.age > 0 && props.stepData.age <= 120;
})

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
  display: flex;
  justify-content: flex-start;
}
.nextButton{
  margin-top: 10px;
}
.chooseGender{
  display: grid;
  text-align: left;
}
</style>
