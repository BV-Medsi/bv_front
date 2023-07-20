<script setup>
import TabsWrapper from "./Tabs/TabsWrapper.vue";
import Tab from "./Tabs/Tab.vue";
import Auth from "./Auth.vue";
import Registration from "./Registration.vue";
import Layout from "./Layout.vue";
</script>

<template>
  <Layout>
    <TabsWrapper>
      <Tab title="Регистрация"><Registration></Registration></Tab>
      <Tab title="Вход"><Auth></Auth></Tab>
    </TabsWrapper>
  </Layout>
</template>

