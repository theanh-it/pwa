<script lang="ts" setup>
import { ref } from "vue";
import {
  WindowDynamicVirtualScroll,
  type VirtualScrollExpose,
} from "vue-virtual-flow";

import Page from "@/components/mobile/page.vue";

import { useAppRouter } from "@composables/router";

import { createArticles } from "@/faker-data/articles";

import { ROUTER_NAME } from "@constants/router-name";

const { goToName } = useAppRouter();

const items = ref<any[]>([]);

items.value = createArticles(100);
</script>

<template>
  <Page hidden-header>
    <WindowDynamicVirtualScroll
      ref="list"
      :items="items"
      :estimated-item-size="320"
      :overscan="3"
      item-key="id"
    >
      <template #default="{ item, index }">
        <article>
          <img :src="item.image" alt="" />
          <div class="info">
            <h2>{{ item.title }}</h2>
            <p>{{ item.summary }}</p>
          </div>
        </article>
      </template>
    </WindowDynamicVirtualScroll>
  </Page>
</template>

<style lang="scss" scoped>
article {
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;
  margin-bottom: 20px;
  > img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
  }
  > .info {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
