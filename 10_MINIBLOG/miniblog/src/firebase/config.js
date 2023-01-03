
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASErDb1qRcYWPJXycBgVXaxwdXkRD4l1o",
  authDomain: "miniblog-8f0c2.firebaseapp.com",
  projectId: "miniblog-8f0c2",
  storageBucket: "miniblog-8f0c2.appspot.com",
  messagingSenderId: "713021767071",
  appId: "1:713021767071:web:f2fceed15dc45c088611aa"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };