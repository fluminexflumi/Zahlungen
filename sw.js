// Minimaler Service Worker: macht die Seite installierbar, speichert aber nichts zwischen (Daten kommen immer live aus OneDrive).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
