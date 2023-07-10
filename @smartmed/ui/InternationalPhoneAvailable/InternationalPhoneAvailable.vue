<template>
  <div>
    <div
      v-keyboard
      tabindex="0"
      :class="$style.root"
      @keydown.enter.stop.prevent="onTogglePopup"
      @keydown.space.stop.prevent="onTogglePopup"
      @click="onTogglePopup"
    >
      <div>
        <p
          :class="[
            'smed-text_body-xs smed-text_medium smed-space_bottom-2',
            $style.label,
          ]"
        >
          Доступные номера телефонов
        </p>

        <country-flag
          v-for="country in countries"
          :key="country.id"
          class="smed-space_right-2"
          :code="country.id"
        />
      </div>

      <svg-icon name="warning-filled" rotate size="sm" :class="$style.icon" />
    </div>

    <popup v-model="popupOpened" title="Доступные номера телефонов">
      <p :class="['smed-space_bottom-6', $style.text]">
        Вы&nbsp;можете зарегистрироваться или войти в&nbsp;профиль, используя
        номера телефонов следующих стран:
      </p>

      <div :class="$style.countriesContainer">
        <div v-for="(countryColumn, index) in countriesColumns" :key="index">
          <div
            v-for="country in countryColumn"
            :key="country.id"
            :class="$style.country"
          >
            <country-flag class="smed-space_right-2" :code="country.id" />

            <span :class="['smed-space_right-1', $style.country__title]">{{
              country.title
            }}</span>

            <span :class="$style.country__prefix">{{ country.prefix }}</span>
          </div>
        </div>
      </div>
    </popup>
  </div>
</template>

<script setup lang="ts">
import CountryFlag from '@smartmed/ui/CountryFlag';
import Popup from '@smartmed/ui/Popup';
import SvgIcon from '@smartmed/ui/SvgIcon';
import { internationalCountries } from '@smartmed/utility/consts';
import { KeyboardFocusedDirective as vKeyboard } from '@smartmed/utility/directives';
import { ref } from 'vue';

defineOptions({
  name: 'InternationalPhoneAvailable',
});

const countries = internationalCountries;
const middle = Math.round(countries.length / 2);
const countriesColumns = [countries.slice(0, middle), countries.slice(middle)];

const popupOpened = ref(false);

const onTogglePopup = () => {
  popupOpened.value = !popupOpened.value;
};
</script>

<style lang="scss" module>
.root {
  @include transition(background-color);

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--smed-base-06);
  border-radius: 12px;
  padding: 12px 16px;

  cursor: pointer;

  &:hover {
    background-color: var(--smed-base-05);
  }
}

.label {
  color: var(--smed-base-02);
}

.text {
  width: 80%;
}

.icon {
  color: var(--smed-base-02);
}

.countriesContainer {
  display: flex;
  flex-wrap: wrap;
  column-gap: 40px;
  row-gap: 16px;
}

.country {
  display: flex;
  align-items: center;

  & + & {
    margin-top: calc(var(--smed-space) * 4);
  }

  &__title,
  &__prefix {
    @include smed-text_body-xl;
    @include smed-text_medium;
  }

  &__prefix {
    color: var(--smed-base-02);
  }
}
</style>
