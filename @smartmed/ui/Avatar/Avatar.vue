<template>
  <div
    :title="title"
    :class="[
      $style.avatar,
      $style['avatar_' + size],
      rounded && $style.avatar_rounded,
      showSvg && $style.avatar_svgCorrection,
    ]"
    :style="style"
  >
    <img
      v-if="src"
      loading="lazy"
      decoding="async"
      role="presentation"
      fetchpriority="low"
      height="auto"
      :class="[$style.image, !loaded && $style.image_opacity]"
      :src="src"
      :width="avatarSize"
      :alt="name || 'Аватар'"
      @load="onLoaded"
    />

    <template v-if="showChar">
      <span>{{ char }}</span>
    </template>

    <span v-if="showSvg" v-html="avatarSvgInline" :class="$style.svg" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, toRefs } from 'vue';

import { AvatarDefaultProps, AvatarProps, avatarSizeMap } from './Avatar.props';
import { avatarSvgInline } from './avatarSvgInline';

defineOptions({
  name: 'Avatar',
});

const props = withDefaults(defineProps<AvatarProps>(), AvatarDefaultProps);

const { size, name, src } = toRefs(props);
const loaded = ref(false);

const showChar = computed(() => {
  const _src = src && src.value;
  const _char = char.value;
  const _loaded = loaded.value;

  return (_char && _src && !_loaded) || (!_src && _char);
});

const showSvg = computed(() => {
  const _src = src && src.value;
  const _char = char.value;
  const _loaded = loaded.value;

  return (!_src && !_char) || (_src && !_char && !_loaded);
});

const char = computed(() => ((name && name.value) || '')[0] || '');

const avatarSize = computed(() => {
  const _size = size.value;
  const sizeNum =
    typeof _size === 'string' ? avatarSizeMap[_size] : (size.value as number);

  return sizeNum;
});

const title = computed(() => {
  const value = name?.value;

  return value ? `Аватар ${value}` : 'Аватар';
});

const style = computed(() => {
  const value = avatarSize.value;

  return {
    '--smed-avatar-size': `${value}px`,
  };
});

const onLoaded = () => {
  loaded.value = true;
};
</script>

<style lang="scss" module>
.avatar {
  @include smed-text_h4;
  @include strict-size(
    var(--smed-avatar-size, 40px),
    var(--smed-avatar-size, 40px)
  );

  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  border-radius: 8px;

  color: var(--smed-base-02);
  background-color: var(--smed-base-05);

  font-weight: 700;
  text-transform: uppercase;
  overflow: hidden;

  &_rounded {
    border-radius: 100%;
  }

  &_sm {
    @include smed-text_caption;
  }

  &_md {
    @include smed-text_body-md;
  }

  &_lg,
  &_xl {
    @include smed-text_h4;
  }
}

.image {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-fit: cover;

  &_opacity {
    opacity: 0.000000001;
  }
}

.svg {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 50%;

  transform: translateX(-50%);
}
</style>
