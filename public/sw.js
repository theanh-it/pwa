// Removes the legacy /sw.js registration and its stale Workbox caches.
// The current app worker is generated as /careme-sw.js.
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames
          .filter((cacheName) => cacheName.startsWith("workbox-precache"))
          .map((cacheName) => caches.delete(cacheName)),
      );

      await self.registration.unregister();

      const windowClients = await self.clients.matchAll({ type: "window" });
      await Promise.allSettled(
        windowClients.map((client) => client.navigate(client.url)),
      );
    })(),
  );
});
