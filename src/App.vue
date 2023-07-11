<script setup>
import Auth from "./components/Auth.vue"
import Root from "@smartmed/ui/Root";

import Tab from "./components/Tabs/Tab.vue";
import TabsWrapper from "./components/Tabs/TabsWrapper.vue";
</script>

<template>
<!--  <div :class="app">-->
<!--  </div>-->
  <TabsWrapper>
    <Tab title="dfsjl"><Auth></Auth></Tab>
    <Tab title="ДАЛАЛАЛЛАЛ"><Auth></Auth></Tab>
  </TabsWrapper>
</template>

<style module>
.app{
  background-color: #1a1a1a;
}
</style>
