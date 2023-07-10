<template>
  <span>{{ computedDate }}</span>
</template>

<script lang="ts">
export default {
  name: 'TimePreview',
};
</script>

<script setup lang="ts">
import { CHAR_RANGE_SEPARATOR } from '@smartmed/utility/consts';
import {
  getFormattedDateByMask,
  SmedDayRange,
  SmedMonth,
  SmedTime,
} from '@smartmed/utility/date';
import { computed, toRefs } from 'vue';

import { TimePreviewProps } from './TimePreview.props';

const props = withDefaults(defineProps<TimePreviewProps>(), {
  date: null,
  mask: null,
});

const { mask, date } = toRefs(props);

const computedDate = computed(() => {
  const _mask = mask.value;
  const _date = date.value;

  if (_date instanceof SmedMonth) {
    return getFormattedDateByMask(_date.toLocalNativeDate(), _mask);
  }

  if (_date instanceof SmedTime) {
    const { hours, minutes, seconds, ms } = _date;
    const native = new Date();

    native.setHours(hours, minutes, seconds, ms);

    return getFormattedDateByMask(native, _mask);
  }

  if (_date instanceof SmedDayRange) {
    const { from, to } = _date;

    return `${getFormattedDateByMask(
      from.toLocalNativeDate(),
      _mask
    )}${CHAR_RANGE_SEPARATOR}${getFormattedDateByMask(
      to.toLocalNativeDate(),
      _mask
    )}`;
  }

  return getFormattedDateByMask(
    typeof _date === 'string' ? new Date(_date) : _date,
    _mask
  );
});
</script>
