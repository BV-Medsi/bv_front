<template>
  <div class="tabs">
    <ul class="tabs_header">
      <li
        v-for="title in tabTitles"
        :key="title"
        class="smed-text_body-sm smed-text_medium"
        :class="{
          selected: selectedTitle === title,
          not_selected: selectedTitle !== title,
        }"
        @click="selectedTitle = title"
      >
        {{ title }}
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>
import { provide, ref } from "vue";
export default {
  setup(props, { slots }) {
    const tabTitles = ref(slots.default().map((tab) => tab.props.title));
    const selectedTitle = ref(tabTitles.value[0]);

    provide("selectedTitle", selectedTitle);
    return {
      selectedTitle,
      tabTitles,
    };
  },
};
</script>

<style scoped>
.tabs {
  max-width: 400px;
  margin: 0 auto;
}
.tabs_header {
  margin-bottom: 10px;
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
}
.tabs_header li {
  background-color: #e0e0e0;
  width: 120px;
  text-align: center;
  cursor: pointer;
  transition: 0.4s all ease-out;
  padding: 10px 5px;
  border-radius: 5px;
}
.tabs_header li.selected {
  background-color: #00b2acff;
  color: white;
}
</style>
