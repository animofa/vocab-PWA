const CACHE_NAME = 'vocab-pwa-v1'; // Change this version when you update files

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll([
        '/manifest.json',
        'icons/ios/180.png',
        'icons/android/android-launchericon-192-192.png',
        'icons/android/android-launchericon-512-512.png'
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
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

