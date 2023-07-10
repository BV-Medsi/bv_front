<template>
  <div :class="[$style.tabs, $style['tabs_' + size]]">
    <link-or-button
      v-for="tab in tabs"
      v-keyboard-focused
      v-slot="params"
      :key="getKey(tab, (tabKey as TabKey))"
      :class="[
        $style.tabContainer,
        $style['tabContainer_' + type],
        wide && $style.tabContainer_wide,
      ]"
      :to="asRouter ? tab as RouteLocationRaw : undefined"
      :tabindex="getTabindex(tab)"
      @click="onUpdate(tab)"
    >
      <div
        :class="[
          'smed-text_body-xl',
          $style.tab,
          $style['tab_' + size],
          $style['tab_' + type],
          underlineInactiveBorder && $style.tab_bordered,
          getIsActiveIfRouterPossible(tab, params) && $style.tab_active,
        ]"
      >
        <slot :tab="tab" :active="getIsActiveIfRouterPossible(tab, params)">
          {{ tab }}
        </slot>
      </div>
    </link-or-button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Tabs',
};
</script>

<script setup lang="ts" generic="T, U = T | RouteLocationRaw">
import { KeyboardFocusedDirective as vKeyboardFocused } from '@smartmed/utility/directives';
import { toRefs } from 'vue';
import { RouteLocationRaw } from 'vue-router';

import { LinkOrButton } from '../../helpers/LinkOrButton';
import {
  TabsDefaultProps,
  TabsEmits,
  TabsProps,
  TabsSlots,
} from './Tabs.props';

type Props = TabsProps<T, U>;

type TabKey = NonNullable<Props['tabKey']>;

const props = withDefaults(
  defineProps<Props>(),
  // @ts-expect-error Пока не справляется vue с generic типами в withDefaults
  TabsDefaultProps
);
const emit = defineEmits<TabsEmits<U>>();

defineSlots<TabsSlots<U>>();

const { asRouter, modelValue, tabKey, routeExactMatch } = toRefs(props);

const isActive = (value: T, tab: U, tabKey?: TabKey) => {
  if (
    tabKey &&
    !props.compare &&
    typeof tab !== 'string' &&
    typeof tab !== 'number'
  ) {
    return (value[tabKey] as any) === tab[tabKey];
  }

  return props.compare ? props.compare(value, tab) : (value as any) === tab;
};

const getKey = (tab: U, tabKey?: TabKey): string | number => {
  return typeof tab === 'string' || typeof tab === 'number' || !tabKey
    ? tab
    : (tab[tabKey] as any);
};

const getTabindex = (tab: U) => {
  if (asRouter.value) {
    return '0';
  }

  const active = isActive(
    modelValue!.value as T,
    tab,
    tabKey!.value as any as TabKey
  );

  return active ? '-1' : '0';
};

const getIsActiveIfRouterPossible = (
  tab: U,
  params: { isExactActive: boolean; isActive: boolean }
) => {
  if (asRouter.value) {
    const exact = routeExactMatch.value;

    return exact ? params.isExactActive : params.isActive;
  }

  return isActive(modelValue!.value as T, tab, tabKey!.value as any as TabKey);
};

const onUpdate = (tab: U) => {
  emit('update:modelValue', tab);
};
</script>

<style lang="scss" module>
.tabs {
  @include hide-scroll;

  display: inline-flex;
  width: 100%;
  flex-wrap: nowrap;
  overflow: auto;
}

.tab {
  @include flex(center, center);

  box-sizing: border-box;
  flex-shrink: 0;
  cursor: pointer;

  &_boxed {
    color: var(--smed-base-01);
  }

  &_boxed#{&}_active {
    border-radius: 8px;
    background-color: var(--smed-primary);
    color: var(--smed-base-07);
  }

  &_underline {
    @include transition(color);

    position: relative;

    &:after {
      @include transition(opacity);

      content: '';
      position: absolute;
      left: 0;
      bottom: -1px;
      width: 100%;
      max-height: 2px;
      height: 2px;
      min-height: 2px;
      box-sizing: border-box;
      border-radius: 2px 2px 0px 0px;
      border: 1px solid var(--smed-primary);
      background-color: var(--smed-primary);
      opacity: 0.0000001;
    }
  }

  &_underline#{&}_bordered {
    border-bottom: 1px solid var(--smed-base-03);
  }

  &_sm {
    padding: 12px;
  }

  &_md {
    padding: 16px 32px;
  }

  &_underline#{&}_active {
    color: var(--smed-primary);

    &:after {
      opacity: 1;
    }
  }

  &_active {
    cursor: default;
  }
}

.tabContainer {
  @include clearbutton;

  flex-shrink: 0;
  color: inherit;

  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  &_boxed {
    background-color: var(--smed-base-07);
  }

  &_wide {
    flex: 1;
  }

  &:hover {
    text-decoration: none;
  }
}
</style>
