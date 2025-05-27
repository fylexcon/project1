// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT7iSrCWHdAzNtE5oZfkTAMQlv71BGsu4",
  authDomain: "project1-52671.firebaseapp.com",
  projectId: "project1-52671",
  storageBucket: "project1-52671.firebasestorage.app",
  messagingSenderId: "334246828067",
  appId: "1:334246828067:web:ea7988a0d1251bfa9ff996",
  measurementId: "G-6WNJ1WKX8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);