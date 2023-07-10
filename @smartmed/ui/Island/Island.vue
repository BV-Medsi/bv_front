<template>
  <div :class="$style.island">
    <div :class="isLoading && 'smed-skeleton'">
      <slot name="image" />
    </div>

    <div :class="$style.content">
      <h5
        :class="[
          $style.title,
          'smed-text_h5 smed-text_medium',
          isLoading && 'smed-skeleton smed-skeleton_short',
        ]"
      >
        {{ title }}
      </h5>
      <p
        :class="[
          $style.description,
          'smed-text_body-xl',
          isLoading && 'smed-skeleton',
        ]"
      >
        <line-clamp :line-height="24" :lines-limit="2">{{
          description
        }}</line-clamp>
      </p>

      <div
        v-if="$slots.footer"
        :class="[$style.footer, isLoading && 'smed-skeleton']"
      >
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Island',
};
</script>

<script setup lang="ts">
import LineClamp from '@smartmed/ui/LineClamp';

import { IslandProps } from './Island.props';

defineProps<IslandProps>();
</script>

<style lang="scss" module>
.island {
  display: flex;
  flex-direction: column;

  border-radius: 12px;
  background-color: var(--smed-base-07);
  cursor: pointer;
  overflow: hidden;

  &:hover {
    box-shadow: 0px 8px 16px -6px rgba(var(--smed-base-01-rgb), 0.12);
  }
}

.content {
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  flex: 1;
}

.title {
  margin-bottom: 8px;
}

.description {
  color: var(--smed-base-02);

  margin-bottom: 44px;
}

.footer {
  margin-top: auto;
}
</style>
