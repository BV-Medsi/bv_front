<script setup>
const props = defineProps({
  avatar: Boolean,
  title: Boolean
})
</script>

<template>
  <div class="message">

    <img src="/src/assets/avatar.svg" alt="" class="avatar" v-if="props.avatar">
    <p class="message_bcg" align="left">
      <span class="title" v-if="props.title">Виртуальный терапевт</span>
      <slot></slot>
    </p>

  </div>

</template>

<style scoped lang="scss">

.title{
  color: var(--colors-grey-1, #A8A8A8);

  margin-bottom: 4px;

  /* Footnote Medium · 13 */
  font-family: MTS Sans;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 138.462% */
}
.avatar{
  margin-right: 8px;

  position: absolute;
  left: -45px;
  bottom: 0;
}
.message{
  display: flex;
  position: relative;
  margin-left: 45px;
}
.message_bcg{
  border-radius: 16px 16px 16px 4px;
  max-width: 307px;

  color: var(--colors-black, #141414);
  font-family: MTS Sans;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;



  display: grid;
  padding: 12px;
  align-items: center;
  flex: 1 0 0;
  background: var(--colors-white, #FFF);
}
</style>