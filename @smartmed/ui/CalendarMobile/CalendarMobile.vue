<template>
  <div>
    <div :class="$style.header">
      <span class="smed-text_body-xl smed-text_medium">
        Выберите {{ single ? 'день' : 'период' }}
      </span>
    </div>

    <scrollbar ref="yearsScrollbar" :class="$style.years">
      <div :class="$style.years__container">
        <button
          v-for="year in years"
          :id="`year_${year}`"
          :key="year"
          :class="[
            $style.years__item,
            (selectedYear.year === year - 1 ||
              selectedYear.year === year + 1) &&
              $style.years__item_adjacent,
            selectedYear.year === year && $style.years__item_active,
          ]"
          @click="onYear(year)"
        >
          {{ year }}
        </button>
      </div>
    </scrollbar>

    <div :class="$style.weeks">
      <div v-for="week in weekdays" :key="week" :class="$style.weeks__item">
        {{ week }}
      </div>
    </div>

    <scrollbar ref="monthsScrollbar" :class="$style.months">
      <section
        v-for="month in months"
        :id="`month_${month.month}`"
        :key="month.month"
      >
        <h2
          :class="[
            'smed-text_h4 smed-text_medium smed-space_vertical-2',
            $style.name,
          ]"
        >
          {{ monthDict[month.month] }}
        </h2>

        <internal-calendar-mobile
          :value="originalValue"
          :month="month"
          :class="$style.calendar"
          :single="single"
          :min="min"
          :max="max"
          :disabled-dates-handler="disabledDatesHandler"
          @select="onSelect"
        />
      </section>
    </scrollbar>

    <div :class="[$style.actions, actionsFixed && $style.actions_fixed]">
      <base-button @click="onSubmit"> Подтвердить </base-button>

      <base-button
        color="secondaryOutlined"
        class="smed-space_top-1"
        @click="onCancel"
      >
        Отменить
      </base-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@smartmed/ui/BaseButton';
import Scrollbar from '@smartmed/ui/Scrollbar';
import {
  getYearsBetween,
  MONTHS_IN_YEAR,
  SmedDay,
  SmedDayRange,
  SmedMonth,
  SmedYear,
} from '@smartmed/utility/date';
import { computed, ref, toRefs, watch } from 'vue';

import {
  getDefaultMonth,
  getDefaultSelectedMonth,
} from '../Calendar/getDefaultSelectedMonth';
import { ScrollbarExposed } from '../Scrollbar/Scrollbar.props';
import {
  CalendarMobileDefaultProps,
  CalendarMobileEmits,
  CalendarMobileProps,
} from './CalendarMobile.props';
import InternalCalendarMobile from './InternalCalendarMobile.vue';

const props = withDefaults(
  defineProps<CalendarMobileProps>(),
  CalendarMobileDefaultProps
);

const emit = defineEmits<CalendarMobileEmits>();

const { value, single, min, max } = toRefs(props);

const monthsScrollbar = ref<ScrollbarExposed | null>(null);
const yearsScrollbar = ref<ScrollbarExposed | null>(null);

const weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'] as const;

const now = SmedDay.currentLocal();
const selectedYear = ref<SmedYear>(
  getDefaultSelectedMonth(min.value, max.value)
);
const viewedMonth = ref<SmedMonth>(
  getDefaultSelectedMonth(min.value, max.value)
);

const computedMonthsScrollbar = computed(() => {
  return monthsScrollbar.value?.native || null;
});

const computedYearsScrollbar = computed(() => {
  return yearsScrollbar.value?.native || null;
});

const years = ([] as number[]).concat(
  ...getYearsBetween(
    now.year,
    now.append({ year: -100 }).year,
    now.append({ year: 100 }).year,
    1,
    200
  )
);

const originalValue = ref<SmedDay | SmedDayRange | null>(props.value || null);

const months = computed(() => {
  const result = [] as SmedMonth[];
  const _year = selectedYear.value.year;

  for (let i = 0; i < MONTHS_IN_YEAR; i++) {
    result.push(new SmedMonth(_year, i));
  }

  return result;
});

const monthDict: Record<number, string> = {
  '0': 'Январь',
  '1': 'Февраль',
  '2': 'Март',
  '3': 'Апрель',
  '4': 'Май',
  '5': 'Июнь',
  '6': 'Июль',
  '7': 'Август',
  '8': 'Сентябрь',
  '9': 'Октябрь',
  '10': 'Ноябрь',
  '11': 'Декабрь',
};

const onSelect = (value: SmedDay | SmedDayRange) => {
  originalValue.value = value;
};

const onYear = (value: number) => {
  selectedYear.value = new SmedYear(value);
  viewedMonth.value = new SmedMonth(value, viewedMonth.value.month);
};

const onSubmit = () => {
  const _value = originalValue.value;

  if (single.value) {
    if (_value instanceof SmedDayRange) {
      emit('confirm', _value.from);
    } else {
      emit('confirm', _value);
    }
  } else {
    if (_value instanceof SmedDay) {
      emit('confirm', new SmedDayRange(_value, _value));
    } else {
      emit('confirm', _value);
    }
  }
};

const onCancel = () => {
  emit('cancel');
};

const scrollToMonth = ([month, _scrollbar]: [
  SmedMonth,
  HTMLElement | null
]) => {
  if (_scrollbar) {
    const monthElement = _scrollbar.querySelector(
      `#month_${month.month}`
    ) as HTMLElement;

    _scrollbar.scrollTo({
      top: monthElement.offsetTop,
    });
  }
};

const scrollToYear = ([year, _scrollbar]: [SmedYear, HTMLElement | null]) => {
  if (_scrollbar) {
    const yearElement = _scrollbar.querySelector(
      `#year_${year.year}`
    ) as HTMLElement;

    yearElement?.scrollIntoView({
      block: 'center',
      inline: 'center',
    });
  }
};

watch(
  value,
  (_value) => {
    originalValue.value = _value;

    const simple = _value instanceof SmedDayRange ? _value.from : _value;
    const defaultMonth = getDefaultMonth(simple, min.value, max.value);

    selectedYear.value = defaultMonth;
    viewedMonth.value = defaultMonth;
  },
  { immediate: true }
);

watch([viewedMonth, computedMonthsScrollbar], scrollToMonth);

watch([selectedYear, computedYearsScrollbar], scrollToYear);
</script>

<style lang="scss" module>
$header: 22px;
$years: 64px;
$weeks: 30px;
$actions: 129px;
$borders: 3px;
$correction: calc($header + $years + $weeks + $actions + $borders);

.header {
  text-align: center;

  height: $header;
}

.name {
  padding-left: 16px;
}

.calendar {
  margin: 0 auto;
  width: 362px;
}

.years {
  height: $years;

  border-bottom: 1px solid var(--smed-base-04);

  &__container {
    display: flex;

    height: calc($years - 4px);
  }

  &__item {
    @include clearbutton;

    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 20vw;

    color: var(--smed-base-03);
    transform: scale(0.82);

    &_adjacent {
      @include smed-text_medium;

      color: var(--smed-base-02);
      transform: scale(0.92);
    }

    &_active {
      @include smed-text_medium;

      color: var(--smed-primary);

      transform: scale(1);
    }
  }
}

.weeks {
  display: flex;
  align-items: center;

  margin: 0 auto;
  height: $weeks;
  width: 100%;
  max-width: 362px;

  &__item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
}

.months {
  border-top: 1px solid var(--smed-base-04);

  height: calc(100% - $correction);
}

.actions {
  display: flex;
  flex-direction: column;

  padding: 16px 0;

  border-top: 1px solid var(--smed-base-04);

  &_fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 16px 8px;
  }
}
</style>
