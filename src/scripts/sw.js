// import 'regenerator-runtime'
// import CacheHelper from './utils/cache-helper.js'

// Daftar asset yang akan dicaching
// const assetsToCache = [
// './',
// './icons/android-chrome-192x192.png',
// './icons/android-chrome-512x512.png',
// './icons/apple-touch-icon.png',
// './icons/favicon-16x16.png',
// './icons/favicon-32x32.png',
// './icons/maskable_icon.png',
// './icons/maskable_icon_x16.png',
// './icons/maskable_icon_x32.png',
// './icons/maskable_icon_x48.png',
// './icons/maskable_icon_x72.png',
// './icons/maskable_icon_x96.png',
// './icons/maskable_icon_x128.png',
// './icons/maskable_icon_x144.png',
// './icons/maskable_icon_x192.png',
// './icons/maskable_icon_x384.png',
// './icons/maskable_icon_x512.png',
// './images/heros',
// './images/heros/hero-image_4.jpg',
// './favicon.ico',
// './site.webmanifest',
// './index.html',
// './app.bundle.js',
// './sw.bundle.js'
// ]

// self.addEventListener('install', (event) => {
//   console.log('Installing Service Worker ...')
//   event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]))

// TODO: Caching App Shell Resource
// })

// self.addEventListener('activate', (event) => {
//   console.log('Activating Service Worker ...')
//   event.waitUntil(CacheHelper.deleteOldCache())

// TODO: Delete old caches
// })

// self.addEventListener('fetch', (event) => {
//   event.respondWith(CacheHelper.revalidateCache(event.request))

// TODO: Add/get fetch request to/from caches
// })
