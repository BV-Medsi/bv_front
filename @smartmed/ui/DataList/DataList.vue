<template>
  <div
    ref="root"
    :class="[$style.list, overflowy && $style.list_overflowy]"
    @keydown.up.prevent="onMoveFocus($event, -1)"
    @keydown.down.prevent="onMoveFocus($event, 1)"
  >
    <div v-if="isLoading" :class="[$style.spinner, $style['item_' + size]]">
      <spinner theme="primary" size="md" />
    </div>

    <template v-else>
      <div v-if="items && items.length > 0" :class="$style.buttons">
        <slot
          name="list"
          :on-update="onUpdate"
          :get-is-active="isActive.bind(null, modelValue)"
        >
          <data-list-item
            v-for="(item, index) in items"
            :key="index"
            :size="size"
            @onClick="onUpdate(item)"
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
          </data-list-item>
        </slot>

        <data-list-item v-if="hasAction" :size="size">
          <slot name="action" />
        </data-list-item>
      </div>

      <data-list-item v-else :hoverable="false" :size="size">
        <span style="color: var(--smed-base-03)">
          <slot name="emptyContent"> Ничего не найдено </slot>
        </span>
      </data-list-item>
    </template>
  </div>
</template>

<script setup lang="ts" generic="T, U = T">
import DataListItem from '@smartmed/ui/DataListItem';
import Spinner from '@smartmed/ui/Spinner';
import SvgIcon from '@smartmed/ui/SvgIcon';
import { moveFocus } from '@smartmed/utility/dom';
import { hasSlotContent } from '@smartmed/utility/vue';
import { computed, ref, toRefs, useSlots } from 'vue';

import {
  DataListDefaultProps,
  DataListEmits,
  DataListProps,
  DataListSlots,
} from './DataList.props';

defineOptions({
  name: 'DataList',
});

const props = withDefaults(
  defineProps<DataListProps<T, U>>(),
  // @ts-expect-error Пока не справляется vue с generic типами в withDefaults
  DataListDefaultProps
);

const emit = defineEmits<DataListEmits<U>>();

defineSlots<DataListSlots<U>>();

const { items, size } = toRefs(props);
const slots = useSlots();

const root = ref<HTMLElement | null>(null);

const isLoading = computed(() => items.value === null);

const iconSize = computed(() => {
  return size!.value === 'sm' ? 'md' : 'lg';
});

const hasAction = computed(() => hasSlotContent(slots.action));

const getChildDataListElements = () => {
  const rootElement = root.value;

  const result =
    rootElement?.querySelectorAll('[data-smed-data-list-item=""]') || [];

  return Array.from(result) as HTMLElement[];
};

const onMoveFocus = (event: KeyboardEvent, step: 1 | -1) => {
  const target = event.target as HTMLElement;
  const elements = getChildDataListElements();

  moveFocus(elements.indexOf(target), elements, step);
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

.buttons {
  display: flex;
  flex-direction: column;
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
