<script lang="ts" setup>
import { ref } from "vue";
import {
  WindowDynamicVirtualScroll,
  type VirtualScrollExpose,
} from "vue-virtual-flow";

import Page from "@/components/mobile/page.vue";

import { useAppRouter } from "@composables/router";

import { createNotifications } from "@/faker-data/notifications";

import { ROUTER_NAME } from "@constants/router-name";

const { goToName } = useAppRouter();

const items = ref<any[]>([]);

items.value = createNotifications(100);
</script>

<template>
  <Page hidden-header>
    <div class="messages-page">
      <WindowDynamicVirtualScroll
        ref="list"
        :items="items"
        :estimated-item-size="320"
        :overscan="3"
        item-key="id"
      >
        <template #default="{ item, index }">
          <div class="message-item">
            <div class="avatar">
              <img :src="item.user.avatar" alt="" class="img" />
            </div>
            <div class="info">
              <div class="fullname">{{ item.user.fullname }}</div>
              <div class="message">
                <div class="text">{{ item.message }}</div>
                <div class="time">02:00 PM</div>
              </div>
            </div>
          </div>
        </template>
      </WindowDynamicVirtualScroll>
    </div>
  </Page>
</template>

<style lang="scss" scoped>
.messages-page {
  display: flex;
  flex-direction: column;
}

.message-item {
  display: flex;
  width: calc(100vw - 40px);
  gap: 10px;
  padding-bottom: 10px;
  > .avatar {
    max-width: 50px;
    min-width: 50px;
    max-height: 50px;
    min-height: 50px;
    overflow: hidden;
    border-radius: 50%;
  }
  > .avatar > .img {
    width: 100%;
    height: 100%;
  }
  > .info {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
  }
  > .info > .fullname {
    font-weight: 600;
  }
  > .info > .message {
    width: 100%;
    display: flex;
    gap: 10px;
  }
  > .info > .message > .text {
    flex-grow: 1;
  }
  > .info > .message > .time {
    min-width: max-content;
  }
}
</style>
