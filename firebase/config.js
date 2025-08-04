// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSTIgCp7fQiUS1UOnIimvfWjdd-PcoQTg",
  authDomain: "music-speaks.firebaseapp.com",
  projectId: "music-speaks",
  storageBucket: "music-speaks.firebasestorage.app",
  messagingSenderId: "246613696647",
  appId: "1:246613696647:web:3799681d46e7cf45cf9822"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);