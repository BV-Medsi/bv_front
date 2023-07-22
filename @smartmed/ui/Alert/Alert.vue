<template>
  <div
    data-automation-id="smed-alert"
    :class="[$style.root, 'smed-text_h4 smed-text_medium']"
  >
    <svg-icon :class="['smed-space_right-2', $style.icon]" :name="iconName" />

    <template v-if="typeof content === 'string'">
      {{ content }}
    </template>

    <component v-else :is="content" :context="context" />

    <button
      v-if="closable"
      v-keyboard
      aria-label="Закрыть нотификацию"
      title="Закрыть нотификацию"
      data-automation-id="smed-alert-close"
      :class="$style.close"
      @click="onClose"
    >
      <svg-icon name="close-filled" />
    </button>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@smartmed/ui/SvgIcon';
import { KeyboardFocusedDirective as vKeyboard } from '@smartmed/utility/directives';
import { computed, toRefs } from 'vue';

import {
  AlertDefaultProps,
  AlertEmits,
  AlertProps,
  AlertSlots,
} from './Alert.props';

defineOptions({
  name: 'Alert',
});

const props = withDefaults(defineProps<AlertProps>(), AlertDefaultProps);

const emit = defineEmits<AlertEmits>();

defineSlots<AlertSlots>();

const { type } = toRefs(props);

const iconName = computed(() => {
  return type.value === 'success' ? 'check-filled' : 'warning-filled';
});

const onClose = () => {
  emit('close');
};

const context = {
  data: props.data,
  close: onClose,
};
</script>

<style lang="scss" module>
.root {
  position: relative;

  display: flex;
  align-items: center;

  width: 100%;

  padding: 16px 32px;
  border-radius: 12px;
  color: var(--smed-base-07);
  background-color: var(--smed-transparent-base-01);
}

.icon {
  align-self: flex-start;
}

.close {
  @include clearbutton;
  @include strict-size(32px, 32px);
  @include transition(color);

  position: absolute;
  right: 0;
  top: 0;

  padding: 4px;
  border-radius: 12px;

  cursor: pointer;

  color: var(--smed-base-07);

  &:hover {
    color: var(--smed-base-04);
  }
}
</style>
