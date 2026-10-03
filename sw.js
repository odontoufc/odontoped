const CACHE_NAME = 'trilha-sorriso-v1';

// Lista de todos os ficheiros do jogo que serão guardados para funcionar offline
const urlsToCache = [
    './',
    './index.html',
    './app.js',
    './perguntas.js',
    './regras.js',
    './roleta.js',
    './logo-jogo.png',
    './logo.png',
    './musica.mp3',
    './correto.mp3',
    './errado.mp3',
    './roleta.mp3'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Se encontrar na cache, devolve sem usar internet. Se não, usa a internet.
                return response || fetch(event.request);
            })
    );
});
