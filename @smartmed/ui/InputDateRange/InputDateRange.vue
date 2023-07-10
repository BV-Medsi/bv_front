<template>
  <div :class="$style.idrHost">
    <dropdown-host
      v-bind="dropdownProps"
      v-model="opened"
      :class="$style.idrHost"
      :max-width="266 * 2"
      :min-width="266 * 2"
      :min-height="hasPeriods ? 330 : 318"
      :can-open="!isMobile && !computedDisabled"
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
        :decorator-postfix-color-class="$style.idrDecorator"
        @search-clear="clear"
        @update:modelValue="updateValueFromInput"
      >
        <template v-slot:right>
          <svg-icon
            name="calendar"
            :class="$style.idrIcon"
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

        <template v-slot:valueContent>
          <span v-if="hasPeriods && activePeriod && formattedActivePeriod">
            {{ formattedActivePeriod }}
          </span>
        </template>
      </base-input>

      <template v-slot:dropdown>
        <calendar-range
          v-bind="calendarRangeProps"
          :max="max"
          :min="min"
          :periods="periods"
          :model-value="modelValue"
          :disabled-dates-handler="disabledDatesHandler"
          @update:modelValue="updateValueFromCalendar"
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
        :value="modelValue"
        :single="false"
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
import { maskitoDateRangeOptionsGenerator } from '@maskito/kit';
import BaseInput from '@smartmed/ui/BaseInput';
import CalendarMobile from '@smartmed/ui/CalendarMobile';
import CalendarRange from '@smartmed/ui/CalendarRange';
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
  DATE_RANGE_FILTER_LENGTH,
  DATE_RANGE_POSTFIX_DECORATOR,
  SmedDay,
  SmedDayRange,
} from '@smartmed/utility/date';
import { hasSlotContent } from '@smartmed/utility/vue';
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
  InputDateRangeDefaultProps,
  InputDateRangeEmits,
  InputDateRangeProps,
  InputDateRangeSlots,
} from './InputDateRange.props';

defineOptions({
  name: 'InputDateRange',
});

const props = withDefaults(
  defineProps<InputDateRangeProps>(),
  InputDateRangeDefaultProps
);

const emit = defineEmits<InputDateRangeEmits>();

defineSlots<InputDateRangeSlots>();

const { modelValue, disabled, isError, max, min, periods } = toRefs(props);

const isMobile = inject<Ref<boolean>>(IS_POPUP_MOBILE_TOKEN, ref(false));

const mobilePopupOpened = ref(false);

const opened = ref(false);
const baseInputExposed = ref<BaseInputExpose | null>(null);
const dropdownPivot = computed(() => baseInputExposed.value?.wrapper ?? null);

provide(DROPDOWN_HOST_PIVOT_TOKEN, dropdownPivot);

const slots = useSlots();
const controlAccessor = useControlAccess(null);
const computedInvalid = useControlInvalid(isError);
const computedDisabled = useControlDisabled(disabled);

const toString = (dayRange: SmedDayRange | null) => {
  return dayRange?.toString() || '';
};

const originalValue = ref(toString(modelValue.value));

const hasLabel = computed(() => hasSlotContent(slots.label));
const hasDescription = computed(() => hasSlotContent(slots.description));

const hasPeriods = computed(() => {
  return periods.value.length > 0;
});

const activePeriod = computed(() => {
  const value = modelValue.value;

  if (value === null) {
    return null;
  }

  const _min = min.value;
  const _max = max.value;

  const period = periods.value.find(({ range: itemRange }) => {
    return (
      value.from.daySame(itemRange.from.dayLimit(_min, _max)) &&
      value.to.daySame(itemRange.to.dayLimit(_min, _max))
    );
  });

  return period || null;
});

const formattedActivePeriod = computed(() => {
  const period = activePeriod.value;

  if (!period) {
    return '';
  }

  const postfix = period.range.isSingleDay ? period.range : '';

  if (postfix) {
    return `${period} (${period.range.from})`;
  }

  return period;
});

const computedMask = computed(() => {
  const _max = max.value.toLocalNativeDate();
  const _min = min.value.toLocalNativeDate();

  return maskitoDateRangeOptionsGenerator({
    mode: 'dd/mm/yyyy',
    separator: '.',
    max: _max,
    min: _min,
  });
});

const computedDecoratorPostfix = computed(() => {
  const value = originalValue.value;

  return DATE_RANGE_POSTFIX_DECORATOR.slice(value.length);
});

const onMobileConfirm = (value: SmedDay | SmedDayRange | null) => {
  mobilePopupOpened.value = false;

  if (value instanceof SmedDay) {
    return;
  }

  emit('update:modelValue', value);
};

const onMobileCancel = () => {
  mobilePopupOpened.value = false;
};

const updateValueFromCalendar = (date: SmedDayRange | null) => {
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

  if (value.length === DATE_RANGE_FILTER_LENGTH) {
    emit('update:modelValue', SmedDayRange.normalizeParse(value));
  }
};

const onCalendarClick = (event: MouseEvent) => {
  if (isMobile.value) {
    event.stopPropagation();
    event.preventDefault();

    mobilePopupOpened.value = !mobilePopupOpened.value;
  }
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

watch(modelValue, (value) => {
  const isSame = toString(value) === originalValue.value;

  if (!isSame) {
    originalValue.value = toString(value);
  }
});
</script>

<style lang="scss" module>
.idrHost {
  width: 100%;
}

.idrIcon {
  cursor: pointer;

  color: var(--smed-base-03);

  &:hover {
    color: var(--smed-base-02);
  }
}

.idrDecorator {
  color: var(--smed-base-02);
}

.calendar {
  height: 100vh;
}
</style>
