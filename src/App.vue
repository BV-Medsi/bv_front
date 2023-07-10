<script setup>
import Auth from "./components/Auth.vue"
import Root from "@smartmed/ui/Root";

</script>

<template>
  <div :class="app">
    <Auth>

    </Auth>
  </div>
</template>

<style module>
.app{
  background-color: #1a1a1a;
}
</style>
