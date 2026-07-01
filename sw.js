const CACHE_NAME = 'numplace-v1';

// ⚠️ あなたのゲームのファイル名に合わせて書き換える部分です
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// アプリのインストール時にファイルをスマホ（ブラウザ）に保存する
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// オフラインの時でも、保存したファイルを使ってゲームを表示する
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
