
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAb-aKaeMItJGFC7hIT30CbU4SauG6e-0",
  authDomain: "prompt2website-c71ea.firebaseapp.com",
  projectId: "prompt2website-c71ea",
  storageBucket: "prompt2website-c71ea.firebasestorage.app",
  messagingSenderId: "120696216447",
  appId: "1:120696216447:web:cc3a4b73bb95f4b5b4184a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
