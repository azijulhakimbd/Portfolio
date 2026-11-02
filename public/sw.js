const CACHE_NAME = "azijul-portfolio-v1";
const OFFLINE_URL = "/offline.html";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.add(OFFLINE_URL))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter(
              (cacheName) =>
                cacheName.startsWith("azijul-portfolio-") &&
                cacheName !== CACHE_NAME,
            )
            .map((cacheName) => caches.delete(cacheName)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== "GET" || url.origin !== self.location.origin) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(async () => {
        const offlinePage = await caches.match(OFFLINE_URL);
        return offlinePage ?? Response.error();
      }),
    );
    return;
  }

  if (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/icons/")
  ) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(request).then((response) => {
          if (response.ok) {
            const responseToCache = response.clone();
            const cacheWrite = caches
              .open(CACHE_NAME)
              .then((cache) => cache.put(request, responseToCache));
            event.waitUntil(
              cacheWrite.catch((error) => {
                console.error("Failed to cache static asset:", error);
              }),
            );
          }
          return response;
        });
      }),
    );
  }
});
