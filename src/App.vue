<script setup>
import {RouterView} from 'vue-router'
import Root from "@smartmed/ui/Root";

</script>

<template>
  <Root>
    <router-view :key="$route.path"/>
  </Root>
</template>
