// Bump when any shipped file changes: fetch is cache-first, so clients never see updates otherwise.
const CACHE = 'pmp-v7';

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.open(CACHE).then((cache) =>
      cache.match(e.request).then((r) =>
        r ||
        fetch(e.request)
          .then((resp) => {
            if (resp.ok && e.request.url.startsWith(self.location.origin)) {
              cache.put(e.request, resp.clone());
            }
            return resp;
          })
          .catch(() => cache.match('./'))
      )
    )
  );
});
