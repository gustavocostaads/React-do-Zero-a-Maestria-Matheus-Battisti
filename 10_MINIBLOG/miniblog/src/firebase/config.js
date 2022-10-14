import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBwvbvIWgzLZ4tA-WRiSHq-S3ut8gxj1Qk",
  authDomain: "miniblog-6f095.firebaseapp.com",
  projectId: "miniblog-6f095",
  storageBucket: "miniblog-6f095.appspot.com",
  messagingSenderId: "68018821764",
  appId: "1:68018821764:web:308dfa7743adf9320a80d1",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
