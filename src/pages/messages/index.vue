<script lang="ts" setup>
import Page from "@/components/mobile/page.vue";
</script>

<template>
  <Page hidden-header>
    <div class="messages-page">
      <h2 v-for="value in 100">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        deleniti atque rem laudantium, inventore nihil aliquid fugiat maxime.
        Nesciunt officia quos obcaecati beatae voluptate omnis accusamus est
        numquam nulla. Quis!
      </h2>
    </div>
  </Page>
</template>

<style lang="scss" scoped>
.messages-page {
  display: flex;
  flex-direction: column;
}
</style>
