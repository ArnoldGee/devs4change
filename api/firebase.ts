import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "devs4change.firebaseapp.com",
  projectId: "devs4change",
  storageBucket: "devs4change.appspot.com",
  messagingSenderId: "1060769775444",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: "G-SDY0PK2056",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
