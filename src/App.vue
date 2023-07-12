<script setup>
import Auth from "./components/Auth.vue"
import Root from "@smartmed/ui/Root";
import Disclaimer from "./components/Disclaimer.vue";

</script>

<template>
  <div :class="app">
    <Disclaimer>

    </Disclaimer>
  </div>
</template>

<style module>
.app{
  background-color: #1a1a1a;
}
</style>
