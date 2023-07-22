<script setup>

import {onMounted, watch} from "vue";
import {useStepsStore} from "../../store/steps.js";
import {storeToRefs} from "pinia";
import {useMlStore} from "../../store/ml.js";
import BaseCheckbox from "@smartmed/ui/BaseCheckbox";
import BaseButton from "@smartmed/ui/BaseButton";

const store = useStepsStore();
const mlStore = useMlStore();

const {getCorrectSymptomsData, getIndicatorsData, steps, getInlinesHistory} = storeToRefs(store)
const {selectClinic, selectDoctor} = store
const {predictValues} = mlStore;
const {isLoading} = storeToRefs(mlStore);

import {useCardStore} from '../../store/card.js'
import Spinner from "../../../@smartmed/ui/Spinner";

const cardStore = useCardStore();
const props = defineProps(['stepData', 'isValid']);
const {cardId} = storeToRefs(cardStore);

const payload = {
  // card_id: cardId.value,
  complaints: getCorrectSymptomsData.value,
  inlines_history: getInlinesHistory.value,
  indicators: getIndicatorsData.value
}

onMounted(async () => {
  console.log(payload)
  await predictValues(payload);
  console.log(props.stepData.doctors);
});

watch(() => props.stepData, (newValue, oldValue) => {
  emit('update:response', newValue);
}, {deep: true})

const emit = defineEmits(['update:response']);
</script>

<template>
    <Spinner v-if="isLoading" :class="$style.spinner"></Spinner>
    <div v-else>
     <h2 class="smed-text_h2 smed-text_medium" :class="$style.title">Результаты</h2>
    <p :class="$style.subtitle" class="smed-text_h3">Здесь представлен список врачей, которых вы можете посетить</p>
    <div>
      <div v-for="(doctor, doctorIndex) in stepData.doctors?.sort((a, b) => b.prediction - a.prediction)"
           :key="`doctor-${doctorIndex}`" align="left">
        <div :class="$style.doctor_header">
          <BaseCheckbox v-model="doctor.isSelected" @change="selectDoctor(doctor.name)"
                        :class="$style.check_box_doctor"></BaseCheckbox>
          <h3 class="smed-text_h3 smed-text_medium">{{ doctor.name }}</h3>
        </div>

        <div v-for="(clinic, clinicIndex) in doctor.clinics">
          <div :class="$style.clinic">
            <BaseCheckbox v-model="clinic.isChecked" :disabled="!doctor.isSelected" :class="$style.check_box_clinic"
                          @change="selectClinic(doctor.name, clinic.name)"></BaseCheckbox>
            <h3 class="smed-text_body-md">{{ clinic.name }}</h3>
          </div>
        </div>
        <hr/>
      </div>

      <BaseButton class="base_button_2">Записаться</BaseButton>

    </div>
    </div>
</template>

<style module>
.layout{

}
.title {
  text-align: left;
  margin-bottom: 40px;
}
.spinner {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.subtitle {
  text-align: left;
  margin-bottom: 20px;
}

h3 {
  cursor: pointer;
}

.doctor_header {
  display: flex;
  text-align: left;
  align-items: center;
}

.clinic {
  display: flex;
  text-align: left;
  align-items: center;
}

.check_box_doctor {
  margin: 10px;
}

.check_box_clinic {
  margin: 5px 10px 5px 30px;
}

.title {
  margin-bottom: 20px;

}
</style>
