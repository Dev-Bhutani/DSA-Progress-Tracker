
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBfDyw-4jqMZ99e-mTvG5NgyNzGcly2IwM",
  authDomain: "dsa-progress-tracker-db1df.firebaseapp.com",
  projectId: "dsa-progress-tracker-db1df",
  storageBucket: "dsa-progress-tracker-db1df.firebasestorage.app",
  messagingSenderId: "755482812391",
  appId: "1:755482812391:web:52450e70b5e336bf66a742",
  measurementId: "G-KEKZKC916X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);