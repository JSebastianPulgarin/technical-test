import { initializeApp } from "firebase/app";
import { getAuth } from  "firebase/auth" ;
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrLmnV-7C9afEzA9OZ0QPYEGdywKb8xTY",
  authDomain: "technical-test-dbff8.firebaseapp.com",
  projectId: "technical-test-dbff8",
  storageBucket: "technical-test-dbff8.appspot.com",
  messagingSenderId: "836620756919",
  appId: "1:836620756919:web:bd2b0ebc6b21bbccda6a32",
  measurementId: "G-7TBJ8GZNTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;