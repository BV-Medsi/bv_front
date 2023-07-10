<template>
  <div
    :class="$style.timePicker"
    :style="{ maxWidth: `${showSeconds ? 300 : 200}px` }"
  >
    <scrollbar ref="hoursScrollbar" :class="$style.scrollbar">
      <div
        v-for="(hour, index) in hours"
        :key="index"
        :class="[$style.item, activeHour === hour && $style.item_active]"
        @click="onClickHours(hour)"
      >
        {{ hour }}
      </div>
    </scrollbar>

    <scrollbar ref="minutesScrollbar" :class="$style.scrollbar">
      <div
        v-for="(minute, index) in minutes"
        :key="index"
        :class="[$style.item, activeMinute === minute && $style.item_active]"
        @click="onClickMinutes(minute)"
      >
        {{ minute }}
      </div>
    </scrollbar>

    <scrollbar
      v-if="showSeconds"
      ref="secondsScrollbar"
      :class="$style.scrollbar"
    >
      <div
        v-for="(second, index) in seconds"
        :key="index"
        :class="[$style.item, activeSecond === second && $style.item_active]"
        @click="onClickSeconds(second)"
      >
        {{ second }}
      </div>
    </scrollbar>

    <div :class="$style.selector">
      <div :class="[$style.hours, !showSeconds && $style.hours_short]">ч</div>
      <div :class="[$style.minutes, !showSeconds && $style.minutes_short]">
        мин
      </div>
      <div v-if="showSeconds" :class="$style.seconds">сек</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Scrollbar from '@smartmed/ui/Scrollbar';
import { SmedTime } from '@smartmed/utility/date';
import { useDebounceFn } from '@smartmed/utility/functions';
import { computed, ref, toRefs, watch } from 'vue';

import { ScrollbarExposed } from '../Scrollbar/Scrollbar.props';
import {
  hourItems,
  minuteItems,
  secondItems,
  TimePickerDefaultProps,
  TimePickerEmits,
  TimePickerProps,
} from './TimePicker.props';

defineOptions({
  name: 'TimePicker',
});

const props = withDefaults(
  defineProps<TimePickerProps>(),
  TimePickerDefaultProps
);

const emit = defineEmits<TimePickerEmits>();

const hours = hourItems;
const minutes = minuteItems;
const seconds = secondItems;

const { mode, modelValue } = toRefs(props);

const hoursScrollbar = ref<ScrollbarExposed | null>(null);
const minutesScrollbar = ref<ScrollbarExposed | null>(null);
const secondsScrollbar = ref<ScrollbarExposed | null>(null);

const activeHour = ref(props.modelValue?.hours || 0);
const activeMinute = ref(props.modelValue?.minutes || 0);
const activeSecond = ref(props.modelValue?.seconds || 0);
const activeMs = ref(props.modelValue?.ms || 0);

const ITEM_HEIGHT = 30;

const computedHoursScrollbar = computed(() => {
  return hoursScrollbar.value?.native || null;
});

const computedMinutesScrollbar = computed(() => {
  return minutesScrollbar.value?.native || null;
});

const computedSecondsScrollbar = computed(() => {
  return secondsScrollbar.value?.native || null;
});

const showSeconds = computed(() => {
  return mode.value === 'HH:MM:SS' || mode.value === 'HH:MM:SS.MSS';
});

const scrollToIndex = (
  scrollbar: HTMLElement,
  index: number,
  isSmooth = true
) => {
  scrollbar.scrollTo({
    top: index * ITEM_HEIGHT,
    behavior: isSmooth ? 'smooth' : undefined,
  });
};

const onScroll = (event: Event) => {
  const target = event.target as HTMLElement;
  const index = Math.round(target.scrollTop / ITEM_HEIGHT);

  scrollToIndex(target, index);

  if (target === computedHoursScrollbar.value) {
    activeHour.value = index;
  }

  if (target === computedMinutesScrollbar.value) {
    activeMinute.value = index;
  }

  if (target === computedSecondsScrollbar.value) {
    activeSecond.value = index;
  }
};

const debounceOnScroll = useDebounceFn(onScroll, 300);

watch(
  computedHoursScrollbar,
  (scrollbar, _, onClean) => {
    if (scrollbar) {
      scrollToIndex(scrollbar, activeHour.value, false);
    }

    scrollbar?.addEventListener('scroll', debounceOnScroll);

    onClean(() => {
      scrollbar?.removeEventListener('scroll', debounceOnScroll);
    });
  },
  { immediate: true }
);

watch(
  computedMinutesScrollbar,
  (scrollbar, _, onClean) => {
    if (scrollbar) {
      scrollToIndex(scrollbar, activeMinute.value, false);
    }

    scrollbar?.addEventListener('scroll', debounceOnScroll);

    onClean(() => {
      scrollbar?.removeEventListener('scroll', debounceOnScroll);
    });
  },
  { immediate: true }
);

watch(
  computedSecondsScrollbar,
  (scrollbar, _, onClean) => {
    if (scrollbar) {
      scrollToIndex(scrollbar, activeSecond.value, false);
    }

    scrollbar?.addEventListener('scroll', debounceOnScroll);

    onClean(() => {
      scrollbar?.removeEventListener('scroll', debounceOnScroll);
    });
  },
  { immediate: true }
);

watch(
  [activeHour, activeMinute, activeSecond, activeMs],
  ([hours, minutes, seconds, ms]) => {
    emit('update:modelValue', new SmedTime(hours, minutes, seconds, ms));
  }
);

const onClickHours = (hour: number) => {
  activeHour.value = hour;

  const scrollbar = computedHoursScrollbar.value;

  if (scrollbar) {
    scrollToIndex(scrollbar, hour);
  }
};

const onClickMinutes = (minute: number) => {
  activeMinute.value = minute;

  const scrollbar = computedMinutesScrollbar.value;

  if (scrollbar) {
    scrollToIndex(scrollbar, minute);
  }
};

const onClickSeconds = (second: number) => {
  activeSecond.value = second;

  const scrollbar = computedSecondsScrollbar.value;

  if (scrollbar) {
    scrollToIndex(scrollbar, second);
  }
};

watch(
  modelValue,
  (value) => {
    const hours = value?.hours || 0;
    const minutes = value?.minutes || 0;
    const seconds = value?.seconds || 0;
    const ms = value?.ms || 0;

    if (hours !== activeHour.value) {
      onClickHours(hours);
    }

    if (minutes !== activeMinute.value) {
      onClickMinutes(minutes);
    }

    if (seconds !== activeSecond.value) {
      onClickSeconds(seconds);
    }

    activeMs.value = ms;
  },
  { immediate: true }
);
</script>

<style lang="scss" module>
$itemHeight: 30px;

.timePicker {
  position: relative;
  display: inline-flex;
  width: 100%;
  max-height: 200px;
}

.scrollbar {
  width: 100%;
  max-height: 200px;

  padding-top: calc($itemHeight * 3);
  padding-bottom: calc($itemHeight * 3 - 8px);
}

.item {
  @include transition(all);

  padding: 4px 12px;
  text-align: center;
  height: $itemHeight;
  color: var(--smed-base-02);
  cursor: pointer;
  border-radius: 12px;

  &:hover {
    background-color: var(--smed-base-05);
  }

  &_active {
    color: var(--smed-base-01);
  }
}

.selector {
  position: absolute;
  display: flex;
  left: 0;
  top: calc(50% + 5px);
  transform: translateY(-50%);
  height: calc($itemHeight + 2px);
  width: 100%;
  border: 1px solid var(--smed-base-04);
  pointer-events: none;
  user-select: none;
  border-radius: 12px;
}

.hours,
.minutes,
.seconds {
  text-align: center;
  color: var(--smed-base-02);
  width: 50%;
  padding-top: 4px;
}

.hours {
  padding-left: 24px;

  &_short {
    padding-left: 28px;
  }
}

.minutes {
  text-align: right;
  padding-right: 8px;

  &_short {
    padding-right: 6px;
  }
}

.seconds {
  text-align: right;
  padding-right: 12px;
}
</style>
