// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvOxMk0QLVK1A4cOJv5KmxVNDGUd1WIeQ",
  authDomain: "infinite-challenge-storage.firebaseapp.com",
  projectId: "infinite-challenge-storage",
  storageBucket: "infinite-challenge-storage.appspot.com",
  messagingSenderId: "15304385965",
  appId: "1:15304385965:web:071174548c2ea8d8dfed24",
  measurementId: "G-11NGTDWJ2P",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
