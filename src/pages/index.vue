<script lang="ts" setup>
import Page from "@/components/mobile/page.vue";

import { useAppRouter } from "@composables/router";

import { ROUTER_NAME } from "@constants/router-name";

const { goToName } = useAppRouter();
</script>

<template>
  <Page hidden-header>
    <h1>Home page</h1>
    <button @click="goToName(ROUTER_NAME.child)">Child Page</button>
    <p v-for="value in 100">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eveniet,
      fugit quasi hic natus facere placeat magnam possimus dignissimos nemo
      earum ab vel impedit, consequatur odio recusandae itaque. Nam, quae!
    </p>
  </Page>
</template>
