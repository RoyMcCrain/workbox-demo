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
