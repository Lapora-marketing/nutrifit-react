// Nutrifit Service Worker — basic offline support
const CACHE_NAME = 'nutrifit-v1'
const APP_SHELL = [
  '/',
  '/app.html',
  '/manifest.webmanifest',
  '/icon',
  '/apple-icon',
]

// Install: cache the app shell
self.addEventListener('install', (event) => {
  self.skipWaiting()
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll(APP_SHELL).catch(() => {
        // Some URLs may fail (dynamic icons) — ignore and continue
      })
    )
  )
})

// Activate: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      )
    )
  )
  self.clients.claim()
})

// Fetch: network first, fall back to cache (so updates are picked up fast)
self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return

  // Skip non-http(s) requests (chrome-extension, etc.)
  if (!request.url.startsWith('http')) return

  event.respondWith(
    fetch(request)
      .then((response) => {
        // Cache successful responses
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone))
        }
        return response
      })
      .catch(() => caches.match(request).then((c) => c || caches.match('/app.html')))
  )
})
