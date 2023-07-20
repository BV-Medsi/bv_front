<script setup>

</script>

<template>
  <div class="inner">
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.inner {
  padding: 20px;
  margin-top: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  margin-bottom: 20px;
  z-index: 9999;
  position: absolute;
  height: 100vh;
  width: 0;
  top: 0;
  bottom: 0;
  left: 0;
  transition: width 0.2s;

  &.open {
    width: 100%;
  }
}

.content {
  flex: 1;
  height: 100%;
}
</style>
