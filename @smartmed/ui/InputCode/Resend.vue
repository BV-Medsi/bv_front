<template>
  <div :class="$style.root">
    <span
      v-if="timeout"
      data-automation-id="smed-resend-timer"
      :class="$style.timer"
      >Выслать код повторно ({{ timeLeft }}&nbsp;сек)</span
    >

    <span v-else :class="[$style.timer, $style.timer_clickable]">
      <span
        data-automation-id="smed-resend-link"
        tabindex="0"
        @keydown.enter="resendSmsCode"
        @click="resendSmsCode"
        >Выслать код повторно
      </span>

      <svg-icon
        v-if="isLoading"
        data-automation-id="smed-resend-code-spinner"
        name="spinner"
        size="sm"
        :class="[$style.spinner, 'smed-space_left-1']"
      />
    </span>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@smartmed/ui/SvgIcon';
import { computed, onBeforeUnmount, ref, toRefs, watch } from 'vue';

const ONE_SECOND_MS = 1000;

const props = defineProps<{
  resendTimeoutSeconds: number;
  isLoading: boolean;
}>();

const emit = defineEmits<{
  (e: 'resendCode'): void;
}>();

const { resendTimeoutSeconds, isLoading } = toRefs(props);

const resendInterval = ref<ReturnType<typeof setInterval> | null>(null);
const timeLeft = ref(resendTimeoutSeconds.value);

const timeout = computed(() => timeLeft.value !== 0);

const setupTimer = () => {
  timeLeft.value = resendTimeoutSeconds.value;

  resendInterval.value = setInterval(() => {
    timeLeft.value = timeLeft.value - 1;

    if (!timeout.value) {
      clearTimer();
    }
  }, ONE_SECOND_MS);
};

const clearTimer = () => {
  if (resendInterval.value) {
    clearInterval(resendInterval.value);
  }
};

onBeforeUnmount(() => {
  clearTimer();
});

watch(
  resendTimeoutSeconds,
  () => {
    clearTimer();
    setupTimer();
  },
  { immediate: true }
);

const resendSmsCode = () => {
  if (isLoading.value) {
    return;
  }

  emit('resendCode');
};
</script>

<style lang="scss" module>
.root {
  display: inline-flex;
}

.timer {
  @include smed-text_caption;

  display: inline-flex;
  align-items: center;

  color: var(--smed-base-02);

  &_clickable {
    @include transition(color);

    cursor: pointer;

    &:hover {
      color: var(--smed-base-03);
    }
  }
}

.spinner {
  color: var(--smed-primary);
}
</style>
