<script setup lang="ts">
import PageHeader from "@components/mobile/page-header.vue";

import { useApp, useHeaderPage, useBottomBar } from "@composables/app";

const props = defineProps<{
  title?: string;
  noPadding?: boolean;
  hiddenHeader?: boolean;
  hiddenBottomBar?: boolean;
  hiddenScroll?: boolean;
}>();

const { isHeaderPage, showHeaderPage, hiddenHeaderPage } = useHeaderPage();
const { isBottomBar, showBottomBar, hiddenBottomBar } = useBottomBar();

if (props.hiddenHeader) {
  hiddenHeaderPage();
} else {
  showHeaderPage();
}

if (props.hiddenBottomBar) {
  hiddenBottomBar();
} else {
  showBottomBar();
}

const handleClick = () => {};
</script>

<template>
  <div
    :class="[
      'page-app',
      { '-no-padding': true, '-hidden-scroll': hiddenScroll },
    ]"
    @click="handleClick"
  >
    <template v-if="isHeaderPage">
      <slot v-if="$slots.header" name="header" />
      <PageHeader v-else-if="$slots.right" :title="title">
        <template #right>
          <slot name="right" />
        </template>
      </PageHeader>
      <PageHeader v-else :title="title" />
    </template>
    <div
      class="page-content"
      :class="{
        '-hidden-scroll': hiddenScroll,
        '-no-padding': noPadding,
        '-header': isHeaderPage,
        '-bottom': isBottomBar,
      }"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-app {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: $bg-page;
  padding: 0px $space-app $space-app $space-app;
  &.-no-padding {
    padding: 0px;
  }
  > .page-content {
    flex-grow: 1;
    padding: $space-lg;
    overflow: hidden;
    overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    &.-no-padding {
      padding: 0px;
    }
    &.-hidden-scroll {
      overflow-y: hidden;
      display: flex;
      flex-direction: column;
    }
    &.-header {
      padding-top: 60px;
    }
    &.-bottom {
      padding-bottom: 80px;
    }
  }
}
</style>
