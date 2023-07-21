<script setup>
import Layout from './Layout.vue';
import Spinner from "@smartmed/ui/Spinner";
import BaseButton from "@smartmed/ui/BaseButton";
import {useHistoryStore} from '../store/history';
import {storeToRefs} from "pinia";
import {onMounted, useCssModule} from "vue";

const historyStore = useHistoryStore();

const {isLoading, history} = storeToRefs(historyStore);
const {fetchHistory, loadPreviousHistoryItem} = historyStore;
onMounted(() => {
  fetchHistory()
});
const s = useCssModule();
const generateHTML = (obj) => {
  let html = `<ul class="${s.list}">`;
  for (let key in obj) {
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      html += `<li><span>${key}:</span> ${generateHTML(obj[key])}</li>`;
    } else if (Array.isArray(obj[key])) {
      html += `<li><span>${key}:</span> <ul>${obj[key].map(item => typeof item === 'object' ? generateHTML(item) : `<li>${item}</li>`).join('')}</ul></li>`;
    } else {
      html += `<li>${key}: ${obj[key]}</li>`;
    }
  }
  html += '</ul><hr />';
  return html;
}

const objectData = {
  card: {
    id: "UUID",
    age: 30,
    gender: 1,
    operations: ["value1", "value2"],
    diseases: ["value1", "value2"],
    chronic_diseases: ["value1", "value2"]
  },
  complains: {
    head: ["value1", "value2"],
    leg: "value"
  },
  indicators: {
    temperature: 36.6,
    pressure: 1.56,
    growth: 178,
    weight: 80.78,
    sugar: 0.8,
    oxygen: 100.1
  },
  answer: [
    {doctor: 0.1},
    {doctor: 0.09},
    {doctor: 0.08}
  ]
}
</script>

<template>
  <layout>
    <spinner v-if="isLoading" :class="$style.spinner"></spinner>
    <div v-else>
      <p class="smed-text_h2 smed-text_medium" :class="$style.title">История обращений</p>
      <div :class="$style.historyWrapper">
        <template v-if="history?.length">Не было обращений</template>
        <template v-else>
          <div v-html="generateHTML(objectData)"></div>
        </template>
      </div>
      <base-button :class="$style.button" @click="loadPreviousHistoryItem">Загрузить предыдущее</base-button>
    </div>
  </layout>
</template>

<style module lang="scss">
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
