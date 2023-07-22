<template>
  <div>
    <tooltip v-if="!(section as any).to || disabled" wide>
      <button
        v-keyboard
        :tabindex="disabled ? '-1' : 0"
        :class="[$style.section, disabled && $style.section_disabled]"
        @click="onToggle"
      >
        <div :class="$style.title">
          <svg-icon
            v-if="typeof section.icon === 'string'"
            :name="section.icon"
            :class="$style.icon"
          />

          <component v-else-if="!!section.icon" :is="section.icon" />

          <span class="smed-text_medium">{{ section.title }}</span>
        </div>

        <svg-icon v-if="hasChildren" name="arrow-down" :rotate="opened" />
      </button>

      <template #hint>
        <template v-if="typeof section.disabled === 'string'">
          {{ section.disabled }}
        </template>
      </template>
    </tooltip>

    <router-link
      v-else
      :class="$style.section"
      :to="(section as any).to"
      :active-class="$style.section_active"
    >
      <div :class="$style.title">
        <svg-icon
          v-if="typeof section.icon === 'string'"
          :name="section.icon"
          :class="$style.icon"
        />

        <component v-else-if="!!section.icon" :is="section.icon" />

        <span class="smed-text_medium">{{ section.title }}</span>
      </div>

      <svg-icon name="arrow-right" />
    </router-link>

    <navigation-child
      v-show="hasChildren && opened"
      v-for="child in sorted"
      :key="child.title"
      :section="child"
      @active="childActive"
    />
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@smartmed/ui/SvgIcon';
import { SCROLLBAR_REF_TOKEN } from '@smartmed/ui/tokens';
import Tooltip from '@smartmed/ui/Tooltip';
import { KeyboardFocusedDirective as vKeyboard } from '@smartmed/utility/directives';
import { useDebounceFn } from '@smartmed/utility/functions';
import { computed, inject, Ref, ref, toRefs, watch } from 'vue';

import { NavigationBarProps } from './NavigationBar.props';
import NavigationChild from './NavigationChild.vue';

const props = defineProps<{
  section: NavigationBarProps['sections'][number];
}>();

const scrollbarRef = inject<Ref<HTMLElement | null>>(
  SCROLLBAR_REF_TOKEN,
  ref(null)
);
const { section } = toRefs(props);

const opened = ref(false);
const openedId = ref<string | null>(null);

const hasChildren = computed(() => {
  const value = section.value;

  return 'children' in value && value.children.length > 0;
});

const disabled = computed(() => {
  const value = section.value;

  return typeof value.disabled === 'string' || !!value.disabled;
});

const sorted = computed(() => {
  const value = section.value;

  if ('children' in value) {
    return value.children.sort((a, b) => {
      return a.title < b.title ? -1 : 1;
    });
  }

  return [];
});

const onToggle = () => {
  if (!disabled.value) {
    opened.value = !opened.value;
  }
};

const childActive = (id: string) => {
  opened.value = true;
  openedId.value = id;
};

const scrollTo = useDebounceFn((id: string) => {
  const element = document.querySelector(`#${id}`);

  element?.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  });
}, 500);

let once = false;

watch([openedId, scrollbarRef], ([id, scrollbar]) => {
  if (id && scrollbar && !once) {
    once = true;

    scrollTo(id);
  }
});
</script>

<style lang="scss" module>
.section {
  @include clearbutton;
  @include transition(background-color);

  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px 32px;
  width: 100%;

  color: var(--smed-base-01);

  cursor: pointer;

  background-color: var(--smed-base-07);

  &:hover:not(&_disabled) {
    background-color: var(--smed-base-06);
  }

  &_active {
    color: var(--smed-primary);

    &:after {
      position: absolute;
      content: '';
      right: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background-color: var(--smed-primary);
    }
  }

  &_disabled {
    color: var(--smed-base-03);
    cursor: default;
  }
}

.title {
  display: flex;
  align-items: center;
  column-gap: 8px;
  text-align: left;
}

.icon {
  color: var(--smed-base-02);
}
</style>
