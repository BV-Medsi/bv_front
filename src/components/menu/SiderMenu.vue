<script setup>
import {ROUTES} from "../../router/index.js";

const router = useRouter();

import BaseButton from '@smartmed/ui/BaseButton';
import {useRouter} from "vue-router";
import {useStepsStore} from "../../store/steps.js";
import {useAuthStore} from '../../store/auth.js'
import BurgerButton from "./BurgerButton.vue";
import {nextTick} from "vue";

defineProps(['open']);
const links = [
  {
    name: 'Моя карта',
    path: '/chat/' + ROUTES.GENERAL_CARD
  },
  {
    name: 'История',
    path: '/history'
  }
];
const emit = defineEmits(['toggle'])
const {acceptTerms} = useStepsStore();
const {logout} = useAuthStore();

const handleLinkClick = (link) => {
  if (link.path.includes('/chat/')) {
    acceptTerms()
  }
  emit('toggle');
}

const handleLogout = async () => {
  emit('toggle');
  logout();
  router.push('/login');
}
</script>

<template>
  <div class="sider-wrapper">
    <div :class="['side-menu', open && 'open']">
      <burger-button class="burger-button" @toggle="emit('toggle')" :open="open"/>
      <div class="inner">
        <router-link :to="link.path" v-for="link in links" @click.native="handleLinkClick(link)">
          {{ link.name }}
        </router-link>
        <base-button @click="handleLogout">Выйти</base-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sider-wrapper {
  position: absolute;
  z-index: 99999;
  height: 100vh;
  left: 0;
  right: 100%;
}

.burger-button {
  position: absolute;
  top: 15px;
  right: -40px;
}

.side-menu {
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 100%;
  width: 250px;
  position: absolute;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  & .inner {
    gap: 20px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
}

.open {
  transform: translateX(0);
}
</style>
