<template>
  <Portal v-if="isRendered" append-to="#smed_popups-host">
    <transition
      :name="isMobile ? 'smed-mobile-popup' : 'fade'"
      @after-leave="afterLeave"
    >
      <template v-if="modelValue">
        <section
          v-esc="{ onEvent: onEsc }"
          v-focustrap
          ref="popupRef"
          aria-modal="true"
          role="dialog"
          :class="$style.wrapper"
          @click="onWrapperClick($event, $refs.content, $refs.sticky)"
        >
          <div
            :class="[
              $style.popup,
              $style['popup_' + size],
              isMobile && $style.popup_mobile,
            ]"
          >
            <div
              ref="content"
              :class="[
                $style.content,
                isMobile && $style.content_mobile,
                isFullsize && $style.content_full,
              ]"
            >
              <h5 v-if="title" :class="$style.title">{{ title }}</h5>

              <slot :close="close" />
            </div>

            <div v-if="closable" ref="sticky" :class="$style.sticky">
              <svg-icon
                tabindex="0"
                name="close-black"
                size="xl"
                :class="$style.close"
                @click.prevent="close()"
                @keydown.enter.stop.prevent="close()"
              />
            </div>
          </div>
        </section>
      </template>
    </transition>
  </Portal>
</template>

<script lang="ts">
export default {
  name: 'Popup',
};
</script>

<script setup lang="ts">
import Portal from '@smartmed/ui/Portal';
import SvgIcon from '@smartmed/ui/SvgIcon';
import { IS_POPUP_MOBILE_TOKEN, POPUPS_HOST_TOKEN } from '@smartmed/ui/tokens';
import { useOverscroll } from '@smartmed/ui/use';
import {
  EscDirective as vEsc,
  FocustrapDirective as vFocustrap,
} from '@smartmed/utility/directives';
import {
  computed,
  inject,
  onBeforeUnmount,
  provide,
  Ref,
  ref,
  toRefs,
  watch,
} from 'vue';

import { PopupsHostService } from '../Root/PopupsHost.vue';
import { SCROLLBAR_REF_TOKEN } from '../ScrollbarControllers/scrollbarTokens';
import {
  PopupDefaultProps,
  PopupEmits,
  PopupProps,
  PopupSlots,
} from './Popup.props';

const props = withDefaults(defineProps<PopupProps>(), PopupDefaultProps);
const emit = defineEmits<PopupEmits>();

defineSlots<PopupSlots>();

const { modelValue, dismissible, size } = toRefs(props);

const popupsContent = inject<Ref<PopupsHostService>>(POPUPS_HOST_TOKEN)!;
const id = Symbol();
const isMobile = inject(IS_POPUP_MOBILE_TOKEN, ref(false));
const content = ref<HTMLElement | null>(null);
const popupRef = useOverscroll('all', (e: HTMLElement) => e);

provide(SCROLLBAR_REF_TOKEN, popupRef);

popupsContent.value.registerPopup(id);

const isRendered = ref(modelValue.value);

const isFullsize = computed(() => size.value === 'full');

const close = () => {
  emit('update:modelValue', false);
};

watch(
  modelValue,
  (value) => {
    popupsContent.value.setOpen(id, value);
  },
  { immediate: true }
);

onBeforeUnmount(() => {
  popupsContent.value.remove(id);
});

const onWrapperClick = (
  event: MouseEvent,
  contentRef: unknown,
  stickyRef: unknown
) => {
  if (!dismissible.value) {
    return;
  }

  const target = event.target as Node | null;
  const shouldClose =
    contentRef &&
    !(contentRef as HTMLElement).contains(target) &&
    stickyRef &&
    !(stickyRef as HTMLElement).contains(target);

  if (shouldClose) {
    close();
  }
};

const onEsc = () => {
  if (dismissible.value) {
    close();
  }
};

const afterLeave = () => {
  isRendered.value = false;
};

watch(
  modelValue,
  (value) => {
    if (value) {
      isRendered.value = value;
    }
  },
  { immediate: true }
);

watch(
  content,
  (value) => {
    value && value.focus();
  },
  { immediate: true }
);
</script>

<style lang="scss" module>
.wrapper {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-start;
  outline: none;
  overflow: auto;
  overflow: overlay;
  bottom: auto;
}

.popup {
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: auto;
  border-radius: 12px;
  border: 40px solid transparent;

  &_sm {
    width: 514px;
  }

  &_md {
    width: 808px;
  }

  &_lg {
    width: 1260px;
  }

  &_full {
    width: 100%;
    height: 100%;
    padding: 0;
    border: none;
    border-radius: 0;
  }

  &_mobile {
    min-width: 100%;
    width: 100%;
    max-width: 100%;
    border-width: 16px;
    margin: auto 0 0;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    pointer-events: none;

    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.05),
      0px 4px 24px rgba(0, 0, 0, 0.12);
  }
}

.content {
  border-radius: inherit;
  padding: 32px;
  background-color: var(--smed-base-07);

  &_full {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;

    &.content_mobile {
      padding: 8px;
    }
  }
}

.sticky {
  position: sticky;
  top: 0;
  order: -1;
  transform: translateZ(176px);
}

.close {
  @include transition(color);
  position: absolute;
  color: var(--smed-base-06);
  top: 12px;
  right: 12px;
  border-radius: 100%;
  cursor: pointer;

  &:hover {
    color: var(--smed-base-04);
  }
}

.title {
  @include smed-text_h4;
  @include smed-text_medium;

  margin-bottom: 32px;
}
</style>
