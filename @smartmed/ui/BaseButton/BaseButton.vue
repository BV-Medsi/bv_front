<template>
  <button
    v-keyboard-focused
    v-hovered="{ onEvent: onHover }"
    ref="native"
    :type="type"
    :class="buttonClass"
    :disabled="disabled"
    :tabindex="disabled || isLoading ? '-1' : '0'"
  >
    <div v-if="hasIcon" :class="[$style.icon, $style.element]">
      <slot name="icon">
        <svg-icon :name="icon" :size="iconSize" />
      </slot>
    </div>

    <span v-if="hasContent" :class="$style.element">
      <slot>{{ title }}</slot>
    </span>

    <svg-icon
      v-if="isLoading"
      name="spinner"
      :class="$style.spinner"
      :size="iconSize"
    />
  </button>
</template>

<script lang="ts">
export default {
  name: 'BaseButton',
};
</script>

<script setup lang="ts">
import SvgIcon from '@smartmed/ui/SvgIcon';
import {
  HoveredDirective as vHovered,
  KeyboardFocusedDirective as vKeyboardFocused,
} from '@smartmed/utility/directives';
import { hasSlotContent } from '@smartmed/utility/vue';
import { computed, ref, toRefs, useCssModule, useSlots } from 'vue';

import {
  BaseButtonDefaultProps,
  BaseButtonProps,
  BaseButtonSlots,
} from './BaseButton.props';

const props = withDefaults(
  defineProps<BaseButtonProps>(),
  BaseButtonDefaultProps
);

defineSlots<BaseButtonSlots>();

const {
  color,
  size,
  wide,
  isLoading,
  disabled,
  pseudoHovered,
  icon,
  title,
  rounded,
} = toRefs(props);

const native = ref<HTMLElement | null>(null);
const hovered = ref(false);

const slots = useSlots();
const styles = useCssModule();

const buttonClass = computed(() => {
  const disabledClasses = disabled.value
    ? `${styles.native_disabled} ${styles[`native_${color.value}_disabled`]}`
    : '';

  const hoveredClasses = computedHovered.value
    ? `${styles[`native_${color.value}_hovered`]}`
    : '';

  return [
    styles.native,
    styles[`native_${color.value}`],
    styles[`native_${size.value}`],
    wide.value && styles.native_wide,
    isLoading.value && styles.native_loading,
    !hasContent.value && [
      styles.native_icon,
      styles[`native_${size.value}_icon`],
    ],
    disabledClasses,
    hoveredClasses,
    rounded.value && styles.native_rounded,
  ].filter(Boolean);
});

const hasIcon = computed(() => icon.value || hasSlotContent(slots.icon));

const hasContent = computed(
  () => !!title.value || hasSlotContent(slots.default)
);

const computedHovered = computed(() => {
  return pseudoHovered.value || hovered.value;
});

const iconSize = computed(() => (size.value === 'sm' ? 'sm' : 'lg'));

const onHover = (value: boolean) => {
  hovered.value = value;
};

const blur = () => {
  if (native.value) {
    native.value.blur();
  }
};

defineExpose({
  blur,
});
</script>

<style lang="scss" module>
@import './BaseButton.scss';
</style>
