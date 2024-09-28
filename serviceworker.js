console.log("Hola mundo desde un Service Worker");

/* if('serviceWorker' in navigator){
    console.log('Service Worker es soportado en este navegador primer if');
}

if (navigator.serviceWorker) {
    console.log("Service Worker es soportado en este navegador");
} */

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("/serviceworker.js");
}

// This code executes in its own worker or thread
self.addEventListener("install", event => {
    console.log("Service worker installed");
 });
 self.addEventListener("activate", event => {
    console.log("Service worker activated");
 });


 caches.open("pwa-assets")
.then(cache => {
  cache.add("image.png"); 
    cache.addAll(["/index.html", "/styles.css"]);

});