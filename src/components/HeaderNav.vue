<script setup>
import SiderMenu from "./menu/SiderMenu.vue";

defineProps(['open']);
defineEmits(['toggle']);
</script>

<template>
  <sider-menu @toggle="$emit('toggle')" :open="open"/>
</template>
