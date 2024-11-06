// Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpAXVdScymVrPldl2qJdnI2vTa4OWjc9M",
  authDomain: "business-exchange-platform.firebaseapp.com",
  projectId: "business-exchange-platform",
  storageBucket: "business-exchange-platform.firebasestorage.app",
  messagingSenderId: "996644845405",
  appId: "1:996644845405:web:dc188547c157839d4c9ab4",
  measurementId: "G-16WKDG30XK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export auth and db to use in other files
export { auth, db };