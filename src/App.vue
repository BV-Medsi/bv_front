<script setup>
import { RouterView } from 'vue-router'
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
