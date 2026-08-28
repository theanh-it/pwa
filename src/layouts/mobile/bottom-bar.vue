<script lang="ts" setup>
import { useAppRouter } from "@composables/router";

const { route, goToPath } = useAppRouter();

type Item = {
  icon: string;
  label: string;
  path: string;
  badge?: number;
};

const items: Item[] = [
  {
    icon: "newspaper",
    label: "Home",
    path: "/",
  },
  {
    icon: "message",
    label: "Tin nhắn",
    badge: 10,
    path: "/messages",
  },
  {
    icon: "bell",
    label: "Thông báo",
    badge: 999,
    path: "/notifications",
  },
  {
    icon: "address-card",
    label: "Hồ sơ",
    path: "/profile",
  },
];
</script>

<template>
  <div class="bottom-bar">
    <div
      v-for="item in items"
      v-wave
      :key="item.icon"
      :class="['item', { '-active': route.path === item.path }]"
      @click="goToPath(item.path)"
    >
      <div class="block">
        <fa-icon :icon="item.icon" class="icon" />
        <span v-if="item.badge" class="badge">{{ item.badge }}</span>
      </div>
      <span class="text">{{ item.label }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bottom-bar {
  display: flex;
  position: fixed;
  z-index: $z-index-app;
  bottom: 0px;
  left: 0px;
  background-color: $white;
  width: 100%;
  border-radius: $radius-lg $radius-lg 0px 0px;
  box-shadow: 0px -1px 4px #eee;
  overflow: hidden;
  > .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: $space-xs;
    padding: $space-lg;
  }
  > .item > .block {
    position: relative;
  }
  > .item > .block > .icon {
    font-size: $font-size-2xl;
    color: $active;
  }
  > .item > .block > .badge {
    position: absolute;
    top: 0px;
    left: 14px;
    font-size: $font-size-sm;
    background: $red;
    color: $white;
    padding: $scale-1;
    border-radius: $scale-2;
  }
  > .item > .text {
    display: block;
    color: $active;
    padding-bottom: env(safe-area-inset-bottom);
  }
  > .item.-active > .block > .icon,
  > .item.-active > .text {
    color: $green;
  }
}
</style>
