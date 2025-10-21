const CACHE_NAME = 'quran-pwa-v1';
const urlsToCache = [
  'index.html',
  'manifest.json',
  'data-quran.min.js'
];

// Install service worker
self.addEventListener('install', (event) => {
  console.log('Service Worker: Install');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching assets');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activate');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) {
          console.log('Hapus cache lama:', key);
          return caches.delete(key);
        }
      }))
    )
  );
});

// Fetch
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
