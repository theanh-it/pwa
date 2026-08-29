<script lang="ts" setup>
import { ref } from "vue";
import {
  ChatVirtualScroll,
  type ChatVirtualScrollExpose,
} from "vue-virtual-flow";

import Page from "@components/mobile/page.vue";
import HeaderChat from "@/components/mobile/conversation/header-chat.vue";
import MessageItem from "@components/mobile/conversation/message-item.vue";

import { useAppRouter } from "@composables/router";

import { createConversation } from "@/faker-data/conversations";

import { ROUTER_NAME } from "@constants/router-name";

const { goToName } = useAppRouter();

const conversation = ref<any>({});

conversation.value = createConversation();

const chat = ref<ChatVirtualScrollExpose>();
const loadingOlder = ref(false);
const hasOlder = ref(true);

async function loadOlder() {}
</script>

<template>
  <Page hidden-header hidden-bottom-bar no-padding>
    <div class="message-page">
      <HeaderChat :title="conversation.recipient.fullname" />
      <ChatVirtualScroll
        ref="chat"
        :items="conversation.messages"
        :estimated-item-size="72"
        :has-older="hasOlder"
        :loading-older="loadingOlder"
        :load-older-threshold="120"
        item-key="id"
        aria-label="Support conversation"
        class="messages"
        @load-older="loadOlder"
      >
        <template #default="{ item }">
          <MessageItem :item="item" :meId="conversation.sender.id" />
        </template>

        <template #loadingOlder>Loading older messages…</template>
        <template #empty>No messages.</template>
      </ChatVirtualScroll>
      <div class="input">
        <textarea type="text" class="textarea" />
      </div>
    </div>
  </Page>
</template>

<style lang="scss" scoped>
.message-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .messages {
    flex-grow: 1;
  }
  > .input {
  }
  > .input > .textarea {
    width: 100%;
    border: none;
    outline: none;
    border: 1px solid $gray;
    padding: $space-lg;
  }
}
</style>
