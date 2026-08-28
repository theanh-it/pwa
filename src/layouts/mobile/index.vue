<script lang="ts" setup>
import BottomBar from "@layouts/mobile/bottom-bar.vue";

import { useApp } from "@composables/app";

const { isBottomBar } = useApp();
</script>

<template>
  <div class="mobile-app">
    <RouterView v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
    <transition name="bottom-bar">
      <BottomBar v-if="isBottomBar" class="bottom-bar" />
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.mobile-app {
}

.page {
  &-enter-active,
  &-leave-active {
    transition: 0.2s;
  }
  &-enter-from {
    opacity: 0;
    // transform: scale(1.05);
  }
  &-enter-to {
    opacity: 1;
    // transform: scale(1);
  }
  &-leave-from {
    opacity: 1;
    // transform: scale(1);
  }
  &-leave-to {
    opacity: 0;
    // transform: scale(0.95);
  }
}

.bottom-bar {
  &-enter-active,
  &-leave-active {
    transition: 0.4s;
  }
  &-enter-from {
    transform: translateY(100%);
  }
  &-enter-to {
    transform: translateY(0%);
  }
  &-leave-from {
    transform: translateY(0%);
  }
  &-leave-to {
    transform: translateY(100%);
  }
}
</style>
