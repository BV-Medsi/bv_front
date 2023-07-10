<template>
  <div :class="[$style.container, showYears && $style.container_overflow]">
    <template v-if="!showYears">
      <div :class="$style.monthContainer">
        <base-button
          color="outlined"
          data-automation-id="smed-calendar__month-button-left"
          size="sm"
          icon="arrow-left"
          :class="!showLeftButton && $style.buttonHidden"
          @click="onPrevMonth"
        />

        <div :class="$style.month">
          <span
            data-automation-id="smed-calendar__month-name"
            class="smed-space_right-1"
          >
            {{ formattedMonth }}
          </span>

          <span
            data-automation-id="smed-calendar__year"
            :class="$style.year"
            @click="onYearClick"
            >{{ selectedMonth.year }}</span
          >
        </div>

        <base-button
          color="outlined"
          data-automation-id="smed-calendar__month-button-right"
          size="sm"
          icon="arrow-right"
          :class="!showRightButton && $style.buttonHidden"
          @click="onNextMonth"
        />
      </div>

      <div :class="$style.weekdays">
        <span
          v-for="weekday in weekdays"
          :key="weekday"
          data-automation-id="smed-calendar__weekday"
          :class="$style.date"
        >
          {{ weekday }}
        </span>
      </div>

      <div :class="$style.datesContainer">
        <div
          v-for="(row, index) in dateRows"
          :key="index"
          :class="$style.dateRow"
        >
          <div
            v-for="date in row"
            :key="date.valueOf()"
            data-automation-id="smed-calendar__day-row"
            :class="[
              $style.dateCell,
              inInterval(date) && $style.dateCell_interval,
              intervalClass(date),
            ]"
          >
            <div
              data-automation-id="smed-calendar__day"
              :class="[
                $style.date,
                $style.date_hovered,
                isCurrentDay(date) && $style.date_current,
                isSelectedDay(date, value) && $style.date_selected,
                !date.monthSame(selectedMonth) && $style.date_adjacent,
                isDisabledDay(date) && $style.date_disabled,
              ]"
              @mouseenter="onMouseEnter(date)"
              @mouseleave="onMouseEnter(null)"
              @click="onSelectDay(date)"
            >
              <span>{{ date.day }}</span>
            </div>
          </div>
        </div>
      </div>
    </template>

    <scrollbar
      v-else
      ref="yearContainer"
      data-automation-id="smed-calendar__year-scrollbar"
      :class="$style.yearContainer"
    >
      <div
        v-for="(yearRow, index) in years"
        :key="index"
        :class="$style.yearRow"
      >
        <span
          v-for="year in yearRow"
          :id="'smed_year_picker_' + year"
          :key="year"
          data-automation-id="smed-calendar__year-picker"
          :class="[
            $style.yearItem,
            isCurrentYear(year) && $style.yearItem_current,
            isSelectedYear(year, selectedMonth) && $style.yearItem_selected,
          ]"
          @click="onSelectYear(year)"
          >{{ year }}</span
        >
      </div>
    </scrollbar>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@smartmed/ui/BaseButton';
import Scrollbar from '@smartmed/ui/Scrollbar';
import {
  dateClamp,
  getDaysRows,
  getYearsBetween,
  SmedDay,
  SmedDayRange,
  SmedMonth,
} from '@smartmed/utility/date';
import { computed, Ref, ref, toRefs, useCssModule, watch } from 'vue';

import {
  CalendarDefaultProps,
  CalendarEmits,
  CalendarProps,
} from './Calendar.props';
import { getDefaultMonth } from './getDefaultSelectedMonth';

defineOptions({
  name: 'Calendar',
});

const props = withDefaults(defineProps<CalendarProps>(), CalendarDefaultProps);
const emit = defineEmits<CalendarEmits>();

const {
  value,
  showAdjacentDays,
  min,
  max,
  month,
  maxViewedMonth,
  minViewedMonth,
  hoveredItem,
} = toRefs(props);

const cssModule = useCssModule();

const showYears = ref(false);
const selectedMonth = ref(
  getDefaultMonth(month?.value || null, min.value, max.value)
);

const yearContainer = ref<{ native: Ref<HTMLElement | null> } | null>(null);

const weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'] as const;
const monthDict: Record<number, string> = {
  '0': 'январь',
  '1': 'февраль',
  '2': 'март',
  '3': 'апрель',
  '4': 'май',
  '5': 'июнь',
  '6': 'июль',
  '7': 'август',
  '8': 'сентябрь',
  '9': 'октябрь',
  '10': 'ноябрь',
  '11': 'декабрь',
};
const smedNow = SmedDay.currentLocal();

const dateRows = computed(() => {
  return getDaysRows(selectedMonth.value, showAdjacentDays.value);
});

const years = computed(() => {
  const currentYear = selectedMonth.value.year;
  const minYear = min.value.year;
  const maxYear = max.value.year;

  return getYearsBetween(currentYear, minYear, maxYear);
});

const formattedMonth = computed(() => {
  const value = selectedMonth.value.month;

  return monthDict[value];
});

const computedMin = computed(() => {
  const viewed = minViewedMonth.value;
  const _min = min.value;

  return viewed.monthSameOrAfter(_min) ? viewed : _min;
});

const computedMax = computed(() => {
  const viewed = maxViewedMonth.value;
  const _max = max.value;

  return viewed.monthSameOrBefore(_max) ? viewed : _max;
});

const showLeftButton = computed(() => {
  const currentMonth = selectedMonth.value;
  const _min = computedMin.value;

  return currentMonth.monthAfter(_min);
});

const showRightButton = computed(() => {
  const _max = computedMax.value;
  const currentMonth = selectedMonth.value;

  return currentMonth.monthBefore(_max);
});

const onPrevMonth = () => {
  if (!showLeftButton.value) {
    return;
  }

  const currentMonth = selectedMonth.value;

  selectedMonth.value = dateClamp(
    currentMonth.append({ month: -1 }),
    computedMin.value,
    computedMax.value
  );

  emit('update:month', selectedMonth.value);
};

const onNextMonth = () => {
  if (!showRightButton.value) {
    return;
  }

  const currentMonth = selectedMonth.value;

  selectedMonth.value = dateClamp(
    currentMonth.append({ month: 1 }),
    computedMin.value,
    computedMax.value
  );

  emit('update:month', selectedMonth.value);
};

const onMouseEnter = (day: SmedDay | null) => {
  if (day && isDisabledDay(day)) {
    return;
  }

  emit('update:hoveredItem', day);
};

const isSelectedDay = (
  date: SmedDay,
  selectedDate: SmedDay | SmedDayRange | null
) => {
  if (!selectedDate) {
    return false;
  }

  if (selectedDate instanceof SmedDay) {
    return date.daySame(selectedDate);
  }

  const { from, to } = selectedDate;

  return from.daySame(date) || to.daySame(date);
};

const isCurrentDay = (date: SmedDay) => {
  return date.daySame(smedNow);
};

const onSelectDay = (date: SmedDay) => {
  if (isDisabledDay(date)) {
    return;
  }

  emit('dayClick', date);
};

const onYearClick = () => {
  showYears.value = true;
};

const isCurrentYear = (year: number) => {
  return smedNow.year === year;
};

const onSelectYear = (year: number) => {
  selectedMonth.value = dateClamp(
    new SmedMonth(year, selectedMonth.value.month),
    computedMin.value,
    computedMax.value
  );

  showYears.value = false;

  emit('update:month', selectedMonth.value);
};

const isSelectedYear = (year: number, date: SmedMonth) => {
  return year === date.year;
};

const isDisabledDay = (date: SmedDay) => {
  const _min = min.value;
  const _max = max.value;

  return (
    date.dayBefore(_min) ||
    date.dayAfter(_max) ||
    props.disabledDatesHandler(date)
  );
};

const inInterval = (day: SmedDay) => {
  const _value = value.value;

  if (!_value || _value instanceof SmedDay) {
    return false;
  }

  if (!_value.isSingleDay) {
    return _value.from.daySameOrBefore(day) && _value.to.daySameOrAfter(day);
  }

  const hovered = hoveredItem.value;

  if (hovered === null) {
    return false;
  }

  const range = SmedDayRange.sort(_value.from, hovered);

  return range.from.daySameOrBefore(day) && range.to.daySameOrAfter(day);
};

const intervalState = (day: SmedDay) => {
  const _value = value.value;

  if (!_value) {
    return null;
  }

  if (_value instanceof SmedDay) {
    return _value.daySame(day) ? 'single' : null;
  }

  const hovered = hoveredItem.value;
  const isStart =
    (_value.from.daySame(day) && !_value.isSingleDay) ||
    (hovered?.dayAfter(_value.from) &&
      _value.from.daySame(day) &&
      _value.isSingleDay) ||
    (hovered?.daySame(day) &&
      hovered.dayBefore(_value.from) &&
      _value.isSingleDay);

  if (isStart) {
    return 'start';
  }

  const isEnd =
    (_value.to.daySame(day) && !_value.isSingleDay) ||
    (hovered?.dayBefore(_value.from) &&
      _value.from.daySame(day) &&
      _value.isSingleDay) ||
    (hovered?.daySame(day) &&
      hovered.dayAfter(_value.from) &&
      _value.isSingleDay);

  if (isEnd) {
    return 'end';
  }

  return _value.isSingleDay && _value.from.daySame(day) ? 'single' : null;
};

const intervalClass = (day: SmedDay) => {
  const state = intervalState(day);

  switch (state) {
    case 'single':
      return cssModule['dateCell_intervalSingle'];
    case 'start':
      return cssModule['dateCell_intervalStart'];
    case 'end':
      return cssModule['dateCell_intervalEnd'];
  }
};

watch(yearContainer, (value) => {
  if (value && value.native) {
    const _year = selectedMonth.value.year;
    const element = value.native.querySelector(`#smed_year_picker_${_year}`);

    if (element) {
      element.scrollIntoView({ block: 'center' });
    }
  }
});

if (month) {
  watch(month, (value) => {
    selectedMonth.value = getDefaultMonth(value || null, min.value, max.value);
  });
}

watch(
  value,
  (_value) => {
    if (showAdjacentDays.value && _value instanceof SmedDay) {
      selectedMonth.value = _value;
    }
  },
  { immediate: true }
);
</script>

<style lang="scss" module>
.container {
  @include strict-size(264px, 312px);

  padding: 20px;

  &_overflow {
    overflow-y: auto;
  }
}

.monthContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 16px;
}

.buttonHidden {
  opacity: 0;
  pointer-events: none;
}

.datesContainer {
  display: flex;
  flex-direction: column;
}

.dateRow {
  display: flex;
  justify-content: flex-start;
  z-index: 0;

  &:first-child {
    justify-content: flex-end;

    .dateCell:nth-last-of-type(-n + 2) {
      color: var(--smed-error);
    }
  }
}

.year {
  @include transition(color);

  cursor: pointer;

  &:hover {
    color: var(--smed-base-02);
  }
}

.dateCell {
  position: relative;

  &:nth-of-type(6),
  &:nth-of-type(7) {
    color: var(--smed-error);
  }

  &_intervalStart,
  &:first-child {
    &:after {
      border-radius: 100% 0 0 100%;
    }
  }

  &_intervalEnd,
  &:last-child {
    &:after {
      border-radius: 0 100% 100% 0;
      right: 4px !important;
    }
  }

  &_intervalStart:last-child,
  &_intervalEnd:first-child,
  &_intervalSingle {
    &:after {
      border-radius: 100% !important;
    }
  }

  &_interval {
    &:after {
      content: '';
      position: absolute;
      left: -1px;
      top: 4px;
      bottom: 0;
      right: 1px;
      z-index: -2;

      background-color: var(--smed-primary-light);
      opacity: 0.64;
    }
  }
}

.date {
  @include transition(color);

  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 32px;
  height: 32px;

  border-radius: 100%;

  border-top: 4px solid transparent;
  border-right: 4px solid transparent;
  background-clip: content-box;
  box-sizing: border-box;
  vertical-align: middle;

  &_hovered {
    cursor: pointer;

    &:before,
    &:after {
      @include transition(background-color);

      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;

      border-radius: inherit;
    }

    &:hover:not(.date_selected):not(.date_disabled) {
      &:before,
      &:after {
        background-color: var(--smed-primary-light);
      }
    }
  }

  &_selected {
    color: var(--smed-base-07);

    &:before,
    &:after {
      background-color: var(--smed-primary);
    }
  }

  &_current:not(.date_selected) {
    &:before,
    &:after {
      border-radius: inherit;
      box-shadow: 0 0 0 1px var(--smed-primary);
    }
  }

  &_adjacent {
    opacity: 0.64;
  }

  &_disabled {
    opacity: 0.64;
    cursor: default;
  }
}

.month {
  @include smed-text_body-xl;
  @include smed-text_medium;

  text-transform: capitalize;
}

.yearContainer {
  height: 100%;
}

.yearRow {
  display: flex;
  justify-content: space-between;

  & + & {
    margin-top: 12px;
  }
}

.weekdays {
  display: flex;
  flex-wrap: nowrap;
}

.yearItem {
  @include transition(background-color);

  padding: 8px;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;

  &:hover:not(.yearItem_selected) {
    background-color: var(--smed-base-05);
  }

  &_current:not(.yearItem_selected) {
    outline: 1px solid var(--smed-primary);
  }

  &_selected {
    background-color: var(--smed-primary);
    color: var(--smed-base-07);
  }
}
</style>
