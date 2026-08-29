<script lang="ts" setup>
import { fromNow } from "@utils";

defineProps<{
  item: any;
}>();
</script>

<template>
  <div v-wave class="message-item">
    <div class="avatar">
      <img :src="item.user.avatar" alt="" class="img" />
      <span v-if="item.badge" class="badge">{{ item.badge }}</span>
    </div>
    <div class="info">
      <div class="fullname">{{ item.user.fullname }}</div>
      <div class="message">
        <div class="text">{{ item.lastMessage.message }}</div>
        <div class="time">
          {{ fromNow(item.lastMessage.created) }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.message-item {
  display: flex;
  width: 100vw;
  gap: 10px;
  padding: $space-md $space-md;
  > .avatar {
    max-width: 50px;
    min-width: 50px;
    max-height: 50px;
    min-height: 50px;
    position: relative;
  }
  > .avatar > .img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 50%;
  }
  > .avatar > .badge {
    position: absolute;
    right: 0px;
    bottom: -4px;
    background-color: $red;
    color: $white;
    padding: $scale-1 $scale-1;
    border-radius: $radius-full;
    font-size: $font-size-sm;
    min-width: 16px;
    text-align: center;
    font-weight: 600;
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
