<template>
  <div :class="$style.root">
    <table-bar
      :model-value="insideOpened"
      overlay
      close-button
      direction="left"
      @update:model-value="onUpdate"
    >
      <navigation-bar
        autofocus-on-search
        :sections="sections"
        :class="navigationClass"
      />
    </table-bar>

    <base-button
      rounded
      icon="burger"
      color="secondaryOutlined"
      @click="onToggle"
    />
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@smartmed/ui/BaseButton';
import NavigationBar from '@smartmed/ui/NavigationBar';
import TableBar from '@smartmed/ui/TableBar';
import { ref, toRefs, watch } from 'vue';

import {
  NavigationBarMobileDefaultProps,
  NavigationBarMobileEmits,
  NavigationBarMobileProps,
  NavigationBarMobileSlots,
} from './NavigationBarMobile.props';

const props = withDefaults(
  defineProps<NavigationBarMobileProps>(),
  NavigationBarMobileDefaultProps
);

const emit = defineEmits<NavigationBarMobileEmits>();

defineSlots<NavigationBarMobileSlots>();

const { opened } = toRefs(props);

const insideOpened = ref(opened.value);

const onToggle = () => {
  insideOpened.value = !insideOpened.value;

  emit('update:opened', insideOpened.value);
};

const onUpdate = (value: boolean) => {
  insideOpened.value = value;

  emit('update:opened', value);
};

watch(opened, (value) => {
  if (value !== insideOpened.value) {
    insideOpened.value = value;
  }
});
</script>

<style lang="scss" module>
.root {
  display: inline-flex;
}
</style>
