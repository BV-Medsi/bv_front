<template>
  <label
    :class="[$style.input, readonly && $style.input_readonly]"
    :for="computedId"
  >
    <span
      v-if="hasLabel"
      data-automation-id="smed-base-input-label"
      :class="[$style.inline, 'smed-text_body-sm smed-space_bottom-1']"
      @click.stop
    >
      <slot name="label">{{ label }}</slot>
    </span>

    <div
      ref="wrapperRef"
      :class="[
        $style.wrapper,
        $style['wrapper_' + size],
        computedInvalid && $style.wrapper_error,
        computedDisabled && $style.wrapper_disabled,
        focused && $style.focus,
      ]"
    >
      <div
        v-if="hasLeftSlot"
        data-automation-id="smed-base-input-left-icon"
        :class="[$style.icon, $style.iconsLeft, $style.icon_left]"
      >
        <slot name="left" :size="iconSize" />
      </div>

      <div :class="$style.nativeWrapper">
        <input
          :id="computedId"
          :ref="setNativeRef"
          :data-automation-id="dataAutomationId"
          :class="[
            $style.native,
            !editable && $style.native_notEditable,
            showValueTemplate && $style.native_hidden,
            computedDisabled && $style.native_disabled,
          ]"
          :style="inputStyles"
          :type="type"
          :autocomplete="autocomplete"
          :name="name"
          :placeholder="placeholder"
          :disabled="computedDisabled || readonly"
          :inputmode="inputmode"
          :readonly="computedDisabled || readonly || !editable"
          :value="stringify(modelValue as T)"
          @input="onInput"
        />

        <span
          v-if="decoratorPostfix && isValue"
          :class="[$style.decorator, decoratorPostfixColorClass]"
        >
          <span :class="$style.hidden">
            {{ stringify(modelValue as T) }}
          </span>
          <span :class="$style.postfix">{{ decoratorPostfix }}</span>
        </span>

        <div
          v-if="showValueTemplate"
          data-automation-id="smed-base-input-value-content"
          :class="[
            $style.native,
            !editable && $style.native_notEditable,
            $style.native_template,
          ]"
        >
          <slot name="valueContent" />
        </div>
      </div>

      <div
        v-if="hasRightIcons"
        :class="$style.iconsRight"
        :style="rightSlotPadding && { padding: rightSlotPadding }"
      >
        <svg-icon
          v-if="isSuccess"
          data-automation-id="smed-base-input-success-icon"
          name="check-filled"
          :class="[$style.icon, $style.icon_success, $style.icon_right]"
          :size="iconSize"
        />

        <svg-icon
          v-if="computedHasCleaner"
          data-automation-id="smed-base-input-cleaner-icon"
          name="close-filled"
          :class="[$style.closeIcon, $style.icon, $style.icon_right]"
          :size="iconSize"
          @click.stop.prevent="clearSearch"
        />

        <div
          v-if="hasRightSlot"
          data-automation-id="smed-base-input-right-icon"
          :class="$style.icon_right"
        >
          <slot name="right" />
        </div>
      </div>
    </div>

    <span
      v-if="hasDescription"
      :class="[
        'smed-text_caption smed-space_top-1',
        $style.inline,
        computedInvalid && $style.inline_invalid,
      ]"
    >
      <slot name="description">{{ description }}</slot>
    </span>
  </label>
</template>

<script lang="ts">
export default {
  name: 'BaseInput',
};
</script>

<script setup lang="ts" generic="T">
import SvgIcon from '@smartmed/ui/SvgIcon';
import {
  useControlDisabled,
  useControlInvalid,
  useInteractive,
  useModelModifiers,
} from '@smartmed/ui/use';
import { useMaskito } from '@smartmed/utility/maskito';
import { hasSlotContent } from '@smartmed/utility/vue';
import { computed, ref, toRefs, useSlots } from 'vue';

import {
  BaseInputDefaultProps,
  BaseInputEmits,
  BaseInputExpose,
  BaseInputProps,
  BaseInputSlots,
} from './BaseInput.props';

const props = withDefaults(
  defineProps<BaseInputProps<T>>(),
  // @ts-expect-error Пока не справляется vue с generic типами в withDefaults
  BaseInputDefaultProps
);
const emit = defineEmits<BaseInputEmits<T>>();

defineSlots<BaseInputSlots>();

const {
  modelValue,
  modelModifiers,
  editable,
  isSuccess,
  hasCleaner,
  size,
  id,
  isError,
  disabled,
  pseudoFocused,
  maskOptions,
  label,
  description,
  readonly,
} = toRefs(props);

const wrapperRef = ref<HTMLElement | null>(null);
const inputRef = ref<HTMLInputElement | null>(null);

const slots = useSlots();
const interactive = useInteractive();
const computedInvalid = useControlInvalid(isError);
const computedDisabled = useControlDisabled(disabled);
const modifiers = useModelModifiers(modelModifiers!.value);
const maskitoNative = useMaskito(maskOptions);

const focus = interactive.focus;
const blur = interactive.blur;

const computedHasCleaner = computed(() => {
  return (
    hasCleaner.value &&
    !readonly.value &&
    !computedDisabled.value &&
    isValue.value
  );
});

const focused = computed(
  () =>
    interactive.focused.value ||
    (pseudoFocused.value && (pseudoFocused.value as boolean))
);

const isValue = computed(
  () => !!modelValue.value && String(modelValue.value).length > 0
);

const iconSize = computed(() => {
  return size!.value === 'sm' ? 'md' : 'lg';
});

const computedHasValueContent = computed(() =>
  hasSlotContent(slots.valueContent)
);

const hasLabel = computed(
  () => (!!label && !!label.value) || hasSlotContent(slots.label)
);

const hasDescription = computed(
  () =>
    (!!description && !!description.value) || hasSlotContent(slots.description)
);

const showValueTemplate = computed(() => {
  const showValueContent = isValue.value && computedHasValueContent.value;
  const notEditable = !editable.value && showValueContent;
  const isEditableAndNotFocused =
    editable.value && !focused.value && showValueContent;

  return notEditable || isEditableAndNotFocused;
});

const computedId = computed(() => id!.value || interactive.id);

const hasRightSlot = computed(() => hasSlotContent(slots.right));

const hasLeftSlot = computed(() => hasSlotContent(slots.left));

const hasRightIcons = computed(() => {
  return (
    isSuccess.value || (isValue.value && hasCleaner.value) || hasRightSlot.value
  );
});

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const value = target.value;

  emit('update:modelValue', modifiers.modify(value));
};

const clearSearch = () => {
  emit('search-clear');

  focus();
};

const setNativeRef = (element: unknown) => {
  const input = element as HTMLInputElement;

  inputRef.value = input as HTMLInputElement;

  maskitoNative.value = input;
  interactive.native.value = input;
};

defineExpose<BaseInputExpose>({
  focus,
  blur,
  native: inputRef,
  wrapper: wrapperRef,
  focused,
});
</script>

<style lang="scss" module>
.input {
  display: block;
  cursor: inherit;

  &_readonly {
    cursor: default;
  }
}

$smRadius: 6px;
$otherRadius: 8px;

.wrapper {
  @include transition(border-color);

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--smed-base-07);
  border-radius: var(--smed-group-tlr, $smRadius)
    var(--smed-group-trr, $smRadius) var(--smed-group-brr, $smRadius)
    var(--smed-group-blr, $smRadius);

  color: var(--smed-base-01);

  border: 1px solid var(--smed-base-03);

  &_sm {
    @include smed-text_body-sm;

    min-height: 32px;

    .native,
    .decorator {
      padding: 6px 8px;
    }
  }

  &_md {
    @include smed-text_body-xl;

    min-height: 44px;
    border-radius: var(--smed-group-tlr, $otherRadius)
      var(--smed-group-trr, $otherRadius) var(--smed-group-brr, $otherRadius)
      var(--smed-group-blr, $otherRadius);

    .native,
    .decorator {
      padding: 10px 12px;
    }
  }

  &_lg {
    @include smed-text_body-xl;

    min-height: 56px;
    border-radius: var(--smed-group-tlr, $otherRadius)
      var(--smed-group-trr, $otherRadius) var(--smed-group-brr, $otherRadius)
      var(--smed-group-blr, $otherRadius);

    .native,
    .decorator {
      padding: 16px;
    }
  }

  &:hover {
    border-color: var(--smed-base-02);
  }

  &:focus,
  &.focus {
    border-color: var(--smed-primary);
  }

  &_error {
    border-color: var(--smed-error);

    &:hover,
    &:focus,
    &.focus {
      border-color: var(--smed-error);
    }
  }

  &_disabled {
    @include disabled(0.6);
  }
}

.nativeWrapper {
  position: relative;
  display: inline-flex;
  width: 100%;
  height: 100%;
  min-height: inherit;
  box-sizing: border-box;
  overflow: hidden;
}

.native {
  @include clearinput();

  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 0;
  white-space: nowrap;
  overflow: hidden;
  cursor: inherit;

  &_template {
    position: relative;

    user-select: none;
    pointer-events: none;

    height: 100%;
  }

  &_hidden {
    opacity: 0;
  }

  .input_readonly & {
    cursor: default;
  }

  &_notEditable {
    text-overflow: ellipsis;
  }

  &_disabled {
    cursor: default;
  }
}

.inline {
  display: inline-flex;
  align-items: center;
  column-gap: 4px;
  color: var(--smed-base-02);

  &_invalid {
    color: var(--smed-error);
  }
}

.iconsLeft {
  display: flex;
  align-items: center;
  justify-content: center;

  .wrapper_sm & {
    padding: 6px 0 6px 8px;
  }

  .wrapper_md & {
    padding: 10px 0 10px 12px;
  }

  .wrapper_lg & {
    padding: 16px 0 16px 16px;
  }
}

.icon {
  color: var(--smed-base-03);

  &_left {
    flex-shrink: 0;
  }

  &_right {
    display: flex;
  }

  &_right:not(:last-child) {
    margin-right: 8px;
  }

  &_error {
    color: var(--smed-error);
  }

  &_success {
    color: var(--smed-primary);
  }
}

.iconsRight {
  display: flex;
  align-items: center;
  height: 100%;
  flex-shrink: 0;

  .wrapper_sm & {
    padding: 6px 8px 6px 0;
  }

  .wrapper_md & {
    padding: 10px 12px 10px 0;
  }

  .wrapper_lg & {
    padding: 16px;
    padding-left: 0;
  }
}

.error {
  border-color: var(--smed-error) !important;
}

.closeIcon {
  cursor: pointer;
  flex-shrink: 0;
  color: var(--smed-base-03);

  &:hover {
    color: var(--smed-base-02);
  }

  &:active {
    color: var(--smed-base-02);
  }
}

.decorator {
  white-space: nowrap;
}

.hidden {
  visibility: hidden;
}

.postfix {
  vertical-align: text-bottom;
}
</style>
