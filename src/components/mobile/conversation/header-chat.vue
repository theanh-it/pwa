<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";
import { useRouter } from "vue-router";

const props = withDefaults(
  defineProps<{
    title?: string;
    backTo?: RouteLocationRaw;
  }>(),
  {
    title: "",
    backTo: undefined,
  },
);

const router = useRouter();

function handleBack() {
  if (props.hideBackButton) return;

  if (props.backTo) {
    return router.push(props.backTo);
  }

  return router.back();
}
</script>

<template>
  <header class="page-header">
    <div v-wave class="btn -back" @click="handleBack">
      <fa-icon icon="arrow-left" class="icon" />
    </div>
    <div class="title">
      <div class="text">{{ title }}</div>
    </div>
    <div v-wave class="btn -back">
      <fa-icon icon="ellipsis-vertical" class="icon" />
    </div>
  </header>
</template>

<style scoped lang="scss">
$width-btn: 50px;
.page-header {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0px;
  background: $white;
  > .btn {
    display: flex;
    align-items: center;
    min-width: $width-btn;
    height: $width-btn;
    justify-content: center;
    cursor: pointer;
    transition:
      background-color $time,
      color $time;
    &:active {
      // background: $bg-soft-blue;
    }
  }
  > .btn > .icon {
    font-size: 18px;
    color: $active;
  }
  > .title {
    min-height: $width-btn;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 0px $space-md;
  }
  > .title > .text {
    width: 100%;
    max-width: max-content;
    min-height: 20px;
    font-size: $font-size-lg;
    font-weight: $font-weight-bold;
    color: $active;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
