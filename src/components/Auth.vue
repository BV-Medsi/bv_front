<script setup>
import BaseButton from "@smartmed/ui/BaseButton";
import BaseInput from "@smartmed/ui/BaseInput";
import PasswordInput from "@smartmed/ui/PasswordInput";

import {useAuthStore} from "../store/auth.js";

import {computed, ref} from "vue";
import {useRouter} from "vue-router";
import {storeToRefs} from "pinia";
import Spinner from "../../@smartmed/ui/Spinner";

const router = useRouter();
const authStore = useAuthStore();

const {login} = authStore;
const {isLoading} = storeToRefs(authStore);

const auth = ref({
  username: null,
  password: null, //d
});

const is_filled_username = computed(() => {
  return auth.value.username === "" && auth.value.username !== null;
});

const is_filled_password = computed(() => {
  return auth.value.password === "" && auth.value.password !== null; //d
});

const sign_in = async () => {
  if (
    is_filled_password.value ||
    is_filled_username.value ||
    auth.value.password === null ||
    auth.value.username === null
  ) {
    alert("Заполните все поля");
    return;
  }
  await login({
    username: auth.value.username,
    password: auth.value.password,
  })
  router.push("/chat");
};
</script>

<template>
  <Spinner v-if="isLoading" :class="$style.spinner"></Spinner>
  <div v-else>
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
      <PasswordInput
        v-model="auth.password"
        :is-error="is_filled_password"
        :class="$style.field"
        placeholder="Password"
      />
      <BaseButton type="submit" :class="$style.base_button">Вход</BaseButton>
    </form>
  </div>
</template>

<style module>
.field {
  margin: 10px;
}
.title {
  margin-bottom: 20px;
}
.spinner {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.base_button{
  width: 94%;
  margin: 30px 0px;
}
</style>
