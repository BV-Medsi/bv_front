<template>
  <label
    :class="[
      $style.host,
      $style[`host_${size}`],
      modelValue && $style.host_checked,
      computedDisabled && $style.host_disabled,
      focused && [$style.host_focused, 'smed-focused-element'],
    ]"
    :for="id"
  >
    <div :class="$style.toggle">
      <div :class="$style.circle">
        <svg-icon v-if="computedDisabled" name="lock" :size="lockSize" />
      </div>
    </div>

    <input
      :id="id"
      ref="native"
      type="checkbox"
      role="switch"
      :class="$style.checkbox"
      :checked="modelValue"
      :disabled="computedDisabled"
      @change="updateValue"
    />
  </label>
</template>

<script lang="ts">
export default {
  name: 'Toggle',
};
</script>

<script setup lang="ts">
import SvgIcon from '@smartmed/ui/SvgIcon';
import { useControlDisabled, useInteractive } from '@smartmed/ui/use';
import { computed, toRefs } from 'vue';

import { ToggleEmits, ToggleProps } from './Toggle.props';

const lockSizes: Record<NonNullable<ToggleProps['size']>, number> = {
  sm: 8,
  md: 12,
  lg: 16,
};

const props = withDefaults(defineProps<ToggleProps>(), {
  size: 'md',
});

const emit = defineEmits<ToggleEmits>();

const { disabled, size } = toRefs(props);

const interactive = useInteractive();
const computedDisabled = useControlDisabled(disabled);

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const checked = target.checked;

  emit('update:modelValue', checked);
};

const focused = interactive.focused;
const native = interactive.native;
const lockSize = computed(() => lockSizes[size.value]);

defineExpose({
  focus: interactive.focus,
  blur: interactive.blur,
});
</script>

<style lang="scss" module>
.host {
  @include transition(background-color);

  position: relative;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  background-color: var(--smed-base-04);

  &_checked {
    background-color: var(--smed-primary);

    &:hover:not(.host_disabled),
    &.host_focused:not(.host_disabled) {
      background-color: var(--smed-primary-hover);
    }

    &.host_disabled {
      background-color: var(--smed-base-03);
      color: var(--smed-base-03);
    }
  }

  &_sm {
    @include strict-size(28px, 16px);

    border-radius: 10px;
  }

  &_md {
    @include strict-size(42px, 24px);

    border-radius: 12px;
  }

  &_lg {
    @include strict-size(56px, 32px);

    border-radius: 16px;
  }

  &:hover:not(.host_checked):not(.host_disabled),
  &_focused:not(.host_checked):not(.host_disabled) {
    background-color: var(--smed-base-03);
  }

  &_disabled:not(.host_checked) {
    background-color: var(--smed-base-04);
    color: var(--smed-base-04);
  }
}

.checkbox {
  @include clearinput();
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  cursor: pointer;

  .host_disabled & {
    pointer-events: none;
    cursor: default;
  }
}

.toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  transition: 0.4s transform ease;

  .host_sm & {
    transform: translateX(-5px);
  }

  .host_checked.host_sm & {
    transform: translateX(5px);
  }

  .host_md & {
    transform: translateX(-8px);
  }

  .host_checked.host_md & {
    transform: translateX(8px);
  }

  .host_lg & {
    transform: translateX(-10px);
  }

  .host_checked.host_lg & {
    transform: translateX(10px);
  }
}

.circle {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background-color: var(--smed-base-07);
  border-radius: 100%;
  box-shadow: 0px 2px 8px -2px rgba(0, 0, 0, 0.32);
  border: 0.5px solid var(--smed-base-05);

  .host_sm & {
    @include strict-size(12px, 12px);

    padding: 2px;
  }

  .host_md & {
    @include strict-size(18px, 18px);

    padding: 3px;
  }

  .host_lg & {
    @include strict-size(24px, 24px);

    padding: 4px;
  }
}
</style>
