<template>
  <div>
    <h2 class="smed-text_h2 smed-text_medium" align="left">Медицинская карта</h2>
    <base-input v-model="value" size="md" description="Указать в килограммах" label="Вес" align="left"/>
    <base-input v-model="value" size="md" description="Указать в сантиметрах" label="Рост" align="left"/>
    <base-input v-model="value" size="md" description="Указать в годах" label="Возраст" align="left"/>
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
    <h2 class="smed-text_h3 smed-text_medium">Хронические заболевания</h2>
    <BaseButton icon="plus" @click="addDisease" :disabled="isDiseasesButton">Добавить хроническое заболевание</BaseButton>
    <combobox v-for="(disease, index) in diseases"
        :key="index"
        v-model="disease.value"
        size="md"
        :items="['0', '1', '2']"
        placeholder="Выберите болезнь:"
    />
      <hr/>


    <BaseButton @click="nextStep">Далее</BaseButton>

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

const diseases = ref([])

const isDiseasesButton = computed(() => diseases.value.length >= 5)

const route = useRouter();

const nextStep = () => {
  const data = {
    gender: response.value,
    height: '',
    diseases: diseases.value,
    weight: '',
    operations: [],
    age: '',
  }
  emit('update:response', data);
  route.push('/chat/select-image-symptoms')
}

const addDisease = () =>{
  diseases.value.push({
    value: "",

  })
}

// watch(response, (newValue) => {
//   emit('update:response', newValue);
// })
</script>
<style module>
.radio_button{
  accent-color: #00B2AC;
}
hr {
  width: 100%;
  height: 1px;
  border: none;
  background-color: rgb(206, 206, 206);
}
</style>