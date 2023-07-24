<template>
  <div>
    <div>
      <h2 class="smed-text_h2 smed-text_medium" :class="$style.title">Медицинская карта</h2>
      <base-input v-model="stepData.age" size="md" description="Укажите возраст от 0 до 120 лет" label="Возраст"
                  :class="$style.inputField"
                  :is-error="stepData.age !== null && !isAgeValid"
      >
      </base-input>
      <div :class="$style.chooseGender">
        <p class="_inline_1yye7_126 smed-text_body-sm smed-space_bottom-1" :class="$style.title_gender">Укажите ваш пол</p>
        <label :class="$style.radio_text">
          <input :class="$style['styled-radio']" type="radio" :value="0"
                 :checked="stepData.gender === 0" v-model="stepData.gender">
          <span class="smed-text_body-md">Мужской</span>
        </label>
        <label :class="$style.radio_text">
          <input :class="$style['styled-radio']" type="radio" :value="1"
                 :checked="stepData.gender === 1" v-model="stepData.gender">
          <span class="smed-text_body-md">Женский</span>
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
                :class="$style.combobox"
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
                :class="$style.combobox"
      />
      <BaseButton :disabled="!isValid" @click="nextStep" :class="$style.base_button">Далее</BaseButton>
    </div>
  </div>
</template>


<script setup>
import {computed, onMounted, ref, watch} from 'vue';
import Combobox from "@smartmed/ui/Combobox";
import BaseButton from "@smartmed/ui/BaseButton";
import {useRouter} from "vue-router";
import BaseInput from "@smartmed/ui/BaseInput";
import {useStepsStore} from "../../store/steps.js";
import {useCardStore} from "../../store/card.js";
const route = useRouter();
const store = useStepsStore();

const props = defineProps(['stepData', 'isValid']);

const cardStore = useCardStore()
const {getCard, updateCard, createCard} = cardStore;

const hasCard = ref(false);

watch(() => props.stepData, () => {
  validateAndUpdateStep(1, props.stepData);
}, {
  deep: true
});

const {validateAndUpdateStep} = store;

const diseasesItems = [
  'ОРВИ',
  "Гайморит",
  "Корь",
  "Гастродуоденит",

];

const chronicDiseasesItems = [
  'Диабет',
  'Туберкулез',
  'Аутизм',
];

const addEntry = category => {
  if (!props.stepData[category].includes(null)) {
    props.stepData[category].push(null);
  }
}

const handleUpdate = (category, index, value) => {
  if (value === '' || value === null) {
    props.stepData[category].splice(index, 1);
  } else {
    props.stepData[category][index] = value;
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

const isChronicDiseasesButton = computed(() => props.stepData.chronic_diseases?.length >= chronicDiseasesItems.length);
const isDiseasesButton = computed(() => props.stepData.diseases?.length >= diseasesItems.length);

onMounted(async () => {
  hasCard.value = await getCard();
})

const nextStep = async () => {
  if(hasCard.value){
    console.log(props.stepData)
    await updateCard(props.stepData)
  }else{
    await createCard(props.stepData)
  }
  route.push('select-image-symptoms')
};

const isAgeValid = computed(() => {
  return props.stepData.age > 0 && props.stepData.age <= 120;
})

</script>
<style module>
.combobox{
  margin-top: 5px;
  margin-bottom: 7px;
}
h2{
  text-align: left;
}
.title_gender{
  margin-bottom: 10px;
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
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
.chooseGender{
  display:grid;
  justify-content: left;
  margin-top: 17px;
}
.radio_text{
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}
.base_button{
  width: 100%;
  margin: 20px 0px;
}
.styled-radio {
 -webkit-appearance: none;
 -moz-appearance: none;
 appearance: none;
 width: 20px;
 height: 20px;
 border: 2px solid #00B2AC;
 border-radius: 50%;
 outline: none;
 cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
 margin-right: 10px;
  position: relative;
}
.styled-radio:checked::before {
  content: '';
  display: block;
  width: 10px;
  height: 9px;
  border-radius: 50%;
  background-color: #00B2AC;
  margin: 4px;
}
.styled-radio-label {
  font-size: 16px;
  cursor: pointer;
}
</style>
