<script setup>
import {RouterView} from 'vue-router'
import Root from "@smartmed/ui/Root";
import HeaderNav from "./components/HeaderNav.vue";
import {ref} from "vue";

const open = ref(false);
import {useAuthStore} from './store/auth.js';
import {storeToRefs} from "pinia";

const {isAuthenticated} = storeToRefs(useAuthStore());
</script>

<template>
  <Root>
    <div :class="['screen', open && 'shadow']">
      <header-nav v-if="isAuthenticated" :class="['header', open && 'open']" @toggle="open = !open" :open="open"/>
      <router-view :key="$route.path"/>
    </div>
  </Root>
</template>
<style scoped lang="scss">
.screen {
  background-color: #f6f6f6;
  border-radius: 16px;
  max-width: 375px;
  margin: 0 auto;
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}
</style>
