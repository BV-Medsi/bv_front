<script setup>
defineProps(['open']);
</script>
<template>
  <div
      @click="$emit('toggle')"
      :class="['burger', open && 'open']"
      role="button"
  >
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
</template>

<style scoped lang="scss">
.burger {
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 40px;
  background-color: white;
  justify-content: space-between;
  padding: 12px 5px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  align-items: center;
  z-index: 10000;

  &.open {

    .bar:nth-of-type(1) {
      transform: translateY(11.5px) rotate(-45deg);
      transition-delay: .3s;
      width: 25px;
    }

    .bar:nth-of-type(2) {
      width: 0;
      transition-delay: 0s;
    }

    .bar:nth-of-type(3) {
      transform: translateY(-11.5px) rotate(45deg);
      transition-delay: .3s;
      width: 25px;
    }
  }
}

.burger .bar {
  transform-origin: 25%;
  transition: all .3s;
  background-color: var(--smed-primary);
}

.burger .bar:nth-child(1),
.burger .bar:nth-child(3) {
  transition-delay: 0s;
  width: 100%;
  height: 2px;
}

.burger .bar:nth-child(2) {
  transition-delay: .3s;
  width: 80%;
  height: 2px;
}
</style>
