<script setup>
import BaseButton from "@smartmed/ui/BaseButton";
import BaseInput from "@smartmed/ui/BaseInput";
import PasswordInput from "@smartmed/ui/PasswordInput";

import {axiosApiInstance} from "../services/api.js";
import {tokenStorage} from "../services/TokenStorage.js";

import {computed, onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import {useStore} from "../store/index.js";

const router = useRouter();

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

axiosApiInstance.get("http://100.71.75.112:5001/me")

const store = useStore();

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

  const data = await axiosApiInstance.post("/", {
    username: auth.value.username,
    password: auth.value.password,
  });
  tokenStorage.set(data.data.access_token)

  const get_card = await axiosApiInstance.get("/card")
  if(get_card.status === 200){
    store.updateInitialData(get_card.data, get_card.status)
  }
  router.push("/chat");
};
</script>

<template>
  <div>
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
      <BaseButton type="submit" :class="$style.button">Вход</BaseButton>
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
.button {
  width: 100%;
}
</style>
