<script setup>
import Layout from './Layout.vue';
import Spinner from "@smartmed/ui/Spinner";
import BaseButton from "@smartmed/ui/BaseButton";
import {useHistoryStore} from '../store/history';
import {storeToRefs} from "pinia";
import {computed, onMounted, useCssModule} from "vue";

const historyStore = useHistoryStore();

const {isLoading, history, indicators} = storeToRefs(historyStore);
const {fetchHistory, loadPreviousHistoryItem} = historyStore;

onMounted(async () => {
  await fetchHistory()
  sortDoctors(history.answer)
});

const translate = {
  temperature: "Температура",
  weight: 'Вес',
  growth: 'Рост',
  age: 'Возраст',
  gender: 'Пол',
  diseases: 'Заболевания',
  chronic_diseases: 'Хронические заболевания'
}
function func(name, value){
  if(translate[name] !== undefined){
    return translate[name] + ' ' + value;
  }
}

function sortDoctors(data){
  let doctors_list = [];
  for(let i in data){
    doctors_list.push(i);
  }
  console.log(doctors_list);
}

//const s = useCssModule();
// const generateHTML = (obj) => {
//   let html = `<ul class="${s.list}">`;
//   for (let key in obj) {
//     if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//       html += `<li><span>${key}:</span> ${generateHTML(obj[key])}</li>`;
//     } else if (Array.isArray(obj[key])) {
//       html += `<li><span>${key}:</span> <ul>${obj[key].map(item => typeof item === 'object' ? generateHTML(item) : `<li>${item}</li>`).join('')}</ul></li>`;
//     } else {
//       html += `<li>${key}: ${obj[key]}</li>`;
//     }
//   }
//   html += '</ul><hr />';
//   return html;
// }
//
// const objectData = {
//   card: {
//     id: "UUID",
//     age: 30,
//     gender: 1,
//     operations: ["value1", "value2"],
//     diseases: ["value1", "value2"],
//     chronic_diseases: ["value1", "value2"]
//   },
//   complains: {
//     head: ["value1", "value2"],
//     leg: "value"
//   },
//   indicators: {
//     temperature: 36.6,
//     pressure: 1.56,
//     growth: 178,
//     weight: 80.78,
//     sugar: 0.8,
//     oxygen: 100.1
//   },
//   answer: [
//     {doctor: 0.1},
//     {doctor: 0.09},
//     {doctor: 0.08}
//   ]
// }
</script>

<template>
  <Layout :class="$style.container">
    <Spinner v-if="isLoading" :class="$style.spinner"></Spinner>
    <div v-else>
      <h2 class="smed-text_h2 smed-text_medium">История</h2>
      <h3 class="smed-text_h3 smed-text_medium">Основная информация</h3>
      <p v-for="(value, name) in history.card">{{ func(name, value) }}</p>
      <h3 class="smed-text_h3 smed-text_medium">Описание жалобы</h3>
      <p>{{history.inlines_history}}</p>
      <h3 class="smed-text_h3 smed-text_medium">Дополнительная информация</h3>
      <p v-for="(value, name) in indicators">{{ translate[name] + " " + value}}</p>
      <hr/>
      <div>
        <h3 class="smed-text_h3 smed-text_medium">Рекомендуемые врачи</h3>
        <p v-for="doctor in history.answer">{{ doctor.doctor }}</p>
      </div>
    </div>




  </Layout>
<!--  <layout>-->
<!--    <spinner v-if="isLoading" :class="$style.spinner"></spinner>-->
<!--    <div v-else>-->
<!--      <p class="smed-text_h2 smed-text_medium" :class="$style.title">История обращений</p>-->
<!--      <div :class="$style.historyWrapper">-->
<!--        <template v-if="history?.length">Не было обращений</template>-->
<!--        <template v-else>-->
<!--          <div v-html="generateHTML(objectData)"></div>-->
<!--        </template>-->
<!--      </div>-->
<!--      <base-button :class="$style.button" @click="loadPreviousHistoryItem">Загрузить предыдущее</base-button>-->
<!--    </div>-->
<!--  </layout>-->
</template>

<style module lang="scss">
.container{
  text-align: left;
}
.spinner {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.historyWrapper {
  margin-top: 50px;
}

.button {
  margin-top: 20px;
}

.list {
  display: flex;
  list-style: none;
  align-items: flex-start;
  flex-direction: column;
}

.list:first-of-type {
  margin-top: 25px;
}

li {
  text-align: left;
  display: flex;
}

ul li ul:first-of-type {
  margin-top: 20px;
}

ul:first-of-type li span {
  width: 50px;
  font-weight: bold;
}

li + ul {
  margin-left: 20px;
}
</style>
