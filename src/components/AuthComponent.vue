<script setup>
import TabsWrapper from "./Tabs/TabsWrapper.vue";
import Tab from "./Tabs/Tab.vue";
import Auth from "./Auth.vue";
import Registration from "./Registration.vue";
import Layout from "./Layout.vue";
</script>

<template>
  <Layout>
    <p class="smed-text_h2 smed-text_medium" :class="$style.title">
      Добро пожаловать!
    </p>
    <TabsWrapper>
      <Tab title="Регистрация"><Registration></Registration></Tab>
      <Tab title="Вход"><Auth></Auth></Tab>
    </TabsWrapper>
  </Layout>
</template>
<style module>
.title {
  margin-bottom: 20px;
}
</style>
