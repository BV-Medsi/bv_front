<script setup>
import BaseButton from "@smartmed/ui/BaseButton"
import BaseInput from "@smartmed/ui/BaseInput"
import PasswordInput from "@smartmed/ui/PasswordInput"

import axios from "axios"

import {computed, ref} from "vue";



const auth = ref({
  username: null,
  password: null, //d
})


const is_filled_username  = computed(() => {
  return auth.value.username === "" && auth.value.username !== null
})

const is_filled_password  = computed(() => {
  return auth.value.password === "" && auth.value.password !== null //d
})

const sign_in = () => {
  if (is_filled_password.value ||
      is_filled_username.value ||
      auth.value.password === null ||
      auth.value.username === null
  ){
    alert("Заполните все поля")
    return
  }
  axios.post(
      "http://100.71.75.112:5000/",
      {
        username: auth.value.username,
        password: auth.value.password
      }
  )
}


</script>

<template>
  <div :class="$style.auth">
    <p class="smed-text_h2 smed-text_medium" :class="$style.title">Добро пожаловать в BV_Medsi!</p>
    <form @submit.prevent="sign_in">
      <BaseInput v-model="auth.username" :is-error="is_filled_username" :class="$style.field" placeholder="Username"/>
      <PasswordInput v-model="auth.password" :is-error="is_filled_password" :class="$style.field" placeholder="Password"/>
      <BaseButton type="submit" :class="$style.button">Вход</BaseButton>
    </form>
  </div>
</template>

<style module>
.auth{
  background-color: white;
  border-radius: 16px;
  padding: 12px;
  width: 375px;
  height: 760px;
}
.field{
  margin: 10px;
}
.title{
  margin-bottom: 20px;
}
.button{
  margin-top: 10px;
}
</style>
