import { createRouter, createWebHistory } from "vue-router";
import {
  createNnnRoutes,
  createNnnModules,
  createNnnScrollBehavior,
} from "vue-nnn-router";

import { NNN_SCROLL } from "@constants/router-scroll";

const lazyViews = import.meta.glob(`/src/pages/**/*.{vue,tsx,jsx}`);
const eagerSidecars = import.meta.glob(
  [`/src/pages/**/_middleware.ts`, `/src/pages/**/_redirect.ts`],
  { eager: true },
);

const modules = createNnnModules({
  views: lazyViews as Record<string, unknown>,
  eager: eagerSidecars as Record<string, unknown>,
});

const routes = createNnnRoutes(modules, {
  routesRoot: "src/pages",
  verbose: import.meta.env.DEV,
  silent: false,
});

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: createNnnScrollBehavior({ scrollMap: NNN_SCROLL }),
});
