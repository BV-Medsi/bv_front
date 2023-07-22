<template>
  <div :class="$style.container">
    <div :class="['smed-space_bottom-6', $style.header]">
      <slot name="header" />

      <dropdown-host v-model="dropdownOpened">
        <search-input
          v-model="search"
          ref="searchRef"
          placeholder="Поиск по разделам"
          :pseudo-focused="dropdownOpened"
        />

        <template #dropdown>
          <data-list
            :model-value="search"
            :items="dataListItems"
            @update:model-value="onUpdateSearch"
          >
            <template #list="{ onUpdate }">
              <div
                v-for="(item, index) in searchedItems"
                :key="index"
                :class="[
                  $style.items,
                  !('children' in item)
                    ? $style.items_single
                    : $style.items_list,
                ]"
              >
                <template v-if="'children' in item">
                  <p :class="$style.items__label">{{ item.title }}</p>

                  <data-list-item
                    v-for="(child, childIndex) in item.children"
                    :key="`${index}_${childIndex}`"
                    @onClick="onUpdate(child as any)"
                    @keydown.esc="closeDropdownAndFocusOnSearch"
                  >
                    {{ child.title }}
                  </data-list-item>
                </template>

                <template v-else>
                  <data-list-item
                    @onClick="onUpdate(item as any)"
                    @keydown.esc="closeDropdownAndFocusOnSearch"
                  >
                    {{ item.title }}
                  </data-list-item>
                </template>
              </div>
            </template>
          </data-list>
        </template>
      </dropdown-host>
    </div>

    <scrollbar>
      <navigation-section
        v-for="(section, index) in sections"
        :key="index"
        :section="section"
      />
    </scrollbar>

    <slot name="footer" />
  </div>
</template>

<script setup lang="ts">
import DataList from '@smartmed/ui/DataList';
import DataListItem from '@smartmed/ui/DataListItem';
import DropdownHost from '@smartmed/ui/DropdownHost';
import Scrollbar from '@smartmed/ui/Scrollbar';
import SearchInput from '@smartmed/ui/SearchInput';
import { computed, onMounted, ref, toRefs, watch } from 'vue';
import { RouteLocationRaw, useRouter } from 'vue-router';

import {
  NavigationBarDefaultProps,
  NavigationBarProps,
  NavigationBarSlots,
} from './NavigationBar.props';
import NavigationSection from './NavigationSection.vue';

const props = withDefaults(
  defineProps<NavigationBarProps>(),
  NavigationBarDefaultProps
);

defineSlots<NavigationBarSlots>();

const { sections, autofocusOnSearch } = toRefs(props);

const router = useRouter();
const search = ref('');
const searchRef = ref<{ focus: () => void } | null>(null);
const dropdownOpened = ref(false);

const getChildren = (
  item: NavigationBarProps['sections'][number]
): { title: string; to: RouteLocationRaw }[] => {
  if ('children' in item) {
    const result: { title: string; to: RouteLocationRaw }[] = [];

    item.children.forEach((child) => {
      if (child.disabled) {
        return;
      }

      if ('to' in child) {
        result.push(child);
      } else {
        result.push(...getChildren(child));
      }
    });

    return result;
  }

  return [];
};

type Flat = {
  title: string;
} & (
  | {
      children: { title: string; to: RouteLocationRaw }[];
    }
  | {
      to: RouteLocationRaw;
    }
);

const flatSections = computed(() => {
  const result: Flat[] = [];

  const value = sections.value;

  value.forEach((item) => {
    if (item.disabled) {
      return;
    }

    if (!('children' in item)) {
      result.push(item);
    } else {
      const children = getChildren(item);

      if (children.length === 0) {
        return;
      }

      result.push({
        title: item.title,
        children,
      });
    }
  });

  return result.sort((a, b) => (a.title < b.title ? -1 : 1));
});

const searchedItems = computed(() => {
  const items = flatSections.value;
  const value = search.value;

  if (!value) {
    return items;
  }

  if (typeof value === 'string') {
    const lower = value.toLowerCase();

    return items
      .map((item) => {
        if ('children' in item) {
          return {
            ...item,
            children: item.children.filter(({ title }) =>
              title.toLowerCase().includes(lower)
            ),
          };
        }

        return item.title.toLowerCase().includes(lower) ? item : null;
      })
      .filter(Boolean)
      .filter(
        (item) => (item as { children: unknown[] }).children.length > 0
      ) as Flat[];
  }

  return items;
});

const dataListItems = computed(() => {
  return searchedItems.value.map(({ title }) => title);
});

watch(search, (value) => {
  if (typeof value === 'string') {
    dropdownOpened.value = !!value;
  }
});

const onUpdateSearch = (
  value: string | { to: RouteLocationRaw; title: string }
) => {
  if (typeof value === 'string' || !value) {
    search.value = value;
  } else {
    router.push(value.to);
    dropdownOpened.value = false;
    search.value = '';
  }
};

const closeDropdownAndFocusOnSearch = () => {
  dropdownOpened.value = false;

  searchRef.value?.focus();
};

onMounted(() => {
  if (autofocusOnSearch.value) {
    setTimeout(() => {
      searchRef.value?.focus();
    });
  }
});
</script>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column;
  padding-top: 40px;

  box-shadow: 4px 0px 14px 0px rgba(var(--smed-base-01-rgb), 0.051);

  box-shadow: 0px 1px 4px 0px rgba(var(--smed-base-01-rgb), 0.102);

  background-color: var(--smed-base-07);
}

.header {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  padding: 0 24px;
}

.items {
  position: relative;

  &_list + &_list,
  &_single + &_list,
  &_list + &_single {
    margin-top: 12px;

    &:before {
      position: absolute;
      content: '';

      left: 12px;
      top: 0;
      height: 1px;
      width: calc(100% - 24px);
      background-color: var(--smed-base-04);
    }
  }

  &__label {
    @include smed-text_body-sm;
    @include smed-text_medium;

    color: var(--smed-base-02);
    padding: 12px;
  }
}
</style>
