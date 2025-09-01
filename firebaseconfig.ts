// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDk_acc7d3J7-lGWPwYStOAuGwJJrpEwRM",
  authDomain: "prottocode.firebaseapp.com",
  projectId: "prottocode",
  storageBucket: "prottocode.firebasestorage.app",
  messagingSenderId: "436211167736",
  appId: "1:436211167736:web:7e3f7b6d3bc52e9113660d",
  measurementId: "G-E3Q8478YJ7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);