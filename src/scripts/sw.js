/* eslint-disable no-console */
import CacheHelper from './utils/cacheHelper';

const { assets } = global.serviceWorkerOption;

/* eslint-disable no-restricted-globals */
self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...');

  // Caching App Shell Resource
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker ...');

  // Delete old caches
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  console.log(event.request);

  // Add/get fetch request to/from caches
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
