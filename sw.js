// sw.js - Service Worker Petualangan Sahabat Nusantara (Offline Cache)
const CACHE_NAME = 'sahabat-nusantara-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './css/main.css',
  './css/style.css',
  './css/components.css',
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
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        return caches.match('./index.html');
      });
    })
  );
});
