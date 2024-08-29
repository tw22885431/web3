import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { defineNuxtPlugin } from '#app';
//your firebase configuration goes here
//https://firebase.google.com/docs/web/learn-more?authuser=0&hl=en#modular-version
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxvPNNbc_ykgO2q_-Pg21eq3FOfbqRCCI",
  authDomain: "web3-shop-f55ec.firebaseapp.com",
  databaseURL: "https://web3-shop-f55ec-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "web3-shop-f55ec",
  storageBucket: "web3-shop-f55ec.appspot.com",
  messagingSenderId: "265807226453",
  appId: "1:265807226453:web:065ad05749343cce4396dc",
  measurementId: "G-S13KSQHKM9"
};
export default defineNuxtPlugin((nuxtApp) => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  // 將 auth 和 db 添加到 Nuxt 的全域上下文中
  nuxtApp.provide('auth', auth);
  nuxtApp.provide('db', db);
});

