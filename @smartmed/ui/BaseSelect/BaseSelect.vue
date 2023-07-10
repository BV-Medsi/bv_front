<template>
  <dropdown-host
    v-bind="dropdownProps"
    v-model="opened"
    :class="$style.host"
    :can-open="!computedDisabled"
  >
    <base-input
      v-bind="$props"
      ref="baseInputExposed"
      :model-value="(modelValue as T)"
      :class="[$style.input, computedDisabled && $style.input_disabled]"
      :disabled="computedDisabled"
      :is-error="computedInvalid"
      :pseudo-focused="opened"
      @search-clear="onClear"
    >
      <template v-slot:right>
        <svg-icon
          name="arrow-down"
          :class="[$style.icon, opened && $style.icon_rotated]"
        />
      </template>

      <template v-slot:valueContent>
        <slot
          v-if="$slots.valueContent"
          name="valueContent"
          :value="(modelValue as T)"
        />
      </template>

      <template v-slot:label>
        <slot v-if="hasLabel" name="label" />
      </template>

      <template v-slot:description>
        <slot v-if="hasDescription" name="description" />
      </template>
    </base-input>

    <template v-slot:dropdown>
      <slot name="dropdown" :items="items">
        <data-list
          :model-value="(modelValue as T)"
          :items="items"
          :matcher="matcher"
          :size="size"
          @update:modelValue="onUpdate"
        >
          <template #itemContent="params">
            <slot v-bind="params" name="itemContent" />
          </template>

          <template #emptyContent>
            <slot v-if="hasEmptyContent" name="emptyContent" />
          </template>

          <template #action>
            <slot v-if="hasAction" name="action" />
          </template>
        </data-list>
      </slot>
    </template>
  </dropdown-host>
</template>

<script lang="ts">
export default {
  name: 'BaseSelect',
};
</script>

<script setup lang="ts" generic="T, U = T">
import BaseInput from '@smartmed/ui/BaseInput';
import DataList from '@smartmed/ui/DataList';
import DropdownHost from '@smartmed/ui/DropdownHost';
import SvgIcon from '@smartmed/ui/SvgIcon';
import { DROPDOWN_HOST_PIVOT_TOKEN } from '@smartmed/ui/tokens';
import {
  useControlAccess,
  useControlDisabled,
  useControlInvalid,
} from '@smartmed/ui/use';
import { hasSlotContent } from '@smartmed/utility/vue';
import { computed, provide, ref, toRefs, useSlots, watch } from 'vue';

import { BaseInputExpose } from '../BaseInput/BaseInput.props';
import {
  BaseSelectDefaultProps,
  BaseSelectEmits,
  BaseSelectProps,
  BaseSelectSlots,
} from './BaseSelect.props';

const props = withDefaults(
  defineProps<BaseSelectProps<T, U>>(),
  // @ts-expect-error Пока не справляется vue с generic типами в withDefaults
  BaseSelectDefaultProps
);

const emit = defineEmits<BaseSelectEmits<U>>();

defineSlots<BaseSelectSlots<T, U>>();

const slots = useSlots();

const { modelValue, disabled, isError } = toRefs(props);

const opened = ref(false);
const baseInputExposed = ref<BaseInputExpose | null>(null);

const dropdownPivot = computed(() => baseInputExposed.value?.wrapper ?? null);

provide(DROPDOWN_HOST_PIVOT_TOKEN, dropdownPivot);

const controlAccessor = useControlAccess(null);
const computedInvalid = useControlInvalid(isError);
const computedDisabled = useControlDisabled(disabled);

const hasEmptyContent = computed(() => hasSlotContent(slots.emptyContent));
const hasAction = computed(() => hasSlotContent(slots.action));
const hasLabel = computed(() => hasSlotContent(slots.label));
const hasDescription = computed(() => hasSlotContent(slots.description));

watch(modelValue, () => {
  if (opened.value) {
    opened.value = false;
  }
});

watch(opened, (value) => {
  if (!value && controlAccessor) {
    controlAccessor.markAsTouch();
  }
});

const onUpdate = (value: U) => {
  emit('update:modelValue', value);

  baseInputExposed.value?.focus();
};

const onClear = () => {
  emit('search-clear');
};

defineExpose({
  focus,
  blur,
});
</script>

<style lang="scss" module>
.host {
  width: 100%;
}

.input {
  cursor: pointer;

  &_disabled {
    cursor: default;
  }
}

.icon {
  @include transition(transform);
  display: flex;
  align-items: center;

  color: var(--smed-base-03);
  cursor: pointer;

  &_rotated {
    transform: rotate(180deg);
  }
}
</style>
