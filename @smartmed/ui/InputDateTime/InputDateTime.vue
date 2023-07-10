<template>
  <dropdown-host
    v-bind="dropdownProps"
    v-model="opened"
    :class="$style.idthost"
    :max-width="computedWidth"
    :min-width="computedWidth"
    :min-height="318"
    :can-open="!computedDisabled"
  >
    <base-input
      v-bind="props"
      ref="baseInputExposed"
      :disabled="computedDisabled"
      :model-value="(originalValue as any)"
      :is-error="computedInvalid"
      :pseudo-focused="opened"
      :mask-options="computedMask"
      :placeholder="computedPlaceholder"
      :decorator-postfix="computedDecoratorPostfix"
      :decorator-postfix-color-class="$style.idtdecorator"
      @search-clear="clear"
      @update:modelValue="updateValueFromInput"
    >
      <template v-slot:right>
        <svg-icon
          name="calendar"
          :class="$style.idticon"
          :size="size === 'sm' ? 'md' : 'lg'"
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
      <div :class="$style.dropdown">
        <calendar
          v-bind="calendarProps"
          show-adjacent-days
          :max="computedCalendarMax"
          :min="computedCalendarMin"
          :value="computedCalendarValue"
          @day-click="updateValueFromCalendar"
        />

        <div :class="$style.timePicker">
          <time-picker
            :mode="timeMode"
            :model-value="computedTime"
            @update:model-value="updateValueFromTimepicker"
          />
        </div>
      </div>
    </template>
  </dropdown-host>
</template>

<script setup lang="ts">
import { maskitoDateTimeOptionsGenerator } from '@maskito/kit';
import BaseInput from '@smartmed/ui/BaseInput';
import Calendar from '@smartmed/ui/Calendar';
import DropdownHost from '@smartmed/ui/DropdownHost';
import SvgIcon from '@smartmed/ui/SvgIcon';
import TimePicker from '@smartmed/ui/TimePicker';
import { DROPDOWN_HOST_PIVOT_TOKEN } from '@smartmed/ui/tokens';
import {
  useControlAccess,
  useControlDisabled,
  useControlInvalid,
} from '@smartmed/ui/use';
import {
  DATE_FILTER_LENGTH,
  dateClamp,
  dateTimePostfixDecorator,
  SMED_DAY_TIME_SEPARATOR,
  SmedDayTime,
  SmedTime,
} from '@smartmed/utility/date';
import { SmedDay } from '@smartmed/utility/date';
import { hasSlotContent } from '@smartmed/utility/vue/hasSlotContent';
import { computed, provide, ref, toRefs, useSlots, watch } from 'vue';

import { BaseInputExpose } from '../BaseInput/BaseInput.props';
import {
  InputDateTimeDefaultProps,
  InputDateTimeEmits,
  InputDateTimeProps,
  InputDateTimeSlots,
} from './InputDateTime.props';

defineOptions({
  name: 'InputDateTime',
});

const props = withDefaults(
  defineProps<InputDateTimeProps>(),
  InputDateTimeDefaultProps
);

const emit = defineEmits<InputDateTimeEmits>();

defineSlots<InputDateTimeSlots>();

const { modelValue, disabled, isError, max, min, placeholder, timeMode } =
  toRefs(props);

const opened = ref(false);
const baseInputExposed = ref<BaseInputExpose | null>(null);
const dropdownPivot = computed(() => baseInputExposed.value?.wrapper ?? null);

const toString = (value: SmedDayTime | SmedDay | null): string => {
  return value?.toString(undefined, undefined, timeMode.value) || '';
};

const originalValue = ref(toString(modelValue.value));

provide(DROPDOWN_HOST_PIVOT_TOKEN, dropdownPivot);

const slots = useSlots();
const controlAccessor = useControlAccess(null);
const computedInvalid = useControlInvalid(isError);
const computedDisabled = useControlDisabled(disabled);

const focused = computed(() => {
  return baseInputExposed.value?.focused || false;
});

const computedWidth = computed(() => {
  const mode = timeMode.value;

  const correction = mode === 'HH:MM' ? 200 : 300;

  return 266 + correction;
});

const hasLabel = computed(() => hasSlotContent(slots.label));
const hasDescription = computed(() => hasSlotContent(slots.description));

const computedPlaceholder = computed(() => {
  const _placeholder = placeholder.value;

  if (_placeholder) {
    return _placeholder;
  }

  const mode = timeMode.value;

  return dateTimePostfixDecorator(mode);
});

const computedDecoratorPostfix = computed(() => {
  const value = originalValue.value;

  if (focused.value) {
    return dateTimePostfixDecorator(timeMode.value).slice(value.length);
  }

  return '';
});

const computedMask = computed(() => {
  const _max = max.value.toLocalNativeDate();
  const _min = min.value.toLocalNativeDate();
  const mode = timeMode.value;

  return maskitoDateTimeOptionsGenerator({
    dateMode: 'dd/mm/yyyy',
    timeMode: mode,
    dateSeparator: '.',
    max: _max,
    min: _min,
  });
});

const computedCalendarValue = computed(() => {
  const value = modelValue.value;

  return value ? value.day : null;
});

const computedCalendarMax = computed(() => {
  const _max = max.value;

  const value = _max instanceof SmedDayTime ? _max.day : _max;

  return value || undefined;
});

const computedCalendarMin = computed(() => {
  const _min = min.value;

  const value = _min instanceof SmedDayTime ? _min.day : _min;

  return value || undefined;
});

const computedTime = computed(() => {
  const value = modelValue.value;

  return value ? value.time : null;
});

const updateValueFromInput = (date: unknown) => {
  const value = date as string;

  originalValue.value = value;

  if (!value) {
    emit('update:modelValue', null);

    return;
  }

  if (value.length >= DATE_FILTER_LENGTH) {
    const day = SmedDay.normalizeParse(value);
    const mode = timeMode.value;
    const prefixLength = dateTimePostfixDecorator(mode).length;

    if (value.length === prefixLength) {
      const time = value.slice(
        DATE_FILTER_LENGTH + SMED_DAY_TIME_SEPARATOR.length
      );

      const dayTime = new SmedDayTime(day, SmedTime.fromString(time));

      emit('update:modelValue', dayTime);
    } else {
      const dayTime = new SmedDayTime(day, null);

      emit('update:modelValue', dayTime);
    }
  }
};

const updateValueFromCalendar = (day: SmedDay) => {
  const value = modelValue.value;
  const time = value ? value.time : null;

  const dayTime = new SmedDayTime(day, time);

  emit('update:modelValue', dayTime);

  opened.value = false;
};

const updateValueFromTimepicker = (time: SmedTime) => {
  const value = modelValue.value;

  if (
    !!value &&
    value.time === null &&
    !time.hours &&
    !time.minutes &&
    !time.seconds
  ) {
    return;
  }

  const day = value ? value.day : null;

  const dayTime = new SmedDayTime(
    day ||
      dateClamp(
        SmedDay.currentLocal(),
        computedCalendarMin.value,
        computedCalendarMax.value
      ),
    time
  );

  emit('update:modelValue', dayTime);
};

const clear = () => {
  emit('update:modelValue', null);

  opened.value = true;
};

watch(opened, (value) => {
  if (!value && controlAccessor) {
    controlAccessor.markAsTouch();
  }
});

const isSame = (value: SmedDayTime | null, compareTo: string) => {
  if (!compareTo) {
    return value === null || (value.time === null && value.day === null);
  }

  if (!value || (value.time === null && value.day === null)) {
    return compareTo === '';
  }

  if (value.time === null) {
    return toString(value.day) === compareTo.slice(0, DATE_FILTER_LENGTH);
  }

  if (value.time && value.day) {
    return toString(value) === compareTo;
  }

  return false;
};

watch(modelValue, (value) => {
  if (!isSame(value, originalValue.value)) {
    originalValue.value = toString(value);
  }
});
</script>

<style lang="scss" module>
.idthost {
  width: 100%;
}

.idticon {
  cursor: pointer;

  color: var(--smed-base-03);

  &:hover {
    color: var(--smed-base-02);
  }
}

.idtdecorator {
  color: var(--smed-base-02);
}

.dropdown {
  display: flex;
}

.timePicker {
  display: flex;
  align-items: center;
  width: 100%;
  border-left: 1px solid var(--smed-base-04);
}
</style>
