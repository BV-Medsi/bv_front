<template>
  <div ref="activeZone">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'ActiveZone',
};
</script>

<script setup lang="ts">
import { ACTIVE_ELEMENT_TOKEN } from '@smartmed/ui/tokens';
import { inject, ref, toRefs, watch } from 'vue';

import {
  ActiveZoneEmits,
  ActiveZoneProps,
  ActiveZoneSlots,
} from './ActiveZone.props';

const props = withDefaults(defineProps<ActiveZoneProps>(), {
  child: null,
});
const emit = defineEmits<ActiveZoneEmits>();

defineSlots<ActiveZoneSlots>();

const { child } = toRefs(props);

const activeZone = ref<HTMLElement | null>(null);
const focused = ref<boolean>(false);

const activeElement = inject<Node | null>(ACTIVE_ELEMENT_TOKEN, null);

if (activeElement) {
  watch(activeElement, (element) => {
    if (!element) {
      focused.value = false;

      return;
    }

    if (activeZone.value) {
      focused.value =
        activeZone.value.contains(element) ||
        (!!child.value && child.value.contains(element));
    }
  });
}

watch(focused, (value) => {
  emit('active-zone-changed', value);
});

defineExpose({
  activeZone,
});
</script>
