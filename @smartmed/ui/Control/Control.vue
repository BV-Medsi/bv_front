<template>
  <div>
    <slot
      :invalid="invalid"
      :model="model"
      :disabled="disabled"
      :valid="valid"
    />

    <field-error v-if="showErrors" :class="$style.error" :error="error" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'Control',
};
</script>

<script setup lang="ts" generic="T">
import FieldError from '@smartmed/ui/FieldError';
import { VALIDATION_ERRORS_TOKEN } from '@smartmed/ui/tokens';
import { useControlAccess } from '@smartmed/ui/use';
import { provide, reactive } from 'vue';

import {
  ControlDefaultProps,
  ControlProps,
  ControlSlots,
} from './Control.props';

const props = withDefaults(defineProps<ControlProps<T>>(), ControlDefaultProps);

defineSlots<ControlSlots<T>>();

const markAsTouch =
  props.control.configuration.validateOn === 'blur'
    ? props.control.markAsTouch
    : () => {
        // skip validation on blur
      };

useControlAccess({
  markAsTouch,
  invalid: props.control.invalid,
  disabled: props.control.disabled,
});

if (props.validationErrors) {
  provide(VALIDATION_ERRORS_TOKEN, props.validationErrors);
}

const model = reactive({
  value: props.control.value,
});

/* eslint-disable vue/no-setup-props-destructure */
const invalid = props.control.invalid;
const error = props.control.error;
const disabled = props.control.disabled;
const valid = props.control.valid;
/* eslint-enable vue/no-setup-props-destructure */
</script>

<style lang="scss" module>
.error {
  margin-top: 4px;
}
</style>
