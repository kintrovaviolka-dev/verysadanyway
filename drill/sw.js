// drill/sw.js - Service Worker pro PWA MedDrill
// The Node content build keeps this value in sync with data/manifest.json.
// A new release gives every deployment a fresh shell without touching IndexedDB.
const RELEASE_VERSION = '2026.3.0';
const CACHE_NAME = `meddrill-core-v${RELEASE_VERSION}`;
const DATA_CACHE_NAME = `meddrill-data-v${RELEASE_VERSION}`;

const STATIC_ASSETS = [
  '/drill/',
  '/drill/index.html',
  '/drill/style.css',
  '/drill/app.js',
  '/drill/storage.js',
  '/drill/manifest.json',
  '/drill/icons/icon-192.svg',
  '/drill/icons/icon-512.svg',
  '/drill/data/manifest.json'
];

// Install: Pre-cache core shell
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Precaching app shell...');
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

// Activate: Clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log('[SW] Odstraňuji starou mezipaměť:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Stale-while-revalidate pro data, Cache-first pro statické soubory
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Bezpečnostní pravidlo: Nikdy nekešovat ani neblokovat API požadavky
  if (url.pathname.startsWith('/api/')) {
    return;
  }

  // Zpracování pouze GET požadavků
  if (event.request.method !== 'GET') {
    return;
  }

  // Zpracování datových modulů (/drill/data/modules/*.json)
  if (url.pathname.includes('/drill/data/modules/')) {
    event.respondWith(
      caches.open(DATA_CACHE_NAME).then(async cache => {
        const cachedResponse = await cache.match(event.request);
        if (cachedResponse) {
          // Na pozadí zkusit aktualizovat pokud jsme online
          fetch(event.request).then(networkResponse => {
            if (networkResponse && networkResponse.status === 200) {
              cache.put(event.request, networkResponse);
            }
          }).catch(() => {});
          return cachedResponse;
        }

        // Pokud v cache není, stáhnout z networku a uložit do cache
        try {
          const networkResponse = await fetch(event.request);
          if (networkResponse && networkResponse.status === 200) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        } catch (err) {
          return new Response(JSON.stringify({ error: 'Offline - modul dosud nebyl stažen' }), {
            headers: { 'Content-Type': 'application/json' }
          });
        }
      })
    );
    return;
  }

  // Běžné statické soubory aplikace patřící k /drill/
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then(networkResponse => {
        // Pokud je odpověď validní a jde o GET v rámci naší domény a /drill cesty, uložit kopii
        if (
          event.request.method === 'GET' &&
          networkResponse &&
          networkResponse.status === 200 &&
          url.origin === location.origin &&
          url.pathname.startsWith('/drill/')
        ) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Offline fallback pro navigační požadavky
        if (event.request.mode === 'navigate') {
          return caches.match('/drill/index.html');
        }
      });
    })
  );
});
