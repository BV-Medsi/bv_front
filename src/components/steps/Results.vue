<script setup>
import {onMounted, reactive, watch, watchEffect} from "vue";
import {useStore} from "../../store/steps.js";
import {storeToRefs} from "pinia";
import Combobox from "@smartmed/ui/Combobox";
import {useMlStore} from "../../store/ml.js";

const store = useStore();
const mlStore = useMlStore();

const {getCorrectSymptomsData} = storeToRefs(store)
const {selectDoctor, selectClinic} = store;

const {predictValues} = mlStore;

const correctSymptomsData = reactive(getCorrectSymptomsData.value)
const props = defineProps(['stepData', 'isValid']);
const emit = defineEmits(['update:response']);
onMounted(async () => {
  predictValues()
});

watch(() => props.stepData, (newValue, oldValue) => {
  emit('update:response', newValue);
}, {deep: true})

</script>

<template>
  <h2 class="smed-text_h2 smed-text_medium" :class="$style.title">Результаты</h2>
  <p :class="$style.subtitle" class="smed-text_h3">Здесь представлен список врачей которых вы можете посетить.</p>
  <div>
    <div>
      <h2 class="smed-text_h3 smed-text_medium" :class="$style.header">Doctors</h2>
      <div v-for="(doctor, doctorIndex) in stepData.doctors"
           :key="`doctor-${doctorIndex}`">
        <div class="doctor">
          <input type="checkbox" v-model="doctor.isSelected" @change="selectDoctor(doctor.name)">
          <h3 class="smed-text_h3 smed-text_medium">{{ doctor.name }}</h3>
        </div>
        <div v-for="(clinic, clinicIndex) in doctor.clinics"
             :key="`clinic-${clinicIndex}`">
          <input :disabled="!doctor.isSelected" type="checkbox" v-model="clinic.isChecked" @change="selectClinic(doctor.name, clinic.name)">
          <p>{{ clinic.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style module>
.doctor {
  display: flex;
  align-items: center;
}

.title {
  text-align: left;
  margin-bottom: 40px;
}

.subtitle {
  text-align: left;
  margin-bottom: 20px;
}
</style>
