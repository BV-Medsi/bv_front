<template>
  <div>
    <slot name="label">
      <p class="smed-text_body-sm">
        На&nbsp;введенный номер выслан СМС с&nbsp;кодом.
      </p>
      <p class="smed-text_body-sm smed-space_bottom-4">
        Пожалуйста, введите его в&nbsp;поле ниже.
      </p>

      <p :class="['smed-text_body-sm smed-space_bottom-2', $style.label]">
        Код из&nbsp;СМС
      </p>
    </slot>

    <div :class="$style.root">
      <input-code-cell
        v-for="(_, index) in length"
        ref="cells"
        :key="index"
        :tabindex="getTabindex(index)"
        :model-value="models[index]"
        :class="$style.code"
        :size="size"
        :disabled="disabled"
        :invalid="!!invalidText"
        @update:model-value="onUpdateModelValue(index, $event)"
        @on-focus="onFocus"
        @on-backspace="onBackspace(index)"
        @on-paste="onPaste"
      />
    </div>

    <transition-expand style="display: flex" :opened="!!invalidText">
      <p :class="[$style.error, 'smed-text_caption smed-space_top-2']">
        {{ invalidText }}
      </p>
    </transition-expand>

    <resend
      v-if="!disabled"
      class="smed-space_top-2"
      :is-loading="isLoading"
      :resend-timeout-seconds="resendTimeoutSeconds"
      @resend-code="onResend"
    />
  </div>
</template>

<script setup lang="ts">
import TransitionExpand from '@smartmed/ui/TransitionExpand';
import { ref, watch } from 'vue';

import {
  InputCodeDefaultProps,
  InputCodeEmits,
  InputCodeProps,
} from './InputCode.props';
import InputCodeCell from './InputCodeCell.vue';
import Resend from './Resend.vue';

defineOptions({
  name: 'InputCode',
});

const props = withDefaults(
  defineProps<InputCodeProps>(),
  InputCodeDefaultProps
);

const emit = defineEmits<InputCodeEmits>();

const models = ref<ReadonlyArray<number | null>>(
  new Array(props.length).fill('_').map(() => null)
);

const cells = ref<ReadonlyArray<{ focus: () => void }>>([]);

const findFirstUnfilledElement = () => {
  return models.value.findIndex((value) => value === null);
};

const focusOnUnfilledElement = () => {
  const index = findFirstUnfilledElement();
  const value = cells.value;

  if (index !== -1 && value[index]) {
    value[index].focus();

    return;
  }

  const last = cells.value[cells.value.length - 1];

  if (index === -1 && last) {
    last.focus();
  }
};

const onUpdateModelValue = (index: number, value: number | null) => {
  models.value = new Array(props.length).fill('_').map((_, i) => {
    if (models.value[i] !== null && i !== index) {
      return models.value[i];
    }

    return i === index ? value : null;
  });

  focusOnUnfilledElement();
};

const onFocus = () => {
  focusOnUnfilledElement();
};

const onBackspace = (index: number) => {
  const values = models.value;

  if (values[index] === null) {
    models.value = new Array(props.length).fill('_').map((_, i) => {
      return i >= index - 1 ? null : models.value[i];
    });

    focusOnUnfilledElement();
  }
};

const getTabindex = (index: number) => {
  const prevIndex = index - 1;
  const value = models.value;

  if (index === value.length - 1) {
    return value[prevIndex] !== null || value[index] !== null ? '0' : '-1';
  }

  if (index === 0) {
    return value[index] === null ? '0' : '-1';
  }

  return value[prevIndex] !== null && value[index] === null ? '0' : '-1';
};

const clearInputCellsAndFocus = () => {
  models.value = models.value.map((_) => null);
  focusOnUnfilledElement();
};

const onResend = () => {
  clearInputCellsAndFocus();
  emit('resendCode');
};

const setToUnfilledInputs = (value: string) => {
  const digitsOnly = value.slice(0, props.length);

  if (!digitsOnly) {
    return;
  }

  if (digitsOnly.length === props.length) {
    models.value = new Array(props.length)
      .fill('')
      .map((_, index) => Number(digitsOnly[index]));
  } else {
    let i = 0;

    models.value = new Array(props.length).fill('').map((_, index) => {
      const digitToFill = digitsOnly[i];
      const item = models.value[index];

      if (item === null && !!digitToFill) {
        i += 1;

        return Number(digitToFill);
      }

      return item;
    });
  }

  focusOnUnfilledElement();
};

const onPaste = (value: string | null) => {
  if (!value) {
    return;
  }

  setToUnfilledInputs(value);
};

watch(models, (value) => {
  const isOk = value.every((v) => v !== null);

  if (isOk) {
    emit('submitCode', value.join(''));
  }
});
</script>

<style lang="scss" module>
.root {
  display: flex;
}

.label {
  color: var(--smed-base-02);
}

.code {
  & + & {
    margin-left: calc(var(--smed-space) * 4);
  }
}

.error {
  color: var(--smed-error);
}
</style>
