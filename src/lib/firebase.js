// src/lib/firebase.js
// Configuración e inicialización del SDK de Firebase para la web
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Configuración oficial de Firebase del proyecto web-iglesia-9210d
const firebaseConfig = {
  apiKey: "AIzaSyBs8liN9i39w1ypoRlR-bj3H5q_wl5sX84",
  authDomain: "web-iglesia-9210d.firebaseapp.com",
  projectId: "web-iglesia-9210d",
  storageBucket: "web-iglesia-9210d.firebasestorage.app",
  messagingSenderId: "982164312934",
  appId: "1:982164312934:web:f26aa61be75c96406eeea7",
  measurementId: "G-3W4MKRERHZ"
};

// Inicializar la aplicación de Firebase (evitando inicializaciones múltiples)
export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Inicializar Firestore (Base de datos en la nube)
export const db = getFirestore(app);

// Inicializar Analytics solo en el entorno del navegador del cliente
export let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
      console.log("Firebase Analytics inicializado correctamente");
    }
  }).catch((err) => {
    console.warn("Firebase Analytics no está soportado en este entorno:", err);
  });
}
