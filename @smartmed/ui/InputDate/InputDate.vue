<template>
  <div :class="$style.host">
    <dropdown-host
      v-bind="dropdownProps"
      :model-value="opened"
      :class="$style.host"
      :max-width="266"
      :min-width="266"
      :min-height="318"
      :can-open="!isMobile && !computedDisabled"
      @update:model-value="onUpdateOpened"
    >
      <base-input
        v-bind="props"
        ref="baseInputExposed"
        :disabled="computedDisabled"
        :model-value="(originalValue as any)"
        :is-error="computedInvalid"
        :pseudo-focused="!isMobile && opened"
        :mask-options="computedMask"
        :decorator-postfix="computedDecoratorPostfix"
        :decorator-postfix-color-class="$style.decorator"
        @search-clear="clear"
        @update:modelValue="updateValueFromInput"
      >
        <template v-slot:right>
          <svg-icon
            name="calendar"
            :class="$style.icon"
            :size="size === 'sm' ? 'md' : 'lg'"
            @click="onCalendarClick"
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
        <calendar
          v-bind="calendarProps"
          show-adjacent-days
          :max="max"
          :min="min"
          :value="modelValue"
          :disabled-dates-handler="disabledDatesHandler"
          @day-click="updateValueFromCalendar"
        />
      </template>
    </dropdown-host>

    <popup
      v-if="isMobile"
      v-model="mobilePopupOpened"
      size="full"
      :closable="false"
    >
      <calendar-mobile
        actions-fixed
        single
        :value="modelValue"
        :class="$style.calendar"
        :min="min"
        :max="max"
        :disabled-dates-handler="disabledDatesHandler"
        @confirm="onMobileConfirm"
        @cancel="onMobileCancel"
      />
    </popup>
  </div>
</template>

<script setup lang="ts">
import { maskitoDateOptionsGenerator } from '@maskito/kit';
import BaseInput from '@smartmed/ui/BaseInput';
import Calendar from '@smartmed/ui/Calendar';
import CalendarMobile from '@smartmed/ui/CalendarMobile';
import DropdownHost from '@smartmed/ui/DropdownHost';
import Popup from '@smartmed/ui/Popup';
import SvgIcon from '@smartmed/ui/SvgIcon';
import {
  DROPDOWN_HOST_PIVOT_TOKEN,
  IS_POPUP_MOBILE_TOKEN,
} from '@smartmed/ui/tokens';
import {
  useControlAccess,
  useControlDisabled,
  useControlInvalid,
} from '@smartmed/ui/use';
import {
  DATE_FILTER_LENGTH,
  DATE_POSTFIX_DECORATOR,
  SmedDay,
  SmedDayRange,
} from '@smartmed/utility/date';
import { hasSlotContent } from '@smartmed/utility/vue/hasSlotContent';
import {
  computed,
  inject,
  provide,
  Ref,
  ref,
  toRefs,
  useSlots,
  watch,
} from 'vue';

import { BaseInputExpose } from '../BaseInput/BaseInput.props';
import {
  InputDateDefaultProps,
  InputDateEmits,
  InputDateProps,
  InputDateSlots,
} from './InputDate.props';

defineOptions({
  name: 'InputDate',
});

const props = withDefaults(
  defineProps<InputDateProps>(),
  InputDateDefaultProps
);

const emit = defineEmits<InputDateEmits>();

defineSlots<InputDateSlots>();

const { modelValue, disabled, isError, max, min } = toRefs(props);

const isMobile = inject<Ref<boolean>>(IS_POPUP_MOBILE_TOKEN, ref(false));
const opened = ref(false);
const baseInputExposed = ref<BaseInputExpose | null>(null);
const dropdownPivot = computed(() => baseInputExposed.value?.wrapper ?? null);

const toString = (value: SmedDay | null) => {
  return value?.toString() || '';
};

const originalValue = ref(toString(modelValue.value));
const mobilePopupOpened = ref(false);

provide(DROPDOWN_HOST_PIVOT_TOKEN, dropdownPivot);

const slots = useSlots();
const controlAccessor = useControlAccess(null);
const computedInvalid = useControlInvalid(isError);
const computedDisabled = useControlDisabled(disabled);

const hasLabel = computed(() => hasSlotContent(slots.label));
const hasDescription = computed(() => hasSlotContent(slots.description));

const computedMask = computed(() => {
  const _max = max.value.toLocalNativeDate();
  const _min = min.value.toLocalNativeDate();

  return maskitoDateOptionsGenerator({
    mode: 'dd/mm/yyyy',
    separator: '.',
    max: _max,
    min: _min,
  });
});

const computedDecoratorPostfix = computed(() => {
  const value = originalValue.value;

  return DATE_POSTFIX_DECORATOR.slice(value.length);
});

const onUpdateOpened = (value: boolean) => {
  if (isMobile.value) {
    return;
  }

  opened.value = value;
};

const onMobileConfirm = (value: SmedDay | SmedDayRange | null) => {
  mobilePopupOpened.value = false;

  if (value instanceof SmedDayRange) {
    return;
  }

  emit('update:modelValue', value);
};

const onMobileCancel = () => {
  mobilePopupOpened.value = false;
};

const updateValueFromCalendar = (date: SmedDay) => {
  emit('update:modelValue', date);

  opened.value = false;
};

const updateValueFromInput = (date: unknown) => {
  const value = date as string;

  originalValue.value = value;

  if (!value) {
    emit('update:modelValue', null);

    return;
  }

  if (value.length === DATE_FILTER_LENGTH) {
    emit('update:modelValue', SmedDay.normalizeParse(value));
  }
};

const clear = () => {
  emit('update:modelValue', null);

  opened.value = true;
};

const onCalendarClick = (event: MouseEvent) => {
  if (isMobile.value) {
    event.stopPropagation();
    event.preventDefault();

    mobilePopupOpened.value = !mobilePopupOpened.value;
  }
};

watch(opened, (value) => {
  if (!value && controlAccessor) {
    controlAccessor.markAsTouch();
  }
});

watch(modelValue, (value) => {
  const isSame = toString(value) === originalValue.value;

  if (!isSame) {
    originalValue.value = toString(value);
  }
});
</script>

<style lang="scss" module>
.host {
  width: 100%;
}

.icon {
  cursor: pointer;

  color: var(--smed-base-03);

  &:hover {
    color: var(--smed-base-02);
  }
}

.decorator {
  color: var(--smed-base-02);
}

.calendar {
  height: 100vh;
}
</style>
