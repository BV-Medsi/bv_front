<template>
  <div :class="['smed-text_body-xl', $style.root]">
    <slot name="picture">
      <picture v-if="!src">
        <source type="image/webp" :srcset="computedSrcset.webp" />

        <img
          role="presentation"
          decoding="async"
          fetchpriority="low"
          width="104"
          height="104"
          :alt="type"
          :src="computedSrc"
          :srcset="computedSrcset.png"
          :class="['smed-space_bottom-6 smed-space_auto', $style.picture]"
        />
      </picture>

      <img
        v-else
        role="presentation"
        decoding="async"
        fetchpriority="low"
        width="104"
        height="104"
        :alt="type"
        :src="computedSrc"
        :class="['smed-space_bottom-6 smed-space_auto', $style.picture]"
      />
    </slot>

    <span>
      <slot name="text">
        {{ computedText }}
      </slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue';

import {
  EmptyStateDefaultProps,
  EmptyStateProps,
  EmptyStateSlots,
  emptyStateTypeToText,
} from './EmptyState.props';

defineOptions({
  name: 'EmptyState',
});

const props = withDefaults(
  defineProps<EmptyStateProps>(),
  EmptyStateDefaultProps
);

defineSlots<EmptyStateSlots>();

const { type, text, src } = toRefs(props);

const getSrcset = (name: string, imgType: 'webp' | 'png') => {
  return `https://static.medsi.pro/images/${name}/pic@1x.${imgType} 1x, https://static.medsi.pro/images/${name}/pic@2x.${imgType} 2x`;
};

const computedText = computed(() => {
  const _text = text.value;

  if (_text) {
    return _text;
  }

  const _type = type.value;

  return emptyStateTypeToText[_type] || '';
});

const computedSrc = computed(() => {
  const _src = src.value;

  if (_src) {
    return _src;
  }

  const _type = type.value;

  return `https://static.medsi.pro/images/${_type}/pic@1x.png`;
});

const computedSrcset = computed(() => {
  const _src = src.value;

  if (_src) {
    return {
      png: '',
      webp: '',
    };
  }

  const _type = type.value;

  return {
    png: getSrcset(_type, 'png'),
    webp: getSrcset(_type, 'webp'),
  };
});
</script>

<style lang="scss" module>
.root {
  display: inline-flex;
  flex-direction: column;

  text-align: center;
  white-space: pre-wrap;

  color: var(--smed-base-02);
}

.picture {
  @include strict-size(104px, 104px);

  display: block;
  border-radius: 100%;
}
</style>
