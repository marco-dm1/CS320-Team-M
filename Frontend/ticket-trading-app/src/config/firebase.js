import { initializeApp } from "firebase/app";
import{getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeuHZOswK3ovuM410S1iejBoHci9bh8F8",
  authDomain: "ticket-tradin.firebaseapp.com",
  projectId: "ticket-tradin",
  storageBucket: "ticket-tradin.firebasestorage.app",
  messagingSenderId: "203020279603",
  appId: "1:203020279603:web:7fa436f3a81e139b036846"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const GoogleProvider = new GoogleAuthProvider();