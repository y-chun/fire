importScripts('https://www.gstatic.com/firebasejs/4.9.0/firebase.js');
importScripts('https://www.gstatic.com/firebasejs/4.9.0/firebase-messaging.js');


var config = {
    apiKey: "AIzaSyBuvtmXtE6BdFHwuN8I1DNHc0WKXsOmCY8",
    authDomain: "pwa-demo-67a94.firebaseapp.com",
    databaseURL: "https://pwa-demo-67a94.firebaseio.com",
    projectId: "pwa-demo-67a94",
    storageBucket: "pwa-demo-67a94.appspot.com",
    messagingSenderId: "464682765526"
  };
  firebase.initializeApp(config);
  const messaging = firebase.messaging();


  messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});
//   messaging.onMessage(function(payload){
// 	console.log('onMessage',payload);
// })