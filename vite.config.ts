import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import {
  vueNnnRouterNamesPlugin,
  vueNnnRouterScrollPlugin,
} from "vue-nnn-router/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueNnnRouterNamesPlugin({
      pages: [
        "src/pages/**/*.{vue,tsx,jsx,ts,js}",
        "src/pages/**/_middleware.ts",
        "src/pages/**/_redirect.ts",
      ],
      routesRoot: "src/pages",
      outFile: "src/constants/router-name.ts", // tùy chọn — mặc định
    }),
    vueNnnRouterScrollPlugin({
      pages: ["src/pages/**/*.{vue,tsx,jsx}"],
      outFile: "src/constants/router-scroll.ts", // default
    }),
    VitePWA({
      filename: "careme-sw.js",
      registerType: "autoUpdate", // Tự động cập nhật service worker khi có bản build mới
      injectRegister: "auto",
      devOptions: {
        enabled: true, // Bật PWA ngay trong môi trường dev để dễ kiểm tra
        type: "module",
        navigateFallback: "index.html",
      },
      includeAssets: [
        "favicon.ico",
        "apple-touch-icon.png",
        "pwa-icon.svg",
        "pwa-maskable.svg",
      ],
      manifest: {
        id: "/",
        name: "CareMe+ Employees",
        short_name: "CareMe+",
        description: "Ứng dụng CareMe+ dành cho nhân viên",
        lang: "vi",
        start_url: "/",
        scope: "/",
        theme_color: "#2563eb",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/pwa-maskable-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "${path.resolve(import.meta.dirname, "src/styles/main.scss")}" as *;`,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@apis": path.resolve(import.meta.dirname, "src/apis"),
      "@constants": path.resolve(import.meta.dirname, "src/constants"),
      "@composables": path.resolve(import.meta.dirname, "src/composables"),
      "@helpers": path.resolve(import.meta.dirname, "src/helpers"),
      "@components": path.resolve(import.meta.dirname, "src/components"),
      "@layouts": path.resolve(import.meta.dirname, "src/layouts"),
      "@plugins": path.resolve(import.meta.dirname, "src/plugins"),
      "@stores": path.resolve(import.meta.dirname, "src/stores"),
      "@styles": path.resolve(import.meta.dirname, "src/styles"),
      "@utils": path.resolve(import.meta.dirname, "src/utils"),
      "@fe-types": path.resolve(import.meta.dirname, "src/types"),
    },
  },
});
