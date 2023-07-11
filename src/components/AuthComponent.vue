<script setup>
import TabsWrapper from "./Tabs/TabsWrapper.vue";
import Tab from "./Tabs/Tab.vue";
import Auth from "./Auth.vue";
import Registration from "./Registration.vue";
</script>

<template>
  <TabsWrapper>
    <Tab title="Регистрация"><Registration></Registration></Tab>
    <Tab title="Вход"><Auth></Auth></Tab>
  </TabsWrapper>
</template>

<style scoped lang="scss">

</style>
