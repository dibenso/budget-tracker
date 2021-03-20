const cacheName = "budget-tracker";
const filesToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/index.js"
];

self.addEventListener("install", async event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});