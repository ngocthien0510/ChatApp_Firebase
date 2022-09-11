import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore} from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyCqOaDscFwvH_FmuU88-WGW1busYQZuXrc",
  authDomain: "chatapp-696e5.firebaseapp.com",
  projectId: "chatapp-696e5",
  storageBucket: "chatapp-696e5.appspot.com",
  messagingSenderId: "798091561797",
  appId: "1:798091561797:web:d8e47611b7ea0da690cc2c",
  measurementId: "G-BV9V2K8B1E"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();
export const db = getFirestore();