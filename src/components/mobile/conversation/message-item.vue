<script lang="ts" setup>
import { computed } from "vue";
const { item, meId } = defineProps<{
  item: any;
  meId: string;
}>();

const isMe = computed(() => item.sender.id === meId);
</script>

<template>
  <div :class="['message-item', { '-me': isMe }]">
    <div class="content">{{ item.content }}</div>
  </div>
</template>

<style lang="scss" scoped>
.message-item {
  display: flex;
  padding: 2px $space-lg;
  > .content {
    width: max-content;
    max-width: 80%;
    background-color: $gray;
    padding: $space-md;
    border-radius: $radius-md;
  }
}
.message-item.-me {
  justify-content: flex-end;
  > .content {
    background-color: $blue;
    color: white;
  }
}
</style>
