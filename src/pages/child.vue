<script setup lang="ts">
import { defineNnnScroll } from "vue-nnn-router";

defineNnnScroll({ restorePosition: true }); // trang này: lệch 80px + cuộn mượt
// defineNnnScroll(false);                   // trang này: không bao giờ cuộn

import Page from "@/components/mobile/page.vue";
</script>

<template>
  <Page title="Child Page">
    <h1>Child page</h1>
    <p v-for="value in 100">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eveniet,
      fugit quasi hic natus facere placeat magnam possimus dignissimos nemo
      earum ab vel impedit, consequatur odio recusandae itaque. Nam, quae!
    </p>
  </Page>
</template>
