<script setup>
import { RouterView } from 'vue-router'

import Auth from "./components/Auth.vue"
import Root from "@smartmed/ui/Root";
import Disclaimer from "./components/Disclaimer.vue";
import app from "./App.vue";

</script>

<template>
  <router-link to="/">HOME</router-link> |
  <router-link to="/login">LOGIN</router-link> |
  <router-link to="/chat">CHAT</router-link> |
  <router-link to="/results">RESULTS</router-link>
  <router-view :key="$route.path" />
</template>

<style module>
.app{
  background-color: #1a1a1a;
}
</style>
