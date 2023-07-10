<template>
  <div id="smed_dropdown-host" ref="element"></div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'DropdownHost',
  setup() {
    const element = ref<HTMLElement | null>(null);

    return {
      element,
    };
  },
});
</script>
