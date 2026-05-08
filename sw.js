const CACHE_NAME = 'jop-inmobiliaria-v6';
const APP_SHELL = [
    './',
    './index.html',
    './pages/servicios.html',
    './pages/servicio.html',
    './pages/team.html',
    './pages/contact.html',
    './pages/legal/privacy.html',
    './pages/legal/disclaimer.html',
    './assets/css/style.css',
    './assets/js/javascript.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(APP_SHELL))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => Promise.all(
            keys
                .filter((key) => key !== CACHE_NAME)
                .map((key) => caches.delete(key))
        )).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const { request } = event;

    if (request.method !== 'GET') {
        return;
    }

    const requestUrl = new URL(request.url);
    if (requestUrl.origin !== self.location.origin) {
        return;
    }

    if (request.mode === 'navigate') {
        event.respondWith(handleNavigationRequest(request));
        return;
    }

    event.respondWith(handleAssetRequest(request));
});

async function handleNavigationRequest(request) {
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(request, { ignoreSearch: true });

    if (cachedResponse) {
        updateCache(request, cache);
        return cachedResponse;
    }

    try {
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            cache.put(request, networkResponse.clone());
        }

        return networkResponse;
    } catch (error) {
        return cache.match('./index.html');
    }
}

async function handleAssetRequest(request) {
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(request);

    if (cachedResponse) {
        updateCache(request, cache);
        return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
        cache.put(request, networkResponse.clone());
    }

    return networkResponse;
}

function updateCache(request, cache) {
    fetch(request).then((response) => {
        if (response.ok) {
            cache.put(request, response.clone());
        }
    }).catch(() => {
        return undefined;
    });
}
