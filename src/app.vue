<script setup lang="ts">
import MobileLayout from "@layouts/mobile/index.vue";

import { useDevice } from "@composables/device";

const { platform } = useDevice();
</script>

<template>
  <MobileLayout />
</template>

<style lang="scss" scoped></style>
