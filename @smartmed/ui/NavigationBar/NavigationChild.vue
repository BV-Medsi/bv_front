<template>
  <div :class="$style.root">
    <tooltip v-if="!(section as any).to || disabled" wide>
      <button
        v-keyboard
        :tabindex="disabled ? '-1' : 0"
        :class="[
          $style.button,
          $style.title,
          disabled && $style.title_disabled,
        ]"
        @click="toggleOpened"
      >
        <svg-icon
          v-if="nested"
          name="arrow-right"
          :class="[
            'smed-space_right-1',
            $style.icon,
            opened && $style.icon_rotate,
          ]"
          size="sm"
        />

        <span>{{ section.title }}</span>
      </button>

      <template #hint>
        <template v-if="typeof section.disabled === 'string'">
          {{ section.disabled }}
        </template>
      </template>
    </tooltip>

    <router-link
      v-else
      :id="`smed-navigation_${section.title}`"
      :class="[$style.title, $style.title_to]"
      :to="(section as any).to"
      :active-class="$style.title_active"
    >
      <emit-route-active
        :to="(section as any).to"
        @active="childActive($event, section.title)"
      >
        {{ section.title }}
      </emit-route-active>
    </router-link>

    <div v-show="nested && opened" :class="$style.children">
      <template v-for="item in (section as any).children" :key="item.title">
        <router-link
          v-if="!item.disabled"
          :id="`smed-navigation_${item.title}`"
          :class="$style.children__item"
          :to="item.to"
          :active-class="$style.children__item_active"
        >
          <emit-route-active
            :to="item.to"
            @active="childActive($event, item.title)"
          >
            {{ item.title }}
          </emit-route-active>
        </router-link>

        <tooltip v-else>
          <span
            :class="[$style.children__item, $style.children__item_disabled]"
          >
            {{ item.title }}
          </span>

          <template #hint>
            <template v-if="typeof item.disabled === 'string'">
              {{ item.disabled }}
            </template>
          </template>
        </tooltip>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@smartmed/ui/SvgIcon';
import Tooltip from '@smartmed/ui/Tooltip';
import { KeyboardFocusedDirective as vKeyboard } from '@smartmed/utility/directives';
import { computed, ref, toRefs } from 'vue';

import EmitRouteActive from './EmitRouteActive.vue';
import { _NavigationChildren } from './NavigationBar.props';

const props = defineProps<{ section: _NavigationChildren }>();

const emit = defineEmits<{ (e: 'active', id: string): void }>();

const { section } = toRefs(props);

const opened = ref(false);

const isNested = (value: _NavigationChildren) => {
  return 'children' in value && value.children.length > 0;
};

const toggleOpened = () => {
  if (!disabled.value) {
    opened.value = !opened.value;
  }
};

const childActive = (value: boolean, id: string) => {
  opened.value = value;

  emit('active', `smed-navigation_${id}`);
};

const nested = computed(() => {
  const value = section.value;

  return isNested(value);
});

const disabled = computed(() => {
  const value = section.value;

  return typeof value.disabled === 'string' || !!value.disabled;
});
</script>

<style lang="scss" module>
.root {
  @include transition(background-color);

  position: relative;

  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 40px;
  padding-right: 12px;

  background-color: var(--smed-base-06);

  cursor: pointer;
}

.button {
  @include clearbutton;

  width: 100%;
}

.title {
  @include transition(color);

  display: flex;
  align-items: center;

  padding: 8px 0;
  color: var(--smed-base-01);

  cursor: pointer;
  text-align: left;

  &:hover {
    text-underline-offset: 4px;
  }

  &:hover:not(&_active):not(&_disabled) {
    color: rgba(var(--smed-base-01-rgb), 0.64);
  }

  &_to:not(&_active):not(&_disabled) {
    &:hover {
      text-decoration: underline;
    }
  }

  &_active {
    @include smed-text_medium;

    color: var(--smed-primary);

    &:after {
      position: absolute;
      content: '';
      right: 0;
      top: 0;
      height: 100%;
      width: 4px;
      background-color: var(--smed-primary);
    }
  }

  &_disabled {
    color: var(--smed-base-03);
    cursor: default;
  }
}

.children {
  @include smed-text_body-sm;

  display: flex;
  flex-direction: column;
  position: relative;

  padding-left: 20px;

  &:before {
    position: absolute;

    content: '';
    left: 7px;
    top: 0;
    height: 100%;
    width: 1px;
    background-color: var(--smed-base-04);
  }

  &__item {
    @include transition(color);

    color: var(--smed-base-01);

    padding-top: 8px;
    text-underline-offset: 4px;
    text-align: left;

    & + & {
      padding-top: 12px;
    }

    &:hover:not(&_active):not(&_disabled) {
      color: rgba(var(--smed-base-01-rgb), 0.64);
      text-decoration: underline;
    }

    &_active {
      @include smed-text_medium;

      color: var(--smed-primary);
      text-decoration: underline;
    }

    &_disabled {
      color: var(--smed-base-03);

      cursor: default;
    }
  }
}

.icon {
  @include transition(transform);

  &_rotate {
    transform: rotate(90deg);
  }
}
</style>
