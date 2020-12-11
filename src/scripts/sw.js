import CacheHelper from './utils/cacheHelper';
import 'regenerator-runtime';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...');

  // Caching App Shell Resource
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './', 'https://fonts.googleapis.com/css?family=Roboto:300,400,500','https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap']));
});

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker ...');

  // Delete old caches
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  // console.log(event.request);

  // Add/get fetch request to/from caches
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
