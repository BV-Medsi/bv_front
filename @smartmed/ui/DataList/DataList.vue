<template>
  <div :class="[$style.list, overflowy && $style.list_overflowy]">
    <template v-if="isLoading">
      <div :class="[$style.spinner, $style['item_' + size]]">
        <spinner theme="primary" size="md" />
      </div>
    </template>

    <template v-else>
      <template v-if="items && items.length > 0">
        <ul v-if="!virtualListProps">
          <li
            v-for="(item, index) in items"
            v-keyboard-focused
            ref="element"
            :key="index"
            tabindex="0"
            :class="[
              'smed-text_body-xl',
              $style.item,
              $style.item_hoverable,
              $style['item_' + size],
            ]"
            @keydown.up.prevent.stop="onKeydownArrowUp($refs.element, index)"
            @keydown.down.prevent.stop="
              onKeydownArrowDown($refs.element, index)
            "
            @keydown.enter.stop.prevent="onUpdate(item)"
            @click="onUpdate(item)"
          >
            <slot
              name="itemContent"
              :item="item"
              :active="isActive(modelValue, item)"
            >
              <span>{{ item }}</span>

              <svg-icon
                v-if="isActive(modelValue, item)"
                name="check"
                :class="$style.icon"
                :size="iconSize"
              />
            </slot>
          </li>

          <li
            v-if="hasAction"
            :class="[
              'smed-text_body-xl',
              $style.item,
              $style.item_hoverable,
              $style['item_' + size],
            ]"
          >
            <slot name="action" />
          </li>
        </ul>

        <virtual-list v-else v-bind="virtualListProps" :items="items">
          <template v-slot:default="{ item }">
            <li
              v-keyboard-focused
              tabindex="0"
              :class="[
                'smed-text_body-xl',
                $style.item,
                $style.item_hoverable,
                $style['item_' + size],
              ]"
              @keydown.enter.stop.prevent="onUpdate(item)"
              @click="onUpdate(item)"
            >
              <slot
                name="itemContent"
                :item="item"
                :active="isActive(modelValue, item)"
              >
                <span>{{ item }}</span>

                <svg-icon
                  v-if="isActive(modelValue, item)"
                  name="check"
                  :class="$style.icon"
                  :size="iconSize"
                />
              </slot>
            </li>
          </template>

          <template #after>
            <slot name="action" />
          </template>
        </virtual-list>
      </template>

      <div
        v-else
        :class="[
          'smed-text_body-xl',
          $style.item,
          $style.item_notFound,
          $style['item_' + size],
        ]"
      >
        <slot name="emptyContent"> Ничего не найдено </slot>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DataList',
};
</script>

<script setup lang="ts" generic="T, U = T">
import Spinner from '@smartmed/ui/Spinner';
import SvgIcon from '@smartmed/ui/SvgIcon';
import VirtualList from '@smartmed/ui/VirtualList';
import { KeyboardFocusedDirective as vKeyboardFocused } from '@smartmed/utility/directives';
import { moveFocus } from '@smartmed/utility/dom/focus';
import { hasSlotContent } from '@smartmed/utility/vue';
import { computed, toRefs, useSlots } from 'vue';

import {
  DataListDefaultProps,
  DataListEmits,
  DataListProps,
  DataListSlots,
} from './DataList.props';

const props = withDefaults(
  defineProps<DataListProps<T, U>>(),
  // @ts-expect-error Пока не справляется vue с generic типами в withDefaults
  DataListDefaultProps
);

const emit = defineEmits<DataListEmits<U>>();

defineSlots<DataListSlots<U>>();

const { items, size } = toRefs(props);
const slots = useSlots();

const isLoading = computed(() => items.value === null);

const iconSize = computed(() => {
  return size!.value === 'sm' ? 'md' : 'lg';
});

const hasAction = computed(() => hasSlotContent(slots.action));

const onKeydownArrowUp = (elements: unknown, index: number) => {
  const _elements = elements as HTMLElement[];

  moveFocus(index, _elements, -1);
};

const onKeydownArrowDown = (elements: unknown, index: number) => {
  const _elements = elements as HTMLElement[];

  moveFocus(index, _elements, 1);
};

const onUpdate = (item: U) => {
  emit('update:modelValue', item);
};

const isActive = (value: any, item: any) => {
  return props.matcher!(value, item);
};
</script>

<style lang="scss" module>
.list {
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: inherit;

  &_overflowy {
    overflow-y: auto;
  }
}

.icon {
  display: inline-flex;
  align-self: center;
}

.spinner {
  text-align: center;
}

.item {
  @include transition(background-color);

  display: flex;
  justify-content: space-between;
  cursor: pointer;

  &_notFound {
    cursor: default;

    color: var(--smed-base-03);
  }

  &_hoverable {
    &:hover {
      background-color: var(--smed-base-06);
    }
  }

  &_sm {
    padding: 6px 8px;
  }

  &_md {
    padding: 8px 12px;
  }

  &_lg {
    padding: 12px 16px;
  }
}
</style>
