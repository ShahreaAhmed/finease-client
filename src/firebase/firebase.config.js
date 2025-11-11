// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAXDGs8Gc-9U7onGQlh3BWY23ChsDQLMk",
  authDomain: "finease-income-expense.firebaseapp.com",
  projectId: "finease-income-expense",
  storageBucket: "finease-income-expense.firebasestorage.app",
  messagingSenderId: "283991538417",
  appId: "1:283991538417:web:65cc48e9ed4de1d1bf0750"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);