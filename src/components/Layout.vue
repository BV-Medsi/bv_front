<script setup>

import HeaderNav from "./HeaderNav.vue";
</script>

<template>
<div class="screen">
  <div class="content">
    <slot />
  </div>
</div>
</template>

<style scoped lang="scss">
.screen{
  background-color: #f6f6f6;
  border-radius: 16px;
  max-width: 375px;
  margin: 0 auto;
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
}

.content{
  flex: 1;
  height: 100%;
}
</style>
