<script lang="ts" setup>
import { ref } from "vue";
import {
  WindowDynamicVirtualScroll,
  type VirtualScrollExpose,
} from "vue-virtual-flow";

import Page from "@components/mobile/page.vue";
import MessageItem from "@components/mobile/conversation/item.vue";

import { useAppRouter } from "@composables/router";

import { createConversations } from "@/faker-data/conversations";

import { ROUTER_NAME } from "@constants/router-name";

const { goToPath } = useAppRouter();

const items = ref<any[]>([]);

items.value = createConversations(100);
</script>

<template>
  <Page hidden-header no-padding>
    <div class="messages-page">
      <WindowDynamicVirtualScroll
        ref="list"
        :items="items"
        :estimated-item-size="320"
        :overscan="3"
        item-key="id"
      >
        <template #default="{ item, index }">
          <MessageItem :item="item" @click="goToPath(`/messages/${item.id}`)" />
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
</style>
