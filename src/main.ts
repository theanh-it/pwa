import "@styles/common.scss";
import "vue-virtual-flow/style.css";

import { createApp } from "vue";
import type { Component } from "vue";

import VWave from "v-wave";
import Vue3TouchEvents, {
  type Vue3TouchEventsOptions,
} from "vue3-touch-events";

import { pinia } from "@plugins/pinia";
import { router } from "@plugins/vue-nnn-router";
import { FontAwesomeIcon } from "@/plugins/font-awesome";

import App from "@/app.vue";

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(VWave, {
  initialOpacity: 0.1,
  easing: "ease-in",
  duration: 0.3,
});
app.use(Vue3TouchEvents, {});

app.component("fa-icon", FontAwesomeIcon as Component);

app.mount("#app");
