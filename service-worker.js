importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
);

workbox.routing.registerRoute(
  ({ request }) => request.destination === "script",
  new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
  ({ request }) => request.destination === "style",
  new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
  ({ request }) => request.destination === "image",
  new workbox.strategies.CacheFirst({
    cacheName: "image-cache",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 20,
        maxAgeSeconds: 7 * 24 * 60 * 60,
      }),
    ],
  })
);
