// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWqc6ItTQx15lZjmkNMpOcIYGPAKSNTXw",
  authDomain: "chat-application-bfa1b.firebaseapp.com",
  projectId: "chat-application-bfa1b",
  storageBucket: "chat-application-bfa1b.appspot.com",
  messagingSenderId: "1014154694721",
  appId: "1:1014154694721:web:983e01ba1a4b5b7504f6c0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();