// Firebase SDK Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getMessaging } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  where,
  orderBy,
  deleteDoc,
  doc,
  updateDoc,
  getDocs,
  getDoc,
  setDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMuVcMSBiyAH-IUhQfFmuUU-w-QxiAV6A",
  authDomain: "labwa1.firebaseapp.com",
  projectId: "labwa1",
  storageBucket: "labwa1.firebasestorage.app",
  messagingSenderId: "437401273050",
  appId: "1:437401273050:web:e9161ea14aae4197131be3",
  measurementId: "G-CNV6XMHGG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Cloud Messaging
const messaging = getMessaging(app);

// Export everything needed in app.js
export {
  db,
  messaging,
  collection,
  addDoc,
  onSnapshot,
  query,
  where,
  orderBy,
  deleteDoc,
  doc,
  updateDoc,
  getDocs,
  getDoc,
  setDoc,
  serverTimestamp
};
