// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9JsxggnGYbPdNM0HA9dnNMcgICwPmxKM",
  authDomain: "assignment-12-f33b4.firebaseapp.com",
  projectId: "assignment-12-f33b4",
  storageBucket: "assignment-12-f33b4.appspot.com",
  messagingSenderId: "936969347643",
  appId: "1:936969347643:web:00724a5075e181febff21e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;