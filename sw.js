// sw.js - Service Worker Petualangan Sahabat Nusantara (Offline Cache v2)
const CACHE_NAME = 'sahabat-nusantara-v2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './css/main.css',
  './css/components.css',
  './css/animations.css',
  './js/game-data.js',
  './js/costume-data.js',
  './js/audio-synth.js',
  './js/profile.js',
  './js/quiz-engine.js',
  './js/app.js',
  './assets/images/icon-192.png',
  './assets/images/icon-512.png',
  './assets/images/bg_menu_utama.jpg',
  './assets/images/bg_peta_petualangan.jpg',
  './assets/images/boni_transparent.png',
  './assets/images/rara_transparent.png',
  './assets/images/pendekar_transparent.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(err => {
        console.warn('Cache prefill warning:', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Menghapus cache versi lama:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Strategi Network-First: Selalu coba ambil versi terbaru dari GitHub Pages jika online
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Fallback ke cache jika pengguna sedang offline
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          if (event.request.headers.get('accept')?.includes('text/html')) {
            return caches.match('./index.html');
          }
        });
      })
  );
});
