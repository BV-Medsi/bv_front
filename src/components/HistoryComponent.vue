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
}

function convert(val){
  if(val === 0){
    return "Мужской";
  }else if(val === 1){
    return "Женский";
  }else{
    return val;
  }
}
function func(name, value){
  if(translate[name] !== undefined){
    return translate[name] + ': ' + convert(value);
  }
}

function sortDoctors(data){
  let doctors_list = [];
  for(let i in data){
    doctors_list.push(i);
  }
  console.log(doctors_list);
}
</script>

<template>
  <Layout :class="$style.container">
    <Spinner v-if="isLoading" :class="$style.spinner"></Spinner>
    <div v-else>
      <div>
        <h2 class="smed-text_h2 smed-text_medium">История</h2>
        <hr/>
      </div>
      <div>
        <h3 class="smed-text_h3 smed-text_medium">Основная информация</h3>
        <p v-for="(value, name) in history.card" class="smed-text_body-md">{{ func(name, value) }}</p>
        <p v-for="(value, name) in indicators" class="smed-text_body-md">{{ translate[name] + ": " + value}}</p>
        <hr/>
      </div>
      <div>
        <h3 class="smed-text_h3 smed-text_medium">Описание жалобы</h3>
        <p class="smed-text_body-md">{{history.inlines_history}}</p>
        <hr/>
      </div>

      <div>
        <h3 class="smed-text_h3 smed-text_medium">Рекомендуемые врачи</h3>
        <p v-for="doctor in history.answer" class="smed-text_body-md">{{ doctor.doctor }}</p>
      </div>
    </div>




  </Layout>
</template>

<style module lang="scss">
h3{
  margin-bottom: 12px;
}
hr {
  width: 100%;
  height: 1px;
  border: none;
  background-color: rgb(206, 206, 206);
}
p{
  margin-top: 7px;
  margin-bottom: 7px;
  margin-left: 10px;
  color: var(--colors-black, #141414);
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
}
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
