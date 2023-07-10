<template>
  <div>
    <div
      :class="[$style.expand, wide && $style.expand_wide, rootClasses]"
      @click="toggle"
    >
      <slot :opened="opened" />
    </div>

    <transition-expand :opened="opened">
      <slot name="content" />
    </transition-expand>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Expand',
};
</script>

<script setup lang="ts">
import TransitionExpand from '@smartmed/ui/TransitionExpand';
import { ref, toRefs, watch } from 'vue';

import {
  ExpandDefaultProps,
  ExpandEmits,
  ExpandProps,
  ExpandSlots,
} from './Expand.props';

const props = withDefaults(defineProps<ExpandProps>(), ExpandDefaultProps);
const { modelValue } = toRefs(props);
const emit = defineEmits<ExpandEmits>();

defineSlots<ExpandSlots>();

const opened = ref(props.modelValue);

const toggle = () => {
  opened.value = !opened.value;

  emit('update:modelValue', opened.value);
};

watch(
  modelValue,
  (value) => {
    opened.value = value;
  },
  { immediate: true }
);
</script>

<style lang="scss" module>
.expand {
  display: inline-block;

  &_wide {
    display: block;
  }
}
</style>
