<script setup>
import BaseButton from "@smartmed/ui/BaseButton";
import BaseInput from "@smartmed/ui/BaseInput";
import PasswordInput from "@smartmed/ui/PasswordInput";

import axios from "axios";

import { computed, ref } from "vue";

const auth = ref({
  username: null, //d
  password: null,
  name: null,
  last_name: null,
});

const is_filled_username = computed(() => {
  return auth.value.username === "" && auth.value.username !== null;
});

const is_filled_password = computed(() => {
  return auth.value.password === "" && auth.value.password !== null;
});

const is_filled_name = computed(() => {
  return auth.value.name === "" && auth.value.name !== null;
});

const is_filled_last_name = computed(() => {
  return auth.value.last_name === "" && auth.value.last_name !== null;
});

const sign_in = () => {
  if (
    is_filled_password.value ||
    is_filled_username.value ||
    is_filled_last_name.value ||
    is_filled_name.value ||
    auth.value.password === null ||
    auth.value.username === null ||
    auth.value.name === null ||
    auth.value.last_name == null
  ) {
    alert("Заполните все поля");
    return;
  }
  axios.post("http://100.71.101.22:5000/reg", {
    last_name: auth.value.last_name,
    name: auth.value.name,
    username: auth.value.username,
    password: auth.value.password,
  });
};
</script>

<template>
  <div :class="$style.screen">
    <p class="smed-text_h2 smed-text_medium" :class="$style.title">
      Добро пожаловать в BV_Medsi!
    </p>
    <form @submit.prevent="sign_in">
      <BaseInput
        v-model="auth.username"
        :is-error="is_filled_username"
        :class="$style.field"
        placeholder="Username"
      />
      <BaseInput
        v-model="auth.name"
        :is-error="is_filled_name"
        :class="$style.field"
        placeholder="Name"
      />
      <BaseInput
        v-model="auth.last_name"
        :is-error="is_filled_last_name"
        :class="$style.field"
        placeholder="Last name"
      />
      <PasswordInput
        v-model="auth.password"
        :is-error="is_filled_password"
        :class="$style.field"
        placeholder="Password"
      />
      <BaseButton type="submit" :class="$style.button">Регистрация</BaseButton>
    </form>
  </div>
</template>

<style module>
.screen {
  background-color: white;
  border-radius: 16px;
  padding: 12px;
  width: 375px;
  height: 762px;
}
.field {
  margin: 10px;
}
.title {
  margin-bottom: 20px;
}
.button {
  margin-top: 10px;
}
</style>
