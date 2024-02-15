// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfAsWlwqknaeZ47-zZYth52PLKk7v-Ygk",
  authDomain: "crud-85a9f.firebaseapp.com",
  projectId: "crud-85a9f",
  storageBucket: "crud-85a9f.appspot.com",
  messagingSenderId: "545825169342",
  appId: "1:545825169342:web:9f686597b45094bd70a3ef",
  measurementId: "G-8ZENQMQ9N6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth= getAuth(app);
