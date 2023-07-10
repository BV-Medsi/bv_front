<template>
  <dropdown-host
    v-bind="dropdownProps"
    v-model="opened"
    :class="$style.host"
    :can-open="!computedDisabled"
    @keyup.enter="onKeyupEnter"
  >
    <base-input
      v-bind="$props"
      ref="baseInputExposed"
      has-cleaner
      :disabled="computedDisabled"
      :model-value="(modelValue as T)"
      :is-error="computedInvalid"
      :stringify="stringify"
      :pseudo-focused="opened"
      @update:modelValue="onUpdate"
      @search-clear="onUpdate(null)"
    >
      <template v-slot:left>
        <slot v-if="hasSlotContent($slots.left)" name="left" />
      </template>

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
      <slot name="dropdown" :items="filteredItems">
        <data-list
          :model-value="modelValue"
          :items="filteredItems"
          :size="size!"
          @update:modelValue="onSelectItem"
        >
          <template #itemContent="{ item }">
            <slot name="itemContent" :item="item" />
          </template>

          <template #action>
            <slot v-if="hasSlotContent($slots.actions)" name="action" />
          </template>

          <template #emptyContent>
            <slot
              v-if="hasSlotContent($slots.emptyContent)"
              name="emptyContent"
            />
          </template>
        </data-list>
      </slot>
    </template>
  </dropdown-host>
</template>

<script lang="ts">
export default {
  name: 'Combobox',
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
  ComboboxDefaultProps,
  ComboboxEmits,
  ComboboxProps,
  ComboboxSlots,
} from './Combobox.props';

const props = withDefaults(
  defineProps<ComboboxProps<T, U>>(),
  // @ts-expect-error Пока не справляется vue с generic типами в withDefaults
  ComboboxDefaultProps
);

const emit = defineEmits<ComboboxEmits<U>>();

defineSlots<ComboboxSlots<T, U>>();

const { modelValue, items, isError, disabled } = toRefs(props);
const slots = useSlots();
const controlAccessor = useControlAccess(null);
const computedInvalid = useControlInvalid(isError);
const computedDisabled = useControlDisabled(disabled);

const opened = ref(false);
const baseInputExposed = ref<BaseInputExpose | null>(null);
const dropdownPivot = computed(() => baseInputExposed.value?.wrapper ?? null);

provide(DROPDOWN_HOST_PIVOT_TOKEN, dropdownPivot);

const _items = computed(() => (items ? items.value : []) as ReadonlyArray<U>);
const hasLabel = computed(() => hasSlotContent(slots.label));
const hasDescription = computed(() => hasSlotContent(slots.description));

const defaultComparsion = (value: T, item: U) => {
  if (!value) {
    return true;
  }

  return value === (item as unknown as T);
};

const matchedValue = computed(() => {
  if (!_items.value) {
    return null;
  }

  const value = modelValue.value;
  const matcher = props.matcher || defaultComparsion;
  const filtered = _items.value.filter((item) => matcher(value, item));

  return filtered.length === 1 ? filtered[0] : null;
});

const filteredItems = computed(() => {
  if (_items.value === null) {
    return null;
  }

  const value = modelValue.value;
  const filter = props.itemsFilter || defaultComparsion;

  return _items.value.filter((item) => filter(value, item));
});

const isValue = computed(
  () => modelValue.value !== null && String(modelValue.value).length > 0
);

watch(opened, (value) => {
  if (!value && controlAccessor) {
    controlAccessor.markAsTouch();
  }
});

watch(modelValue, () => {
  if (!opened.value && isValue.value && !matchedValue.value) {
    show();
  }
});

watch(matchedValue, (value) => {
  if (value) {
    onUpdate(value);
  }
});

const show = () => {
  opened.value = true;
};

const hide = () => {
  opened.value = false;
};

const onKeyupEnter = (event: KeyboardEvent) => {
  if (opened.value) {
    event.preventDefault();
  }

  const __items = filteredItems.value;

  if (!__items || __items.length !== 1) {
    return;
  }

  onUpdate(__items[0]);
};

const onUpdate = (value: T | U | null) => {
  emit('update:modelValue', value as U | string | null);
};

const onSelectItem = (value: U) => {
  hide();

  baseInputExposed.value?.focus();

  onUpdate(value);
};
</script>

<style lang="scss" module>
.host {
  width: 100%;
}

.icon {
  @include transition(transform);

  color: var(--smed-base-05);
  cursor: pointer;

  &_rotated {
    transform: rotate(180deg);
  }
}
</style>
