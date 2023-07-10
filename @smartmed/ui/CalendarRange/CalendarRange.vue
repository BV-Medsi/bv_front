<template>
  <div :class="$style.root">
    <calendar
      v-model:hovered-item="hoveredItem"
      :show-adjacent-days="hasPeriods"
      :min="min"
      :max="max"
      :month="computedFirstMonth"
      :max-viewed-month="maxViewedMonth"
      :disabled-dates-handler="disabledDatesHandler"
      :value="range"
      @day-click="onDayClick"
      @update:month="onChangeFirstMonth"
    />

    <calendar
      v-if="!hasPeriods"
      v-model:hovered-item="hoveredItem"
      :class="$style.border"
      :min="min"
      :max="max"
      :month="userViewedMonthSecond"
      :min-viewed-month="minViewedMonth"
      :disabled-dates-handler="disabledDatesHandler"
      :value="range"
      @day-click="onDayClick"
      @update:month="onChangeSecondMonth"
    />

    <data-list
      v-else
      size="lg"
      :class="[$style.border, $style.list]"
      :model-value="range"
      :items="(computedPeriods as any)"
      :matcher="matchPeriod"
      @update:model-value="onUpdateValueFromPeriod"
    />
  </div>
</template>

<script setup lang="ts">
import Calendar from '@smartmed/ui/Calendar';
import DataList from '@smartmed/ui/DataList';
import {
  SmedDay,
  SmedDayRange,
  SmedDayRangePeriod,
  SmedMonth,
} from '@smartmed/utility/date';
import { computed, onMounted, ref, toRefs, watch } from 'vue';

import {
  CalendarRangeDefaultProps,
  CalendarRangeEmits,
  CalendarRangeProps,
} from './CalendarRange.props';

defineOptions({
  name: 'CalendarRange',
});

const props = withDefaults(
  defineProps<CalendarRangeProps>(),
  CalendarRangeDefaultProps
);

const emit = defineEmits<CalendarRangeEmits>();

const {
  modelValue,
  max,
  min,
  defaultViewedMonth: defaultViewedMonthFirst,
  periods,
} = toRefs(props);

const range = ref<SmedDayRange | null>(modelValue.value);
const hoveredItem = ref<SmedDay | null>(null);

const defaultViewedMonthSecond = computed(() => {
  return defaultViewedMonthFirst.value.append({ month: 1 });
});

const userViewedMonthFirst = ref<SmedMonth>(defaultViewedMonthFirst.value);
const userViewedMonthSecond = ref<SmedMonth>(defaultViewedMonthSecond.value);

const hasPeriods = computed(() => {
  return periods.value.length > 0;
});

const activePeriod = computed(() => {
  const value = range.value;

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

const computedPeriods = computed(() => {
  const dummy = [] as (SmedDayRangePeriod | string)[];

  return dummy.concat(periods.value).concat('Другая дата');
});

const computedFirstMonth = computed(() => {
  if (hasPeriods.value) {
    const value = range.value;

    return value ? value.to : defaultViewedMonthFirst.value;
  }

  return userViewedMonthFirst.value;
});

const maxViewedMonth = computed(() => {
  if (hasPeriods.value) {
    return undefined;
  }

  const month = boundaredSecondMonth.value;

  return month.append({ month: -1 });
});

const minViewedMonth = computed(() => {
  const month = boundaredFirstMonth.value;

  return month.append({ month: 1 });
});

const boundaredFirstMonth = computed(() => {
  const first = userViewedMonthFirst.value;
  const second = userViewedMonthSecond.value;

  return first.monthSameOrBefore(second) ? first : second;
});

const boundaredSecondMonth = computed(() => {
  const _max = max.value;
  const second = userViewedMonthSecond.value;

  return second.monthBefore(_max) ? second : _max;
});

const matchPeriod = (
  _: SmedDayRange | null,
  item: SmedDayRangePeriod | string
) => {
  const period = activePeriod.value;

  if (typeof item === 'string' && period === null) {
    return true;
  }

  return period === item;
};

const onDayClick = (day: SmedDay) => {
  const value = range.value;

  if (value === null || !value.isSingleDay) {
    range.value = new SmedDayRange(day, day);

    return;
  }

  const next = SmedDayRange.sort(value.from, day);

  range.value = next;

  emit('update:modelValue', next);
};

const onChangeFirstMonth = (month: SmedMonth) => {
  userViewedMonthFirst.value = month;
  userViewedMonthSecond.value = month.append({ month: 1 });
};

const onChangeSecondMonth = (month: SmedMonth) => {
  userViewedMonthFirst.value = month.append({ month: -1 });
  userViewedMonthSecond.value = month;
};

const onUpdateValueFromPeriod = (period: SmedDayRangePeriod | string) => {
  if (typeof period !== 'string') {
    const next = period.range;
    const _min = min.value;
    const _max = max.value;

    emit('update:modelValue', next.dayLimit(_min, _max));

    return;
  }

  if (activePeriod.value !== null) {
    emit('update:modelValue', null);
  }
};

const updateViewedMonths = (value: SmedDayRange | null) => {
  const first = value === null ? defaultViewedMonthFirst.value : value.from;

  userViewedMonthFirst.value = first;
  userViewedMonthSecond.value = first.append({ month: 1 });
};

const updatedViewedMonthSecond = (month: SmedMonth) => {
  const _max = max.value;

  if (month.monthSameOrAfter(_max)) {
    return _max;
  }

  const _min = min.value;

  if (month.monthBefore(_min)) {
    return _min.append({ month: 1 });
  }

  return month;
};

const updatedViewedMonthFirst = (month: SmedMonth, secondViewed: SmedMonth) => {
  if (month.monthSameOrAfter(secondViewed)) {
    return secondViewed.append({ month: -1 });
  }

  const _min = min.value;

  if (month.monthSameOrBefore(_min)) {
    return _min;
  }

  return month;
};

const setInitialViewedMonths = () => {
  if (!range.value) {
    const second = updatedViewedMonthSecond(defaultViewedMonthSecond.value);

    userViewedMonthSecond.value = second;
    userViewedMonthFirst.value = updatedViewedMonthFirst(
      defaultViewedMonthFirst.value,
      second
    );
  }
};

onMounted(() => {
  setInitialViewedMonths();
});

watch(
  modelValue,
  (value) => {
    if (
      (!range.value && value) ||
      (range.value && !value?.daySame(range.value))
    ) {
      range.value = value;

      updateViewedMonths(value);
    }

    range.value = value;
  },
  { immediate: true }
);
</script>

<style lang="scss" module>
.root {
  display: flex;
}

.border {
  border-left: 1px solid var(--smed-base-04);
}

.list {
  width: 100%;
  max-width: 264px;
}
</style>
