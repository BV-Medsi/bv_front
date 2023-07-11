<script setup>
import Auth from "./components/Registration.vue"
import Root from "@smartmed/ui/Root";

import Tab from "./components/Tabs/Tab.vue";
import TabsWrapper from "./components/Tabs/TabsWrapper.vue";
import Registration from "./components/Registration.vue";
</script>

<template>
<!--  <div :class="app">-->
<!--  </div>-->
  <TabsWrapper>
    <Tab title="Регистрация"><Registration></Registration></Tab>
<!--    <Tab title="Вход"><Auth></Auth></Tab>-->
  </TabsWrapper>
</template>

<style module>
.app{
  background-color: #1a1a1a;
}
</style>
