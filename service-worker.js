const CACHE_NAME = 'vocab-pwa-v1';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll([
        './index.html', // <-- Add index.html to cache!
        './manifest.json',
        './icons/ios/180.png',
        './icons/android/android-launchericon-192-192.png',
        './icons/android/android-launchericon-512-512.png'
      ]);
    })
  );
});

// Delete old caches on activate
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(name) {
          return name !== CACHE_NAME;
        }).map(function(name) {
          return caches.delete(name);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET' && event.request.destination === 'document') {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  }
});


