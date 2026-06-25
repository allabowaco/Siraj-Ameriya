importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyDMuVcMSBiyAH-IUhQfFmuUU-w-QxiAV6A",
  authDomain: "labwa1.firebaseapp.com",
  projectId: "labwa1",
  storageBucket: "labwa1.firebasestorage.app",
  messagingSenderId: "437401273050",
  appId: "1:437401273050:web:e9161ea14aae4197131be3",
  measurementId: "G-CNV6XMHGG0"
};

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("تم استلام إشعار بالخلفية:", payload);

  const notificationTitle =
    payload.notification?.title || "سجل اللبوة";

  const notificationOptions = {
    body: payload.notification?.body || "يوجد تحديث جديد",
    icon: "/icon.png",
    badge: "/icon.png"
  };

  self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});