<template>
  <base-input
    v-bind="props"
    :type="showPassword ? 'text' : 'password'"
    :model-value="modelValue"
    @update:modelValue="onUpdate"
    @search-clear="onUpdate(null)"
  >
    <template v-slot:left="params">
      <slot v-if="hasLeft" name="left" :size="params?.size" />
    </template>

    <template v-slot:right>
      <svg-icon
        :class="$style.icon"
        :name="showPassword ? 'see' : 'unsee'"
        :size="iconSize"
        @click="toggleShowPassword"
      />
    </template>

    <template v-slot:label>
      <slot v-if="hasLabel" name="label" />
    </template>

    <template v-slot:description>
      <slot v-if="hasDescription" name="description" />
    </template>
  </base-input>
</template>

<script lang="ts">
export default {
  name: 'PasswordInput',
};
</script>

<script setup lang="ts">
import BaseInput from '@smartmed/ui/BaseInput';
import SvgIcon from '@smartmed/ui/SvgIcon';
import { hasSlotContent } from '@smartmed/utility/vue';
import { computed, ref, toRefs, useSlots } from 'vue';

import {
  PasswordInputDefaultProps,
  PasswordInputEmits,
  PasswordInputProps,
  PasswordInputSlots,
} from './PasswordInput.props';

const props = withDefaults(
  defineProps<PasswordInputProps>(),
  PasswordInputDefaultProps
);

defineSlots<PasswordInputSlots>();

const emit = defineEmits<PasswordInputEmits>();
const slots = useSlots();

const { size } = toRefs(props);

const showPassword = ref(false);

const hasLeft = computed(() => hasSlotContent(slots.left));
const hasLabel = computed(() => hasSlotContent(slots.label));
const hasDescription = computed(() => hasSlotContent(slots.description));

const iconSize = computed(() => (size!.value === 'sm' ? 'md' : 'lg'));

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};

const onUpdate = (value: string | null) => {
  emit('update:modelValue', value);
};
</script>

<style lang="scss" module>
.icon {
  color: var(--smed-base-03);

  cursor: pointer;

  &:hover {
    color: var(--smed-base-02);
  }

  &:active {
    color: var(--smed-base-02);
  }
}
</style>
