const C = 'my-money-v2';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(C).then(cache =>
      cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './icon.svg'
      ])
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});
