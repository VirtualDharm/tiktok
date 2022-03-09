import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCe0o83VtTYKE7hEQz8rXwyIbgS6-R2Tmg",
  authDomain: "tiktok-4a897.firebaseapp.com",
  projectId: "tiktok-4a897",
  storageBucket: "tiktok-4a897.appspot.com",
  messagingSenderId: "523822549183",
  appId: "1:523822549183:web:3a84450c1cf10ecd2c1e0a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
