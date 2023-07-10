<template>
  <Teleport :to="appendTo">
    <slot />
  </Teleport>
</template>

<script lang="ts">
export default {
  name: 'Portal',
};
</script>

<script setup lang="ts">
import { PortalDefaultProps, PortalProps, PortalSlots } from './Portal.props';

withDefaults(defineProps<PortalProps>(), PortalDefaultProps);

defineSlots<PortalSlots>();
</script>
