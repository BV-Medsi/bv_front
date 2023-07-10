<template>
  <div>
    <template v-for="(row, index) in dateRows" :key="index">
      <div v-if="row.length" :class="$style.dateRow">
        <div
          v-for="date in row"
          :key="date.valueOf()"
          :class="[$style.dateCell, dateCellClass(date)]"
          @click="onDay(date)"
        >
          {{ date.day }}
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import {
  getDaysRows,
  SmedDay,
  SmedDayRange,
  SmedMonth,
} from '@smartmed/utility/date';
import { computed, toRefs, useCssModule } from 'vue';

const props = defineProps<{
  value: SmedDay | SmedDayRange | null;
  month: SmedMonth;
  single: boolean;
  min: SmedDay;
  max: SmedDay;
  disabledDatesHandler: (date: SmedDay) => boolean;
}>();

const emit = defineEmits<{
  (e: 'select', value: SmedDay | SmedDayRange): void;
}>();

const { month, value, single, min, max } = toRefs(props);

const css = useCssModule();

const dateRows = computed(() => getDaysRows(month.value));

const onDay = (day: SmedDay) => {
  if (isDisabled(day, min.value, max.value)) {
    return;
  }

  if (single.value) {
    emit('select', day);

    return;
  }

  const _value = value.value;

  if (_value === null) {
    emit('select', day);

    return;
  }

  if (_value instanceof SmedDay) {
    emit('select', SmedDayRange.sort(_value, day));

    return;
  }

  emit('select', day);
};

const now = SmedDay.currentLocal();

const isSelected = (_value: SmedDay | SmedDayRange, day: SmedDay) => {
  if (_value instanceof SmedDay) {
    return _value.daySame(day);
  } else {
    return _value.from.daySame(day) || _value.to.daySame(day);
  }
};

const inRange = (_value: SmedDay | SmedDayRange, day: SmedDay) => {
  if (_value instanceof SmedDayRange) {
    return _value.from.dayBefore(day) && _value.to.dayAfter(day);
  }

  return false;
};

const isDisabled = (day: SmedDay, _min: SmedDay, _max: SmedDay) => {
  return (
    day.dayBefore(_min) || day.dayAfter(_max) || props.disabledDatesHandler(day)
  );
};

const dateCellClass = (day: SmedDay) => {
  const result = [];

  const isNow = day.daySame(now);
  const _value = value.value;

  if (isNow) {
    result.push(css['dateCell_now']);
  }

  const selected = _value && isSelected(_value, day);

  if (selected) {
    result.push(css['dateCell_selected']);
  }

  const range = _value && inRange(_value, day);

  if (range) {
    result.push(css['dateCell_range']);
  }

  const disabled = isDisabled(day, min.value, max.value);

  if (disabled) {
    result.push(css['dateCell_disabled']);
  }

  return result;
};
</script>

<style lang="scss" module>
.dateRow {
  display: flex;
  justify-content: flex-start;
  z-index: 0;
  height: 50px;

  &:first-child {
    justify-content: flex-end;
  }
}

.dateCell {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 44px;

  margin-right: 9px;

  border: 2px solid transparent;
  border-radius: 100%;

  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &_now {
    border-color: var(--smed-primary);
  }

  &_range {
    background-color: var(--smed-base-05);
    border-color: transparent;
  }

  &_selected {
    background-color: var(--smed-primary);
    color: var(--smed-base-07);
  }

  &_disabled {
    color: var(--smed-base-02);
    background-color: transparent;
    cursor: initial;
  }
}
</style>
