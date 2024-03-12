// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from  "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDrLmnV-7C9afEzA9OZ0QPYEGdywKb8xTY",
  authDomain: "technical-test-dbff8.firebaseapp.com",
  projectId: "technical-test-dbff8",
  storageBucket: "technical-test-dbff8.appspot.com",
  messagingSenderId: "836620756919",
  appId: "1:836620756919:web:bd2b0ebc6b21bbccda6a32",
  measurementId: "G-7TBJ8GZNTT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { app, auth, db };
